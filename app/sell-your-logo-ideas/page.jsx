import Link from 'next/link';

export const metadata = {
  title: 'Sell Your Logo Ideas - Hafsa Arsalan',
  description: 'A mini-course that helps logo and brand designers get client sign-off with clarity and confidence using the power of storytelling.',
};

export default function SellYourLogoIdeasPage() {
  const modules = [
    {
      num: '01',
      title: 'The Psychology of Client Presentations',
      desc: 'Why clients get nervous, what triggers rejection, and how to set up the reveal so they feel like collaborators rather than critics.',
    },
    {
      num: '02',
      title: 'Crafting the Story Arc',
      desc: 'How to structure your concept deck so the final logo feels like the inevitable, obvious answer to their business challenge.',
    },
    {
      num: '03',
      title: 'Contextual Mockups That Sell',
      desc: 'Placing your mark in high-impact real-world environments so the client immediately envisions their brand out in the wild.',
    },
    {
      num: '04',
      title: 'Overcoming Objections on the Call',
      desc: 'Word-for-word scripts and mental frameworks to handle "I’m not sure" and "can we try something else" with grace and authority.',
    },
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
          MINI-COURSE FOR LOGO &amp; BRAND DESIGNERS
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '28px',
        }}>
          SELL YOUR LOGO IDEAS WITH THE POWER OF STORYTELLING
        </h1>

        <p style={{
          fontSize: '20px',
          color: '#c4c4c4',
          maxWidth: '780px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          Turn client rejections into immediate approvals. Learn the exact presentation framework, storytelling methods, and psychological triggers to get clients excited about your initial concepts.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <a
            href="https://the-fellow-designers-club.teachable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            ENROLL NOW — $130
          </a>
        </div>
      </div>

      {/* Hero Animated Asset */}
      <div style={{ textAlign: 'center', marginBottom: '100px' }}>
        <img
          src="/images/SYL-LOGO-MARK.gif"
          alt="Sell Your Logo Ideas logo mark"
          style={{ maxHeight: '380px', width: 'auto', margin: '0 auto', borderRadius: '8px' }}
        />
      </div>

      {/* The Problem Section */}
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
            STRUGGLING TO GET YOUR LOGO IDEAS SIGNED OFF?
          </h2>
          <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.7, marginBottom: '20px' }}>
            You pour hours into crafting a brilliant, thoughtful logo design. You know it’s the right solution. You email over a PDF... and two days later you get a reply: <em>“We’re just not feeling it, can we see 5 more options?”</em>
          </p>
          <p style={{ fontSize: '18px', color: '#c0c0c0', lineHeight: 1.7 }}>
            The problem isn’t your design skill. <strong>The problem is how you’re presenting it.</strong> When you sell aesthetics, clients argue about taste. When you sell story and strategy, clients buy with confidence.
          </p>
        </div>
        <div>
          <img
            src="/images/STORY-TELLING-5-1024x682.jpg"
            alt="Presentation deck mockup"
            style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }}
          />
        </div>
      </section>

      {/* Modules Grid */}
      <section style={{ marginBottom: '100px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(36px, 5vw, 64px)',
            color: '#fff',
            marginBottom: '16px',
          }}>
            WHAT’S INSIDE THE COURSE
          </h2>
          <p style={{ color: '#888', fontSize: '17px', fontFamily: 'var(--font-mono)' }}>
            4 High-Impact Modules • Real Client Decks • Presentation Templates
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          {modules.map((m) => (
            <div key={m.num} style={{
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
                MODULE {m.num}
              </span>
              <h3 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px', lineHeight: 1.2 }}>
                {m.title}
              </h3>
              <p style={{ color: '#aaa', fontSize: '15px', lineHeight: 1.6 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Presentation Decks Preview */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '24px',
        marginBottom: '100px',
      }}>
        <img src="/images/STORY-TELLING-6.jpg" alt="Slide mockup" style={{ width: '100%', borderRadius: '4px' }} />
        <img src="/images/STORY-TELLING-9.png" alt="Deck showcase" style={{ width: '100%', borderRadius: '4px' }} />
        <img src="/images/STORY-TELLING-10.png" alt="Branded slides" style={{ width: '100%', borderRadius: '4px' }} />
      </div>

      {/* Student Reviews */}
      <section style={{
        padding: '80px 0',
        borderTop: '1px solid #222',
        marginBottom: '80px',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(32px, 4vw, 54px)',
            color: '#fff',
            marginBottom: '16px',
          }}>
            AWESOME REVIEWS FROM AWESOME DESIGNERS
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
        }}>
          <img src="/images/review-images-03-scaled.png" alt="Designer review" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
          <img src="/images/review-images-04-scaled.png" alt="Designer review" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
          <img src="/images/review-images-10-scaled.png" alt="Designer review" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
          <img src="/images/review-images-11-scaled.png" alt="Designer review" style={{ width: '100%', borderRadius: '4px', border: '1px solid #222' }} />
        </div>
      </section>

      {/* Final Pricing Callout */}
      <div style={{
        backgroundColor: '#0c0c0c',
        border: '2px solid var(--accent-orange)',
        padding: '60px 40px',
        textAlign: 'center',
        borderRadius: '4px',
      }}>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '42px', color: '#fff', marginBottom: '16px' }}>
          GET INSTANT LIFETIME ACCESS
        </h2>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '72px',
          fontWeight: 900,
          color: 'var(--accent-orange)',
          marginBottom: '24px',
        }}>
          $130
        </div>
        <p style={{ color: '#ccc', fontSize: '18px', maxWidth: '540px', margin: '0 auto 32px' }}>
          Includes all 4 video modules, keynote template files, and actual client presentation decks from six-figure identities.
        </p>
        <a
          href="https://the-fellow-designers-club.teachable.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-orange"
          style={{ fontSize: '18px', padding: '18px 48px' }}
        >
          ENROLL NOW — $130
        </a>
      </div>
    </div>
  );
}
