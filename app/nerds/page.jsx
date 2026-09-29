import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'NERDS - Case Study - Hafsa Arsalan',
  description: 'A Mascot Logo Built on Nostalgia & Sustainability. Case study for Nerds.',
};

export default function NerdsPage() {
  const sections = [
    {
      headings: ['A Mascot Logo Built on Nostalgia & Sustainability'],
      paragraphs: [
        'Nerds is a forward-thinking lifestyle brand that celebrates comic book obsessives, vintage toy collectors, and passionate geeks while championing eco-friendly, circular manufacturing.',
        'They needed a mascot logo that could feel like an iconic Saturday-morning cartoon hero while functioning as a clean, versatile modern mark on recycled merchandise and digital interfaces.',
      ],
      images: [
        '/images/nerds-case-study-01.png',
        '/images/nerds-case-study-02.png',
      ],
    },
    {
      headings: ['A Logo That’s as Fun as It Is Thoughtful'],
      paragraphs: [
        'We designed a quirky retro mascot character with oversized glasses and electric energy. The character can adapt across different moods, expressions, and sticker formats.',
        'Custom hand-lettered logotype with chunky curves evokes the golden age of comic books and retro game cartridges.',
      ],
      images: [
        '/images/nerds-case-study-067.jpg',
        '/images/nerds-case-study-08.jpg',
        '/images/nerds-case-study-09.jpg',
      ],
    },
    {
      headings: ['Eco Merchandise & Streetwear Collection'],
      paragraphs: [
        'We translated the brand system into heavy cotton streetwear, embroidered beanies, reusable tote bags, enamel pins, and vinyl collectible packaging.',
      ],
      images: [
        '/images/nerds-case-study-10.png',
        '/images/nerds-instagram-06.png',
        '/images/nerds-instagram-08.png',
        '/images/nerds-instagram-10.png',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="NERDS"
      subtitle="A Mascot Logo Built on Nostalgia & Sustainability."
      category="Brand Identity & Merchandise"
      year="2025"
      heroImage="/images/nerds.gif"
      sections={sections}
      nextProject={{ title: 'FILM WESTON', href: '/case-studies/film-weston' }}
    />
  );
}
