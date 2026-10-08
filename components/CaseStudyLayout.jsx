import Link from 'next/link';

export default function CaseStudyLayout({
  title,
  subtitle,
  category,
  year,
  heroImage,
  sections,
  nextProject,
  children,
  fullBleed = false,
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
      <div className="case-study-sections" style={{ width: '100%', margin: 0, padding: 0 }}>
        {sections && sections.map((section, idx) => {
          const isLight = section.theme === 'light' || section.backgroundColor === '#F8F8F8' || section.backgroundColor === '#ffffff';
          const bg = section.backgroundColor || (isLight ? '#F8F8F8' : 'transparent');
          const textColor = isLight ? '#000000' : '#ffffff';
          const bodyColor = isLight ? '#000000' : '#d0d0d0';

          const hasText = Boolean(section.headings?.length > 0 || section.paragraphs?.length > 0);
          const hasAside = Boolean(section.asideImage);
          const isSplit = section.layout === 'split' || (!hasAside && (section.headings?.length ?? 0) > 0 && (section.paragraphs?.length ?? 0) > 0 && section.layout !== 'standard');

          return (
            <section
              key={idx}
              className={`case-study-section ${isLight ? 'theme-light' : 'theme-dark'}`}
              style={{
                width: '100%',
                backgroundColor: bg,
                color: textColor,
                margin: 0,
                padding: 0,
                boxSizing: 'border-box',
              }}
            >
              {hasText && (
                <div
                  style={{
                    maxWidth: '1360px',
                    margin: '0 auto',
                    padding: 'clamp(48px, 6vw, 100px) clamp(20px, 4vw, 60px)',
                    boxSizing: 'border-box',
                  }}
                >
                  {hasAside ? (
                    /* Layout: Text on Left (Heading + Paragraphs), Aside Media on Right */
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                        gap: 'clamp(32px, 5vw, 64px)',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        {section.headings?.map((h, hIdx) => (
                          <h2
                            key={hIdx}
                            style={{
                              fontFamily: "'Moderate', var(--font-body), sans-serif",
                              fontSize: 'clamp(28px, 3.5vw, 41px)',
                              fontWeight: 500,
                              lineHeight: 1.25,
                              letterSpacing: '-0.01em',
                              textTransform: 'none',
                              color: textColor,
                              margin: 0,
                              marginBottom: '20px',
                            }}
                          >
                            {h}
                          </h2>
                        ))}

                        {section.paragraphs?.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            style={{
                              fontFamily: "'Moderate', var(--font-body), sans-serif",
                              fontSize: '16px',
                              lineHeight: '26px',
                              fontWeight: 400,
                              color: bodyColor,
                              margin: 0,
                              marginBottom: '20px',
                            }}
                          >
                            {p}
                          </p>
                        ))}

                        {section.quote && (
                          <blockquote
                            style={{
                              borderLeft: '4px solid var(--accent-orange)',
                              paddingLeft: '24px',
                              margin: '28px 0',
                              fontSize: '20px',
                              fontStyle: 'italic',
                              color: textColor,
                              lineHeight: 1.5,
                            }}
                          >
                            “{section.quote}”
                          </blockquote>
                        )}
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '10px',
                        }}
                      >
                        <img
                          src={section.asideImage}
                          alt={section.headings?.[0] || 'Showcase visual'}
                          loading="lazy"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '520px',
                            width: 'auto',
                            height: 'auto',
                            display: 'block',
                            objectFit: 'contain',
                          }}
                        />
                      </div>
                    </div>
                  ) : isSplit ? (
                    /* Layout: Split (Heading on Left 50%, Paragraphs on Right 50%) */
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 460px), 1fr))',
                        gap: 'clamp(24px, 5vw, 64px)',
                        alignItems: 'start',
                      }}
                    >
                      <div>
                        {section.headings?.map((h, hIdx) => (
                          <h2
                            key={hIdx}
                            style={{
                              fontFamily: "'Moderate', var(--font-body), sans-serif",
                              fontSize: 'clamp(28px, 3.5vw, 41px)',
                              fontWeight: 500,
                              lineHeight: 1.25,
                              letterSpacing: '-0.01em',
                              textTransform: 'none',
                              color: textColor,
                              margin: 0,
                              marginBottom: '20px',
                            }}
                          >
                            {h}
                          </h2>
                        ))}
                      </div>

                      <div>
                        {section.paragraphs?.map((p, pIdx) => (
                          <p
                            key={pIdx}
                            style={{
                              fontFamily: "'Moderate', var(--font-body), sans-serif",
                              fontSize: '16px',
                              lineHeight: '26px',
                              fontWeight: 400,
                              color: bodyColor,
                              margin: 0,
                              marginBottom: '20px',
                            }}
                          >
                            {p}
                          </p>
                        ))}

                        {section.quote && (
                          <blockquote
                            style={{
                              borderLeft: '4px solid var(--accent-orange)',
                              paddingLeft: '24px',
                              margin: '28px 0',
                              fontSize: '20px',
                              fontStyle: 'italic',
                              color: textColor,
                              lineHeight: 1.5,
                            }}
                          >
                            “{section.quote}”
                          </blockquote>
                        )}
                      </div>
                    </div>
                  ) : (
                    /* Layout: Standard / Centered max-width block */
                    <div
                      style={{
                        maxWidth: '860px',
                        margin: section.alignCenter ? '0 auto' : '0',
                        textAlign: section.alignCenter ? 'center' : 'left',
                      }}
                    >
                      {section.headings?.map((h, hIdx) => (
                        <h2
                          key={hIdx}
                          style={{
                            fontFamily: "'Moderate', var(--font-body), sans-serif",
                            fontSize: 'clamp(28px, 3.5vw, 41px)',
                            fontWeight: 500,
                            lineHeight: 1.25,
                            letterSpacing: '-0.01em',
                            textTransform: 'none',
                            color: textColor,
                            margin: 0,
                            marginBottom: '20px',
                          }}
                        >
                          {h}
                        </h2>
                      ))}

                      {section.paragraphs?.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          style={{
                            fontFamily: "'Moderate', var(--font-body), sans-serif",
                            fontSize: '16px',
                            lineHeight: '26px',
                            fontWeight: 400,
                            color: bodyColor,
                            margin: 0,
                            marginBottom: '20px',
                          }}
                        >
                          {p}
                        </p>
                      ))}

                      {section.quote && (
                        <blockquote
                          style={{
                            borderLeft: '4px solid var(--accent-orange)',
                            paddingLeft: '24px',
                            margin: '28px 0',
                            fontSize: '20px',
                            fontStyle: 'italic',
                            color: textColor,
                            lineHeight: 1.5,
                          }}
                        >
                          “{section.quote}”
                        </blockquote>
                      )}
                    </div>
                  )}
                </div>
              )}

              {/* Images Grid */}
              {section.images?.length > 0 && (
                <div
                  style={{
                    width: '100%',
                    display: 'grid',
                    gridTemplateColumns:
                      section.images.length === 1
                        ? '1fr'
                        : section.images.length === 2
                        ? 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))'
                        : 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: section.gap !== undefined ? section.gap : 0,
                    margin: 0,
                    padding: 0,
                    boxSizing: 'border-box',
                  }}
                >
                  {section.images.map((imgSrc, imgIdx) => (
                    <div
                      key={imgIdx}
                      style={{
                        width: '100%',
                        lineHeight: 0,
                        margin: 0,
                        padding: 0,
                        overflow: 'hidden',
                      }}
                    >
                      <img
                        src={imgSrc}
                        alt={`${title} showcase ${imgIdx + 1}`}
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
                  ))}
                </div>
              )}
            </section>
          );
        })}
        {children}
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
