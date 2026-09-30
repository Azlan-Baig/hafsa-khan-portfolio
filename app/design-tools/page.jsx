import Link from 'next/link';

export const metadata = {
  title: 'DESIGN TOOLS - Hafsa Arsalan',
  description: 'Design resources, courses, templates, and 1:1 coaching for freelance graphic and brand designers.',
};

export default function DesignToolsPage() {
  const tools = [
    {
      title: 'THE ULTIMATE PRO DESIGN BUNDLE',
      image: '/images/PRO-BUNDLEIMAGES-08-1024x1024.png',
      desc: 'The complete bundle of every template, workbook, and contract needed to run high-ticket branding projects.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
    {
      title: 'THE FREELANCER STARTER BUNDLE',
      image: '/images/free-bund-seeside-1024x1024.png',
      desc: 'Essential starter kit for graphic designers going freelance: client onboarding, proposals, and pricing calculator.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
    {
      title: 'THE LOGO DESIGN TEMPLATE',
      image: '/images/LOGO-DESIGN-TEMPLATE-AI-ID-IMAGE-01-01-1024x1024.png',
      desc: 'Battle-tested Adobe Illustrator presentation and export templates for delivering flawless logo assets.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
    {
      title: 'THE BRAND STYLE GUIDE',
      image: '/images/brand-style-guide-template-01-1024x1024.png',
      desc: 'Comprehensive visual identity guideline deck template ready to present typography, color, and brand systems.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
    {
      title: 'THE CLIENT WORKBOOK',
      image: '/images/vis-iden-workbook-images-01-1024x1024.png',
      desc: 'Brand strategy and discovery workbook template to guide client kickoff calls and clarify design direction.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
    {
      title: 'THE PROPOSAL TEMPLATE',
      image: '/images/project-proposal-images-01-1024x1024.png',
      desc: 'High-converting proposal deck designed to pitch premium identity packages and close four & five-figure deals.',
      link: 'https://www.fellowdesignersclub.com/collections/design-templates',
    },
  ];

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
          TOOLS &amp; COURSES
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#888888',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-mono)',
        }}>
          Resources, Mentorship, and Toolkits for Brand Designers
        </p>
      </div>

      {/* Section 1: Mentoring & Coaching */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '32px',
          color: 'var(--accent-orange)',
          marginBottom: '40px',
          borderBottom: '1px solid #222',
          paddingBottom: '16px',
        }}>
          COACHING &amp; MENTORING
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px',
        }}>
          <div style={{
            backgroundColor: '#0d0d0d',
            border: '1px solid #222',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{ fontSize: '28px', marginBottom: '16px', color: '#fff' }}>
                FEARLESSLY FREELANCE 6-WEEK MENTORSHIP PROGRAMME
              </h3>
              <p style={{ color: '#b0b0b0', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                An intensive 6-week programme designed for logo and brand designers ready to build a repeatable, highly profitable freelance business.
              </p>
            </div>
            <Link href="/mentorship" className="btn-orange" style={{ alignSelf: 'flex-start' }}>
              LEARN MORE
            </Link>
          </div>

          <div style={{
            backgroundColor: '#0d0d0d',
            border: '1px solid #222',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <div>
              <h3 style={{ fontSize: '28px', marginBottom: '16px', color: '#fff' }}>
                1-2-1 COACHING CALL
              </h3>
              <p style={{ color: '#b0b0b0', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                A focused 60-minute private strategy session to audit your portfolio, price an upcoming client project, or untangle your freelance positioning.
              </p>
            </div>
            <Link href="/coaching" className="btn-outline" style={{ alignSelf: 'flex-start' }}>
              LEARN MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Section 2: Courses */}
      <section style={{ marginBottom: '100px' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '32px',
          color: 'var(--accent-orange)',
          marginBottom: '40px',
          borderBottom: '1px solid #222',
          paddingBottom: '16px',
        }}>
          COURSES FOR DESIGNERS
        </h2>
        <div style={{
          backgroundColor: '#0d0d0d',
          border: '1px solid #222',
          padding: '48px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{ fontSize: '36px', marginBottom: '20px', color: '#fff' }}>
              SELL YOUR LOGO IDEAS - MINI COURSE
            </h3>
            <p style={{ color: '#b0b0b0', fontSize: '17px', lineHeight: 1.6, marginBottom: '32px' }}>
              Learn the exact presentation framework, storytelling methods, and psychological triggers to get clients excited about your initial logo concepts and approve them with zero endless revisions.
            </p>
            <Link href="/sell-your-logo-ideas" className="btn-orange">
              LEARN MORE
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/images/SYL-LOGO-MARK.gif"
              alt="Sell Your Logo Ideas animation"
              style={{ maxHeight: '340px', width: 'auto', borderRadius: '4px' }}
            />
          </div>
        </div>
      </section>

      {/* Section 3: Tools & Templates */}
      <section>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '32px',
          color: 'var(--accent-orange)',
          marginBottom: '40px',
          borderBottom: '1px solid #222',
          paddingBottom: '16px',
        }}>
          TOOLS FOR DESIGNERS
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '30px',
        }}>
          {tools.map((item) => (
            <div key={item.title} style={{
              backgroundColor: '#0d0d0d',
              border: '1px solid #222',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover' }}
                />
                <div style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '12px', color: '#fff' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#999', fontSize: '15px', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
              <div style={{ padding: '0 28px 28px' }}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ width: '100%' }}
                >
                  BUY NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
