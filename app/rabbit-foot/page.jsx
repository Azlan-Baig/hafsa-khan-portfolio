import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'RABBIT FOOT - Case Study - Hafsa Arsalan',
  description: 'A Brand Identity That Cuts the Crap and Makes Its Own Luck. Case study for Rabbit Foot Studios.',
};

export default function RabbitFootPage() {
  const sections = [
    {
      headings: ['A Brand Identity That Cuts the Crap and Makes Its Own Luck'],
      paragraphs: [
        'If my studio wasn’t called Seeside Studio, I can confidently say it would be called Rabbit Foot Studios, and my logo would be a bad-ass rabbit, wielding a meat cleaver and cutting its own foot off to make its own luck.',
        'I think that has to be one of the coolest visual stories I’ve ever seen in my twelve years as a graphic designer. It subverts the traditional good-luck charm into a symbol of sheer grit, audacity, and relentless determination.',
      ],
      images: [
        '/images/rabbit-foot-CARDS.gif',
        '/images/cj-cawley-rabbit-foot-logos-01-scaled.jpg',
      ],
    },
    {
      headings: ['Crafting the Bad-Ass Rabbit Mascot'],
      paragraphs: [
        'We created a vintage comic and tattoo-inspired mascot illustration holding a meat cleaver with a smirk that says everything you need to know about the brand attitude.',
        'Every line weight was crafted with traditional ink textures in mind, giving it raw edge and immediate street authenticity.',
      ],
      images: [
        '/images/cj-cawley-rabbit-foot-logos-02-scaled.jpg',
        '/images/cj-cawley-rabbit-foot-14-scaled.jpg',
      ],
    },
    {
      headings: ['Packaging, Playing Cards & Tactile Merch'],
      paragraphs: [
        'A fearless brand needs tactile execution. We developed foil-embossed playing card decks, matchbox packaging, bespoke apparel tags, and heavyweight prints that celebrate independent craftsmanship.',
      ],
      images: [
        '/images/cj-cawley-rabbit-foot-15-1024x1024.png',
        '/images/cj-cawley-rabbit-foot-16-1024x1024.png',
        '/images/cj-cawley-rabbit-foot-22.png',
      ],
    },
    {
      headings: ['The Complete Identity System'],
      paragraphs: [
        'From primary badges and monograms to secondary seal marks, Rabbit Foot is armed with a bulletproof toolkit that works across screen, print, and physical merchandise.',
      ],
      images: [
        '/images/cj-cawley-rabbit-foot-24-scaled.png',
        '/images/cj-cawley-rabbit-foot-30-scaled.png',
        '/images/cj-cawley-rabbit-foot-31-scaled.png',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="RABBIT FOOT"
      subtitle="A Brand Identity That Cuts the Crap and Makes Its Own Luck."
      category="Brand Identity & Packaging"
      year="2025"
      heroImage="/images/rabbit-foot-cover-image.png"
      sections={sections}
      nextProject={{ title: 'DOSTI', href: '/dosti' }}
    />
  );
}
