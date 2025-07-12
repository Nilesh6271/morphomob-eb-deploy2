import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import SafetyStandardsPage from './pages/SafetyStandardsPage';
import EnterpriseSlaPage from './pages/EnterpriseSlaPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import Footer from './components/Footer';

type Page = 'home' | 'about' | 'services' | 'contact' | 'terms' | 'safety' | 'sla' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    const handler = () => {
      if (localStorage.getItem('navigateToContactScroll')) {
        setCurrentPage('contact');
        setTimeout(() => {
          const el = document.getElementById('request-strategic-consultation');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          localStorage.removeItem('navigateToContactScroll');
        }, 100);
      }
    };
    window.addEventListener('navigateToContact', handler);
    return () => window.removeEventListener('navigateToContact', handler);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      case 'terms':
        return <TermsPage />;
      case 'safety':
        return <SafetyStandardsPage />;
      case 'sla':
        return <EnterpriseSlaPage />;
      case 'privacy':
        return <PrivacyPolicyPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;