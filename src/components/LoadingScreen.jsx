import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';

/**
 * Luxury Loading Screen component for Jasem Al-Randi Website.
 * Animates a gold progress bar and pulsing logo, then fades out.
 */
export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 600); // Allow fadeout transition to finish
          }, 300);
          return 100;
        }
        // Simulates loading progress with randomized luxury speed increments
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#050505',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: fadeOut ? 'none' : 'all'
      }}
    >
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        {/* Animated Golden Logo Container */}
        <div 
          style={{
            position: 'relative',
            width: '120px',
            height: '120px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '10px'
          }}
        >
          {/* Pulsing Outer Golden Ring */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              border: '2px solid transparent',
              borderTopColor: 'var(--gold-primary)',
              borderBottomColor: 'var(--gold-secondary)',
              animation: 'spinLoading 2s linear infinite'
            }}
          />
          <img
            src={logo}
            alt="شعار جاسم الرندي"
            style={{
              width: '85px',
              height: '85px',
              objectFit: 'contain',
              borderRadius: '12px',
              animation: 'pulseLogo 2s infinite ease-in-out'
            }}
          />
        </div>

        {/* Brand Name */}
        <h2 
          style={{
            fontFamily: 'var(--font-headings)',
            color: '#fff',
            fontSize: '1.8rem',
            margin: '0 0 5px 0',
            fontWeight: '600'
          }}
        >
          جاسم الرندي للإنتاج الفني
        </h2>
        
        {/* Luxury Tagline */}
        <p
          style={{
            color: 'var(--gold-primary)',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            letterSpacing: '2px',
            margin: '0 0 20px 0',
            opacity: 0.8
          }}
        >
          حيث يلتقي الفن بالفخامة
        </p>

        {/* Progress Bar Container */}
        <div
          style={{
            width: '200px',
            height: '4px',
            backgroundColor: 'rgba(214, 175, 55, 0.1)',
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          {/* Gold Loading Fill */}
          <div
            style={{
              width: `${progress}%`,
              height: '100%',
              background: 'var(--gold-gradient)',
              borderRadius: '10px',
              transition: 'width 0.1s ease-out'
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes spinLoading {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulseLogo {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.06); opacity: 1; filter: drop-shadow(0 0 15px rgba(212, 175, 55, 0.4)); }
        }
      `}</style>
    </div>
  );
}
