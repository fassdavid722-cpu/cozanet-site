import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AegisPage from './pages/AegisPage';
import CznPage from './pages/CznPage';
import TechnologyPage from './pages/TechnologyPage';
import DevelopersPage from './pages/DevelopersPage';
import SecurityPage from './pages/SecurityPage';
import CompanyPage from './pages/CompanyPage';
import WhitepaperPage from './pages/WhitepaperPage';
import DocumentationPage from './pages/DocumentationPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import CookiePolicyPage from './pages/CookiePolicyPage';

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/aegis" element={<AegisPage />} />
            <Route path="/czn" element={<CznPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/whitepaper" element={<WhitepaperPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
