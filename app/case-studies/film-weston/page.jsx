import CaseStudyLayout from '../../../components/CaseStudyLayout';

export const metadata = {
  title: 'FILM WESTON - Case Study - Hafsa Arsalan',
  description: 'Creating a logo that avoids predictable clichés while still honoring the essence of a seaside film festival.',
};

export default function FilmWestonPage() {
  const sections = [
    {
      headings: ['Creating a Logo That Avoids Predictable Clichés'],
      paragraphs: [
        'Film Weston is an independent seaside film festival celebrating documentary storytellers, boundary-pushing cinema, and regional indie directors.',
        'Too many film festivals default to tired clichés: film strips, reels, or cheesy seagulls. We set out to design an emblem that feels cinematic, timeless, and grounded in coastal atmosphere without leaning on gimmicks.',
      ],
      images: [
        '/images/film-weston-1_VSCO.jpg',
        '/images/film-weston-2_VSCO.jpg',
      ],
    },
    {
      headings: ['The Geometry of Light & Ocean Waves'],
      paragraphs: [
        'The logo mark synthesizes the beam of a cinema projector with the rolling crest of ocean tides. The stark black-and-white contrast echoes classical 35mm film grain.',
      ],
      images: [
        '/images/film-weston-3-1.png',
        '/images/film-weston-5-01.png',
        '/images/film-weston-5-02.png',
      ],
    },
    {
      headings: ['Festival Posters, Street Flags & Badges'],
      paragraphs: [
        'A comprehensive promotional suite was developed to take over the coastal promenade during festival week: vertical promenade flags, festival passes, director lanyards, and cinema banners.',
      ],
      images: [
        '/images/film-weston-10_VSCO.jpg',
        '/images/film-weston-13_VSCO.jpg',
        '/images/film-weston-16_VSCO.jpg',
        '/images/film-weston-17_VSCO.jpg',
      ],
    },
    {
      headings: ['Atmospheric Cinematics'],
      paragraphs: [
        'High-contrast typography paired with raw photography gives the festival an avant-garde presence that commands respect across international cinema circuits.',
      ],
      images: [
        '/images/film-weston-21_VSCO.jpg',
        '/images/film-weston-22_VSCO.jpg',
        '/images/film-weston-30.jpg',
        '/images/film-weston-31_VSCO.jpg',
      ],
    },
  ];

  return (
    <CaseStudyLayout
      title="FILM WESTON"
      subtitle="Creating a logo that avoids predictable clichés while honoring the essence of a seaside film festival."
      category="Festival Identity & Signage"
      year="2025"
      heroImage="/images/Vertical-Flag-PSD-Mockup_VSCO-scaled.jpg"
      sections={sections}
      nextProject={{ title: 'HARVARD UNIVERSITY', href: '/case-studies/harvard-university-hfcu' }}
    />
  );
}
