import Link from 'next/link';

export const metadata = {
  title: '1:1 Mentorship - Hafsa Arsalan',
  description: 'A 6-week intensive mentoring programme for freelance logo and brand designers who want to build a confident, repeatable business.',
};

export default function MentorshipPage() {
  const steps = [
    {
      num: '01',
      title: 'ONBOARDING & CUSTOM ROADMAP',
      desc: 'We kick off with a deep 1:1 diagnostic call. Together, we identify what’s currently holding you back, audit your portfolio, and map out your revenue targets for the next six weeks.',
    },
    {
      num: '02',
      title: 'COMPLETE STUDIO TOOLKIT',
      desc: 'Get instant access to my exact studio documents: proposals, contract agreements, brand strategy frameworks, onboarding discovery sheets, and presentation decks.',
    },
    {
      num: '03',
      title: 'WEEKLY 1-ON-1 COACHING',
      desc: 'Direct, unfiltered feedback on your active client projects, portfolio presentations, pricing quotes, and brand identity concepts every single week.',
    },
    {
      num: '04',
      title: 'THE BRAVE FRAMEWORK',
      desc: 'Master the complete pipeline: Mindset, Positioning, High-Ticket Pricing, Client Onboarding, Brand Strategy, Creative Development, and Project Delivery.',
    },
  ];

  const outcomes = [
    'Stop charging hourly and start closing $3k-$10k fixed-price identity projects',
    'Present logo designs that clients sign off on the first round without endless revisions',
    'Position yourself as an indispensable creative partner rather than a cheap pixel-pusher',
    'Run brand strategy workshops with clarity, authority, and confidence',
    'Build an unmistakable design portfolio that attracts your dream clients on repeat',
  ];

  return (
    <div style={{ padding: '80px 40px 140px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          display: 'block',
          marginBottom: '20px',
        }}>
          6-WEEK MENTORING PROGRAMME FOR LOGO &amp; BRAND DESIGNERS
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '28px',
        }}>
          BUILD A CONFIDENT, REPEATABLE BRAND DESIGN BUSINESS IN 6 WEEKS
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#c4c4c4',
          maxWidth: '780px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          An intensive mentoring programme for freelance logo and brand designers who want to run brand identity projects that are both creatively rewarding and commercially successful.
        </p>

        <Link href="/work-with-me" className="btn-orange" style={{ fontSize: '18px', padding: '18px 48px' }}>
          APPLY FOR NEXT COHORT
        </Link>
      </div>

      {/* Hero Visual */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <img
          src="/images/fearlessly-freelance.gif"
          alt="Mentorship Programme in Action"
          style={{ width: '100%', maxWidth: '840px', margin: '0 auto', borderRadius: '8px' }}
        />
      </div>

      {/* The Reality Check */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid #222',
        borderBottom: '1px solid #222',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'center',
        marginBottom: '100px',
      }}>
        <div>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 54px)',
            color: '#fff',
            lineHeight: 1.05,
            marginBottom: '24px',
          }}>
            YOU’RE WORKING HARD, BUT SOMETHING STILL ISN’T WORKING
          </h2>
          <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.7, marginBottom: '20px' }}>
            Maybe you’re tired of undercharging for projects that consume weeks of your life. Maybe you feel stuck in the vicious cycle of "make it pretty" client demands, revision #14, and dry spells between gigs.
          </p>
          <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.7 }}>
            This isn’t another passive course you buy and abandon after two videos. <strong>This is real, side-by-side mentorship.</strong> We roll up our sleeves and build your actual business infrastructure together.
          </p>
        </div>
        <div>
          <img
            src="/images/mentor-cj-cawley.jpg"
            alt="1-on-1 mentorship session"
            style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }}
          />
        </div>
      </section>

      {/* Programme Structure */}
      <section style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#fff',
            marginBottom: '16px',
          }}>
            A 6-WEEK PROGRAMME BUILT FOR YOU
          </h2>
          <p style={{ color: '#888', fontSize: '17px', fontFamily: 'var(--font-mono)' }}>
            Direct Access • Live Audits • Real-World Tools
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {steps.map((s) => (
            <div key={s.num} style={{
              backgroundColor: '#0a0a0a',
              border: '1px solid #222',
              padding: '36px',
              borderRadius: '4px',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '18px',
                color: 'var(--accent-orange)',
                display: 'block',
                marginBottom: '12px',
              }}>
                STEP {s.num}
              </span>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
                {s.title}
              </h3>
              <p style={{ color: '#aaa', fontSize: '15px', lineHeight: 1.6 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Transformation Bullets */}
      <section style={{
        backgroundColor: '#0c0c0c',
        border: '1px solid #222',
        padding: '60px 40px',
        borderRadius: '4px',
        marginBottom: '100px',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '36px',
          color: 'var(--accent-orange)',
          marginBottom: '32px',
          textAlign: 'center',
        }}>
          WHAT YOU WILL ACHIEVE
        </h2>

        <div style={{
          maxWidth: '780px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}>
          {outcomes.map((item, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <span style={{ color: 'var(--accent-orange)', fontSize: '22px', lineHeight: 1 }}>✔</span>
              <p style={{ fontSize: '18px', color: '#dedede', lineHeight: 1.5 }}>
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Student Wins & Screenshots */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '36px',
          color: '#fff',
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          WINS FROM REAL MENTEES
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
        }}>
          <img src="/images/Screenshot-2026-06-30-at-11.52.35.png" alt="Mentee feedback" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
          <img src="/images/Screenshot-2026-06-30-at-11.58.18.png" alt="Mentee revenue milestone" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
        </div>
      </section>

      {/* CTA Box */}
      <div style={{
        textAlign: 'center',
        padding: '60px 40px',
        backgroundColor: '#050505',
        border: '2px solid var(--accent-orange)',
        borderRadius: '4px',
      }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: '#fff', marginBottom: '16px' }}>
          READY TO TAKE YOUR CAREER SERIOUSLY?
        </h2>
        <p style={{ color: '#aaa', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
          Spaces are strictly capped at 6 designers per cohort to ensure hands-on personal feedback on every single call.
        </p>
        <Link href="/work-with-me" className="btn-orange" style={{ fontSize: '18px', padding: '18px 48px' }}>
          APPLY FOR NEXT COHORT
        </Link>
      </div>
    </div>
  );
}
