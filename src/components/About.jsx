import React from 'react';
import logo from '../assets/logo.png';
import { Award, Compass, Heart, Shield, CheckCircle } from 'lucide-react';

export default function About({ isSnippet, setView }) {
  const values = [
    { icon: <Shield size={24} color="var(--gold-primary)" />, title: "الاحترافية والأمان", desc: "نلتزم بأعلى معايير الدقة والجاهزية التقنية لضمان نجاح الحفل دون أي أخطاء." },
    { icon: <Compass size={24} color="var(--gold-primary)" />, title: "الابتكار والتجدد", desc: "نواكب أحدث صيحات الإضاءة وتوزيع الصوت عالمياً لتقديم تجارب بصرية فريدة." },
    { icon: <Award size={24} color="var(--gold-primary)" />, title: "الجودة الملكية", desc: "نستخدم معدات عالمية لضمان نقاء الصوت وتأثيرات الإضاءة التي تليق بنخبة العملاء." },
    { icon: <Heart size={24} color="var(--gold-primary)" />, title: "الشغف الفني", desc: "كل عرس ننظمه هو لوحة فنية نسكب فيها شغفنا وخبرتنا الطويلة لنبهر الجميع." }
  ];

  return (
    <section 
      id="about-section" 
      className="section-padding" 
      style={{
        backgroundColor: isSnippet ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        borderTop: isSnippet ? '1px solid var(--border-color)' : 'none',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Gold Rings Pattern (Simple CSS Art) */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        border: '1px solid rgba(214, 175, 55, 0.05)',
        borderRadius: '50%',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '50px',
          alignItems: 'center'
        }} className="about-grid">
          
          {/* Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} className="reveal reveal-right">
            <span style={{ 
              color: 'var(--gold-primary)', 
              fontWeight: '700', 
              letterSpacing: '1.5px',
              fontSize: '0.9rem',
              marginBottom: '10px',
              display: 'block'
            }}>من نحن</span>
            
            <h2 className="section-title" style={{ textAlign: 'right', marginRight: '0' }}>
              شركة جاسم الرندي للإنتاج الفني
            </h2>
            
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.9',
              marginBottom: '20px',
              fontWeight: '300'
            }}>
              تأسست شركة <strong className="gold-text" style={{ fontWeight: '700' }}>جاسم الرندي للإنتاج الفني</strong> في دولة الكويت لتكون الاسم الموثوق والأول في عالم تنظيم وإحياء الأعراس والمناسبات الكبرى وتجهيزات المسارح.
              على مدار سنوات طويلة من العمل الدؤوب، استطعنا الجمع بين فخامة التراث الكويتي الأصيل وأحدث التقنيات الرقمية وهندسة الصوت المعاصرة.
            </p>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.9',
              marginBottom: '30px',
              fontWeight: '300'
            }}>
              نتميز بتقديم تجهيزات متكاملة تتضمن هندسة الصوت بأحدث الأجهزة اللاسلكية، وهندسة الإضاءة الرقمية المتزامنة مع الموسيقى، بالإضافة إلى إبرام تعاقدات وتعهد كبار الفنانين والفرق الشعبية ومنسقي الدي جي المحترفين لنوفر لعملائنا تجربة احتفالية ملكية فريدة من نوعها.
            </p>

            {isSnippet ? (
              <div>
                <button 
                  onClick={() => setView('about')} 
                  className="btn-gold btn-ripple"
                >
                  اقرأ قصتنا الكاملة
                </button>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px', marginTop: '10px' }} className="stats-grid">
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle color="var(--gold-primary)" size={20} />
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>أكثر من ١٥ عاماً من الخبرة في تنظيم الأعراس الفاخرة</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle color="var(--gold-primary)" size={20} />
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>فريق هندسي متخصص في هندسة الصوت والإضاءة المسرحية</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle color="var(--gold-primary)" size={20} />
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>تعاقدات حصرية وتعهد كبار الفنانين في الخليج والوطن العربي</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <CheckCircle color="var(--gold-primary)" size={20} />
                  <span style={{ fontSize: '1.05rem', fontWeight: '500' }}>تجهيزات صوتية وإضاءة ومسارح ومدرجات بأعلى مقاييس الجودة والسلامة</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Logo / Banner Visual side */}
          {!isSnippet && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative'
            }} className="reveal reveal-left">
              <div style={{
                width: '100%',
                maxWidth: '500px',
                borderRadius: '16px',
                padding: '20px',
                background: 'rgba(20, 20, 20, 0.7)',
                border: '1px solid var(--border-color)',
                boxShadow: 'var(--shadow-gold)',
                textAlign: 'center'
              }}>
                <img 
                  src={logo} 
                  alt="جاسم الرندي" 
                  style={{
                    width: '280px',
                    height: '280px',
                    objectFit: 'contain',
                    marginBottom: '20px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block'
                  }}
                />
                <h3 className="gold-text" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>شعار الجودة والتميز</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  الاسم الذي يضمن نجاح وتألق مناسباتكم وحفلاتكم منذ سنوات في الكويت والخليج العربي.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Full View Vision/Mission and Core Values */}
        {!isSnippet && (
          <div style={{ marginTop: '80px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '30px',
              marginBottom: '70px'
            }} className="vision-mission-grid">
              
              <div className="gold-card-premium reveal reveal-scale delay-100" style={{ padding: '40px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>رؤيتنا</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  أن نكون الخيار الأول والوجهة المثالية لكل من يبحث عن الفخامة والأناقة في تنظيم الأعراس والفعاليات الكبرى في الكويت ومنطقة الخليج، من خلال التطوير المستمر لأدواتنا وتقنياتنا والتعاون مع كبار النجوم، لنظل رواداً في صناعة البهجة والفن الراقي.
                </p>
              </div>

              <div className="gold-card-premium reveal reveal-scale delay-200" style={{ padding: '40px' }}>
                <h3 className="gold-text" style={{ fontSize: '1.6rem', marginBottom: '15px' }}>رسالتنا</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
                  تقديم خدمات إنتاج فني متكاملة ومحترفة تتخطى توقعات عملائنا، عبر دمج الخبرة الطويلة بالحلول التقنية المبتكرة في مجالات هندسة الصوت والإضاءة، وتوفير خيارات حجز مرنة لكبار الفنانين، مع الحفاظ على روح الهوية والتراث الكويتي الأصيل.
                </p>
              </div>

            </div>

            {/* Core Values */}
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h3 className="section-title" style={{ fontSize: '2rem' }}>قيمنا الأساسية</h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px'
            }} className="values-grid">
              {values.map((v, index) => (
                <div key={index} className={`gold-card-premium reveal reveal-scale delay-${(index + 1) * 100}`} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '15px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{
                    background: 'rgba(214, 175, 55, 0.1)',
                    padding: '12px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {v.icon}
                  </div>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{v.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Responsive Styles Grid Helper */}
      <style>{`
        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .vision-mission-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 992px) {
          .about-grid {
            grid-template-columns: ${isSnippet ? '1fr' : '1.2fr 0.8fr'} !important;
          }
          .values-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
