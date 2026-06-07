import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { Menu, X, Phone } from 'lucide-react';

export default function Header({ currentView, setView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'artists', label: 'فنانونا' },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  const handleNavClick = (viewId) => {
    setView(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="glass-panel" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 1000,
      borderBottom: '1px solid var(--border-color)',
      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)'
    }}>
      {/* Scroll Progress Indicator */}
      <div className="scroll-progress-container">
        <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '90px',
        padding: '0 20px',
        position: 'relative'
      }}>
        {/* Logo */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px',
            cursor: 'pointer' 
          }}
        >
          <img 
            src={logo} 
            alt="جاسم الرندي" 
            style={{ 
              height: '65px', 
              width: '65px', 
              objectFit: 'contain',
              borderRadius: '8px',
              border: '1px solid rgba(214, 175, 55, 0.3)'
            }} 
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span className="gold-text" style={{ 
              fontFamily: 'var(--font-headings)', 
              fontSize: '1.3rem', 
              fontWeight: '700',
              letterSpacing: '0.5px',
              lineHeight: '1.2'
            }}>
              جاسم الرندي
            </span>
            <span style={{ 
              fontSize: '0.65rem', 
              color: 'var(--text-secondary)',
              letterSpacing: '1px'
            }}>
              JASEM ALRANDI PRODUCTION
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav style={{ 
          display: 'none',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }} className="desktop-nav">
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '30px', 
            padding: 0,
            margin: 0 
          }}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: currentView === link.id ? 'var(--gold-primary)' : 'var(--text-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: currentView === link.id ? '700' : '500',
                    cursor: 'pointer',
                    padding: '8px 4px',
                    position: 'relative',
                    transition: 'var(--transition-fast)'
                  }}
                  className="nav-btn"
                >
                  {link.label}
                  {currentView === link.id && (
                    <span style={{
                      position: 'absolute',
                      bottom: '-4px',
                      right: 0,
                      width: '100%',
                      height: '2px',
                      background: 'var(--gold-gradient)',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA / Request Button */}
        <div style={{ display: 'none' }} className="desktop-cta">
          <button 
            onClick={() => handleNavClick('contact')} 
            className="btn-gold pulse-gold-btn"
            style={{ fontSize: '0.9rem', padding: '10px 22px' }}
          >
            <Phone size={16} />
            <span>تواصل معنا</span>
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            color: 'var(--gold-primary)',
            cursor: 'pointer',
            padding: '8px',
            zIndex: 1010
          }}
          className="mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown with smooth slide-down and fade-in transitions */}
      <div style={{
        position: 'fixed',
        top: '90px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 90px)',
        background: 'rgba(5, 5, 5, 0.98)',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        borderTop: '1px solid var(--border-color)',
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? 'translateY(0)' : 'translateY(-20px)',
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.4s',
        pointerEvents: isOpen ? 'all' : 'none'
      }}>
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => handleNavClick(link.id)}
            style={{
              background: 'none',
              border: 'none',
              color: currentView === link.id ? 'var(--gold-primary)' : 'var(--text-primary)',
              fontFamily: 'var(--font-headings)',
              fontSize: '1.6rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--transition-fast)'
            }}
          >
            {link.label}
          </button>
        ))}
        <button 
          onClick={() => handleNavClick('contact')} 
          className="btn-gold btn-ripple pulse-gold-btn"
          style={{ marginTop: '20px', fontSize: '1.1rem' }}
        >
          <Phone size={18} />
          <span>تواصل معنا مباشر</span>
        </button>
      </div>

      {/* Embedded CSS for desktop display toggling since we use Vanilla CSS */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: block !important; }
          .desktop-cta { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-btn:hover {
          color: var(--gold-primary) !important;
          text-shadow: 0 0 8px rgba(212, 175, 55, 0.3);
        }
      `}</style>
    </header>
  );
}
