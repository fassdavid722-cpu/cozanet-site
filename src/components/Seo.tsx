import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoRoutes from '../../scripts/seo-manifest.json';

interface RouteSeo { title: string; description: string }
const site = seoRoutes.site as { name: string; url: string; logo: string; sameAs: string[] };

const orgLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cozanet',
  url: site.url,
  logo: site.logo,
  sameAs: site.sameAs,
  founder: { '@type': 'Person', name: 'Ifeanyi', alternateName: 'CozyCrypto' },
  description:
    "Cozanet is a software infrastructure company building intelligent infrastructure for the digital economy. Its current flagship product, AEGIS, is a financial operating system focused on smart routing between digital assets and financial infrastructure.",
};

/**
 * Pathname-driven SEO for the SPA. Reads scripts/seo-manifest.json (the same
 * source generate-static-pages.mjs uses for the pre-rendered HTML), so the
 * metadata crawlers see and the metadata browsers see can never drift.
 * Mount once near the app root.
 */
export default function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const norm = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    const route = (seoRoutes.routes as Record<string, RouteSeo>)[norm] as RouteSeo | undefined;
    const title = route?.title ?? 'Cozanet';
    const description =
      route?.description ??
      "Cozanet builds software infrastructure for connecting digital assets, blockchain networks and financial systems, with AEGIS as its smart-routing financial operating system.";
    const canonical = site.url + (norm === '/' ? '/' : norm);

    document.title = title;
    const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', site.name);
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = canonical;

    // Site-wide Organization schema (idempotent)
    if (!document.getElementById('ld-org')) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = 'ld-org';
      s.textContent = JSON.stringify(orgLd);
      document.head.appendChild(s);
    }
  }, [pathname]);

  return null;
}
