import React, { useState } from 'react';
import soundImg from '../assets/sound_engineering.png';
import lightingImg from '../assets/lighting_design.png';
import weddingImg from '../assets/wedding_setup.png';
import heroImg from '../assets/wedding_hero.png';
import { Volume2, Lightbulb, Users, Calendar, ArrowLeft, MessageSquare } from 'lucide-react';

// Sub-component for individual detailed Service Row to support lazy loading + shimmer skeleton + layout ordering
const ServiceRow = ({ s, index, isEven, whatsappNumber }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '40px',
        alignItems: 'center',
        borderBottom: index !== 3 ? '1px solid rgba(214, 175, 55, 0.1)' : 'none',
        paddingBottom: index !== 3 ? '60px' : '0'
      }} 
      className={`service-row ${isEven ? 'even-row' : 'odd-row'} reveal ${isEven ? 'reveal-right' : 'reveal-left'}`}
    >
      {/* Visual Image Showcase */}
      <div 
        style={{
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-gold)',
          border: '1px solid var(--border-color)',
          height: '350px'
        }} 
        className="service-img-container"
      >
        {/* Shimmer loader while large PNG image loads */}
        {!imgLoaded && (
          <div 
            className="skeleton-loader"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1
            }}
          />
        )}
        
        <img 
          src={s.image} 
          alt={s.title} 
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s var(--transition-smooth)',
            opacity: imgLoaded ? 1 : 0
          }}
          className="service-img"
        />
        {/* Golden decorative corner border */}
        <div style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          width: '30px',
          height: '30px',
          borderTop: '2px solid var(--gold-primary)',
          borderRight: '2px solid var(--gold-primary)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '15px',
          left: '15px',
          width: '30px',
          height: '30px',
          borderBottom: '2px solid var(--gold-primary)',
          borderLeft: '2px solid var(--gold-primary)',
        }} />
      </div>

      {/* Text details */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px'
        }} 
        className="service-info-container"
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{
            background: 'rgba(214, 175, 55, 0.1)',
            padding: '12px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {s.icon}
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800' }} className="gold-text">{s.title}</h3>
        </div>
        
        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          lineHeight: '1.9',
          fontWeight: '300'
        }}>
          {s.longDesc}
        </p>
        
        <div>
          <a 
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(s.waMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold btn-ripple"
            style={{ 
              background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)', 
              border: 'none', 
              color: '#fff', 
              boxShadow: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none'
            }}
          >
            <MessageSquare size={18} />
            <span>طلب استفسار وحجز عبر واتساب</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Services({ isOverview, setView }) {
  const whatsappNumber = "96599311167";

  const servicesData = [
    {
      id: 'sound',
      icon: <Volume2 size={36} color="var(--gold-primary)" />,
      title: "هندسة الصوت والدي جي",
      shortDesc: "أنظمة صوتية متكاملة فائقة النقاوة، وتوزيع مخصص لأجهزة الصوت ليغطي القاعة بالكامل مع باقة من أشهر منسقي الدي جي (DJ).",
      longDesc: "نمتلك أحدث الأجهزة الصوتية واللاسلكية من كبرى الماركات العالمية لضمان نقاوة وقوة الصوت دون أي تشويش. نقوم بتصميم توزيع صوتي ثلاثي الأبعاد للقاعة يتناسب مع مساحتها وعدد الحضور، مع فريق كامل من المهندسين لمراقبة جودة الصوت طوال الحفل، بالإضافة إلى توفير تشكيلة متميزة من منسقي الدي جي (DJ) المتخصصين في إشعال حماس الحفلات الخليجية والأعراس الكويتية الفاخرة.",
      image: soundImg,
      waMessage: "مرحباً، أود الاستفسار عن خدمات هندسة الصوت والدي جي لمناسبة خاصة."
    },
    {
      id: 'lighting',
      icon: <Lightbulb size={36} color="var(--gold-primary)" />,
      title: "هندسة الإضاءة الرقمية والمسارح",
      shortDesc: "تصميم وتنفيذ عروض إضاءة ساحرة (ليزر، كشافات، مؤثرات بصرية) متزامنة بدقة مع الموسيقى وأجواء الحفل.",
      longDesc: "نحول الأعراس والمسارح إلى لوحات فنية مبهرة باستخدام إضاءات الليزر الرقمية الملونة، وكشافات تتبع العروسين، والإضاءة المحيطية الفخمة. يتم برمجة عروض الضوء والكمبيوتر مسبقاً لتتناغم مع الموسيقى والزفات، مما يضفي أجواء رومانسية ودرامية فريدة. كما نصمم ونشيد مسارح مخصصة (كوشات) وممرات مضيئة بأرقى الأشكال الهندسية.",
      image: lightingImg,
      waMessage: "مرحباً، أود الاستفسار عن خدمات تصميم وتجهيز هندسة الإضاءة والمسارح لحفل زفاف."
    },
    {
      id: 'artists',
      icon: <Users size={36} color="var(--gold-primary)" />,
      title: "تعهد وحجز الفنانين والفرق",
      shortDesc: "إدارة الحجوزات الرسمية والتعاقد مع كبار المطربين والمطربات في الخليج، والفرق الشعبية، لإحياء ليلة العمر.",
      longDesc: "نحن نسهل عليك عناء التواصل وحجز الفنانين؛ حيث نمتلك شبكة علاقات وتعهدات مباشرة مع أشهر مطربي ومطربات الكويت والخليج والوطن العربي. نضمن لك حجوزات رسمية موثقة وتنسيقاً كاملاً مع الفنان وإدارة أعماله بشأن المواعيد ومتطلبات الحفل الفنية، بالإضافة إلى تأمين أرقى الفرق الشعبية لإحياء الزفات الكويتية التراثية والسامري الأصيل.",
      image: heroImg, // reuse hero image as backdrop for artist interaction
      waMessage: "مرحباً، أود الاستفسار عن آلية التعاقد وحجز الفنانين والفرق الشعبية لمناسبة قادمة."
    },
    {
      id: 'planning',
      icon: <Calendar size={36} color="var(--gold-primary)" />,
      title: "تنظيم وإدارة المناسبات المتكاملة",
      shortDesc: "إشراف شامل وتنسيق كامل لكافة تفاصيل الحفل منذ التخطيط وحتى انتهاء ليلة العمر بأعلى درجات الفخامة.",
      longDesc: "خدمة شاملة تتيح لك الاستمتاع بليلتك دون أي قلق. نتولى إدارة وتنسيق الحفل بالكامل: من اختيار وتجهيز الطاولات والكوشة، ترتيب وتوجيه الضيوف، تنسيق مواعيد الزفة ودخول الفنان، وضمان الانسجام التام بين الصوت والضوء والتقديم. فريقنا ذو الخبرة العالية يتابع التفاصيل الصغيرة والكبيرة ليظهر الحفل بصورة ملكية تليق بك.",
      image: weddingImg,
      waMessage: "مرحباً، أود الاستفسار عن خدمة تنظيم وتنسيق المناسبات والأعراس بالكامل."
    }
  ];

  const handleWhatsApp = (message) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section 
      id="services-section" 
      className="section-padding" 
      style={{
        backgroundColor: isOverview ? 'var(--bg-primary)' : 'var(--bg-secondary)',
        borderTop: isOverview ? 'none' : '1px solid var(--border-color)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: '700', 
            letterSpacing: '1.5px',
            fontSize: '0.9rem',
            marginBottom: '10px',
            display: 'block'
          }}>خدماتنا المميزة</span>
          
          <h2 className="section-title">
            {isOverview ? "ما نقدمه من فن وإبداع" : "خدمات الإنتاج الفني وتجهيز الحفلات"}
          </h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.05rem',
            fontWeight: '300'
          }}>
            نوفر تجهيزات تقنية وفنية متكاملة بأحدث الأجهزة والخبرات الهندسية لنضمن تفوق وجمال حفلكم.
          </p>
        </div>

        {/* Overview Layout (Home Page Grid) */}
        {isOverview ? (
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '30px',
              marginBottom: '50px'
            }} className="services-grid">
              
              {servicesData.map((s, index) => (
                <div 
                  key={s.id} 
                  className={`gold-card-premium reveal reveal-scale delay-${(index + 1) * 150}`} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    height: '100%',
                    gap: '20px'
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{
                      background: 'rgba(214, 175, 55, 0.1)',
                      padding: '15px',
                      borderRadius: '50%',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--border-color)'
                    }}>
                      {s.icon}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: '700' }}>{s.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7', fontWeight: '300' }}>
                      {s.shortDesc}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setView('services')} 
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--gold-primary)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.95rem',
                      padding: '0'
                    }}
                    className="learn-more-btn"
                  >
                    <span>المزيد من التفاصيل</span>
                    <ArrowLeft size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center' }} className="reveal reveal-scale delay-500">
              <button 
                onClick={() => setView('services')} 
                className="btn-gold btn-ripple"
                style={{ padding: '14px 35px' }}
              >
                اكتشف تفاصيل الخدمات والتقنيات
              </button>
            </div>
          </div>
        ) : (
          /* Full Page Layout (Detailed Alternating Rows) */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            {servicesData.map((s, index) => {
              const isEven = index % 2 === 0;
              return (
                <ServiceRow 
                  key={s.id} 
                  s={s} 
                  index={index} 
                  isEven={isEven} 
                  whatsappNumber={whatsappNumber} 
                />
              );
            })}
          </div>
        )}

      </div>

      {/* Responsive Styles Grid Helper */}
      <style>{`
        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 992px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .service-row {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 60px !important;
          }
          .even-row .service-img-container {
            order: 2 !important;
          }
          .even-row .service-info-container {
            order: 1 !important;
          }
          .odd-row .service-img-container {
            order: 1 !important;
          }
          .odd-row .service-info-container {
            order: 2 !important;
          }
        }
        .service-img-container:hover .service-img {
          transform: scale(1.08);
        }
        .learn-more-btn:hover {
          color: var(--gold-light) !important;
          transform: translateX(-4px);
        }
      `}</style>
    </section>
  );
}
