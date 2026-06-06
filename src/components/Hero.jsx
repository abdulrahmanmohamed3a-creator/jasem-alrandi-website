import React from 'react';
import weddingHeroImg from '../assets/wedding_hero.png';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';

export default function Hero({ setView }) {
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
        {/* Sparkle Badge */}
        <div 
          className="floating-element"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(214, 175, 55, 0.1)',
            border: '1px solid rgba(214, 175, 55, 0.3)',
            borderRadius: '50px',
            padding: '6px 18px',
            marginBottom: '24px'
          }}
        >
          <Sparkles size={16} color="var(--gold-primary)" />
          <span className="gold-text" style={{ 
            fontSize: '0.9rem', 
            fontWeight: '600', 
            letterSpacing: '1px',
            fontFamily: 'var(--font-body)' 
          }}>
            الرائدون في تنظيم الأعراس الكويتية الفاخرة
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
          fontFamily: 'var(--font-headings)',
          fontWeight: '800',
          lineHeight: '1.2',
          marginBottom: '20px',
          maxWidth: '900px'
        }}>
          جاسم الرندي للإنتاج الفني
          <br />
          <span className="gold-text">حيث يلتقي الفن بالفخامة</span>
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
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}>
          <button 
            onClick={() => setView('services')} 
            className="btn-gold pulse-gold-btn"
            style={{ padding: '15px 35px', fontSize: '1.05rem' }}
          >
            <span>اكتشف خدماتنا</span>
            <ArrowLeft size={18} style={{ transform: 'rotate(0deg)' }} />
          </button>
          
          <button 
            onClick={() => setView('contact')} 
            className="btn-outline"
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

      {/* Embedded CSS for Particle Animation */}
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
        }
      `}</style>
    </section>
  );
}
