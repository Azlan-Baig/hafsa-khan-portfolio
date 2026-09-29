import CaseStudyLayout from '../../../components/CaseStudyLayout';

export const metadata = {
  title: 'HARVARD UNIVERSITY HFCU - Case Study - Hafsa Arsalan',
  description: 'Designing the logo for Harvard University Employees Credit Union.',
};

export default function HarvardUniversityPage() {
  const sections = [
    {
      headings: ['Designing the Logo for Harvard University Employees Credit Union'],
      paragraphs: [
        'I worked with Harvard University to redesign the visual identity of its bank – HUECU. The team at HUECU were already in the middle of a rebranding exercise when they reached out to me. They felt it was important to explore the possibilities of working with someone who had an outside perspective and zero personal connection to the institution.',
        'Harvard carries over 380 years of institutional legacy. The challenge was striking the razor-thin balance between honoring that centuries-old gravitas and delivering a modern, friendly, and accessible financial services brand for students, faculty, and hospital staff.',
      ],
      images: [
        '/images/harvard_sign-scaled.jpg',
        '/images/harvard-university-logo-design-cj-cawley-01.png',
      ],
    },
    {
      headings: ['Built from the Traditional Harvard University Shield'],
      paragraphs: [
        'The historic Harvard shield with three open books is one of the most recognizable academic symbols in human history. We deconstructed the shield geometry, refining the proportions and line weight to perform crisply on mobile banking apps and signage.',
        'Multiple variations were rigorously tested: horizontal lockups, centered formal seals, and high-contrast digital app icons.',
      ],
      images: [
        '/images/harvard-university-logo-design-cj-cawley-01-02.png',
        '/images/harvard-university-logo-design-cj-cawley-04-01.png',
        '/images/harvard-university-logo-design-cj-cawley-04-02.png',
      ],
    },
    {
      headings: ['Branch Signage & Physical Banking Experience'],
      paragraphs: [
        'From exterior campus signage to debit cards, member welcome kits, and digital ATMs across Cambridge and Boston, the new identity brings warmth and clarity to institutional finance.',
      ],
      images: [
        '/images/harvard-university-logo-design-cj-cawley-08-scaled.jpg',
        '/images/harvard-university-logo-design-cj-cawley-09.jpg',
        '/images/harvard-university-logo-design-cj-cawley-13.jpg',
        '/images/harvard-university-logo-design-cj-cawley-14.jpg',
      ],
    },
    {
      headings: ['Comprehensive Member Touchpoints'],
      paragraphs: [
        'The result is a timeless, dignified brand identity that honors Harvard’s past while confidently serving its community for decades to come.',
      ],
      images: [
        '/images/harvard-university-logo-design-cj-cawley-21.jpg',
        '/images/harvard-university-logo-design-cj-cawley-22-scaled.jpg',
        '/images/harvard-university-logo-design-cj-cawley-25.jpg',
        '/images/harvard-university-logo-design-cj-cawley-26.jpg',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="HARVARD UNIVERSITY"
      subtitle="Designing the logo for Harvard University Employees Credit Union."
      category="Institutional Rebrand & Identity"
      year="2024"
      heroImage="/images/harvard-university-logo-design-cj-cawley-09.jpg"
      sections={sections}
      nextProject={{ title: 'PICKLED PIG', href: '/pickled-pig' }}
    />
  );
}
