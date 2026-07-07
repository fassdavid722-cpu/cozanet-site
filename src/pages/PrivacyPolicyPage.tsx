import LegalPage from '../components/LegalPage';

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      label="Privacy Policy"
      title="Privacy Policy"
      updated="July 2026"
      intro="This policy explains what information Cozanet collects, how we use it, and the choices you have."
      sections={[
        {
          heading: '1. Information We Collect',
          body: 'Account information you provide directly (name, email address) when you sign up, verify your email, or contact us. Usage information collected automatically, such as pages visited and general device/browser information, used to keep the site and product working reliably. We do not collect wallet private keys or seed phrases from you — those are generated and held server-side inside our Wallet Vault engine and are never transmitted to or requested from you directly.',
        },
        {
          heading: '2. How We Use Information',
          body: 'To operate your account and the services you request (e.g. identity verification, wallet provisioning, transfers). To send essential account and security emails, such as verification codes. To respond to support and contact requests submitted through this site. To monitor, secure, and improve the reliability of our systems.',
        },
        {
          heading: '3. How We Share Information',
          body: 'We do not sell personal information. We share information only with service providers that help us operate (for example, our email delivery and cloud hosting providers), under agreements that limit their use of it to providing that service, or when required by law.',
        },
        {
          heading: '4. Data Retention & Security',
          body: 'We retain account information for as long as your account is active, plus a limited period afterward for security, fraud-prevention, and legal purposes. Data is encrypted in transit (TLS) and access to production systems is restricted and logged. See our Documentation page for more detail on our technical security approach.',
        },
        {
          heading: '5. Your Choices',
          body: 'You can request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete your account and associated data, subject to legal and operational retention requirements, by emailing info@cozanet.net.',
        },
        {
          heading: '6. Changes to This Policy',
          body: "We'll update the date at the top of this page whenever this policy changes, and post the updated version here.",
        },
      ]}
    />
  );
}
