import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'MIKE LANE - Case Study - Hafsa Arsalan',
  description: 'Rebuilding a personal brand obsessed with the details for Mike Lane.',
};

export default function MikeLanePage() {
  const sections = [
    {
      headings: ['Rebuilding a personal brand obsessed with the details'],
      paragraphs: [
        'Mike Lane is an artisan builder, fabricator, and obsessive creator known worldwide for pushing automotive engineering and miniature craftsmanship to insane levels.',
        'Over years of high-profile builds and YouTube features, Mike had cultivated a fiercely loyal audience. But his visual identity was lagging behind the world-class quality of his work.',
        'We set out to completely rebuild the Mike Lane brand identity from ground zero, capturing the grit, surgical precision, and mechanical beauty of his process.',
      ],
      images: ['/images/MKLN-HERO.png', '/images/mkln-t-shirt.png'],
    },
    {
      headings: ['The business had grown BUT The brand hadn’t'],
      paragraphs: [
        'When you make premium products that collectors pay thousands for, your branding cannot look like an afterthought downloaded from a stock template site.',
        'Mike needed a distinctive identity system: bold custom logotypes, stamped technical marks, iconography, and luxury packaging that makes unboxing an event in itself.',
      ],
      images: ['/images/MKLN-BOX-INSIDE-1.png', '/images/MKLN-BOXES-SET-scaled.png'],
    },
    {
      headings: ['Building Mike a new signature from scratch'],
      paragraphs: [
        'We drew inspiration from heritage automotive emblems, vintage mechanic badges, and blueprint gridlines. Every curve, corner radius, and bevel was dialed in with micrometer precision.',
        'The primary monogram weaves the M and L into a mechanical lockup that functions seamlessly whether embossed on chrome or stamped into custom hardware.',
      ],
      images: ['/images/MIKE-LANE-LOGO-GRID-2-01-scaled.png', '/images/MKLN-LOGO-LOCLUP-scaled.png'],
    },
    {
      headings: ['If you’ve built something worth showing, put it behind glass'],
      paragraphs: [
        'Beyond the primary identity, we designed custom watch bezels, technical decals, flash sheets, and bespoke collector kits that bridge digital storytelling with tactile industrial design.',
      ],
      images: [
        '/images/WATCH-1024x1024.png',
        '/images/HEADLIGHTS-1024x1024.png',
        '/images/FLUX-CLOSE-UP-1024x1024.png',
      ],
    },
    {
      headings: ['Precision on the outside. Personality on the inside.'],
      paragraphs: [
        'From high-density foil packaging to apparel and shop stickers, every touchpoint honors Mike’s relentless pursuit of perfection.',
      ],
      images: [
        '/images/MKLN-FLASH-SHEET-PRINTED-1024x1024.png',
        '/images/ML-FLASH-SHEET-LARGE-TAN-scaled.png',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="MIKE LANE"
      subtitle="Rebuilding a personal brand obsessed with the details."
      category="Brand Identity & Packaging"
      year="2026"
      heroImage="/images/MKLN-ANIMATION-FOOTAGE-ezgif.com-video-to-gif-converter.gif"
      sections={sections}
      nextProject={{ title: 'RABBIT FOOT', href: '/rabbit-foot' }}
    />
  );
}
