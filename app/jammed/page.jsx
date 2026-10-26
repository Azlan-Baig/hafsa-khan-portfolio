import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'JAMMED - Case Study - Hafsa Arsalan',
  description: 'Playful and bold jam branding, packaging design, and visual identity for Jammed.',
};

export default function JammedPage() {
  return (
    <CaseStudyLayout
      title="JAMMED"
      subtitle="A Bold, Modern & Playful Fruit Jam Brand."
      category="Packaging & Visual Identity"
      year="2026"
      nextProject={{ title: 'SUSHI CLUB', href: '/sushi-club' }}
      fullBleed={true}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, margin: 0, padding: 0 }}>
        {/* Slide 1: Cover Tray Mockup (Artboard 1.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/cover.jpg"
            alt="Jammed - Strawberry, Kiwi, Orange Fruit Jams in Tray"
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

        {/* Slide 2: Project Overview (Direct Asset: Artboard 2.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/overview.jpg"
            alt="Jammed - Project Overview"
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

        {/* Slide 3: Sketchbook & Moodboard (Direct Asset: Behance Slide 3) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/sketchbook-moodboard.jpg"
            alt="Jammed - Ideation Sketchbook & Visual Moodboard"
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

        {/* Slide 4: Green Die-Cut Sticker */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0, backgroundColor: '#44b711' }}>
          <img
            src="/images/jammed/stickers-green.jpg"
            alt="Jammed - Kiwi Green Die-Cut Sticker"
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

        {/* Slide 5: Pink Die-Cut Sticker */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0, backgroundColor: '#fe317e' }}>
          <img
            src="/images/jammed/stickers-pink.jpg"
            alt="Jammed - Strawberry Pink Die-Cut Sticker"
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

        {/* Slide 6: Orange Die-Cut Sticker */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0, backgroundColor: '#ff6a18' }}>
          <img
            src="/images/jammed/stickers-orange.jpg"
            alt="Jammed - Orange Die-Cut Sticker"
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

        {/* Slide 7: Packaging & Fruit Labels (Artboard 4.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/packaging-labels.jpg"
            alt="Jammed - Packaging Labels on Fresh Strawberry Background"
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

        {/* Slide 8: Lifestyle Photoshoot (artboard 5.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/lifestyle-photoshoot.jpg"
            alt="Jammed - Lifestyle Photoshoot"
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

        {/* Slide 9: Tote Bag & Merch Mockup (artboard 7.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/tote-bag-mockup.jpg"
            alt="Jammed - Tote Bag and Fruit Pattern Merch"
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

        {/* Slide 10: Botanical Fruit Sketches & Kiwi Jar Detail (Artboard 6.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/fruit-sketches-jar.jpg"
            alt="Jammed - Botanical Fruit Sketches and Kiwi Jam Jar"
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

        {/* Slide 11: Breakfast Table Scene (artboard 8.jpg) */}
        <div style={{ width: '100%', lineHeight: 0, margin: 0, padding: 0 }}>
          <img
            src="/images/jammed/breakfast-table.jpg"
            alt="Jammed - Breakfast Table Scene with Toast and Pancakes"
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
      </div>
    </CaseStudyLayout>
  );
}
