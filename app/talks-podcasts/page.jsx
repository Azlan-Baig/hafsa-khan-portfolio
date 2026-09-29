import Link from 'next/link';

export const metadata = {
  title: 'TALKS & PODCASTS - Hafsa Arsalan',
  description: 'Design talks, keynotes, conference appearances, and podcast interviews by Hafsa Arsalan.',
};

export default function TalksPodcastsPage() {
  const appearances = [
    {
      title: 'Adobe Creative Cloud Europe Keynote',
      type: 'Conference Talk',
      desc: 'Breaking down creative confidence, brave identity systems, and navigating the transition into high-impact independent design.',
      link: 'https://event.adobe.com/creativecloudeurope',
      tag: 'Keynote',
    },
    {
      title: 'The Logo Geek Podcast',
      type: 'Podcast Interview',
      desc: 'Deep dive into crafting distinct brand marks, managing client expectations, and selling ideas with conviction.',
      link: 'https://www.youtube.com/@cjcawleydesign',
      tag: 'Interview',
    },
    {
      title: 'Design Life & Freelance Realities',
      type: 'Panel Discussion',
      desc: 'Stripping back the BS of freelance design businesses, financial sustainability, and staying weird in a generic market.',
      link: 'https://www.youtube.com/@cjcawleydesign',
      tag: 'Panel',
    },
    {
      title: 'Brand Builder Academy Guest Workshop',
      type: 'Masterclass',
      desc: 'A live 90-minute workshop dissecting real-world identity projects from discovery sketch to delivery.',
      link: 'https://www.youtube.com/@cjcawleydesign',
      tag: 'Workshop',
    },
  ];

  return (
    <div style={{ padding: '80px 40px 140px', maxWidth: '1300px', margin: '0 auto' }}>
      {/* Hero */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        marginBottom: '100px',
      }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(44px, 7vw, 92px)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '24px',
          }}>
            SPEAKING FROM <span style={{ color: 'var(--accent-orange)' }}>EXPERIENCE</span>
          </h1>
          <p style={{ fontSize: '20px', color: '#c4c4c4', lineHeight: 1.6, marginBottom: '32px' }}>
            Inspiring, encouraging, and educating the next generation of designers. I share transparent stories from over a decade in the trenches building brands that stand out.
          </p>
          <Link href="/work-with-me" className="btn-orange">
            BOOK TO SPEAK
          </Link>
        </div>
        <div>
          <img
            src="/images/speaking.jpg"
            alt="Speaking on stage"
            style={{ width: '100%', borderRadius: '4px', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Featured Appearances */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '36px',
          color: 'var(--accent-orange)',
          marginBottom: '40px',
          borderBottom: '1px solid #222',
          paddingBottom: '16px',
        }}>
          CONFERENCES &amp; PODCASTS
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {appearances.map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #222',
              padding: '36px',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '24px',
            }}>
              <div style={{ maxWidth: '780px' }}>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '13px',
                  color: 'var(--accent-orange)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  {item.tag} • {item.type}
                </span>
                <h3 style={{ fontSize: '28px', color: '#fff', marginBottom: '12px' }}>
                  {item.title}
                </h3>
                <p style={{ color: '#aaa', fontSize: '16px', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                LISTEN / WATCH
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Second Image Feature */}
      <div style={{ textAlign: 'center' }}>
        <img
          src="/images/speaking-3.png"
          alt="Conference stage discussion"
          style={{ width: '100%', maxHeight: '540px', objectFit: 'cover', borderRadius: '4px', border: '1px solid #222' }}
        />
      </div>
    </div>
  );
}
