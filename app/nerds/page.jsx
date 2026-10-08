import CaseStudyLayout from '../../components/CaseStudyLayout';

export const metadata = {
  title: 'NERDS - Case Study - Hafsa Arsalan',
  description: 'A Mascot Logo Built on Nostalgia & Sustainability. Case study for Nerds.',
};

export default function NerdsPage() {
  const sections = [
    {
      theme: 'dark',
      layout: 'split',
      headings: ['A Mascot Logo Built on Nostalgia & Sustainability'],
      paragraphs: [
        'Nerds isn’t just another corporate gifting company—it’s on a mission to redefine what branded merchandise can be. In a world flooded with forgettable freebies, Nerds crafts premium, sustainable merch designed to be cherished, not chucked. The challenge? To create a brand identity that reflects this unique blend of eco-consciousness, joyful nostalgia, and high-quality craftsmanship.',
        'The existing branding, while functional, didn’t fully capture Nerds’ commitment to sustainability or its playful, people-first approach. This rebrand needed to shift perceptions—positioning Nerds as the go-to name for sustainable corporate gifting while injecting personality, emotion, and a sense of fun into the experience.',
      ],
      images: [
        '/images/nerds-case-study-01.png',
        '/images/nerds-case-study-02.png',
      ],
      gap: 0,
    },
    {
      theme: 'light',
      layout: 'media-split',
      headings: ['A logo that’s as fun as it is thoughtful'],
      paragraphs: [
        'To bring the Nerds brand to life, we needed more than just a logo—we needed an identity that felt personal, nostalgic, and irresistibly charming.',
        'Meet Ned—the joyful, quirky, and effortlessly cool mascot of Nerds. Designed with a retro, hand-drawn touch, Ned embodies the spirit of the brand: a celebration of creativity, sustainability, and the simple joy of well-made things. With his signature cap and nerdy glasses, he’s not just a character—he’s a symbol of the brand’s ethos. His soft, circular shape is a nod to the planet itself, reinforcing the brand’s commitment to sustainability while maintaining an inviting, inclusive feel.',
      ],
      asideImage: '/images/nerds-case-study-03-1024x1024.png',
    },
    {
      images: [
        '/images/nerds-instagram-14.png',
        '/images/nerds-instagram-10.png',
      ],
      gap: 0,
    },
    {
      theme: 'dark',
      layout: 'split',
      headings: ['Cherish, Not Chucked: A Visual Identity With Purpose'],
      paragraphs: [
        'Beyond Ned, the Nerds visual identity needed to reflect the core values of the brand: sustainability, quality, and innovation with a playful twist.',
        'But the heart of the brand wasn’t just in a single character—it was in an entire nerdy little universe.',
        'To further bring the identity to life, I designed a range of Nerd characters alongside Ned, each embodying a different product from Nerds’ sustainable collection. From tote bags with playful personalities to cheeky t-shirts with a mind of their own, each character reinforces the brand’s commitment to making eco-friendly products fun, memorable, and full of life.',
      ],
      images: [
        '/images/nerds-instagram-08.png',
        '/images/nerds-instagram-09.png',
      ],
      gap: 0,
    },
    {
      images: [
        '/images/nerds-instagram-06.png',
        '/images/nerds-case-study-067.jpg',
      ],
      gap: 0,
    },
    {
      images: [
        '/images/nerds-instagram-19.png',
        '/images/nerds-instagram-11.png',
      ],
      gap: 0,
    },
    {
      images: [
        '/images/nerds-case-study-08.jpg',
        '/images/nerds-case-study-09.jpg',
      ],
      gap: 0,
    },
    {
      images: [
        '/images/nerds-case-study-10.png',
        '/images/nerds-case-study-11.png',
      ],
      gap: 0,
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
