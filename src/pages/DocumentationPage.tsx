import { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import SectionHeader from '../components/SectionHeader';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

function truncateAddress(addr: string) {
  return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
}

function ContractAddressValue({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard not available, ignore
    }
  };
  return (
    <div className="flex items-center gap-2 flex-wrap justify-end">
      <span className="font-mono text-[0.8125rem] sm:text-[0.9375rem] text-white font-medium">
        {truncateAddress(address)}
      </span>
      <button onClick={handleCopy} aria-label="Copy contract address" className="text-coz-slate hover:text-coz-gold transition-colors shrink-0">
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <a href={`https://bscscan.com/token/${address}`} target="_blank" rel="noopener noreferrer" aria-label="View on BscScan" className="text-coz-slate hover:text-coz-gold transition-colors shrink-0">
        <ExternalLink size={16} />
      </a>
    </div>
  );
}

const toc = [
  '1. System Architecture',
  '2. Smart Contracts',
  '3. API Reference',
  '4. Security Approach',
  '5. Engine Status & Roadmap',
];

const engines = [
  { name: 'API Gateway', desc: 'Single public entry point. Validates every request, enforces rate limits, attaches a correlation ID, forwards to the correct engine, and aggregates responses. Holds no business logic and no direct database access.', status: 'Live' },
  { name: 'Identity Engine', desc: 'Owns account lifecycle: registration, email verification, onboarding, state machine (pending → email verified → active → suspended/locked), and permanent Aegis ID assignment.', status: 'Live' },
  { name: 'Wallet Vault Engine', desc: 'Isolated key-management service. Generates and stores wallet keys via HD derivation; exposed only to other engines over an internal, API-key-authenticated channel — never to end users or the public internet directly.', status: 'Live' },
  { name: 'Transfer Engine', desc: 'Handles transaction routing: fee calculation, risk scoring, RPC failover across chain providers, and the create/execute/cancel/retry transaction lifecycle.', status: 'Live' },
  { name: 'Payment Engine', desc: 'Fee quoting and execution for platform payments, CZN-based fee discounts, and treasury allocation across ecosystem buckets.', status: 'Live' },
  { name: 'Ledger Engine', desc: 'System of record for balances and transaction history, reconciled against on-chain state.', status: 'In Development' },
  { name: 'Portfolio Engine', desc: 'Aggregates holdings and valuation across wallets and chains for reporting and analytics.', status: 'In Development' },
  { name: 'Rates Engine', desc: 'Sources and normalizes market pricing and exchange rate data used across the platform.', status: 'In Development' },
  { name: 'Compliance Engine', desc: 'Policy checks, transaction monitoring rules, and jurisdiction-aware constraints.', status: 'In Development' },
  { name: 'Notification Engine', desc: 'Transactional and account emails (receipts, alerts, product updates) via a dedicated delivery pipeline, separate from the auth verification flow.', status: 'In Development' },
  { name: 'Audit Engine', desc: 'Immutable, append-only event log for sensitive actions across every engine (transfers, payments, identity state changes).', status: 'In Development' },
  { name: 'Automation Engine', desc: 'Scheduled and event-triggered workflows across the ecosystem (e.g. periodic burns, reporting jobs).', status: 'In Development' },
];

const apiEndpoints = [
  { path: '/api/v1/identity/*', desc: 'Register, verify email, onboard, fetch the authenticated identity.' },
  { path: '/api/v1/transfers/*', desc: 'Quote, create, execute, cancel, retry, and list transfers.' },
  { path: '/api/v1/payments/*', desc: 'Fee quotes, discount tiers, and payment status. Execute/refund/treasury routes are engine-to-engine only.' },
  { path: '/api/v1/health', desc: 'Gateway and downstream-engine liveness.' },
  { path: '/api/v1/version', desc: 'Deployed version and build metadata per engine.' },
  { path: '/api/v1/openapi.json', desc: 'Machine-readable OpenAPI contract — the source of truth for request/response shapes.' },
];

const securityPillars = [
  { title: 'Authentication', body: 'Every request carries a signed session token issued by Supabase Auth. The Gateway independently validates it before forwarding a request, and the receiving engine validates it again — no engine trusts the Gateway blindly.' },
  { title: 'Engine Isolation', body: 'Each engine owns its own database tables and its own deployment. Engines never import another engine\u2019s code or query another engine\u2019s tables directly — all cross-engine communication happens over authenticated HTTP, each engine keyed with its own dedicated credential.' },
  { title: 'Key Management', body: 'Wallet private-key material is generated and held only inside the Wallet Vault Engine via hierarchical-deterministic (HD) derivation. It has no public-facing API — the only way to reach it is through an internal, API-key-authenticated call from another engine.' },
  { title: 'Data Integrity', body: 'Every table supports optimistic locking (a version column, checked on every write) and soft deletes (records are archived, never hard-deleted), so state transitions can\u2019t silently race or destroy history.' },
  { title: 'Transport & Storage', body: 'TLS in transit on every hop. Environment secrets and API keys are stored in the hosting platform\u2019s encrypted secret store, never in source control or the frontend bundle.' },
  { title: 'Immutable Identity Rules', body: 'Once assigned, an account\u2019s Aegis ID, internal UUID, and wallet addresses never change and are never regenerated by a redeploy \u2014 identity and custody are permanent, by design.' },
];

const roadmap = [
  { q: 'Q1 2025', title: 'AEGIS Core Launch', desc: 'Wallet infrastructure, payment processing, and business finance tools.' },
  { q: 'Q2 2025', title: 'AI Financial Assistant', desc: 'Intelligent assistant for financial analysis and automated recommendations within AEGIS.' },
  { q: 'Q3 2025', title: 'Cross-Chain Bridge', desc: 'Seamless asset transfers across multiple blockchain networks with unified liquidity.' },
  { q: 'Q4 2025', title: 'Developer Platform v2', desc: 'Enhanced APIs, new SDKs, webhook system, and developer dashboard.' },
  { q: 'Q1 2026', title: 'Enterprise Suite', desc: 'Compliance tools, advanced reporting, multi-entity management, white-label solutions.' },
  { q: 'Q2 2026', title: 'CZN Ecosystem', desc: 'Full token utility integration across all products, governance framework, ecosystem rewards.' },
];

export default function DocumentationPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-coz-black pt-[clamp(80px,10vh,140px)] pb-section">
        <div className="max-w-content mx-auto px-6">
          <ScrollReveal>
            <span className="inline-block text-[0.75rem] font-medium tracking-[0.04em] px-4 py-2 rounded-pill bg-coz-charcoal border border-coz-border-dark text-coz-gold mb-6">
              Documentation · v1.0 · July 2026
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-h1 text-white max-w-[800px]">Engineering documentation.</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-body-lg text-coz-slate-light max-w-[680px] mt-4">
              How Cozanet is actually built: system architecture, the CZN smart contract, the public API, our security model, and where each engine stands today.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/whitepaper" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-button gradient-gold text-coz-black font-medium text-[0.9375rem] hover:shadow-gold-glow transition-all">
                Read the Whitepaper
              </Link>
              <Link to="/czn" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border-dark text-white font-medium text-[0.9375rem] hover:border-coz-gold transition-colors">
                View CZN Token Page
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* TOC */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="Contents" headline="What's inside." />
          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            {toc.map((item) => (
              <div key={item} className="text-[0.9375rem] text-coz-slate border-b border-coz-border py-3">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 1. System Architecture */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader
            label="1. System Architecture"
            headline="A gateway, and independent engines behind it."
            dark
            description="Cozanet's backend is not one monolith. A single API Gateway is the only public entry point; every capability behind it — identity, wallets, transfers, payments, and more — is built and deployed as its own independent engine, following a shared Clean Architecture pattern (domain / application / infrastructure layers) and communicating only over authenticated HTTP. No engine imports another engine's code, and no engine touches another engine's database."
          />
          <div className="grid md:grid-cols-2 gap-5 mt-14">
            {engines.map((e, i) => (
              <ScrollReveal key={e.name} delay={i * 0.05}>
                <div className="bg-coz-charcoal border border-coz-charcoal-light rounded-card p-6 h-full border-t-[2px] border-t-coz-gold">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h4 className="text-h4 text-white">{e.name}</h4>
                    <span className={`text-[0.6875rem] font-medium uppercase tracking-[0.04em] px-2.5 py-1 rounded-pill shrink-0 ${e.status === 'Live' ? 'bg-green-950 text-green-400' : 'bg-coz-charcoal-light text-coz-slate-light'}`}>
                      {e.status}
                    </span>
                  </div>
                  <p className="text-[0.9375rem] text-coz-slate-light leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-[0.8125rem] text-coz-slate mt-8 max-w-[720px]">
              "Live" means the engine is deployed, reachable, and passing its own health/version checks in production. "In Development" means the repository and API contract exist but the engine is not yet part of a live user-facing flow — listed here for transparency rather than left unmentioned.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 2. Smart Contracts */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="2. Smart Contracts" headline="CZN is a standard, verifiable BEP-20 token." description="CZN is deployed as a standard BEP-20 token on BNB Smart Chain — it implements the same transfer / approve / balanceOf interface as any BEP-20/ERC-20 token, with no custom logic hidden behind it. Always verify the contract directly on BscScan rather than trusting any address posted elsewhere." />
          <div className="mt-12">
            {[
              { label: 'Token Standard', value: 'BEP-20 (BSC)' },
              { label: 'Blockchain', value: 'BNB Smart Chain (BSC)' },
              { label: 'Decimals', value: '9' },
              { label: 'Total Supply', value: '100,000,000,000,000,000,000 CZN' },
              { label: 'Target Supply (Post-Burn)', value: '400,000,000 CZN' },
              { label: 'Contract Address', value: '0xE470E53147E199E6a6C02a50473fF8E84bD2d2CA' },
            ].map((spec) => (
              <div key={spec.label} className="flex justify-between items-center py-4 border-b border-coz-border gap-4">
                <span className="text-[0.875rem] text-coz-slate uppercase tracking-[0.04em] shrink-0">{spec.label}</span>
                {spec.label === 'Contract Address' ? (
                  <ContractAddressValue address={spec.value} />
                ) : (
                  <span className="text-[1rem] text-coz-black font-medium text-right">{spec.value}</span>
                )}
              </div>
            ))}
          </div>
          <ScrollReveal delay={0.15}>
            <p className="text-[0.8125rem] text-coz-slate mt-6">
              Supply reduction toward the post-burn target is executed through periodic, on-chain burn transactions from circulating/treasury allocations — each one independently verifiable on BscScan against the contract's total-supply history. No third-party smart-contract audit has been published for CZN yet; treat any audit claims for CZN made elsewhere as unverified until a report is linked from this page.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 3. API Reference */}
      <section className="bg-coz-black py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader
            label="3. API Reference"
            headline="One Gateway, versioned and predictable."
            dark
            description="The frontend and any external integration talk to exactly one base URL — the Gateway. It is the only publicly reachable surface; the engines behind it are never called directly."
          />
          <div className="grid lg:grid-cols-2 gap-12 mt-14">
            <div>
              <h4 className="text-h4 text-white mb-4">Endpoints</h4>
              {apiEndpoints.map((ep) => (
                <div key={ep.path} className="py-4 border-b border-coz-charcoal-light">
                  <code className="text-[0.875rem] text-coz-gold font-mono">{ep.path}</code>
                  <p className="text-[0.875rem] text-coz-slate-light mt-1">{ep.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-h4 text-white mb-4">Conventions</h4>
              <ul className="space-y-4">
                <li className="text-[0.9375rem] text-coz-slate-light"><span className="text-white font-medium">Auth:</span> every request needs <code className="text-coz-gold font-mono text-[0.875rem]">Authorization: Bearer &lt;token&gt;</code> from an authenticated Supabase session. Unauthenticated requests get a structured <code className="text-coz-gold font-mono text-[0.875rem]">401 AUTH_UNAUTHORIZED</code>.</li>
                <li className="text-[0.9375rem] text-coz-slate-light"><span className="text-white font-medium">Errors:</span> every failure returns a consistent shape — a machine-readable <code className="text-coz-gold font-mono text-[0.875rem]">code</code>, a human-readable <code className="text-coz-gold font-mono text-[0.875rem]">message</code>, and the matching HTTP status. No bare stack traces or ad-hoc error strings.</li>
                <li className="text-[0.9375rem] text-coz-slate-light"><span className="text-white font-medium">Correlation IDs:</span> every request is tagged with an <code className="text-coz-gold font-mono text-[0.875rem]">X-Correlation-Id</code> that follows it through the Gateway and into the engine, for end-to-end tracing.</li>
                <li className="text-[0.9375rem] text-coz-slate-light"><span className="text-white font-medium">Rate limiting:</span> enforced per user, per endpoint, at the Gateway before a request ever reaches an engine.</li>
                <li className="text-[0.9375rem] text-coz-slate-light"><span className="text-white font-medium">Contract-first:</span> the full request/response schema for every route is published as OpenAPI 3.0 at <code className="text-coz-gold font-mono text-[0.875rem]">/api/v1/openapi.json</code> — that file, not marketing copy, is the source of truth.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-bridge-dark-light" />

      {/* 4. Security Approach */}
      <section className="bg-coz-surface py-section">
        <div className="max-w-content mx-auto px-6">
          <SectionHeader label="4. Security Approach" headline="Security by isolation, not by promise." description="Rather than a single perimeter to defend, Cozanet's security model leans on isolating every sensitive capability behind its own boundary — so a bug or breach in one engine can't reach another." />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {securityPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.06}>
                <div className="bg-white border border-coz-border rounded-card p-6 h-full">
                  <h4 className="text-h4 text-coz-black mb-2">{p.title}</h4>
                  <p className="text-[0.9375rem] text-coz-slate leading-relaxed">{p.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-[0.8125rem] text-coz-slate mt-8 max-w-[760px]">
              This section describes mechanisms that are actually implemented in the running system today. Formal third-party certifications (e.g. SOC 2, ISO 27001) referenced elsewhere on this site are aspirational/in-progress and should not be treated as completed until an auditor's report is linked from this page.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-bridge-light-dark" />

      {/* 5. Roadmap */}
      <section className="bg-white py-section">
        <div className="max-w-content-narrow mx-auto px-6">
          <SectionHeader label="5. Engine Status & Roadmap" headline="Where we are, and what's next." />
          <div className="mt-14 space-y-5">
            {roadmap.map((r, i) => (
              <ScrollReveal key={r.q} delay={i * 0.05}>
                <div className="flex gap-6 items-start border-b border-coz-border pb-5">
                  <span className="text-[0.8125rem] font-medium text-coz-gold uppercase tracking-[0.04em] w-20 shrink-0 pt-0.5">{r.q}</span>
                  <div>
                    <h4 className="text-[1.0625rem] font-medium text-coz-black">{r.title}</h4>
                    <p className="text-[0.9375rem] text-coz-slate mt-1">{r.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.2}>
            <p className="text-[0.8125rem] text-coz-slate mt-8">
              Roadmap dates are forward-looking and subject to change. The engine status table above (section 1) is the more granular, continuously-updated view of what's actually live versus in progress.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/whitepaper" className="inline-flex items-center px-7 py-3.5 rounded-button bg-coz-black text-white font-medium text-[0.9375rem] hover:bg-coz-charcoal transition-colors">
                Read the Whitepaper
              </Link>
              <Link to="/security" className="inline-flex items-center px-7 py-3.5 rounded-button border border-coz-border text-coz-black font-medium text-[0.9375rem] hover:border-coz-gold transition-colors">
                Security & Compliance
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
