import React, { useState, useEffect } from 'react';
import weddingHeroImg from '../assets/wedding_hero.png';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero({ setView }) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "حيث يلتقي الفن بالفخامة";

  useEffect(() => {
    let timeoutId;
    let isDeleting = false;
    let index = 0;

    // Start typewriter after 800ms initial delay
    timeoutId = setTimeout(() => {
      const type = () => {
        if (!isDeleting) {
          if (index <= fullText.length) {
            setDisplayedText(fullText.substring(0, index));
            index++;
            timeoutId = setTimeout(type, 120); // typing speed
          } else {
            isDeleting = true;
            timeoutId = setTimeout(type, 3000); // hold for 3 seconds when complete
          }
        } else {
          if (index >= 0) {
            setDisplayedText(fullText.substring(0, index));
            index--;
            timeoutId = setTimeout(type, 50); // deleting speed
          } else {
            isDeleting = false;
            timeoutId = setTimeout(type, 800); // hold empty for 800ms
          }
        }
      };
      type();
    }, 800);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `linear-gradient(rgba(5, 5, 5, 0.65), rgba(5, 5, 5, 0.9)), url(${weddingHeroImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      overflow: 'hidden',
      paddingTop: '90px'
    }} className="animate-fade">
      
      {/* Glistening Gold Dust Particles (Dynamic CSS) */}
      <div className="particles-container" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2
      }}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="gold-particle"
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              backgroundColor: 'var(--gold-primary)',
              borderRadius: '50%',
              opacity: Math.random() * 0.7 + 0.3,
              boxShadow: '0 0 10px var(--gold-primary)',
              animation: `floatUp ${Math.random() * 12 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 5,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>


        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(1.4rem, 6.2vw, 4.2rem)',
          fontFamily: 'var(--font-headings)',
          fontWeight: '800',
          lineHeight: '1.3',
          marginBottom: '20px',
          maxWidth: '900px'
        }} className="hero-title">
          جاسم الرندي للإنتاج الفني
          <br />
          <span className="gold-text hero-subtitle" style={{ minHeight: '1.4em', display: 'inline-block' }}>
            {displayedText}
            <span className="typewriter-cursor">|</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.35rem)',
          color: 'var(--text-secondary)',
          maxWidth: '750px',
          marginBottom: '40px',
          fontFamily: 'var(--font-body)',
          fontWeight: '300',
          lineHeight: '1.8'
        }}>
          نحن نصنع ذكريات لا تُنسى. نقدم أرقى خدمات هندسة الصوت والإضاءة المسرحية المبتكرة وتعهد كبار الفنانين، لتصميم وتنفيذ أعراس كويتية ومناسبات خليجية تفيض بالجمال والملكية.
        </p>

        {/* Bullet Points Grid */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '15px 30px',
          marginBottom: '50px',
          color: 'var(--text-secondary)',
          fontSize: '1rem',
          fontWeight: '500'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold-primary)' }}>♦</span> هندسة صوتية فائقة الدقة
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold-primary)' }}>♦</span> عروض إضاءة ليزر رقمية
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold-primary)' }}>♦</span> إدارة وتنظيم وتعهد فنانين
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--gold-primary)' }}>♦</span> أرقى منسقي الدي جي (DJ)
          </span>
        </div>

        {/* Action Buttons */}
        <div 
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center'
          }}
          className="hero-buttons"
        >
          <button 
            onClick={() => setView('services')} 
            className="btn-gold btn-ripple pulse-gold-btn"
            style={{ padding: '15px 35px', fontSize: '1.05rem' }}
          >
            <span>اكتشف خدماتنا</span>
            <ArrowLeft size={18} style={{ transform: 'rotate(0deg)' }} />
          </button>
          
          <button 
            onClick={() => setView('contact')} 
            className="btn-outline btn-ripple"
            style={{ padding: '14px 34px', fontSize: '1.05rem' }}
          >
            <MessageCircle size={18} />
            <span>تواصل معنا</span>
          </button>
        </div>
      </div>

      {/* Decorative Bottom Wave/Fog Overlay */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '150px',
        background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        zIndex: 3,
        pointerEvents: 'none'
      }} />

      {/* Embedded CSS for Particle Animation & Typewriter Cursor */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-110vh) scale(0.6) rotate(360deg);
            opacity: 0;
          }
        .typewriter-cursor {
          display: inline-block;
          margin-right: 6px;
          color: var(--gold-primary);
          animation: blinkCursor 0.8s step-end infinite;
          font-weight: 300;
        }
        @keyframes blinkCursor {
          from, to { color: transparent }
          50% { color: var(--gold-primary); }
        }
        .hero-title {
          white-space: nowrap;
        }
        .hero-subtitle {
          white-space: nowrap;
        }
        @media (max-width: 576px) {
          .hero-title {
            font-size: clamp(1.2rem, 6.8vw, 2.5rem) !important;
          }
          .hero-subtitle {
            font-size: clamp(0.95rem, 5.2vw, 1.8rem) !important;
          }
          .hero-buttons {
            flex-direction: column !important;
            width: 100% !important;
            max-width: 320px !important;
            gap: 12px !important;
          }
          .hero-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </section>
  );
}
