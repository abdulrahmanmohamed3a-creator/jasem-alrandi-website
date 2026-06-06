import React from 'react';
import logo from '../assets/logo.png';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);


export default function Footer({ setView }) {
  const handleNavClick = (viewId) => {
    setView(viewId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'var(--bg-primary)',
      borderTop: '1px solid var(--border-color)',
      padding: '70px 0 30px 0',
      position: 'relative'
    }}>
      {/* Scroll to top button */}
      <button 
        onClick={handleScrollTop}
        style={{
          position: 'absolute',
          top: '-20px',
          right: '50%',
          transform: 'translateX(50%)',
          background: 'var(--gold-gradient)',
          border: 'none',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(214, 175, 55, 0.4)',
          color: 'var(--bg-primary)',
          transition: 'var(--transition-smooth)'
        }}
        className="scroll-top-btn"
      >
        <ArrowUp size={20} />
      </button>

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          marginBottom: '50px'
        }} className="footer-grid">
          
          {/* Logo & Brief Description */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img 
                src={logo} 
                alt="جاسم الرندي للإنتاج الفني" 
                style={{
                  height: '70px',
                  width: '70px',
                  borderRadius: '8px',
                  objectFit: 'contain',
                  border: '1px solid rgba(214, 175, 55, 0.3)'
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span className="gold-text" style={{
                  fontFamily: 'var(--font-headings)',
                  fontSize: '1.4rem',
                  fontWeight: '700',
                  lineHeight: '1.2'
                }}>
                  جاسم الرندي
                </span>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', letterSpacing: '1px' }}>
                  JASEM ALRANDI PRODUCTION
                </span>
              </div>
            </div>
            
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.95rem',
              lineHeight: '1.7',
              maxWidth: '350px',
              fontWeight: '300'
            }}>
              الشركة الرائدة في دولة الكويت لتنظيم وتجهيز الأعراس الفاخرة وهندسة الصوت والإضاءة الرقمية وتعهد كبار نجوم الفن.
            </p>
            
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <a 
                href="https://www.instagram.com/alrandi/" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'rgba(214, 175, 55, 0.1)',
                  color: 'var(--gold-primary)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition-fast)'
                }}
                className="social-btn"
              >
                <Instagram size={18} />
              </a>
              
              <a 
                href="https://www.youtube.com/channel/UCLCL_hOLfuwsi4ayrr_p5Tg" 
                target="_blank" 
                rel="noreferrer"
                style={{
                  background: 'rgba(214, 175, 55, 0.1)',
                  color: 'var(--gold-primary)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition-fast)'
                }}
                className="social-btn"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff' }} className="gold-text">روابط سريعة</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { id: 'home', label: 'الرئيسية' },
                { id: 'about', label: 'من نحن وقصتنا' },
                { id: 'services', label: 'خدماتنا التقنية' },
                { id: 'artists', label: 'قائمة فنانونا' },
                { id: 'contact', label: 'اتصل بنا' }
              ].map(link => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-body)',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'var(--transition-fast)'
                    }}
                    className="footer-link-btn"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff' }} className="gold-text">تواصل معنا</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <Phone size={16} color="var(--gold-primary)" />
                <a href="https://wa.me/96599311167" target="_blank" rel="noreferrer" style={{ direction: 'ltr', display: 'inline-block' }}>
                  +965 9931 1167
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <Mail size={16} color="var(--gold-primary)" />
                <a href="mailto:info@alrandi.com">info@alrandi.com</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <MapPin size={16} color="var(--gold-primary)" />
                <span>دولة الكويت، العاصمة</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Horizontal separator */}
        <div style={{
          borderTop: '1px solid rgba(214, 175, 55, 0.1)',
          paddingTop: '25px',
          textAlign: 'center',
          fontSize: '0.85rem',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px'
        }} className="footer-bottom">
          <p>© {new Date().getFullYear()} شركة جاسم الرندي للإنتاج الفني. جميع الحقوق محفوظة.</p>
          <p style={{ fontSize: '0.75rem' }}>
            تم التصميم والتطوير بأعلى معايير الفخامة والاحترافية.
          </p>
        </div>

      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .social-btn:hover {
          background: var(--gold-primary) !important;
          color: var(--bg-primary) !important;
          box-shadow: 0 0 10px rgba(214, 175, 55, 0.4);
          transform: translateY(-3px);
        }
        .footer-link-btn:hover {
          color: var(--gold-primary) !important;
          padding-right: 5px;
        }
        .scroll-top-btn:hover {
          transform: translateX(50%) translateY(-5px) !important;
          box-shadow: 0 6px 20px rgba(214, 175, 55, 0.6) !important;
        }
      `}</style>
    </footer>
  );
}
