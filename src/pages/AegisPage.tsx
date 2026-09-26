import AegisHeroSection from '../sections/aegis/AegisHeroSection';
import AegisFeaturesSection from '../sections/aegis/AegisFeaturesSection';
import MultiRailSection from '../sections/aegis/MultiRailSection';
import StellarSection from '../sections/aegis/StellarSection';
import CircleArcSection from '../sections/aegis/CircleArcSection';
import AIAssistantSection from '../sections/aegis/AIAssistantSection';
import AegisIntegrationSection from '../sections/aegis/AegisIntegrationSection';
import AegisRoadmapSection from '../sections/aegis/AegisRoadmapSection';
import AegisCTASection from '../sections/aegis/AegisCTASection';

export default function AegisPage() {
  return (
    <>
      <AegisHeroSection />
      <div className="section-bridge-dark-light" />
      <AegisFeaturesSection />
      <div className="section-bridge-light-dark" />
      <MultiRailSection />
      <div className="section-bridge-dark-light" />
      <StellarSection />
      <CircleArcSection />
      <div className="section-bridge-light-dark" />
      <AIAssistantSection />
      <div className="section-bridge-dark-light" />
      <AegisIntegrationSection />
      <div className="section-bridge-light-dark" />
      <AegisRoadmapSection />
      <AegisCTASection />
    </>
  );
}
