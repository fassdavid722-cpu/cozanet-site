import LegalPage from '../components/LegalPage';

export default function TermsOfServicePage() {
  return (
    <LegalPage
      label="Terms of Service"
      title="Terms of Service"
      updated="July 2026"
      intro="These terms govern your use of Cozanet's website and products, including AEGIS and the CZN token."
      sections={[
        {
          heading: '1. Using Our Services',
          body: "You must be able to form a legally binding contract to use our services, and you're responsible for keeping your account credentials secure. You agree not to use our services for anything illegal, fraudulent, or that attempts to circumvent our security controls.",
        },
        {
          heading: '2. CZN Token',
          body: 'CZN is a utility token as described in the Cozanet Whitepaper. It is not a security, equity, or investment contract, and holding CZN does not entitle you to profits, dividends, or ownership in Cozanet. Nothing on this site is investment, financial, legal, or tax advice.',
        },
        {
          heading: '3. Products in Development',
          body: 'Some features and engines described on this site are actively being built and are labeled "In Development" rather than live — see our Documentation page for the current, honest status of each component. We may change, delay, or discontinue features as the product evolves.',
        },
        {
          heading: '4. No Warranty',
          body: 'Our services are provided "as is" without warranties of any kind, express or implied. We work hard to keep things reliable and secure, but we cannot guarantee the services will be uninterrupted, error-free, or completely secure.',
        },
        {
          heading: '5. Limitation of Liability',
          body: 'To the maximum extent permitted by law, Cozanet is not liable for indirect, incidental, or consequential damages arising from your use of our services, including losses related to digital assets or token value fluctuations.',
        },
        {
          heading: '6. Changes to These Terms',
          body: "We'll update the date at the top of this page whenever these terms change, and post the updated version here. Continued use of our services after a change means you accept the updated terms.",
        },
      ]}
    />
  );
}
