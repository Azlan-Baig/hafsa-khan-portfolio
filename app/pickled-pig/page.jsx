import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'PICKLED PIG - Case Study - Hafsa Arsalan',
  description: 'A Brand Identity Built on Pork & Pickles. Case study for Pickled Pig.',
};

export default function PickledPigPage() {
  const sections = [
    {
      headings: ['A Brand Identity Built on Pork & Pickles'],
      paragraphs: [
        'Pickled Pig is a rebellious craft smokehouse and pickle company that marries the smoky comfort of low-and-slow American barbecue with the bright, sharp kick of small-batch vinegar ferments.',
        'They needed a brand that felt rugged, authentic, and fun, with an unmistakable pig mascot that could command butcher counters, hot sauce bottles, and branded food trucks.',
      ],
      images: [
        '/images/pp-logo.gif',
        '/images/pp-logo-embossed-scaled.jpg',
      ],
    },
    {
      headings: ['Heritage Butcher Craft Meets Modern Irreverence'],
      paragraphs: [
        'The mascot design features a charismatic pig sporting an eyepatch and grin, capturing the bold, unapologetic flavor profile behind every jar and smoke rack.',
        'Vintage woodblock typefaces and rustic linework ensure the brand feels deeply established, like a recipe perfected over three generations.',
      ],
      images: [
        '/images/PP-1.jpg',
        '/images/pp-05.png',
        '/images/pp-06.png',
      ],
    },
    {
      headings: ['Packaging, Jars & Hot Sauce Lineup'],
      paragraphs: [
        'We designed textured kraft paper labels, wax-dipped pickle jars, butcher wrap patterns, and vibrant spice rub tins that look exceptional in retail shops and kitchen pantries.',
      ],
      images: [
        '/images/pp-07.jpg',
        '/images/pp-08-scaled.jpg',
        '/images/pp-09.png',
        '/images/pp-11.jpg',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="PICKLED PIG"
      subtitle="A Brand Identity Built on Pork & Pickles."
      category="Food & Beverage Identity"
      year="2024"
      heroImage="/images/pp-10.jpg"
      sections={sections}
      nextProject={{ title: 'MIKE LANE', href: '/mike-lane' }}
    />
  );
}
