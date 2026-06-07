import React, { useState } from 'react';
import artistFahad from '../assets/artist_fahad.jpg';
import artistAhmad from '../assets/artist_ahmad.jpg';
import artistMiami from '../assets/artist_miami.jpg';
import artistBader from '../assets/artist_bader.jpg';
import artistAhmadSuhail from '../assets/artist_ahmad_suhail.jpg';
import artistMirna from '../assets/artist_mirna.jpg';
import artistTalal from '../assets/artist_talal.jpg';
import artistFahadMatar from '../assets/artist_fahad_matar.jpg';
import artistMarwa from '../assets/artist_marwa_ben_sghaier.jpg';
import artistTariqSulaiman from '../assets/artist_tariq_sulaiman.jpg';
import artistTariqAlkhuraif from '../assets/artist_tariq_alkhuraif.jpg';
import artistKhaledFouad from '../assets/artist_khaled_fouad.jpg';
import artistFatouma from '../assets/artist_fatouma.jpg';
import artistSultan from '../assets/artist_sultan_2.jpg';
import artistNoura from '../assets/artist_noura.jpg';
import artistBasem from '../assets/artist_basem.jpg';
import artistAdel from '../assets/artist_adel.jpg';
import artistAbdullah from '../assets/artist_abdullah.jpg';
import { Search, Music, ArrowLeft } from 'lucide-react';

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.5-5.739-1.453L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.017 14.068.993 11.438.993c-5.448 0-9.882 4.379-9.886 9.809-.001 1.716.463 3.39 1.341 4.887L1.879 21.05l5.097-1.328zM17.15 14.86c-.284-.143-1.685-.83-1.947-.925-.262-.095-.453-.143-.642.143-.19.285-.733.925-.899 1.114-.165.19-.33.213-.614.07-1.378-.69-2.42-1.2-3.255-2.636-.219-.379.219-.352.628-1.168.069-.142.035-.268-.018-.376-.053-.107-.453-1.092-.62-1.5-.162-.394-.326-.34-.453-.346-.117-.006-.252-.007-.389-.007-.137 0-.361.051-.55.258-.19.206-.723.707-.723 1.724 0 1.017.74 2.001.843 2.14 1.023 1.353 2.235 2.164 3.731 2.72.356.132.709.211 1.077.327.362.115.692.099.952.06.29-.043.953-.389 1.087-.766.133-.376.133-.7.094-.766-.04-.067-.144-.107-.428-.25z"/>
  </svg>
);

// Individual Artist Card with Skeleton Loader & Lazy Loading
const ArtistCard = ({ artist, whatsappNumber, index }) => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <a 
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`مرحباً، أود الاستفسار عن حجز وتوافر "${artist.name}" لإحياء مناسبة خاصة لدينا.`)}`}
      target="_blank"
      rel="noreferrer"
      className={`artist-card-link reveal reveal-scale delay-${(index % 3 + 1) * 100}`}
      style={{
        position: 'relative',
        display: 'block',
        borderRadius: '16px',
        overflow: 'hidden',
        aspectRatio: '1/1',
        border: '1px solid rgba(214, 175, 55, 0.25)',
        boxShadow: '0 8px 25px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        backgroundColor: 'var(--bg-tertiary)'
      }}
    >
      {/* Shimmer skeleton screen while loading */}
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
        src={artist.image} 
        alt={artist.name} 
        loading="lazy"
        onLoad={() => setImgLoaded(true)}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 0.5s var(--transition-smooth)',
          opacity: imgLoaded ? 1 : 0
        }}
        className="artist-card-img"
      />
      
      {/* Category Badge overlay */}
      <div style={{
        position: 'absolute',
        top: '12px',
        right: '12px',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(214, 175, 55, 0.3)',
        color: 'var(--gold-primary)',
        fontWeight: '600',
        fontSize: '0.75rem',
        padding: '3px 10px',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        zIndex: 2
      }}>
        <Music size={10} />
        <span>{artist.categoryLabel}</span>
      </div>

      {/* Hover Booking Overlay */}
      <div 
        className="artist-hover-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          opacity: 0,
          transition: 'opacity 0.3s ease',
          padding: '20px',
          textAlign: 'center',
          zIndex: 3
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #128C7E 0%, #25D366 100%)',
          borderRadius: '50%',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 15px rgba(37, 211, 102, 0.4)'
        }}>
          <WhatsAppIcon size={26} color="#fff" />
        </div>
        <span style={{ 
          color: '#fff', 
          fontWeight: '700', 
          fontSize: '1rem',
          letterSpacing: '0.5px'
        }}>
          اضغط للحجز والاستعلام
        </span>
        <span style={{
          color: 'var(--gold-primary)',
          fontSize: '0.85rem',
          fontWeight: '500'
        }}>
          {artist.name}
        </span>
      </div>
    </a>
  );
};

export default function Artists({ isFeatured, setView }) {
  const whatsappNumber = "96599311167";
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const artistsData = [
    {
      id: 4,
      name: "الفنان فهد السالم",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "صوت طربي رائع متميز في زفات الأعراس والشيلات الترحيبية وإحياء المناسبات الخاصة.",
      image: artistFahad,
      featured: true
    },
    {
      id: 5,
      name: "الفنان احمد الرويشد",
      category: "singers",
      categoryLabel: "مطرب شعبي وعزف عود",
      desc: "إبداع وتألق في العزف الطربي على العود وأداء الأغاني التراثية التي تضفي أصالة وبهجة للمناسبة.",
      image: artistAhmad,
      featured: true
    },
    {
      id: 6,
      name: "فرقة ميامي الكويتية",
      category: "bands",
      categoryLabel: "فرقة غنائية استعراضية",
      desc: "أشهر فرقة استعراضية وغنائية بالخليج العربي لإضفاء طاقة وحماس وأجواء لا تُنسى في حفلكم.",
      image: artistMiami,
      featured: true
    },
    {
      id: 7,
      name: "الفنان بدر الصالح",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "أداء متميز وحضور مميز وصوت طربي رنان يلبي كافة الأذواق الخليجية والمحلية الراقية.",
      image: artistBader,
      featured: true
    },
    {
      id: 8,
      name: "الفنان احمد السهيل",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "صوت طربي دافئ وحضور استثنائي في إحياء الأعراس والمناسبات الخاصة بلمسة فنية راقية.",
      image: artistAhmadSuhail,
      featured: true
    },
    {
      id: 9,
      name: "الفنانة ميرنا طحان",
      category: "singers",
      categoryLabel: "مطربة حفلات وأعراس",
      desc: "صوت أنثوي قوي وأداء مبهر يضفي سحراً خاصاً على الأعراس النسائية والحفلات الفاخرة.",
      image: artistMirna,
      featured: true
    },
    {
      id: 10,
      name: "الفنان طلال الصيدلاني",
      category: "singers",
      categoryLabel: "مطرب شعبي",
      desc: "أداء شعبي أصيل وصوت مميز في الأغاني الكويتية التراثية والسامري والجلسات الطربية.",
      image: artistTalal,
      featured: true
    },
    {
      id: 11,
      name: "الفنان فهد مطر",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "صوت طربي رنان وأداء احترافي في إحياء الأعراس والمناسبات الكويتية والخليجية الفاخرة.",
      image: artistFahadMatar,
      featured: true
    },
    {
      id: 12,
      name: "الفنانة مروى بن صغير",
      category: "singers",
      categoryLabel: "مطربة حفلات وأعراس",
      desc: "صوت طربي قوي وحضور متميز يضفي أجواء حماسية ورائعة على الأعراس والحفلات.",
      image: artistMarwa,
      featured: true
    },
    {
      id: 13,
      name: "الفنان طارق سليمان",
      category: "singers",
      categoryLabel: "مطرب شعبي وعزف عود",
      desc: "أداء شعبي كويتي أصيل وعزف متميز على العود يثري الجلسات الطربية والأعراس.",
      image: artistTariqSulaiman,
      featured: true
    },
    {
      id: 14,
      name: "الفنان طارق الخريف",
      category: "singers",
      categoryLabel: "مطرب شعبي وعزف عود",
      desc: "صوت طربي مميز في الأغاني الكويتية التراثية وأداء رائع يضفي بهجة على المناسبات.",
      image: artistTariqAlkhuraif,
      featured: true
    },
    {
      id: 15,
      name: "الفنان خالد فؤاد",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "أداء احترافي وطاقة مميزة تضفي حيوية وحماساً على الأعراس والمناسبات الخاصة.",
      image: artistKhaledFouad,
      featured: true
    },
    {
      id: 16,
      name: "الفنانة فطومه",
      category: "singers",
      categoryLabel: "مطربة حفلات وأعراس",
      desc: "صوت أفريقي مميز وأداء طربي رائع يضفي أجواء فريدة وبهجة على الحفلات.",
      image: artistFatouma,
      featured: true
    },
    {
      id: 17,
      name: "الفنان سلطان المفتاح",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "صوت طربي مميز وحضور استثنائي يضفي البهجة والرقي على الأعراس والمناسبات الخاصة.",
      image: artistSultan,
      featured: true
    },
    {
      id: 18,
      name: "الفنان باسم الردهان",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "أداء احترافي وخبرة واسعة في إحياء أعرق الأعراس الخليجية بأجمل الأغاني والطرب الأصيل.",
      image: artistBasem,
      featured: true
    },
    {
      id: 19,
      name: "الفنان عادل العماني",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "صوت طربي قوي يجمع بين الأصالة والحداثة لإحياء مناسباتكم بأجواء لا تُنسى.",
      image: artistAdel,
      featured: true
    },
    {
      id: 20,
      name: "الفنان عبدالله الفيلكاوي",
      category: "singers",
      categoryLabel: "مطرب حفلات وأعراس",
      desc: "أداء شبابي حيوي وحضور متألق يلبي كافة الأذواق في الحفلات والأعراس الراقية.",
      image: artistAbdullah,
      featured: true
    },
    {
      id: 21,
      name: "الفنانة نوره البحرينيه",
      category: "singers",
      categoryLabel: "مطربة حفلات وأعراس",
      desc: "صوت خليجي مميز وأداء راقٍ يضفي أجواءً من الفرح والبهجة على مناسباتكم السعيدة.",
      image: artistNoura,
      featured: true
    }
  ];

  // Filter logic
  const displayedArtists = isFeatured 
    ? artistsData.filter(a => a.featured)
    : artistsData.filter(a => {
        const matchesCategory = filter === 'all' || a.category === filter;
        const matchesSearch = a.name.includes(searchQuery) || a.desc.includes(searchQuery);
        return matchesCategory && matchesSearch;
      });

  return (
    <section 
      id="artists-section" 
      className="section-padding"
      style={{
        backgroundColor: isFeatured ? 'var(--bg-secondary)' : 'var(--bg-primary)',
        borderTop: isFeatured ? '1px solid var(--border-color)' : 'none',
        position: 'relative'
      }}
    >
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }} className="reveal reveal-scale">
          <span style={{ 
            color: 'var(--gold-primary)', 
            fontWeight: '700', 
            letterSpacing: '1.5px',
            fontSize: '0.9rem',
            marginBottom: '10px',
            display: 'block'
          }}>شركاء الإبداع</span>
          
          <h2 className="section-title">
            {isFeatured ? "نخبة من الفنانين و الفِرَق" : "معرض فنانينا المتكامل"}
          </h2>
          
          <p style={{
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto',
            fontSize: '1.05rem',
            fontWeight: '300'
          }}>
            نتعاون مع أرقى الأصوات والدي جي والفرق التراثية في الكويت لإشعال البهجة والرقي في ليلة عمركم.
          </p>
        </div>

        {/* Filters and Search - Only on Full Page View */}
        {!isFeatured && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '40px',
            alignItems: 'center'
          }} className="filters-container">
            
            {/* Search Bar */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px'
            }}>
              <input 
                type="text"
                placeholder="ابحث عن اسم الفنان أو الفرقة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 45px 12px 20px',
                  borderRadius: '30px',
                  backgroundColor: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  fontSize: '0.95rem',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'var(--transition-fast)'
                }}
                className="search-input"
              />
              <Search 
                size={18} 
                color="var(--gold-primary)" 
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '18px',
                  transform: 'translateY(-50%)'
                }}
              />
            </div>

            {/* Filter Tags */}
            <div style={{
              display: 'flex',
              gap: '10px',
              flexWrap: 'wrap',
              justifyContent: 'center'
            }}>
              {[
                { id: 'all', label: 'الكل' },
                { id: 'singers', label: 'المطربون والمطربات' },
                { id: 'djs', label: 'منسقو الدي جي (DJ)' },
                { id: 'bands', label: 'الفرق الشعبية والتراثية' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '20px',
                    border: '1.5px solid',
                    borderColor: filter === tab.id ? 'var(--gold-primary)' : 'transparent',
                    backgroundColor: filter === tab.id ? 'rgba(214, 175, 55, 0.1)' : 'var(--bg-tertiary)',
                    color: filter === tab.id ? 'var(--gold-primary)' : 'var(--text-secondary)',
                    fontWeight: filter === tab.id ? '700' : '500',
                    fontFamily: 'var(--font-body)',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                  className="filter-tab-btn"
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>
        )}

        {/* Artists Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }} className="artists-grid">
          {displayedArtists.map((artist, index) => (
            <ArtistCard 
              key={artist.id} 
              artist={artist} 
              whatsappNumber={whatsappNumber} 
              index={index} 
            />
          ))}
        </div>

        {/* Empty Search Result */}
        {displayedArtists.length === 0 && (
          <div style={{ textAlign: 'center', padding: '50px 0', color: 'var(--text-secondary)' }}>
            <p style={{ fontSize: '1.1rem' }}>لا توجد نتائج تطابق بحثك الحالي.</p>
          </div>
        )}

        {/* More Button (Only on Home Preview) */}
        {isFeatured && (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button 
              onClick={() => setView('artists')} 
              className="btn-outline"
            >
              <span>عرض جميع الفنانين والخيارات</span>
              <ArrowLeft size={16} />
            </button>
          </div>
        )}

      </div>

      <style>{`
        .artists-grid {
          grid-template-columns: repeat(2, 1fr) !important;
          gap: 15px !important;
        }
        @media (max-width: 380px) {
          .artists-grid {
            gap: 10px !important;
          }
        }
        @media (min-width: 768px) {
          .artists-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 25px !important;
          }
        }
        @media (min-width: 1200px) {
          .artists-grid {
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 30px !important;
          }
        }
        .artist-card-link:hover .artist-hover-overlay {
          opacity: 1 !important;
        }
        .artist-card-link:hover .artist-card-img {
          transform: scale(1.08);
        }
        .search-input:focus {
          border-color: var(--gold-primary) !important;
          box-shadow: 0 0 10px rgba(214, 175, 55, 0.2);
        }
        .filter-tab-btn:hover {
          color: var(--gold-primary) !important;
        }
        /* Mobile touch responsiveness for overlay */
        @media (max-width: 991px) {
          .artist-hover-overlay {
            background: rgba(0, 0, 0, 0.5) !important;
            opacity: 1 !important;
            justify-content: flex-end !important;
            padding: 10px !important;
            gap: 4px !important;
          }
          .artist-hover-overlay div {
            padding: 6px !important;
          }
          .artist-hover-overlay svg {
            width: 16px !important;
            height: 16px !important;
          }
          .artist-hover-overlay span:first-of-type {
            font-size: 0.65rem !important;
          }
          .artist-hover-overlay span:last-of-type {
            font-size: 0.75rem !important;
            font-weight: 700 !important;
          }
        }

      `}</style>
    </section>
  );
}
