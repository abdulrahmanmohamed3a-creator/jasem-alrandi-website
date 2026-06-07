import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "منيرة الصباح",
      role: "عروس - قاعة الراية",
      stars: 5,
      feedback: "ألف شكر لشركة جاسم الرندي على التنظيم الأكثر من رائع! هندسة الإضاءة كانت خيالية وخلت القاعة تظهر كأنها لوحة فنية، والصوت كان واضح جداً في كل زاوية. كل الضيوف أبدوا إعجابهم بالدي جي والأغاني."
    },
    {
      id: 2,
      name: "أحمد المطيري",
      role: "معرس - صالة اليوسفي",
      stars: 5,
      feedback: "الاحترافية والدقة في المواعيد هي ما يميزهم. حجزنا الفنان والفرقة الشعبية عن طريقهم وكل شي تم بسلاسة وبأعلى جودة. الصوت والمايكات اللاسلكية كانت ممتازة وما صار أي خطأ فني طوال السهرة."
    },
    {
      id: 3,
      name: "فاطمة الكندري",
      role: "والدة العروس - فندق ريجنسي",
      stars: 5,
      feedback: "خدمة تنظيم الحفل كانت مريحة جداً لنا، تفرغنا لاستقبال الضيوف وهم تكفلوا بكل التفاصيل الهندسية والفنية. الإضاءة وتنسيق دخول العروس كان مبهر وحبس الأنفاس. جاسم الرندي اسم يضمن النجاح."
    }
  ];

  // Auto-play effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section 
      id="testimonials-section" 
      className="section-padding"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative quotes background watermark */}
      <Quote 
        size={250} 
        style={{
          position: 'absolute',
          bottom: '-50px',
          left: '-50px',
          color: 'rgba(214, 175, 55, 0.02)',
          transform: 'rotate(180deg)',
          pointerEvents: 'none'
        }} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 5 }}>
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: '700', 
            letterSpacing: '1.5px',
            fontSize: '0.9rem',
            marginBottom: '10px',
            display: 'block'
          }}>آراء العملاء</span>
          
          <h2 className="section-title">قالوا عن جاسم الرندي</h2>
        </div>

        {/* Carousel Container */}
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          minHeight: '280px'
        }}>
          {testimonials.map((t, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={t.id}
                style={{
                  position: isActive ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(15px)',
                  visibility: isActive ? 'visible' : 'hidden',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, visibility 0.6s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '16px',
                  padding: '40px 30px',
                  boxShadow: 'var(--shadow-gold)'
                }}
              >
                {/* Quote Icon */}
                <div style={{
                  background: 'rgba(214, 175, 55, 0.1)',
                  padding: '12px',
                  borderRadius: '50%',
                  marginBottom: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(214, 175, 55, 0.2)'
                }}>
                  <Quote size={24} color="var(--gold-primary)" />
                </div>


                {/* Feedback Text */}
                <p style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-primary)',
                  lineHeight: '1.85',
                  marginBottom: '25px',
                  fontWeight: '300',
                  fontStyle: 'italic'
                }}>
                  " {t.feedback} "
                </p>

                {/* Client Info */}
                <h4 style={{ fontSize: '1.15rem', fontWeight: '700', color: 'var(--gold-primary)' }}>
                  {t.name}
                </h4>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                  {t.role}
                </span>

              </div>
            );
          })}
        </div>

        {/* Carousel Indicators (Dots) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '30px'
        }}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: activeIndex === index ? '24px' : '8px',
                height: '8px',
                borderRadius: '4px',
                backgroundColor: activeIndex === index ? 'var(--gold-primary)' : 'var(--text-muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
              aria-label={`الذهاب إلى التقييم ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
