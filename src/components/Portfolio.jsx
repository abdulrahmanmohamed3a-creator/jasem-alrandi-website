import React, { useState } from 'react';
import weddingHeroImg from '../assets/wedding_hero.png';
import soundImg from '../assets/sound_engineering.png';
import lightingImg from '../assets/lighting_design.png';
import setupImg from '../assets/wedding_setup.png';
import singerImg from '../assets/artist_singer.png';
import djImg from '../assets/artist_dj.png';
import { Eye, X, ArrowLeft, Image as ImageIcon } from 'lucide-react';

export default function Portfolio({ isMini, setView }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "عرس ملكي فاخر - قاعة الراية",
      category: "weddings",
      categoryLabel: "أعراس فاخرة",
      image: weddingHeroImg,
      desc: "تنفيذ هندسة إضاءة وصوت متكاملة مع ديكور مسرح كوشة استثنائي."
    },
    {
      id: 2,
      title: "تجهيز الحفل الغنائي الكبير - الكويت",
      category: "concerts",
      categoryLabel: "حفلات ومؤتمرات",
      image: singerImg,
      desc: "تأمين هندسة الصوت للمسرح وحجز وتنسيق مشاركة كبار المطربين."
    },
    {
      id: 3,
      title: "ليزر وعروض ضوئية - حفل زفاف خاص",
      category: "sound_light",
      categoryLabel: "إضاءة ومسارح",
      image: lightingImg,
      desc: "عروض ليزر رقمية تفاعلية متزامنة مع زفة العروسين بصورة ساحرة."
    },
    {
      id: 4,
      title: "تصميم كوشة ملكية - فندق الجي دبليو",
      category: "weddings",
      categoryLabel: "أعراس فاخرة",
      image: setupImg,
      desc: "تصميم وتنفيذ كوشة العروس بأرقى الزهور الطبيعية والإضاءة الخافتة."
    },
    {
      id: 5,
      title: "تنسيق دي جي وإيقاعات - مناسبة خاصة",
      category: "sound_light",
      categoryLabel: "دي جي وإيقاعات",
      image: djImg,
      desc: "توزيع أنظمة صوتية لاسلكية مخصصة وتنسيق الريمكسات طوال السهرة."
    },
    {
      id: 6,
      title: "هندسة صوت وميكسر رئيسي - مسرح الكويت",
      category: "sound_light",
      categoryLabel: "هندسة صوتية",
      image: soundImg,
      desc: "مراقبة وإدارة شدة ونقاوة الصوت بواسطة مهندسي الصوت المحترفين."
    },
    {
      id: 7,
      title: "حفل زفاف تراثي - صالة المعجل",
      category: "weddings",
      categoryLabel: "أعراس فاخرة",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
      desc: "دمج العرضة والسامري التراثي الكويتي مع إضاءة عصرية هادئة."
    },
    {
      id: 8,
      title: "مؤتمر كبار الشخصيات - قاعة الهاشمي",
      category: "concerts",
      categoryLabel: "حفلات ومؤتمرات",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
      desc: "تجهيز الشاشات والأنظمة الصوتية وتأمين الميكروفونات اللاسلكية للمتحدثين."
    },
    {
      id: 9,
      title: "عرس خليجي خارجي - قصر المسيلة",
      category: "weddings",
      categoryLabel: "أعراس فاخرة",
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=600",
      desc: "تنفيذ إضاءة حدائق وتوزيع سماعات خارجية مقاومة للعوامل الجوية."
    }
  ];

  const displayedItems = isMini 
    ? portfolioItems.slice(0, 6)
    : activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section 
      id="portfolio-section" 
      className="section-padding"
      style={{
        backgroundColor: isMini ? 'var(--bg-primary)' : 'var(--bg-secondary)',
        borderTop: isMini ? 'none' : '1px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: '700', 
            letterSpacing: '1.5px',
            fontSize: '0.9rem',
            marginBottom: '10px',
            display: 'block'
          }}>أعمالنا الإبداعية</span>
          
          <h2 className="section-title">
            {isMini ? "معرض أعمالنا المصغر" : "معرض مشاريع جاسم الرندي"}
          </h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.05rem',
            fontWeight: '300'
          }}>
            لقطات توثق روعة الإضاءة ودقة الصوت وفخامة تنسيق المناسبات في أفراح الكويت الفاخرة.
          </p>
        </div>

        {/* Tab Filters - Only in Full Page View */}
        {!isMini && (
          <div style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '40px'
          }}>
            {[
              { id: 'all', label: 'الكل' },
              { id: 'weddings', label: 'أعراس فاخرة' },
              { id: 'concerts', label: 'حفلات ومؤتمرات' },
              { id: 'sound_light', label: 'هندسة صوت وإضاءة' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 22px',
                  borderRadius: '30px',
                  border: '1px solid',
                  borderColor: activeTab === tab.id ? 'var(--gold-primary)' : 'transparent',
                  backgroundColor: activeTab === tab.id ? 'rgba(214, 175, 55, 0.1)' : 'var(--bg-tertiary)',
                  color: activeTab === tab.id ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  fontWeight: activeTab === tab.id ? '700' : '500',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
                className="portfolio-tab"
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }} className="portfolio-grid">
          {displayedItems.map(item => (
            <div 
              key={item.id} 
              onClick={() => setSelectedMedia(item)}
              style={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer',
                border: '1px solid var(--border-color)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4)'
              }}
              className="portfolio-card"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s var(--transition-smooth)'
                }}
                className="portfolio-img"
              />
              
              {/* Overlay on Hover */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.1) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '24px',
                  opacity: 1, // visible gradient for text clarity
                  transition: 'var(--transition-smooth)'
                }}
                className="portfolio-overlay"
              >
                <span className="gold-text" style={{
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '6px'
                }}>
                  {item.categoryLabel}
                </span>
                
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: '#fff',
                  lineHeight: '1.4',
                  marginBottom: '8px'
                }}>
                  {item.title}
                </h3>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--gold-primary)',
                  fontSize: '0.85rem',
                  fontWeight: '600'
                }} className="portfolio-view-text">
                  <Eye size={16} />
                  <span>اضغط لتكبير الصورة</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Button (Only on Home Preview) */}
        {isMini && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              onClick={() => setView('portfolio')} 
              className="btn-outline"
            >
              <span>تصفح كامل معرض الأعمال</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        )}

      </div>

      {/* Lightbox / Image Modal Popup */}
      {selectedMedia && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(5, 5, 5, 0.95)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          animation: 'fadeIn 0.3s ease-out forwards'
        }}>
          {/* Close button */}
          <button 
            onClick={() => setSelectedMedia(null)}
            style={{
              position: 'absolute',
              top: '25px',
              right: '25px',
              background: 'rgba(214, 175, 55, 0.1)',
              border: '1px solid var(--border-color)',
              color: 'var(--gold-primary)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10000,
              transition: 'var(--transition-fast)'
            }}
            className="close-modal-btn"
          >
            <X size={24} />
          </button>
          
          {/* Modal Container */}
          <div style={{
            maxWidth: '900px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            position: 'relative'
          }}>
            <img 
              src={selectedMedia.image} 
              alt={selectedMedia.title} 
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '2px solid rgba(214, 175, 55, 0.4)',
                boxShadow: '0 10px 50px rgba(214, 175, 55, 0.25)'
              }}
            />
            
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <span className="gold-text" style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                {selectedMedia.categoryLabel}
              </span>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '6px', fontFamily: 'var(--font-headings)' }}>
                {selectedMedia.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '6px', fontWeight: '300' }}>
                {selectedMedia.desc}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 576px) {
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 992px) {
          .portfolio-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        .portfolio-card:hover .portfolio-img {
          transform: scale(1.08);
        }
        .portfolio-card:hover .portfolio-view-text {
          color: var(--gold-light) !important;
          text-shadow: 0 0 5px rgba(214, 175, 55, 0.5);
        }
        .close-modal-btn:hover {
          background: var(--gold-primary) !important;
          color: var(--bg-primary) !important;
          transform: rotate(90deg);
        }
        .portfolio-tab:hover {
          color: var(--gold-primary) !important;
        }
      `}</style>
    </section>
  );
}
