import Link from 'next/link';

export default function CaseStudyLayout({
  title,
  subtitle,
  category,
  year,
  heroImage,
  sections,
  nextProject,
}) {
  return (
    <article style={{ paddingBottom: '120px' }}>
      {/* Hero Header */}
      <header style={{
        padding: '80px 40px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          {category && <span>{category}</span>}
          {category && year && <span>•</span>}
          {year && <span>{year}</span>}
        </div>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 8vw, 104px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}>
          {title}
        </h1>

        {subtitle && (
          <p style={{
            fontSize: 'clamp(18px, 2.5vw, 24px)',
            color: '#c0c0c0',
            maxWidth: '820px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            {subtitle}
          </p>
        )}
      </header>

      {/* Hero Image */}
      {heroImage && (
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto 80px',
          padding: '0 20px',
        }}>
          <img
            src={heroImage}
            alt={title}
            style={{
              width: '100%',
              maxHeight: '85vh',
              objectFit: 'cover',
              borderRadius: '4px',
              border: '1px solid #1a1a1a',
            }}
          />
        </div>
      )}

      {/* Dynamic Sections */}
      <div className="case-study-content" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: '80px' }}>
            {/* Section Headings & Text */}
            {(section.headings?.length > 0 || section.paragraphs?.length > 0) && (
              <div style={{
                maxWidth: '860px',
                margin: '0 auto 48px',
                textAlign: section.alignCenter ? 'center' : 'left',
              }}>
                {section.headings?.map((h, hIdx) => (
                  <h2 key={hIdx} style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(28px, 4vw, 48px)',
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: '20px',
                    color: '#ffffff',
                  }}>
                    {h}
                  </h2>
                ))}

                {section.paragraphs?.map((p, pIdx) => (
                  <p key={pIdx} style={{
                    fontSize: '18px',
                    color: '#d0d0d0',
                    lineHeight: 1.7,
                    marginBottom: '20px',
                  }}>
                    {p}
                  </p>
                ))}

                {section.quote && (
                  <blockquote style={{
                    borderLeft: '4px solid var(--accent-orange)',
                    paddingLeft: '24px',
                    margin: '32px 0',
                    fontSize: '22px',
                    fontStyle: 'italic',
                    color: '#ffffff',
                    lineHeight: 1.5,
                  }}>
                    “{section.quote}”
                  </blockquote>
                )}
              </div>
            )}

            {/* Section Images Grid */}
            {section.images?.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: section.images.length === 1
                  ? '1fr'
                  : section.images.length === 2
                  ? 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))'
                  : 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '24px',
                alignItems: 'center',
              }}>
                {section.images.map((imgSrc, imgIdx) => (
                  <div key={imgIdx} style={{
                    overflow: 'hidden',
                    borderRadius: '4px',
                    backgroundColor: '#0a0a0a',
                    border: '1px solid #1a1a1a',
                  }}>
                    <img
                      src={imgSrc}
                      alt={`${title} showcase ${imgIdx + 1}`}
                      loading="lazy"
                      style={{
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Next Project & CTA Footer */}
      <div style={{
        marginTop: '120px',
        padding: '80px 40px',
        borderTop: '1px solid #1c1c1c',
        backgroundColor: '#050505',
        textAlign: 'center',
      }}>
        {nextProject && (
          <div style={{ marginBottom: '60px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '13px',
              color: '#888',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              display: 'block',
              marginBottom: '12px',
            }}>
              Next Case Study
            </span>
            <Link
              href={nextProject.href}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 6vw, 72px)',
                fontWeight: 900,
                color: '#fff',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              className="next-project-link"
            >
              {nextProject.title} →
            </Link>
          </div>
        )}

        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '32px',
            marginBottom: '16px',
            color: '#fff',
          }}>
            HAVE A PROJECT IN MIND?
          </h3>
          <p style={{ color: '#aaa', fontSize: '17px', marginBottom: '32px' }}>
            Let’s build something bold, memorable, and authentically yours.
          </p>
          <Link href="/work-with-me" className="btn-orange">
            WORK WITH ME
          </Link>
        </div>
      </div>
    </article>
  );
}
