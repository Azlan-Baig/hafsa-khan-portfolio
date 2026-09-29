import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'DOSTI - Case Study - Hafsa Arsalan',
  description: 'Designing the brand identity for an Indian beer brand ready to disrupt the market.',
};

export default function DostiPage() {
  const sections = [
    {
      headings: ['Designing the Identity for an Indian Beer Brand Ready to Disrupt the Market'],
      paragraphs: [
        'I had the privilege of working with two brilliant British-Indian-African siblings, Nikita and Sahil, who were on a mission to shake up the beer shelves. Their goal was simple but bold: create an Indian-inspired beer brand that could stand proudly in restaurants, bars, and fridges across the UK, and replace the tired, predictable options found in most English-Indian curry houses.',
        '“Dosti” means friendship in Hindi. We wanted the brand to embody that warmth, camaraderie, and celebration of culture, while rejecting every lazy visual trope usually slapped onto ethnic food and drink.',
      ],
      images: [
        '/images/dosti-cj-cawley-2-1.gif',
        '/images/dosti-cj-cawley-19.gif',
      ],
    },
    {
      headings: ['Vibrant Pop Culture & Indian Matchbox Art'],
      paragraphs: [
        'We drew immense inspiration from retro Indian truck art, vintage matchbox labels, and bustling street market signage. Rich, saturated colors paired with high-contrast typography give Dosti an unforgettable shelf presence.',
        'The centerpiece tiger illustration represents courage, loyalty, and fierce pride, illustrated with stylized geometric precision.',
      ],
      images: [
        '/images/dosti-cj-cawley-20.png',
        '/images/dosti-cj-cawley-25.png',
        '/images/dosti-cj-cawley-3-1.png',
      ],
    },
    {
      headings: ['Beer Can Packaging & Coaster Systems'],
      paragraphs: [
        'For the can designs, we developed bold color-blocked bands that communicate different brewing profiles while maintaining immediate family cohesion across the lineup.',
      ],
      images: [
        '/images/dosti-cj-cawley-38.png',
        '/images/dosti-cj-cawley-40.gif',
        '/images/dosti-cj-cawley-44.png',
      ],
    },
    {
      headings: ['Merchandise, Glassware & Bar Takeovers'],
      paragraphs: [
        'From branded glassware and vibrant bar runners to street posters and sticker packs, Dosti transforms any table into an energetic celebration.',
      ],
      images: [
        '/images/dosti-cj-cawley-58.png',
        '/images/dosti-cj-cawley-61.png',
        '/images/dosti-cj-cawley-63.png',
        '/images/dosti-cj-cawley-67.png',
      ],
    },
    {
      headings: ['The Final Toast'],
      paragraphs: [
        'Dosti launched across independent taprooms and premier dining establishments, proving that cultural authenticity and contemporary craft design are a match made in heaven.',
      ],
      images: [
        '/images/dosti-cj-cawley-74.png',
        '/images/dosti-cj-cawley-75.png',
        '/images/dosti-ending.gif',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="DOSTI"
      subtitle="Designing the identity for an Indian beer brand ready to disrupt the market."
      category="Brand Identity & Packaging"
      year="2025"
      heroImage="/images/dosti-cj-cawley-35.png"
      sections={sections}
      nextProject={{ title: 'NERDS', href: '/nerds' }}
    />
  );
}
