import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a
          href="https://www.youtube.com/@hafsaarsalandesign"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          YOUTUBE
        </a>
        <a
          href="https://www.instagram.com/hafsaarsalandesign/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          INSTAGRAM
        </a>
      </div>
      <div className="footer-copyright">
        © 2026 Hafsa Arsalan All Rights Reserved
      </div>
    </footer>
  );
}
