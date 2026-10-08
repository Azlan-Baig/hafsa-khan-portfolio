'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsletterSection from '../components/NewsletterSection';

const rotatingWords = [
  'BOLD',
  'BRAVE',
  'DARING',
  'REBELLIOUS',
  'MISFITS',
  'WILD',
  'FEARLESS',
  'MAVERICKS',
  'DREAMERS',
  'WEIRDOS',
  'UNDERDOGS',
  'SHAKERS',
  'RADICALS',
  'DISRUPTORS',
];

export default function HomePage() {
  const [wordIdx, setWordIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % rotatingWords.length);
        setFade(true);
      }, 250);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = [
    {
      title: 'MIKE LANE',
      href: '/mike-lane',
      image: '/images/MKLN-ANIMATION-FOOTAGE-ezgif.com-video-to-gif-converter.gif',
    },
    {
      title: 'RABBIT FOOT',
      href: '/rabbit-foot',
      image: '/images/rabbit-foot-cover-image.png',
    },
    {
      title: 'LOGOS',
      href: '/logo-marks',
      image: '/images/cj-cawley-logo-marks-3.gif',
    },
    {
      title: 'DOSTI',
      href: '/dosti',
      image: '/images/dosti-cj-cawley-35.png',
    },
    {
      title: 'NERDS',
      href: '/nerds',
      image: '/images/nerds.gif',
    },
    {
      title: 'FILM WESTON',
      href: '/case-studies/film-weston',
      image: '/images/Vertical-Flag-PSD-Mockup_VSCO-scaled.jpg',
    },
    {
      title: 'SUSHI CLUB',
      href: '/sushi-club',
      image: '/images/sushi-club/storefront.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="home-hero-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          alignItems: 'center',
          gap: '60px',
          width: '100%',
        }}>
          <div>
            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 7vw, 92px)',
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              marginBottom: '36px',
            }}>
              DESIGNING BADASS BRANDS FOR THE WEIRD &amp; WONDERFUL
            </h1>
            <Link href="/work-with-me" className="btn-orange">
              WORK WITH ME
            </Link>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src="/images/baby-on-board-4.gif"
              alt="Baby on board character"
              style={{
                maxWidth: '100%',
                maxHeight: '520px',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="home-portfolio-section">
        <div className="portfolio-grid">
          {featuredProjects.map((project) => (
            <Link key={project.title} href={project.href} className="portfolio-card">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
              <div className="portfolio-card-overlay">
                <span className="portfolio-card-title">{project.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #1a1a1a', maxWidth: '1400px', margin: '0 auto' }} />

      {/* ABOUT ME SECTION (FORTUNE FAVOURS THE BOLD / BRAVE / ...) */}
      <section className="home-about-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '60px',
          alignItems: 'center',
        }}>
          {/* Left Column: Heading, Animated Text, Narrative, Button */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 6.5vw, 100px)',
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
            }}>
              FORTUNE FAVOURS THE
            </h2>

            <div style={{ minHeight: '1.1em', margin: '-10px 0 10px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(44px, 6.5vw, 100px)',
                  fontWeight: 800,
                  color: 'var(--accent-orange)',
                  lineHeight: 0.95,
                  display: 'inline-block',
                  opacity: fade ? 1 : 0,
                  transform: fade ? 'translateY(0)' : 'translateY(6px)',
                  transition: 'opacity 0.25s ease, transform 0.25s ease',
                }}
              >
                {rotatingWords[wordIdx]}
              </span>
            </div>

            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '18px',
              fontWeight: 400,
              lineHeight: '30px',
              color: '#8A8A8A',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              maxWidth: '560px',
            }}>
              <p>
                I’m Hafsa, a brand designer, logo specialist, and creative educator from the UK. For over a decade, I’ve been crafting badass brand identities for the rebels, the brave and the disruptors, the kind of people who zig when everyone else zags.
              </p>
              <p>
                I’m on a mission to work with purpose-driven businesses, ambitious startups, and unconventional thinkers who aren’t afraid to truly stand out and capture their audience’s attention.
              </p>
              <p>
                Whether you’re launching something new or rethinking the old, I use creative strategy and the power of storytelling, that make people <em style={{ color: '#fff', fontStyle: 'italic' }}>look twice</em> and remember you.
              </p>
            </div>

            <div style={{ marginTop: '15px' }}>
              <Link
                href="/about-me"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '18px',
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  padding: '14px 28px',
                  border: '2px solid #FFFFFF',
                  transition: 'all 0.3s ease',
                }}
                className="more-about-me-btn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.color = '#FF4C01';
                  e.currentTarget.style.borderColor = '#FF4C01';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.color = '#000000';
                  e.currentTarget.style.borderColor = '#FFFFFF';
                }}
              >
                MORE ABOUT ME
              </Link>
            </div>
          </div>

          {/* Right Column: Headshot Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              overflow: 'hidden',
              borderRadius: '4px',
              border: '1px solid #1c1c1c',
              width: '100%',
              maxWidth: '620px',
            }}>
              <img
                src="/images/CJ-HEADSHOT-3.jpg"
                alt="Hafsa Arsalan Headshot"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'cover',
                  transition: 'filter 0.4s ease, transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'brightness(107%) contrast(139%) saturate(0%)';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-CARDS SECTION (MENTORSHIP, TOOLS & COURSES, TALKS & PODCASTS) */}
      <section className="home-cards-section">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '30px',
        }}>
          {/* Card 1: Mentorship */}
          <div style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #1c1c1c',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src="/images/mentor-cj-cawley.jpg"
                  alt="1:1 Mentorship"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '36px 30px 24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  color: '#fff',
                  marginBottom: '16px',
                }}>
                  1:1 MENTORSHIP
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#8A8A8A',
                }}>
                  I want to help you finally build the design business you’re proud of, the kind that gets you paid what you’re worth, attracts clients who trust your ideas, and gives you freedom to do your best work.
                </p>
              </div>
            </div>
            <div style={{ padding: '0 30px 36px' }}>
              <Link href="/mentorship" className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                LEARN MORE
              </Link>
            </div>
          </div>

          {/* Card 2: Tools & Courses */}
          <div style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #1c1c1c',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src="/images/TOOLS-TEMPLATES-scaled.png"
                  alt="Tools and Courses"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '36px 30px 24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  color: '#fff',
                  marginBottom: '16px',
                }}>
                  TOOLS &amp; COURSES
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#8A8A8A',
                }}>
                  Grab the exact tools and templates I use to run my freelance design studio like a pro! Powerful design tools, templates, and courses to help you share your creative work with confidence and build a brand you're proud of.
                </p>
              </div>
            </div>
            <div style={{ padding: '0 30px 36px' }}>
              <Link href="/design-tools" className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                DISCOVER TOOLS
              </Link>
            </div>
          </div>

          {/* Card 3: Talks & Podcasts */}
          <div style={{
            backgroundColor: '#0a0a0a',
            border: '1px solid #1c1c1c',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img
                  src="/images/speaking.jpg"
                  alt="Talks and Podcasts"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ padding: '36px 30px 24px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '32px',
                  color: '#fff',
                  marginBottom: '16px',
                }}>
                  TALKS &amp; PODCASTS
                </h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '16px',
                  lineHeight: '26px',
                  color: '#8A8A8A',
                }}>
                  I’ve had the chance to share my story, ideas, and lessons from freelance life through podcast interviews, design talks, and creative panels. Honest, unfiltered, and full of real insights from my journey as a designer.
                </p>
              </div>
            </div>
            <div style={{ padding: '0 30px 36px' }}>
              <Link href="/talks-podcasts" className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>
                WATCH HERE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
