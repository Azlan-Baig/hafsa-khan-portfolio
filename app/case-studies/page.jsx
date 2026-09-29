import Link from 'next/link';

export const metadata = {
  title: 'WORK - Hafsa Arsalan',
  description: 'Selected case studies and visual identity work by Hafsa Arsalan.',
};

export default function WorkPage() {
  const projects = [
    {
      title: 'MIKE LANE',
      href: '/mike-lane',
      image: '/images/MKLN-ANIMATION-FOOTAGE-ezgif.com-video-to-gif-converter.gif',
      category: 'Brand Identity',
    },
    {
      title: 'RABBIT FOOT',
      href: '/rabbit-foot',
      image: '/images/rabbit-foot-cover-image.png',
      category: 'Brand Identity & Packaging',
    },
    {
      title: 'LOGOS',
      href: '/logo-marks',
      image: '/images/cj-cawley-logo-marks-3.gif',
      category: 'Logo Marks & Badges',
    },
    {
      title: 'DOSTI',
      href: '/dosti',
      image: '/images/dosti-cj-cawley-35.png',
      category: 'Brand Identity',
    },
    {
      title: 'NERDS',
      href: '/nerds',
      image: '/images/nerds.gif',
      category: 'Brand Identity & Merchandise',
    },
    {
      title: 'FILM WESTON',
      href: '/case-studies/film-weston',
      image: '/images/Vertical-Flag-PSD-Mockup_VSCO-scaled.jpg',
      category: 'Visual Identity',
    },
    {
      title: 'HARVARD UNIVERSITY',
      href: '/case-studies/harvard-university-hfcu',
      image: '/images/harvard-university-logo-design-cj-cawley-09.jpg',
      category: 'Rebrand & Identity',
    },
    {
      title: 'PICKLED PIG',
      href: '/pickled-pig',
      image: '/images/pp-10.jpg',
      category: 'Brand Identity',
    },
  ];

  return (
    <div style={{ padding: '80px 40px 120px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 6vw, 84px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>
          WORK
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#888888',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-mono)',
        }}>
          Selected Brand Identities &amp; Creative Case Studies
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <Link key={project.title} href={project.href} className="portfolio-card">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
            <div className="portfolio-card-overlay">
              <div>
                <span className="portfolio-card-title">{project.title}</span>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--accent-orange)',
                  marginTop: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  {project.category}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
