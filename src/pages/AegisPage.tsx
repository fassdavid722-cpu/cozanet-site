import AegisHeroSection from '../sections/aegis/AegisHeroSection';
import AegisFeaturesSection from '../sections/aegis/AegisFeaturesSection';
import AIAssistantSection from '../sections/aegis/AIAssistantSection';
import AegisIntegrationSection from '../sections/aegis/AegisIntegrationSection';
import AegisCTASection from '../sections/aegis/AegisCTASection';

export default function AegisPage() {
  return (
    <>
      <AegisHeroSection />
      <div className="section-bridge-dark-light" />
      <AegisFeaturesSection />
      <div className="section-bridge-light-dark" />
      <AIAssistantSection />
      <div className="section-bridge-dark-light" />
      <AegisIntegrationSection />
      <div className="section-bridge-light-dark" />
      <AegisCTASection />
    </>
  );
}
