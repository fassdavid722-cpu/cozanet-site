import HeroSection from '../sections/home/HeroSection';
import MissionSection from '../sections/home/MissionSection';
import ProductsSection from '../sections/home/ProductsSection';
import TechnologySection from '../sections/home/TechnologySection';
import EngineeringSection from '../sections/home/EngineeringSection';
import DevelopersSection from '../sections/home/DevelopersSection';
import SecuritySection from '../sections/home/SecuritySection';
import RoadmapSection from '../sections/home/RoadmapSection';
import CTASection from '../sections/home/CTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="section-bridge-dark-light" />
      <MissionSection />
      <div className="section-bridge-light-dark" />
      <ProductsSection />
      <div className="section-bridge-dark-light" />
      <TechnologySection />
      <div className="section-bridge-light-dark" />
      <EngineeringSection />
      <div className="section-bridge-dark-surface" />
      <DevelopersSection />
      <div className="section-bridge-light-dark" />
      <SecuritySection />
      <div className="section-bridge-dark-light" />
      <RoadmapSection />
      <div className="section-bridge-light-dark" />
      <CTASection />
    </>
  );
}
