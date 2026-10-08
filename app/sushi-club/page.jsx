import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'SUSHI CLUB - Case Study - Hafsa Arsalan',
  description: 'A Brand Identity Built on Chopsticks & Authenticity. Presentation case study for Sushi Club.',
};

export default function SushiClubPage() {
  return (
    <CaseStudyLayout
      title="SUSHI CLUB"
      subtitle="A Brand Identity Built on Chopsticks & Authenticity."
      category="Food & Beverage Identity"
      year="2025"
      nextProject={{ title: 'MIKE LANE', href: '/mike-lane' }}
      fullBleed={true}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: 0, padding: 0 }}>
        {/* Slide 1: Cover Storefront */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-01.jpg"
            alt="Sushi Club Cover"
            loading="eager"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 2: Real HTML Text Section (Screen & Mobile Optimized) */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#0a0a0a',
            margin: 0,
            padding: 'clamp(48px, 6vw, 96px) clamp(20px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(28px, 5vw, 72px)',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 64px)',
                  fontWeight: 900,
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                A BRAND IDENTITY BUILT<br />ON CHOPSTICKS &<br />AUTHENTICITY.
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(16px, 1.25vw, 19px)',
                  color: '#d0d0d0',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Sushi Club is a sushi restaurant that believes real sushi should taste like real sushi: raw, fresh, simple and flavourful. Most sushi spots in the post-COVID era rely on generic branding and disposable, forgettable packaging, and Sushi Club needed an identity that felt as authentic as its food.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(16px, 1.25vw, 19px)',
                  color: '#d0d0d0',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                The goal went beyond a logo. It was to build a complete brand system, from the mark and colour palette to the menu, delivery packaging and digital touchpoints, that feels bold, clever and playful, while staying rooted in the craft of sushi.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 3: Manifesto with Animated Looping Logo GIF */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            lineHeight: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/sushi-club/slide-03.jpg"
            alt="Some Places Serve Sushi Manifesto"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
          {/* Animated GIF in the left dark section */}
          <div
            style={{
              position: 'absolute',
              top: '4.95%',
              left: '2.66%',
              width: '46.72%',
              height: '95.05%',
              backgroundColor: '#323a45',
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

        {/* Slide 4: Takeaway Bag & No Sushi Without Chopsticks */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-04.jpg"
            alt="No Sushi Without Chopsticks Packaging"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 5: Storefront Facade Mockup */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-05.jpg"
            alt="Storefront Facade Mockup"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 6: Blade Sign & Storefront Decals */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-06.jpg"
            alt="Blade Sign and Storefront Decals"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 7: iOS Mobile App Mockup */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-07.jpg"
            alt="iOS Mobile App Mockup"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 8: Apron & Branded Sticker Pack */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-08.jpg"
            alt="Apron and Branded Sticker Pack"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 9: Artisan Chef & Sashimi Craft */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-09.jpg"
            alt="Artisan Chef and Sashimi Craft"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 10: "Chopsticks First" (Real HTML Text + White Monogram, Screen & Mobile Optimized) */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#0a0a0a',
            margin: 0,
            padding: 'clamp(48px, 6vw, 96px) clamp(20px, 5vw, 80px)',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1360px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
              gap: 'clamp(28px, 5vw, 72px)',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Moderate', var(--font-body), sans-serif",
                  fontSize: 'clamp(28px, 3.5vw, 41px)',
                  fontWeight: 500,
                  lineHeight: 1.25,
                  letterSpacing: '-0.01em',
                  textTransform: 'none',
                  color: '#ffffff',
                  marginBottom: '24px',
                }}
              >
                Chopsticks First
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(16px, 1.25vw, 19px)',
                    color: '#d0d0d0',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  How do you say &ldquo;sushi&rdquo; without saying it?
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(16px, 1.25vw, 19px)',
                    color: '#d0d0d0',
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  You start where every sushi experience starts: with the chopsticks. Two crossed chopsticks form an &ldquo;X&rdquo; between the letters S and C, while a single piece of sushi rests at the base, quietly completing the mark. It&apos;s a small detail that turns initials into an illustration. The monogram stays simple and confident, with a little wink for those who spot the roll. It isn&apos;t just a symbol, it&apos;s an invitation to the table: authentic, fresh and a little bit playful.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
              }}
            >
              <svg
                viewBox="0 0 1000 1408.34"
                fill="#ffffff"
                style={{
                  width: '100%',
                  maxWidth: '380px',
                  height: 'auto',
                  display: 'block',
                }}
                aria-label="Sushi Club Chopsticks Monogram"
              >
                <path d="M485.34,1143.04h-.31c-33.41.05-107.4,9.54-109.63,37.31-.25,3.17.5,6.36,2.04,9.57v129.27c0,3.19,1.72,6.14,4.52,7.67,18.54,10.12,55.06,26.43,103.51,26.33,47.98-.1,84.14-16.23,102.63-26.33,2.8-1.53,4.52-4.48,4.52-7.67v-127.67c2.15-3.74,3.22-7.48,2.92-11.17-2.23-27.96-76.37-37.31-110.21-37.31ZM485.05,1156.01h.44c49.05,0,96.24,14.25,97.13,25.37.13,1.55-1.08,3.76-2.98,6.11-20.29,9.62-52.96,21.36-94.6,21.36s-72.86-11.22-93.25-20.72c-2.26-2.61-3.59-5.06-3.45-6.75.88-11,47.94-25.28,96.72-25.37Z" />
                <path d="M463.62,586.2c-101.92,331.41-214.55,697.62-238.69,776.13-3.08,9.98-3.05,20.67.07,30.64l3.72,11.94c1.41,4.48,7.71,4.59,9.27.17l255.79-724.52,211.4,661.29c1.53,4.77,4.9,8.71,9.37,10.94l28.61,14.3c4.12,2.05,8.71-1.78,7.42-6.2l-225.13-770.05L720.5,38.37c3.61-10.23-.48-21.67-9.93-27-11.3-6.39-29.21-11.6-54.56-5.34-9.39,2.32-16.86,9.42-19.69,18.66-15.75,51.22-73.77,239.87-141.69,460.7L357.63,16.82c-4.29-14.69-21.31-21.35-34.43-13.47l-30.96,18.57c-4.43,2.66-6.45,8.02-4.88,12.93l176.26,551.35Z" />
                <path d="M147.49,729.74c-43.32,0-88.7-15.46-119.13-37.65L0,755.01c31.97,24.75,89.73,41.77,146.98,41.77,103.14,0,153.17-51.57,153.17-111.91,0-132.55-209.89-86.64-209.89-153.18,0-22.69,19.07-41.26,68.59-41.26,31.97,0,66.52,9.29,100.05,28.38l25.79-63.44c-33.53-21.15-79.95-31.97-125.33-31.97-102.63,0-152.14,51.05-152.14,112.43,0,134.08,209.89,87.67,209.89,155.24,0,22.17-20.11,38.67-69.62,38.67Z" />
                <path d="M655.49,610.09c0,108.82,83.54,186.7,195.46,186.7,62.93,0,115.01-22.7,149.05-64.47l-53.64-49.5c-24.24,28.36-54.66,42.81-90.77,42.81-67.57,0-115.52-47.45-115.52-115.53s47.95-115.52,115.52-115.52c36.11,0,66.52,14.44,90.77,42.28l53.64-49.5c-34.04-41.26-86.12-63.95-148.54-63.95-112.43,0-195.97,77.87-195.97,186.69Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Slide 11: Dine-In Menu & Mobile Order */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-11.jpg"
            alt="Dine-In Menu and Mobile Order"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 12: Color Palette Inspired by Fresh Fish */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-12.jpg"
            alt="Color Palette Inspired by Fresh Fish"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 13: Branded Chopstick Wrappers */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/sushi-club/slide-13.jpg"
            alt="Branded Chopstick Wrappers"
            loading="lazy"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>
      </div>
    </CaseStudyLayout>
  );
}
