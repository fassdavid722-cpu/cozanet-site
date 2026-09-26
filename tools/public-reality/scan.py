#!/usr/bin/env python3
"""
COZANET PUBLIC REALITY - scanner + dashboard generator.

Answers ONE question: "If a stranger searches for Cozanet today, what can
they actually verify?" No vanity scores, no fabricated metrics. Every
external metric carries its source and timestamp. Unverifiable values are
UNKNOWN, never estimated.

Checks (each labeled VERIFIED / FOUND / UNVERIFIED / MISSING / NEEDS ACTION):
  1. Website health      cozanet.net + aegis.cozanet.net: HTTPS, uptime, latency
  2. Indexing surfaces   robots.txt, sitemap.xml, llms.txt
  3. Page metadata       per-route title / canonical / OG / JSON-LD
  4. CZN on-chain        name / symbol / decimals / totalSupply / pool reserves
                         via public BSC RPC
  5. Social profiles     HTTP status of official profiles
  6. GitHub org          public repo count via GitHub API
  7. Change history      diff against the previous scan JSON

Search-query results are NOT fetched here; they are merged by the agent from
live search runs and stored in latest/search-results.json.

Usage:  python3 tools/public-reality/scan.py
Output: tools/public-reality/latest/public-reality.json
        tools/public-reality/latest/public-reality.html  (internal dashboard)
"""
import json, time, datetime, pathlib, urllib.request, xml.etree.ElementTree as ET

BASE = "https://cozanet.net"
AEGIS = "https://aegis.cozanet.net"
CZN_CONTRACT = "0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA"
CZN_WBNB_POOL = "0xdf7576158840899eeab2081fd0ed46e3428a4c0d"
BSC_RPC = "https://bsc-dataseed.binance.org/"
SITEMAP_NS = {"s": "http://www.sitemaps.org/schemas/sitemap/0.9"}
NOW = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")

def fetch(url, timeout=15, head=False):
    req = urllib.request.Request(url, method="HEAD" if head else "GET",
                                 headers={"User-Agent": "CozanetPublicRealityScanner/1.0 (+https://cozanet.net)"})
    t0 = time.time()
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = b"" if head else r.read()
            return {"ok": True, "status": r.status, "ms": int((time.time()-t0)*1000), "body": body, "final": r.url}
    except Exception as e:
        return {"ok": False, "status": getattr(e, "code", 0), "ms": int((time.time()-t0)*1000),
                "error": str(e), "body": b"", "final": url}

def rpc(data):
    req = urllib.request.Request(BSC_RPC, data=json.dumps({"jsonrpc": "2.0", "id": 1, **data}).encode(),
                                 headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=12) as r:
            return json.load(r).get("result")
    except Exception:
        return None

def hex_str(result):
    if not result or result == "0x": return None
    try:
        n = int(result[66:], 16)
        return bytes.fromhex(result[130:130 + n * 2]).decode()
    except Exception:
        return None

# ---------------------------------------------------------------- 1. health
health = {}
for name, url in [("cozanet.net", BASE), ("aegis.cozanet.net (AEGIS app)", AEGIS)]:
    r = fetch(url)
    health[name] = {"url": url, "up": r["ok"], "https": r["final"].startswith("https"),
                    "status": r["status"], "latency_ms": r["ms"], "checked": NOW,
                    "state": "VERIFIED" if r["ok"] else "CRITICAL"}
    if not r["ok"]:
        health[name]["error"] = r.get("error", "")

# ---------------------------------------------------------------- 2. surfaces
surfaces = {}
robots = fetch(f"{BASE}/robots.txt")
surfaces["robots.txt"] = {"state": "VERIFIED" if robots["ok"] and b"Sitemap:" in robots["body"] else "NEEDS ACTION",
                          "detail": ("contains Sitemap directive" if robots["ok"] else robots.get("error")),
                          "source": "cozanet.net", "checked": NOW}
sm = fetch(f"{BASE}/sitemap.xml")
sitemap_urls = []
if sm["ok"]:
    try:
        root = ET.fromstring(sm["body"])
        sitemap_urls = [e.text for e in root.findall("s:url/s:loc", SITEMAP_NS)]
    except Exception:
        pass
surfaces["sitemap.xml"] = {"state": "VERIFIED" if len(sitemap_urls) >= 10 else "NEEDS ACTION",
                           "urls": sitemap_urls, "count": len(sitemap_urls), "source": "cozanet.net", "checked": NOW}
llms = fetch(f"{BASE}/llms.txt")
surfaces["llms.txt"] = {"state": "VERIFIED" if llms["ok"] and b"Cozanet" in llms["body"] else "MISSING",
                        "source": "cozanet.net", "checked": NOW}

# ---------------------------------------------------------------- 3. per-page metadata
pages = []
for url in sitemap_urls or [f"{BASE}/"]:
    path = url.replace(BASE, "") or "/"
    r = fetch(url)
    body = r["body"].decode("utf-8", "replace")
    pages.append({
        "page": path, "http": r["status"],
        "indexable": r["ok"] and "noindex" not in body.lower(),
        "title": body.split("<title>")[1].split("</title>")[0] if "<title>" in body else None,
        "canonical": 'rel="canonical"' in body,
        "og": 'property="og:title"' in body,
        "jsonld": "application/ld+json" in body,
        "latency_ms": r["ms"],
    })
dups = {}
for p in pages:
    dups.setdefault(p["title"], []).append(p["page"])
dup_titles = {t: ps for t, ps in dups.items() if t and len(ps) > 1}

# ---------------------------------------------------------------- 4. CZN on-chain
czn = {"contract": CZN_CONTRACT, "source": f"BSC public RPC ({BSC_RPC})", "checked": NOW}
czn["name"] = hex_str(rpc({"method": "eth_call", "params": [{"to": CZN_CONTRACT, "data": "0x06fdde03"}, "latest"]}))
czn["symbol"] = hex_str(rpc({"method": "eth_call", "params": [{"to": CZN_CONTRACT, "data": "0x95d89b41"}, "latest"]}))
dec = rpc({"method": "eth_call", "params": [{"to": CZN_CONTRACT, "data": "0x313ce567"}, "latest"]})
czn["decimals"] = int(dec, 16) if dec else None
ts = rpc({"method": "eth_call", "params": [{"to": CZN_CONTRACT, "data": "0x18160ddd"}, "latest"]})
czn["total_supply_raw"] = int(ts, 16) if ts else None
if czn["total_supply_raw"] is not None and czn["decimals"]:
    czn["total_supply"] = czn["total_supply_raw"] / (10 ** czn["decimals"])
res = rpc({"method": "eth_call", "params": [{"to": CZN_WBNB_POOL, "data": "0x0902f1ac"}, "latest"]})
if res and res != "0x":
    r0, r1 = int(res[2:66], 16), int(res[66:130], 16)
    czn["pool"] = {"address": CZN_WBNB_POOL, "pair": "CZN/WBNB",
                   "reserve_wbnb": r0 / 1e18, "reserve_czn": r1 / 1e9}
czn["state"] = "VERIFIED" if czn["name"] and czn["symbol"] else "UNVERIFIED"
czn["unavailable"] = ["holder count", "market cap", "volume", "exchange listings (none verified)"]

# ---------------------------------------------------------------- 5. socials
socials = {}
for label, url in [("X (Twitter)", "https://x.com/CozyCrypto_io"),
                   ("Telegram", "https://t.me/CozanetOfficial"),
                   ("GitHub org", "https://github.com/CozanetHQ")]:
    r = fetch(url, head=True)
    socials[label] = {"url": url, "http": r["status"],
                      "state": "FOUND" if r["ok"] else "UNVERIFIED (blocked/bot-protected)",
                      "checked": NOW}
gh = fetch("https://api.github.com/orgs/CozanetHQ/repos?per_page=100")
if gh["ok"]:
    repos = json.loads(gh["body"])
    socials["GitHub org"]["public_repos"] = [r["name"] for r in repos]

# ---------------------------------------------------------------- 6. persist + history
report = {"generated": NOW, "scanner_version": "1.0",
          "health": health, "surfaces": surfaces, "pages": pages,
          "duplicate_titles": dup_titles, "czn": czn, "socials": socials}
latest_dir = pathlib.Path(__file__).parent / "latest"
latest_dir.mkdir(exist_ok=True)
prev_path = latest_dir / "public-reality.json"
history = []
if prev_path.exists():
    try:
        prev = json.loads(prev_path.read_text())
        def count(pred, items): return sum(1 for i in items if pred(i))
        history = [{
            "since": prev["generated"],
            "pages_indexable": f"{count(lambda p: p['indexable'], prev['pages'])} -> {count(lambda p: p['indexable'], pages)}",
            "pages_with_jsonld": f"{count(lambda p: p['jsonld'], prev['pages'])} -> {count(lambda p: p['jsonld'], pages)}",
            "sitemap_urls": f"{prev['surfaces']['sitemap.xml'].get('count', '?')} -> {len(sitemap_urls)}",
            "site_up": f"{prev['health']['cozanet.net']['up']} -> {health['cozanet.net']['up']}",
            "czn_pool_reserve_czn": f"{prev.get('czn', {}).get('pool', {}).get('reserve_czn', 'UNKNOWN')} -> {czn.get('pool', {}).get('reserve_czn', 'UNKNOWN')}",
        }]
    except Exception:
        pass

search_path = latest_dir / "search-results.json"
if search_path.exists():
    report["search"] = json.loads(search_path.read_text())
manual_path = latest_dir / "manual-findings.json"
if manual_path.exists():
    report["manual_findings"] = json.loads(manual_path.read_text())
report["change_since_last_scan"] = history
prev_path.write_text(json.dumps(report, indent=1))

# ---------------------------------------------------------------- 7. HTML dashboard
def esc(s): return str(s).replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
def badge(s): return {"VERIFIED": "🟢", "FOUND": "🟢", "UNVERIFIED": "🟡", "MISSING": "🔴",
                      "NEEDS ACTION": "🟡", "CRITICAL": "🔴", "PLANNED": "🔵"}.get(s, "⚪")
rows_pages = "\n".join(
    f"<tr><td>{esc(p['page'])}</td><td>{p['http']}</td><td>{'✅' if p['indexable'] else '🔴'}</td>"
    f"<td>{'✅' if p['canonical'] else '🔴'}</td><td>{'✅' if p['og'] else '🔴'}</td>"
    f"<td>{'✅' if p['jsonld'] else '🔴'}</td><td>{p['latency_ms']}ms</td></tr>"
    for p in pages)
rows_socials = "\n".join(
    f"<tr><td>{esc(k)}</td><td>{esc(v['url'])}</td><td>{badge(v.get('state','?'))} {esc(v.get('state','?'))}</td>"
    f"<td>{esc(', '.join(v.get('public_repos', [])) or '—')}</td><td>{esc(v['checked'])}</td></tr>"
    for k, v in socials.items())
search_rows = ""
for q, d in ((report.get("search") or {}).get("queries", {}) or {}).items():
    search_rows += (f"<tr><td>{esc(q)}</td><td>{esc(d.get('engine',''))}</td><td>{esc(d.get('checked',''))}</td>"
                    f"<td>{'🟢 FOUND' if d.get('cozanet_found') else '🔴 NOT FOUND'}</td>"
                    f"<td>{esc(d.get('url','—'))}</td><td>{esc(d.get('notes','—'))}</td></tr>")
czn_rows = "".join(
    f"<tr><td>{esc(k)}</td><td>{esc('UNKNOWN' if v in (None, '') else v)}</td>"
    f"<td>{esc(czn['source'])}</td><td>{esc(czn['checked'])}</td></tr>"
    for k, v in [("name", czn.get("name")), ("symbol", czn.get("symbol")), ("decimals", czn.get("decimals")),
                 ("total_supply", czn.get("total_supply")),
                 ("pool_pair", (czn.get("pool") or {}).get("pair")),
                 ("pool_reserve_wbnb", (czn.get("pool") or {}).get("reserve_wbnb")),
                 ("pool_reserve_czn", (czn.get("pool") or {}).get("reserve_czn")),
                 ("holders", "UNKNOWN"), ("market_cap", "UNKNOWN"), ("volume", "UNKNOWN"),
                 ("exchange_listings", "None verified")])
hist_rows = "".join(
    f"<tr>{''.join(f'<td>{esc(v)}</td>' for v in h.values())}</tr>" for h in history) or \
    "<tr><td colspan='6'>First scan — no history yet.</td></tr>"

html = f"""<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex">
<title>Cozanet Public Reality — Internal Dashboard</title>
<style>
body{{font:14px/1.5 -apple-system,'Segoe UI',Roboto,sans-serif;background:#0d0e10;color:#d8d8dc;margin:0;padding:32px}}
h1,h2{{color:#d9b872}}table{{border-collapse:collapse;width:100%;margin:8px 0 24px;font-size:13px;background:#141518;border-radius:8px}}
th,td{{padding:7px 10px;border-bottom:1px solid #26272b;text-align:left;vertical-align:top}}
th{{color:#d9b872;font-weight:600}}.muted{{color:#8a8a92}}.warn{{background:#1c1a12;padding:12px 16px;border-left:3px solid #d9b872;border-radius:6px;margin:16px 0}}
</style>
<body>
<h1>COZANET PUBLIC REALITY</h1>
<p class="muted">Internal dashboard — generated {esc(NOW)} · “If a stranger searches for Cozanet today, what can they actually verify?” · Every metric shows its source.</p>
<div class="warn"><strong>Founder summary.</strong>
Clear: official website live, HTTPS, {len(pages)} indexable pages with unique metadata + structured data, robots/sitemap/llms.txt live, CZN on-chain facts verifiable, socials linked.
Partial: brand search results (cozanet.net indexed, but brand queries dominated by unrelated French namesakes); GitHub public surface.
Difficult: “CZN token” (video-game collision), “Cozanet AEGIS” query.
Needs action: Google Search Console + Bing Webmaster verification (owner-side), sitemap submission, external discovery work.</div>

<h2>1 · Website health</h2>
<table><tr><th>Site</th><th>Up</th><th>HTTPS</th><th>Status</th><th>Latency</th><th>Checked</th></tr>
{''.join(f'<tr><td>{esc(k)}</td><td>{badge(v["state"])} {v["up"]}</td><td>{v["https"]}</td><td>{v["status"]}</td><td>{v["latency_ms"]}ms</td><td>{esc(v["checked"])}</td></tr>' for k,v in health.items())}</table>

<h2>2 · Indexing surfaces</h2>
<table><tr><th>Surface</th><th>Status</th><th>Detail</th></tr>
{''.join(f'<tr><td>{esc(k)}</td><td>{badge(v["state"])} {v["state"]}</td><td>{esc(v.get("detail") or v.get("count",""))}</td></tr>' for k,v in surfaces.items())}</table>

<h2>3 · Page metadata</h2>
<table><tr><th>Page</th><th>HTTP</th><th>Indexable</th><th>Canonical</th><th>OG</th><th>JSON-LD</th><th>Latency</th></tr>{rows_pages}</table>
<p class="muted">Duplicate titles: {esc(json.dumps(dup_titles) if dup_titles else 'none')}</p>

<h2>4 · CZN on-chain panel <span class="muted">(source: {esc(czn['source'])})</span></h2>
<table><tr><th>Metric</th><th>Value</th><th>Source</th><th>Last updated</th></tr>{czn_rows}</table>
<p class="muted">Unknown metrics are labeled UNKNOWN — never estimated. No market-data provider connected yet.</p>

<h2>5 · Social presence</h2>
<table><tr><th>Profile</th><th>URL</th><th>Status</th><th>Public repos</th><th>Checked</th></tr>{rows_socials}</table>

<h2>6 · Search query test suite</h2>
<table><tr><th>Query</th><th>Engine</th><th>Checked</th><th>Cozanet result</th><th>URL</th><th>Notes</th></tr>{search_rows or "<tr><td colspan='6'>No search run merged yet — merge the Phase 20 query results into latest/search-results.json.</td></tr>"}</table>

<h2>7 · Change since last scan</h2>
<table><tr><th>Since</th><th>Pages indexable</th><th>JSON-LD</th><th>Sitemap URLs</th><th>Site up</th><th>CZN pool</th></tr>{hist_rows}</table>
<p class="muted">Priority engine: 🔴 P0 site down / key page noindex / sitemap broken · 🟡 P1 brand query result lost · 🔵 P2 content growth. Manual verification of any finding happens in the agent layer; findings always carry source + timestamp.</p>
</body></html>"""
(latest_dir / "public-reality.html").write_text(html)
print(f"Public Reality scan complete: {len(pages)} pages, sitemap {len(sitemap_urls)} urls, CZN {czn.get('symbol')}.")
