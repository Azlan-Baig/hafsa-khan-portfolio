import Link from 'next/link';

export const metadata = {
  title: 'WORK - Hafsa Arsalan',
  description: 'Selected case studies and visual identity work by Hafsa Arsalan.',
};

export default function WorkPage() {
  const projects = [
    {
      title: 'JAMMED',
      href: '/jammed',
      image: '/images/thumbnails/jammed.jpg',
      category: 'Packaging & Visual Identity',
    },
    {
      title: 'PACK PRO+',
      href: 'https://www.behance.net/gallery/247615881/PACK-PRO',
      image: '/images/thumbnails/pack-pro.png',
      category: 'Brand Identity & Packaging',
      external: true,
    },
    {
      title: 'SUSHI CLUB',
      href: '/sushi-club',
      image: '/images/thumbnails/sushi-club.png',
      category: 'Brand Identity & Packaging',
    },
    {
      title: 'BAD BUN',
      href: '/bad-bun',
      image: '/images/thumbnails/bad-bun.png',
      category: 'Brand Identity & Mascot',
    },
  ];

  return (
    <div className="page-container-responsive" style={{ maxWidth: '1400px' }}>
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
          project.external ? (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-card"
            >
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
            </a>
          ) : (
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
          )
        ))}
      </div>
    </div>
  );
}
