import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'SUSHI CLUB - Case Study - Hafsa Arsalan',
  description: 'A Brand Identity Built on Chopsticks & Authenticity. Presentation case study for Sushi Club.',
};

export default function SushiClubPage() {
  const slides = [
    { id: 1, src: '/images/sushi-club/slide-01.jpg', alt: 'Sushi Club Cover' },
    { id: 2, src: '/images/sushi-club/slide-02.jpg', alt: 'A Brand Identity Built on Chopsticks & Authenticity' },
    { id: 3, src: '/images/sushi-club/slide-03.jpg', alt: 'Some Places Serve Sushi Manifesto', hasGif: true },
    { id: 4, src: '/images/sushi-club/slide-04.jpg', alt: 'No Sushi Without Chopsticks Packaging' },
    { id: 5, src: '/images/sushi-club/slide-05.jpg', alt: 'Storefront Facade Mockup' },
    { id: 6, src: '/images/sushi-club/slide-06.jpg', alt: 'Blade Sign & Storefront Decals' },
    { id: 7, src: '/images/sushi-club/slide-07.jpg', alt: 'iOS Mobile App Mockup' },
    { id: 8, src: '/images/sushi-club/slide-08.jpg', alt: 'Apron & Branded Sticker Pack' },
    { id: 9, src: '/images/sushi-club/slide-09.jpg', alt: 'Artisan Chef & Sashimi Craft' },
    { id: 10, src: '/images/sushi-club/slide-10.jpg', alt: 'Chopsticks First Monogram Origin' },
    { id: 11, src: '/images/sushi-club/slide-11.jpg', alt: 'Dine-In Menu & Mobile Order' },
    { id: 12, src: '/images/sushi-club/slide-12.jpg', alt: 'Color Palette Inspired by Fresh Fish' },
    { id: 13, src: '/images/sushi-club/slide-13.jpg', alt: 'Branded Chopstick Wrappers' },
  ];

  return (
    <CaseStudyLayout
      title="SUSHI CLUB"
      subtitle="A Brand Identity Built on Chopsticks & Authenticity."
      category="Food & Beverage Identity"
      year="2025"
      nextProject={{ title: 'MIKE LANE', href: '/mike-lane' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {slides.map((slide) => {
          if (slide.hasGif) {
            return (
              <div
                key={slide.id}
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '4px',
                  backgroundColor: '#0a0a0a',
                  border: '1px solid #1a1a1a',
                  boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
                {/* Animated GIF in the left dark section */}
                <div
                  style={{
                    position: 'absolute',
                    top: '4.63%',
                    left: '2.6%',
                    width: '46.84%',
                    height: '90.71%',
                    backgroundColor: '#313a45',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src="/images/sushi-club/sushi-club-logo.gif"
                    alt="Sushi Club Animated Logo"
                    style={{
                      maxWidth: '65%',
                      maxHeight: '65%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      display: 'block',
                    }}
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={slide.id}
              style={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px',
                backgroundColor: '#0a0a0a',
                border: '1px solid #1a1a1a',
                boxShadow: '0 12px 36px rgba(0, 0, 0, 0.45)',
              }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          );
        })}
      </div>
    </CaseStudyLayout>
  );
}
