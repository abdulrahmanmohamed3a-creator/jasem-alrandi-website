import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Youtube = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.017 14.068.993 11.438.993c-5.448 0-9.882 4.379-9.886 9.809-.001 1.716.463 3.39 1.341 4.887L1.879 21.05l5.097-1.328zM17.15 14.86c-.284-.143-1.685-.83-1.947-.925-.262-.095-.453-.143-.642.143-.19.285-.733.925-.899 1.114-.165.19-.33.213-.614.07-1.378-.69-2.42-1.2-3.255-2.636-.219-.379.219-.352.628-1.168.069-.142.035-.268-.018-.376-.053-.107-.453-1.092-.62-1.5-.162-.394-.326-.34-.453-.346-.117-.006-.252-.007-.389-.007-.137 0-.361.051-.55.258-.19.206-.723.707-.723 1.724 0 1.017.74 2.001.843 2.14 1.023 1.353 2.235 2.164 3.731 2.72.356.132.709.211 1.077.327.362.115.692.099.952.06.29-.043.953-.389 1.087-.766.133-.376.133-.7.094-.766-.04-.067-.144-.107-.428-.25z"/>
  </svg>
);

export default function Contact() {
  return (
    <section 
      id="contact-section" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-primary)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }} className="reveal reveal-scale">
          <span style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: '700', 
            letterSpacing: '1.5px',
            fontSize: '0.9rem',
            marginBottom: '10px',
            display: 'block'
          }}>تواصل معنا</span>
          
          <h2 className="section-title">ابدأ التخطيط لحفلك الآن</h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.05rem',
            fontWeight: '300'
          }}>
            نحن جاهزون للإجابة على استفساراتكم وتصميم تجربة صوتية ومرئية تفوق خيالكم.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }} className="contact-grid">
          
          {/* Card 1: Direct Contact Info (Now includes Social links instead of email) */}
          <div className="gold-card-premium reveal reveal-scale delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '22px', padding: '30px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700' }} className="gold-text">
              معلومات الاتصال المباشر
            </h3>
            
            {/* Phone */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                background: 'rgba(214, 175, 55, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex'
              }}>
                <Phone size={22} color="var(--gold-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>رقم الهاتف المباشر</h4>
                <a 
                  href="tel:+96599311167" 
                  style={{ fontSize: '1.15rem', fontWeight: '700', color: '#fff', direction: 'ltr', display: 'inline-block' }}
                >
                  +965 9931 1167
                </a>
              </div>
            </div>

            {/* WhatsApp direct link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                background: 'rgba(214, 175, 55, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex'
              }}>
                <WhatsAppIcon size={22} color="var(--gold-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>دردشة واتساب</h4>
                <a 
                  href="https://wa.me/96599311167" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontSize: '1.1rem', fontWeight: '500', color: '#fff' }}
                >
                  دردشة واتساب فورية
                </a>
              </div>
            </div>

            {/* Instagram Link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                background: 'rgba(214, 175, 55, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex'
              }}>
                <Instagram size={22} color="var(--gold-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>انستقرام</h4>
                <a 
                  href="https://www.instagram.com/alrandi/" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontSize: '1.1rem', fontWeight: '500', color: '#fff' }}
                >
                  @alrandi
                </a>
              </div>
            </div>

            {/* Youtube Link */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                background: 'rgba(214, 175, 55, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex'
              }}>
                <Youtube size={22} color="var(--gold-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>يوتيوب</h4>
                <a 
                  href="https://www.youtube.com/channel/UCLCL_hOLfuwsi4ayrr_p5Tg" 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ fontSize: '1.1rem', fontWeight: '500', color: '#fff' }}
                >
                  قناة جاسم الرندي
                </a>
              </div>
            </div>

            {/* Location Address */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <div style={{
                background: 'rgba(214, 175, 55, 0.1)',
                padding: '12px',
                borderRadius: '50%',
                display: 'flex'
              }}>
                <MapPin size={22} color="var(--gold-primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>الموقع الرئيسي</h4>
                <span style={{ fontSize: '1.1rem', color: '#fff' }}>
                  دولة الكويت، العاصمة
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Map Card */}
          <div 
            className="gold-card-premium reveal reveal-scale delay-200" 
            style={{ 
              padding: '30px', 
              textAlign: 'center',
              backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              minHeight: '280px'
            }}
          >
            <MapPin size={40} color="var(--gold-primary)" className="floating-element" />
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700' }} className="gold-text">موقع مقر الشركة</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>
              تفضل بزيارتنا لمناقشة تفاصيل الحفل والاطلاع على أحدث أنظمة الصوت والإضاءة على أرض الواقع.
            </p>
            <a 
              href="https://maps.google.com/?cid=7285108728990429206&hl=en&gl=gb" 
              target="_blank" 
              rel="noreferrer"
              className="btn-gold btn-ripple"
              style={{ fontSize: '0.9rem', padding: '12px 24px', gap: '6px', marginTop: '10px' }}
            >
              <span>افتح الموقع في خرائط Google</span>
            </a>
          </div>

          {/* Card 3: Working Hours & Consultations (Updated to prevent social media redundancy) */}
          <div 
            className="gold-card-premium reveal reveal-scale delay-300" 
            style={{ 
              padding: '30px', 
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '15px',
              minHeight: '280px'
            }}
          >
            <MessageSquare size={40} color="var(--gold-primary)" className="floating-element" />
            <h3 style={{ fontSize: '1.35rem', fontWeight: '700' }} className="gold-text">ساعات العمل والزيارة</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '320px', margin: '0 auto' }}>
              نرحب بزيارتكم لمقرنا لمناقشة تفاصيل حفلاتكم وتنسيق هندسة الصوت والإضاءة.
            </p>
            <div style={{
              background: 'rgba(214, 175, 55, 0.05)',
              border: '1px solid rgba(214, 175, 55, 0.1)',
              borderRadius: '8px',
              padding: '12px 20px',
              width: '100%',
              marginTop: '5px'
            }}>
              <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: '700', color: 'var(--gold-primary)', marginBottom: '4px' }}>السبت - الخميس</span>
              <span style={{ display: 'block', fontSize: '0.9rem', color: '#fff' }}>من ٤:٠٠ صباحاً إلى ١٠:٠٠ مساءً</span>
            </div>
            <a 
              href="https://wa.me/96599311167" 
              target="_blank" 
              rel="noreferrer"
              className="btn-gold btn-ripple pulse-gold-btn"
              style={{ fontSize: '0.9rem', padding: '12px 24px', gap: '8px', marginTop: '10px' }}
            >
              <span>تواصل عبر واتساب</span>
            </a>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 767px) {
          .contact-grid {
            padding: 0 10px !important;
          }
        }
        .social-hover:hover {
          color: var(--gold-light) !important;
          text-shadow: 0 0 8px rgba(214, 175, 55, 0.3);
        }
      `}</style>
    </section>
  );
}
