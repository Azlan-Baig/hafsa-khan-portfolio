import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'BAD BUN - Case Study - Hafsa Arsalan',
  description: 'Bad is New Good. Brand identity, packaging design and rebellious burger mascot for Bad Bun.',
};

export default function BadBunPage() {
  return (
    <CaseStudyLayout
      title="BAD BUN"
      subtitle="A Rebellious Fast-Food Brand Identity & Mascot."
      category="Brand Identity & Packaging"
      year="2026"
      nextProject={{ title: 'JAMMED', href: '/jammed' }}
      fullBleed={true}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: 0, padding: 0 }}>
        {/* Slide 1: Cover Banner (Artboard 1-100.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/cover.jpg"
            alt="Bad Bun - Bad is New Good Cover"
            loading="eager"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>

        {/* Slide 2: Project Overview (Direct Asset: Artboard 2.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/overview.png"
            alt="Bad Bun - Project Overview"
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

        {/* Slide 3: Mascot Development (Direct Asset: Artboard 4.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/mascot-development.png"
            alt="Bad Bun - Mascot Development"
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

        {/* Slide 4: Brand Marks System (Direct Asset: Artboard 3.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/brand-system.png"
            alt="Bad Bun - Brand Marks System"
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

        {/* Slide 5: Mobile Instagram App Mockup (Direct Asset: iPhone_Mockup_5.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/instagram-mockup.png"
            alt="Bad Bun - Mobile Instagram Experience"
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

        {/* Slide 6: Takeaway Burger Box Packaging (Direct Asset: Burger_Mockup_v01.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/burger-box-mockup.png"
            alt="Bad Bun - Takeaway Burger Box Packaging"
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

        {/* Slide 7: Burger Wrap Packaging Mockup (Direct Asset: Burger_Mockup_v02.png) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/burger-wrap-mockup.png"
            alt="Bad Bun - Burger Wrap Packaging"
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

        {/* Slide 8: Illuminated Outdoor Neon Sign Lightbox (Behance Slide 8) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/illuminated-sign.png"
            alt="Bad Bun - Illuminated Store Lightbox Signage"
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

        {/* Slide 9: Store Signage & Burger Wrap Presentation (Direct Asset: Artboard 7.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/signage-mockup.jpg"
            alt="Bad Bun - Store Signage and Packaging Presentation"
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

        {/* Slide 10: Mascot Pattern Outro (Direct Asset: Artboard 13.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/outro-pattern.jpg"
            alt="Bad Bun - Brand Pattern"
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

        {/* Slide 11: Seal Badges (Direct Asset: Artboard 8.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/bad-bun/seal-badges.jpg"
            alt="Bad Bun - Seal Badges - Bad is New Good"
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

        {/* Slide 12: Client Animation Video (Direct Asset: Untitled design (1).mp4) */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#000000',
            lineHeight: 0,
            margin: 0,
            padding: 0,
            overflow: 'hidden',
          }}
        >
          <video
            src="/images/bad-bun/bad-bun-animation.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              margin: 0,
              padding: 0,
            }}
          />
        </div>
      </div>
    </CaseStudyLayout>
  );
}
