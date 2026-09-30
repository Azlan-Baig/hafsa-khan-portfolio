import Link from 'next/link';

export const metadata = {
  title: 'ABOUT - Hafsa Arsalan',
  description: 'Learn more about Hafsa Arsalan: Brand Designer, Logo Designer, and Creative Mentor.',
};

export default function AboutPage() {
  const brandLogos = [
    '/images/cj-cawley-brands-01.png',
    '/images/cj-cawley-brands-02.png',
    '/images/cj-cawley-brands-03.png',
    '/images/cj-cawley-brands-04.png',
    '/images/cj-cawley-brands-05.png',
    '/images/cj-cawley-brands-06.png',
  ];

  return (
    <div style={{ paddingBottom: '120px' }}>
      {/* 1. Giant Hero Typography */}
      <section className="about-hero-section">
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 10vw, 170px)',
          fontWeight: 500,
          lineHeight: 0.88,
          color: '#383838',
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
        }}>
          brand DESIGNER<br />
          logo DESIGNER<br />
          CREATIVE mentor
        </h1>
      </section>

      {/* 2. Intro Section: Studio Photo + 30px Lead Paragraph */}
      <section className="about-section">
        <div className="about-grid-2col">
          <div>
            <img
              src="/images/cj-cawley-about-me-3.jpg"
              alt="Studio desk setup"
              style={{
                width: '100%',
                borderRadius: '0px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
          <div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(20px, 2.5vw, 30px)',
              fontWeight: 400,
              lineHeight: 1.4,
              color: '#FFFFFF',
            }}>
              I’m on a mission to craft killer brand identities for the rebels, the brave, and the disruptors. The ones who zig when everyone else zags. I partner with ambitious founders, purpose-driven businesses, and unconventional thinkers to help them shake up their industry and visually tell their story to the people that matter.
            </p>
          </div>
        </div>
      </section>

      {/* 3. "Always Forward, Never Back" + 3 Paragraphs + GIF */}
      <section className="about-section">
        <div className="about-grid-2col">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4.5vw, 50px)',
              fontWeight: 500,
              textTransform: 'uppercase',
              color: '#FFFFFF',
              lineHeight: 1.0,
              marginBottom: '4px',
            }}>
              always forward,
            </h2>
            <h2 style={{
              fontFamily: 'var(--font-script)',
              fontSize: 'clamp(32px, 4.5vw, 50px)',
              fontWeight: 500,
              textTransform: 'none',
              color: '#FFFFFF',
              lineHeight: 1.0,
              marginBottom: '32px',
            }}>
              never back
            </h2>

            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: 1.7,
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>
              <p>
                For me, being a designer isn’t about quick fixes or making something “look pretty.” It’s about crafting visual identities that people believe in. I do that through a mix of creative problem-solving and strategic design thinking. Every project runs through a powerful, tried-and-tested system designed to solve real business problems, not churn out cookie-cutter work.
              </p>
              <p>
                I’m not a “designer for hire” where you drop a coin in, pull a lever, and get a logo out. I roll up my sleeves, get in the weeds with you, and treat your brand like it’s my own. Because the truth is, the best work doesn’t come from shortcuts, it comes from deep collaboration, trust, and building something together.
              </p>
              <p>
                I care deeply about my craft, but even more about the people I create with. When there’s honesty, trust, and a shared mission, the process becomes one of the most exciting and memorable journeys you’ll ever go on. Together, we strip back the BS, get comfortable with being brave, and create work that challenges the norm and moves your brand forward.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/cj-cawley-about-me-8.gif"
              alt="Always forward never back animated illustration"
              style={{
                width: '100%',
                maxHeight: '600px',
                objectFit: 'contain',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* 4. Full Bleed Horizontal Photo */}
      <section className="about-section" style={{ paddingTop: '20px' }}>
        <img
          src="/images/cj-cawley-about-me-6.jpg"
          alt="Studio atmosphere"
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '750px',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </section>

      {/* 5. Helping Designers Build Careers */}
      <section className="about-section-narrow">
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(32px, 5vw, 60px)',
          fontWeight: 700,
          color: '#FFFFFF',
          lineHeight: 1.1,
          marginBottom: '28px',
        }}>
          Helping Designers Build the Careers I Once Dreamed Of
        </h2>
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '18px',
          lineHeight: 1.7,
          color: '#c0c0c0',
          maxWidth: '920px',
          margin: '0 auto',
        }}>
          I know how tough it is to make the leap from struggling creative to paid designer. I’ve been there, no clients, no clear path, no clue how to turn creativity into a career. That’s why I’ve made it my mission to share everything I’ve learned over more than a decade in the industry. Today, I help thousands of graphic designers worldwide through my content, courses, and 1:1 mentoring, giving them the tools, mindset, and confidence to turn their creativity into a sustainable career.
        </p>
      </section>

      {/* 6. 1:1 Mentorship Block */}
      <section className="about-section">
        <div className="about-grid-2col">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(36px, 6vw, 72px)',
              fontWeight: 700,
              color: '#FFFFFF',
              lineHeight: 1.0,
              marginBottom: '24px',
            }}>
              1:1 MENTORSHIP
            </h2>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#FFFFFF',
              marginBottom: '36px',
            }}>
              If you’re a designer who’s ready to level up, I offer 1:1 mentorship designed to give you the confidence, clarity, and skills to build a freelance career you’re proud of. This isn’t a cookie-cutter course; it’s a personalised roadmap built around you. If you’re ready to stop guessing and start growing, let’s make it happen.
            </p>
            <Link
              href="/mentorship"
              className="btn-orange"
              style={{ fontSize: '18px', padding: '16px 36px' }}
            >
              LEARN MORE
            </Link>
          </div>

          <div>
            <img
              src="/images/cj-cawley-about-me-9.jpg"
              alt="Mentorship review session"
              style={{
                width: '100%',
                borderRadius: '0px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* 7. Brands I Have Worked With */}
      <section className="about-section">
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(28px, 4vw, 50px)',
          fontWeight: 700,
          color: '#FFFFFF',
          textAlign: 'center',
          marginBottom: '50px',
        }}>
          BRANDS I HAVE WORKED WITH
        </h2>

        <div className="about-brands-grid">
          {brandLogos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#050505',
                border: '1px solid #1a1a1a',
                transition: 'border-color 0.2s ease, transform 0.2s ease',
              }}
            >
              <img
                src={logo}
                alt={`Client Brand ${idx + 1}`}
                style={{
                  maxHeight: '65px',
                  maxWidth: '100%',
                  objectFit: 'contain',
                  filter: 'brightness(1)',
                }}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
