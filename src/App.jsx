import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Artists from './components/Artists';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageSquare } from 'lucide-react';
import useScrollReveal from './hooks/useScrollReveal';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [view, setView] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  // Activate scroll reveal animations
  useScrollReveal([view]);

  // Smooth scroll to top when changing views
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'home':
        return (
          <>
            <Hero setView={setView} />
            <About isSnippet={true} setView={setView} />
            <Services isOverview={true} setView={setView} />
            <Artists isFeatured={true} setView={setView} />
            <Contact />
          </>
        );
      case 'about':
        return (
          <div style={{ paddingTop: '90px' }}>
            <About isSnippet={false} setView={setView} />
          </div>
        );
      case 'services':
        return (
          <div style={{ paddingTop: '90px' }}>
            <Services isOverview={false} setView={setView} />
          </div>
        );
      case 'artists':
        return (
          <div style={{ paddingTop: '90px' }}>
            <Artists isFeatured={false} setView={setView} />
          </div>
        );
      case 'contact':
        return (
          <div style={{ paddingTop: '90px' }}>
            <Contact />
          </div>
        );
      default:
        setView('home');
        return null;
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.6s ease',
          visibility: isLoading ? 'hidden' : 'visible'
        }}
      >
        {/* Header */}
        <Header currentView={view} setView={setView} />

        {/* Main Content Area */}
        <main style={{ flex: '1 0 auto' }}>
          {renderContent()}
        </main>

      {/* Footer */}
      <Footer setView={setView} />

      {/* Floating WhatsApp Quick Contact Button */}
      <a
        href="https://wa.me/96599311167?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%D9%83%D9%85%20%D9%88%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9%20%D8%AA%D9%86%D8%B8%D9%8A%D9%85%20%D8%AD%D9%81%D9%84%D9%8A."
        target="_blank"
        rel="noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          backgroundColor: '#25D366',
          color: '#fff',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 999,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          animation: 'pulseGold 2s infinite'
        }}
        className="wa-floating-btn"
        title="تواصل معنا مباشرة عبر واتساب"
      >
        <MessageSquare size={30} fill="#fff" />
      </a>

      {/* Quick Global CSS Tweaks for App */}
      <style>{`
        .wa-floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
        }
      `}</style>
      </div>
    </>
  );
}
