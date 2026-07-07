import LegalPage from '../components/LegalPage';

export default function CookiePolicyPage() {
  return (
    <LegalPage
      label="Cookie Policy"
      title="Cookie Policy"
      updated="July 2026"
      intro="This page explains how Cozanet uses cookies and similar technologies on this website."
      sections={[
        {
          heading: '1. What Cookies We Use',
          body: 'Essential cookies that keep the site and sign-in flow working correctly. We do not currently use third-party advertising or cross-site tracking cookies on this marketing website.',
        },
        {
          heading: '2. Product & App Sessions',
          body: 'When you sign in to a Cozanet product (such as AEGIS), a secure session token is used to keep you authenticated. This is a functional necessity, not a tracking mechanism, and is scoped to that product.',
        },
        {
          heading: '3. Managing Cookies',
          body: 'Most browsers let you block or delete cookies through their settings. Blocking essential cookies may prevent parts of the site, such as sign-in, from working correctly.',
        },
        {
          heading: '4. Changes to This Policy',
          body: "If our use of cookies changes materially — for example if we add analytics or advertising cookies in the future — we'll update this page and the date above.",
        },
      ]}
    />
  );
}
