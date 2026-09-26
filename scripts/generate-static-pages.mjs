/**
 * Per-route static page generator (SEO).
 *
 * Problem this solves: cozanet.net is a client-side SPA. Without this,
 * every URL returned the same HTML shell — one title, one description,
 * one block of homepage content, duplicated across all 15 routes. Search
 * engines saw 15 copies of the homepage and nothing else.
 *
 * What it does: after `vite build`, emit dist/<route>/index.html for every
 * route in scripts/seo-manifest.json with:
 *   - unique <title>, meta description, canonical, Open Graph + Twitter tags
 *   - route-specific JSON-LD (BreadcrumbList, SoftwareApplication, etc.)
 *   - a <noscript> block with genuine, route-specific crawler content
 * Vercel serves filesystem matches before the SPA rewrite, so /aegis gets
 * the AEGIS page HTML, /czn the CZN page, and so on. Real browsers load the
 * same bundle as before and React mounts normally (script/link tags are
 * copied from the built root index.html).
 *
 * All content is factual. LIVE / IN DEVELOPMENT / PLANNED status is
 * separated everywhere. No fabricated traction, listings, or numbers.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(readFileSync(resolve(root, 'scripts/seo-manifest.json'), 'utf8'));
const articles = JSON.parse(readFileSync(resolve(root, 'src/content/articles.json'), 'utf8')).articles;
const { site, routes } = manifest;

// ---------- route-specific crawler-visible content (inside <noscript>) ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const wrap = (title, body) =>
  `<div id="__prerender"><div class="wrap">${body}</div></div>`;
const a = (href, label) => `<a href="${href}">${label}</a>`;
const status = (label, cls) => `<p style="margin:.2rem 0"><span class="pill">${label}</span></p>`;

const CONTENT = {
  '/': `
    <span class="pill">Software, AI &amp; Financial Infrastructure</span>
    <h1>Cozanet — Intelligent infrastructure for the digital economy</h1>
    <p>Cozanet builds the products, platforms, and protocols that power intelligent software, financial infrastructure, and automation across the global digital economy. Our products span AI, automation, and developer tools — starting with ${a('/aegis', 'AEGIS')}, our financial operating system moving money across Africa's crypto, bank, and mobile money rails.</p>
    <h2>Products</h2>
    <ul>
      <li><strong>AEGIS</strong> — a financial operating system for moving money across crypto, bank, and mobile money rails. Phase One (wallets, swaps, and treasury on BNB Smart Chain) is live today; the multi-rail Smart Router is in active development. ${a('/aegis', 'Explore AEGIS')}.</li>
      <li><strong>Cozanet AI</strong> — intelligent products and assistants powered by artificial intelligence.</li>
      <li><strong>Automation</strong> — a workflow engine for building, deploying, and managing automated workflows across systems.</li>
      <li><strong>Developer Platform</strong> — APIs, SDKs, and tools built on a gateway-first, microservices architecture. ${a('/developers', 'Developer platform overview')}.</li>
      <li><strong>CZN</strong> — the ecosystem token of the Cozanet platform, on BNB Smart Chain. ${a('/czn', 'Read the CZN token page')}.</li>
    </ul>
    <h2>What is live vs in development</h2>
    <p>Cozanet separates claims from reality. ${a('/roadmap', 'View the roadmap')} shows exactly what is live, in development, and planned, and the ${a('/changelog', 'development changelog')} records genuine milestones.</p>
    <h2>Company</h2>
    <p>Founded by Ifeanyi, known publicly as CozyCrypto. ${a('/company', 'About the company')}, ${a('/technology', 'the technology architecture')}, ${a('/security', 'the security model')}, and ${a('/documentation', 'documentation')}.</p>`,

  '/aegis': `
    <span class="pill">Cozanet Financial Operating System</span>
    <h1>AEGIS by Cozanet — Smart Routing Financial Infrastructure</h1>
    <p>AEGIS is Cozanet's financial operating system for connecting Web3 assets with traditional financial and payment infrastructure. It is being built to move money across Africa's crypto, bank, and mobile money rails, routing transfers through whichever rail is cheapest or fastest.</p>
    <h2>What is live today (Phase One)</h2>
    <ul>
      <li>Secure custodial wallets on BNB Smart Chain, provisioned automatically at sign-up.</li>
      <li>Token swaps on BNB Smart Chain (PancakeSwap routing plus a dedicated CZN pool).</li>
      <li>Treasury fee ledger with on-chain fee collection.</li>
      <li>In-app notifications and the Cozanet AI assistant with persistent memory.</li>
    </ul>
    ${status('LIVE — Phase One, at aegis.cozanet.net')}
    <h2>In development</h2>
    <ul>
      <li>Multi-rail Smart Router: banking rails, mobile money, Stellar, and Circle Arc/USDC settlement.</li>
      <li>Android application (built and in testing; Play Store release pending).</li>
    </ul>
    ${status('IN DEVELOPMENT')}
    <p>Wallet architecture in Phase One is custodial: keys are managed server-side with deterministic derivation, and users operate their wallets through their account. A non-custodial option is planned but not live; no change to wallet architecture happens without a published migration plan.</p>
    <h2>Documentation</h2>
    <p>${a('/documentation', 'AEGIS documentation')}: supported networks, wallet architecture, smart-routing architecture, and current limitations. ${a('/roadmap', 'View the AEGIS roadmap')} or ${a('/changelog', 'read the development changelog')}.</p>`,

  '/czn': `
    <span class="pill">Cozanet Ecosystem Token</span>
    <h1>CZN — Cozanet Token</h1>
    <p>CZN is the native token associated with the Cozanet ecosystem, issued on BNB Smart Chain as a BEP-20 token.</p>
    <h2>Verified token facts (read from the BNB Smart Chain contract)</h2>
    <ul>
      <li><strong>Token name:</strong> Cozanet</li>
      <li><strong>Symbol:</strong> CZN</li>
      <li><strong>Decimals:</strong> 9</li>
      <li><strong>Total supply:</strong> 100,000,000,000,000,000,000 CZN</li>
      <li><strong>Blockchain:</strong> BNB Smart Chain (BEP-20)</li>
      <li><strong>Contract address:</strong> 0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA</li>
      <li><strong>Trading pool:</strong> a dedicated CZN/WBNB pair contract (0xdf75...a4c0d) — NOT a PancakeSwap pool. The AEGIS app executes CZN↔BNB swaps against this pair. Current pool liquidity is small; CZN has no exchange listings.</li>
      <li><strong>Verified contract page:</strong> <a href="https://bscscan.com/token/0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA">bscscan.com/token/0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA</a> — source code verified on BscScan (exact match).</li>
    </ul>
    <h2>Token mechanics — status</h2>
    <ul>
      <li><strong>Live:</strong> CZN↔BNB swaps inside AEGIS against the dedicated pool.</li>
      <li><strong>Planned, not yet implemented:</strong> paying AEGIS fees in CZN at a discount, platform rewards, and governance participation. These are design goals, not current functionality.</li>
      <li><strong>Planned:</strong> token burns toward a target circulating supply of 400,000,000 CZN.</li>
    </ul>
    <p>CZN is a utility token, not an investment, security, or financial instrument. Cozanet does not publish market statistics it cannot verify. ${a('/documentation', 'Cozanet documentation')} and ${a('/changelog', 'the changelog')} show what is actually built.</p>`,

  '/products': `
    <span class="pill">Cozanet Products</span>
    <h1>Products — Cozanet</h1>
    <p>Cozanet's products span AI, automation, developer tools, and financial infrastructure.</p>
    <ul>
      <li><strong>${a('/aegis', 'AEGIS')}</strong> — the flagship: a financial operating system moving money across Africa's crypto, bank, and mobile money rails. Phase One is live; Smart Router in development.</li>
      <li><strong>Cozanet AI</strong> — intelligent assistants and AI products, including the persistent-memory assistant inside AEGIS (live) and the broader AI platform (in development).</li>
      <li><strong>Automation</strong> — a workflow engine for automated, cross-system workflows (in development).</li>
      <li><strong>Developer Platform</strong> — gateway-first APIs, SDKs, and tools. ${a('/developers', 'Explore the developer platform')}.</li>
      <li><strong>${a('/czn', 'CZN')}</strong> — the Cozanet ecosystem token on BNB Smart Chain.</li>
    </ul>
    <p>${a('/roadmap', 'View the roadmap')} for what is live, in development, and planned.</p>`,

  '/technology': `
    <span class="pill">Cozanet Technology</span>
    <h1>Technology — Gateway-First Microservices Architecture</h1>
    <p>Cozanet software is built as a microservices architecture behind a unified API gateway. Every request flows through the gateway, which handles authentication, rate limiting, and routing to independent domain engines.</p>
    <h2>How it works</h2>
    <ul>
      <li><strong>Gateway</strong> — a single entry point for all clients: the web app, the Android app, and third-party integrations.</li>
      <li><strong>Domain engines</strong> — each functional domain (wallet vault, swap, treasury, identity, notifications, AI orchestration, and more) runs as an isolated service with its own data and scaling policy.</li>
      <li><strong>Frontends hold no business logic</strong> — clients call the gateway; engines execute.</li>
      <li><strong>Live infrastructure</strong> — Firebase Authentication for identity, Supabase for data, Vercel for deployment, BNB Smart Chain for settlement in Phase One.</li>
    </ul>
    <p>More detail in ${a('/documentation', 'the documentation')} and ${a('/security', 'the security model')}.</p>`,

  '/developers': `
    <span class="pill">Cozanet Developer Platform</span>
    <h1>Developers — Cozanet</h1>
    <p>Cozanet's developer platform is built on the same gateway-first architecture the products use: APIs, SDKs, and tools for integrating with AEGIS financial infrastructure.</p>
    <h2>What exists today</h2>
    <ul>
      <li>Public GitHub organization with source code and documentation: ${a('https://github.com/CozanetHQ', 'github.com/CozanetHQ')}.</li>
      <li>Gateway-routed APIs powering the live AEGIS web app (wallet provisioning, swaps, treasury, notifications).</li>
      <li>Developer SDK work in progress.</li>
    </ul>
    ${status('Live platform: aegis.cozanet.net · Public SDK: in development')}
    <p>See ${a('/documentation', 'developer documentation')}, ${a('/technology', 'the architecture overview')}, and ${a('/changelog', 'the changelog')} for current status.</p>`,

  '/security': `
    <span class="pill">Cozanet Security</span>
    <h1>Security — Cozanet Security Model</h1>
    <p>This page describes the actual security model, not marketing claims. No system is fully secure, unhackable, or risk-free, and we do not claim otherwise.</p>
    <h2>Current model (Phase One)</h2>
    <ul>
      <li><strong>Authentication:</strong> Firebase Authentication (email/password and Google sign-in) issues short-lived tokens; API routes require them.</li>
      <li><strong>Wallets:</strong> custodial — keys are derived deterministically from a protected master seed and managed server-side. Users operate wallets through their AEGIS account. A non-custodial option is planned, not live.</li>
      <li><strong>On-chain operations:</strong> transactions are constructed and signed server-side and broadcast to BNB Smart Chain.</li>
      <li><strong>Audit trails:</strong> platform events are written to append-only audit logging.</li>
      <li><strong>Known limitations:</strong> custodial key management concentrates risk on Cozanet infrastructure; smart-contract risk on third-party DEX routers applies to swaps; the multi-rail Smart Router is not yet live.</li>
    </ul>
    <h2>Responsible disclosure</h2>
    <p>Report suspected vulnerabilities to ${a('mailto:security@cozanet.net', 'security@cozanet.net')}. Please allow reasonable time for a fix before public disclosure.</p>
    <p>${a('/roadmap', 'Roadmap')} and ${a('/changelog', 'changelog')} record real development status.</p>`,

  '/company': `
    <span class="pill">About Cozanet</span>
    <h1>About Cozanet</h1>
    <p>Cozanet is a software infrastructure company building intelligent infrastructure for the digital economy. Its current flagship product, ${a('/aegis', 'AEGIS')}, is a financial operating system focused on smart routing between digital assets and financial infrastructure.</p>
    <p>Cozanet was founded by Ifeanyi, known publicly as CozyCrypto.</p>
    <h2>Contact</h2>
    <ul>
      <li>General: info@cozanet.net</li>
      <li>Team: team@cozanet.net</li>
      <li>Support: support@cozanet.net</li>
      <li>Press: press@cozanet.net</li>
      <li>Security disclosures: security@cozanet.net</li>
    </ul>
    <h2>Elsewhere</h2>
    <ul>
      <li>${a('https://x.com/CozyCrypto_io', 'X (Twitter)')}</li>
      <li>${a('https://t.me/CozanetOfficial', 'Telegram')}</li>
      <li>${a('https://github.com/CozanetHQ', 'GitHub')}</li>
    </ul>
    <p>${a('/technology', 'Technology')} · ${a('/security', 'Security')} · ${a('/documentation', 'Documentation')} · ${a('/roadmap', 'Roadmap')}</p>`,

  '/documentation': `
    <span class="pill">Cozanet Documentation</span>
    <h1>Documentation — Cozanet</h1>
    <h2>What Cozanet is</h2>
    <p>Cozanet is a software infrastructure company. Its flagship product, ${a('/aegis', 'AEGIS')}, is a financial operating system moving money across Africa's crypto, bank, and mobile money rails.</p>
    <h2>What AEGIS currently does (LIVE)</h2>
    <ul>
      <li>Custodial wallets on BNB Smart Chain, provisioned at sign-up.</li>
      <li>Token swaps on BNB Smart Chain (PancakeSwap routing and a dedicated CZN/WBNB pool).</li>
      <li>Treasury fee ledger with on-chain fee collection.</li>
      <li>Notifications (in-app and email) and the Cozanet AI assistant with persistent memory.</li>
      <li>Live at ${a('https://aegis.cozanet.net', 'aegis.cozanet.net')}.</li>
    </ul>
    <h2>Under development</h2>
    <ul>
      <li>Multi-rail Smart Router — banking, mobile money, Stellar, Circle Arc/USDC.</li>
      <li>Android app — built, in testing, Play Store release pending.</li>
    </ul>
    <h2>Planned</h2>
    <ul>
      <li>CZN fee payments and discounts, platform rewards, governance participation.</li>
      <li>Non-custodial wallet option (requires a published migration plan; existing wallets will never be orphaned).</li>
    </ul>
    <h2>Architecture</h2>
    <p>Gateway-first microservices: see ${a('/technology', 'the technology page')} and ${a('/security', 'the security model')}. Open-source repositories at ${a('https://github.com/CozanetHQ', 'github.com/CozanetHQ')}. Status history: ${a('/changelog', 'changelog')}. Current build status: ${a('/roadmap', 'roadmap')}.</p>`,

  '/roadmap': `
    <span class="pill">Cozanet Roadmap</span>
    <h1>Roadmap — Live, In Development, Planned</h1>
    <h2>🟢 Live today</h2>
    <ul>
      <li>AEGIS Phase One: custodial wallets, swaps, treasury fee ledger, and the AI assistant on BNB Smart Chain (${a('https://aegis.cozanet.net', 'aegis.cozanet.net')}).</li>
      <li>Cozanet AI assistant with persistent conversation memory inside AEGIS.</li>
      <li>This website, documentation, and the public GitHub organization.</li>
    </ul>
    <h2>🟡 In development</h2>
    <ul>
      <li>Multi-rail Smart Router: banking rails, mobile money, Stellar, Circle Arc/USDC settlement.</li>
      <li>AEGIS Android app (built, in device testing; Play Store release pending).</li>
      <li>Developer SDK and public API documentation.</li>
    </ul>
    <h2>🔵 Planned</h2>
    <ul>
      <li>CZN fee discounts, platform rewards, and governance mechanics.</li>
      <li>Non-custodial wallet option alongside the custodial default (published migration plan required first).</li>
      <li>Additional settlement rails and regional coverage.</li>
    </ul>
    <p>Dates are not published until features ship. Progress is recorded in the ${a('/changelog', 'changelog')}. ${a('/aegis', 'Explore AEGIS')} or ${a('/czn', 'read the CZN token page')}.</p>`,

  '/changelog': `
    <span class="pill">Cozanet Changelog</span>
    <h1>Changelog — Development Milestones</h1>
    <p>A timestamped record of genuine development milestones. Only real events are listed.</p>
    <h2>September 2026</h2>
    <ul>
      <li>Security audit pass across the AEGIS codebase; authentication guards and rate limiting added to API routes; leaked deployment artifacts purged and verified.</li>
      <li>Google sign-in reliability fix (hybrid popup/redirect flow) deployed to production.</li>
      <li>Cozanet AI memory system live in production (conversation persistence and user facts).</li>
      <li>AEGIS Android app built (debug APK and release AAB); on-device testing underway.</li>
      <li>This website rebuilt with per-page metadata, sitemap, robots.txt, and structured data.</li>
    </ul>
    <h2>July 2026</h2>
    <ul>
      <li>AEGIS Phase One live: custodial wallets, swaps, and treasury on BNB Smart Chain.</li>
      <li>Treasury fee ledger integration (fee calculation, on-chain collection, ledger recording, audit events).</li>
      <li>Notification engine live: in-app notifications and transactional email.</li>
      <li>Cozanet AI orchestrator architecture implemented (intent routing to specialized AI engines).</li>
    </ul>
    <p>Current status of everything: ${a('/roadmap', 'the roadmap')}. ${a('/aegis', 'Explore AEGIS')}.</p>`,

  '/blog': `
    <span class="pill">Cozanet Blog</span>
    <h1>Technical articles</h1>
    <p>Writing about financial infrastructure, smart routing, and building AEGIS. Every article states what is live, in development, or planned.</p>
    <ul>
      <li><a href="/blog/what-is-cozanet">What Is Cozanet?</a> — a factual introduction to the company, its products, and its honesty policy.</li>
      <li><a href="/blog/aegis-smart-routing">What Is AEGIS and How Does Smart Routing Work?</a> — Phase One today, and the routing layer being built.</li>
      <li><a href="/blog/cross-border-settlement-africa">Why Cross-Border Settlement Is Difficult in African Markets</a> — fragmented rails, remittance costs, and currency volatility.</li>
      <li><a href="/blog/cozanet-web3-financial-infrastructure">Cozanet's Approach to Web3-to-Financial Infrastructure</a> — connecting blockchain rails to banking and mobile money.</li>
      <li><a href="/blog/building-aegis-architecture-wallets-roadmap">Building AEGIS: Architecture, Wallets and Roadmap</a> — an engineering view of the system.</li>
    </ul>
    <p>More: <a href="/roadmap">roadmap</a> and <a href="/changelog">changelog</a>.</p>`,

  '/whitepaper': `
    <span class="pill">Cozanet Whitepaper</span>
    <h1>Whitepaper — Cozanet</h1>
    <p>The Cozanet whitepaper describes the company's architecture, products, and the AEGIS smart-routing vision.</p>
    <p>Download the whitepaper PDF from this page, or read ${a('/documentation', 'the documentation')} for current build status. The whitepaper describes target architecture; ${a('/roadmap', 'the roadmap')} shows what is live today.</p>`,

  '/privacy': `<h1>Privacy Policy — Cozanet</h1><p>How Cozanet handles personal data on cozanet.net and aegis.cozanet.net.</p><p>${a('/', 'Back to the homepage')}</p>`,
  '/terms': `<h1>Terms of Service — Cozanet</h1><p>Terms of service for Cozanet websites and services.</p><p>${a('/', 'Back to the homepage')}</p>`,
  '/cookies': `<h1>Cookie Policy — Cozanet</h1><p>Cookie usage on Cozanet websites.</p><p>${a('/', 'Back to the homepage')}</p>`,
};

// ---------- JSON-LD ----------
const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cozanet',
  url: site.url,
  logo: site.logo,
  sameAs: site.sameAs,
  founder: { '@type': 'Person', name: 'Ifeanyi', alternateName: 'CozyCrypto' },
  description: 'Cozanet is a software infrastructure company building intelligent infrastructure for the digital economy. Its current flagship product, AEGIS, is a financial operating system focused on smart routing between digital assets and financial infrastructure.',
};
const siteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Cozanet',
  url: site.url,
  publisher: { '@type': 'Organization', name: 'Cozanet', url: site.url },
};
function breadcrumbLd(path, title) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Cozanet', item: site.url + '/' },
      { '@type': 'ListItem', position: 2, name: title.replace(/ — Cozanet.*$/, ''), item: site.url + path },
    ],
  };
}
const aegisLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AEGIS',
  alternateName: 'AEGIS by Cozanet',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Web, Android',
  url: 'https://aegis.cozanet.net',
  description: 'Cozanet\'s financial operating system for connecting Web3 assets with traditional financial and payment infrastructure.',
  author: { '@type': 'Organization', name: 'Cozanet', url: site.url },
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Account creation is free; network and platform fees apply to transactions.' },
};

// ---------- build ----------
const builtIndex = readFileSync(resolve(root, 'dist/index.html'), 'utf8');

// Extract the asset tags Vite injected into the built shell (script + stylesheet + modulepreload)
const assetTags = [
  ...(builtIndex.match(/<link rel="stylesheet"[^>]*>/g) || []),
  ...(builtIndex.match(/<link rel="modulepreload"[^>]*>/g) || []),
  ...(builtIndex.match(/<script type="module"[^>]*src="[^"]*"[^>]*><\/script>/g) || []),
].join('\n    ');

const faviconTags = (builtIndex.match(/<link rel="(icon|apple-touch-icon)"[^>]*>/g) || []).join('\n    ');

const prerenderCss = `<style>
      #__prerender { background:#08090b; color:#e7e7ea; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif; }
      #__prerender a { color:#d9b872; text-decoration:none; }
      #__prerender h1 { font-size:2rem; margin:0 0 .5rem; }
      #__prerender h2 { font-size:1.4rem; margin:2rem 0 .5rem; color:#d9b872; }
      #__prerender p { line-height:1.6; color:#b7b7bd; max-width:720px; }
      #__prerender .wrap { max-width:960px; margin:0 auto; padding:3rem 1.5rem; }
      #__prerender .pill { display:inline-block; background:#1c1a12; color:#d9b872; border-radius:999px; padding:.3rem .9rem; font-size:.8rem; margin-bottom:1rem; }
      #__prerender ul { color:#b7b7bd; line-height:1.8; padding-left:1.2rem; }
    </style>`;

function articleLd(a) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: a.title,
    description: a.description,
    datePublished: a.date,
    author: { '@type': 'Organization', name: 'Cozanet', url: site.url },
    publisher: { '@type': 'Organization', name: 'Cozanet', url: site.url, logo: { '@type': 'ImageObject', url: site.logo } },
    mainEntityOfPage: site.url + '/blog/' + a.slug,
  };
}

let generated = 0;
const extraPages = new Map(articles.map((a) => ['/blog/' + a.slug, a]));
for (const [path, cfg] of [...Object.entries(routes), ...[...extraPages.keys()].map((k) => [k, { ...routes[k], article: extraPages.get(k) }])]) {
  const title = cfg.title;
  const desc = cfg.description;
  const canonical = path === '/' ? site.url + '/' : site.url + path;
  const jsonLd = [orgLd, siteLd, breadcrumbLd(path, title)];
  if (cfg.article) jsonLd.push(articleLd(cfg.article));
  if (path === '/aegis') jsonLd.push(aegisLd);

  const body = cfg.article
    ? wrap(cfg.article.title, `<p class="muted" style="color:#8a8a92;font-size:.85rem">Blog · ${cfg.article.date}</p>
      <h1>${esc(cfg.article.title)}</h1><p>${esc(cfg.article.description)}</p>${cfg.article.html}
      <p>More: <a href="/roadmap">roadmap</a>, <a href="/changelog">changelog</a>, <a href="/aegis">AEGIS</a>.</p>`)
    : wrap(title, CONTENT[path] || `<h1>${esc(title)}</h1><p>${esc(desc)}</p>`);

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    ${faviconTags}
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(desc)}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Cozanet" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(desc)}" />
    <meta property="og:image" content="${site.logo}" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(desc)}" />
    <meta name="twitter:image" content="${site.logo}" />
    ${jsonLd.map((ld) => `<script type="application/ld+json">${JSON.stringify(ld)}</script>`).join('\n    ')}
    ${prerenderCss}
  </head>
  <body>
    <div id="root"><div style="background:#08090b;min-height:100vh"></div></div>
    <noscript>
      ${body}
    </noscript>
    ${assetTags}
  </body>
</html>
`;
  const outDir = resolve(root, 'dist', path === '/' ? '' : path.replace(/^\//, ''));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, 'index.html'), html);
  generated++;
}
console.log(`generate-static-pages: wrote ${generated} route pages to dist/`);
