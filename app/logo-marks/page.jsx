export const metadata = {
  title: 'LOGOS - Hafsa Arsalan',
  description: 'A curated collection of custom logo marks, badges, icons, and brand marks created by Hafsa Arsalan.',
};

export default function LogoMarksPage() {
  const logos = Array.from({ length: 40 }, (_, i) => {
    const num = String(i + 1).padStart(2, '0');
    return `/images/cj-black-logo-marks-${num}-scaled.png`;
  });

  return (
    <div className="page-container-responsive" style={{ maxWidth: '1400px' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          marginBottom: '16px',
        }}>
          LOGO MARKS
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#888888',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-mono)',
        }}>
          A Collection of Custom Brand Marks &amp; Symbols
        </p>
      </div>

      <div className="logos-grid">
        {logos.map((src, index) => (
          <div key={index} className="logo-item">
            <img
              src={src}
              alt={`Logo Mark ${index + 1}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
