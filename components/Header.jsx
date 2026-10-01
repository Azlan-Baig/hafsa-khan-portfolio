'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Work', href: '/case-studies' },
    { label: 'Logos', href: '/logo-marks' },
    { label: 'About', href: '/about-me' },
    { label: 'Tools & Courses', href: '/design-tools' },
    { label: 'Contact', href: '/work-with-me' },
    { label: 'Shop', href: 'https://www.fellowdesignersclub.com/', external: true },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu if window resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href) => {
    if (href === '/case-studies') {
      return (
        pathname === '/case-studies' ||
        pathname.startsWith('/case-studies/') ||
        ['/mike-lane', '/rabbit-foot', '/dosti', '/nerds', '/sushi-club', '/pickled-pig'].includes(pathname)
      );
    }
    return pathname === href;
  };

  return (
    <header className="site-header-wrapper">
      <div className="site-header">
        <Link href="/" className="site-logo" aria-label="Hafsa Arsalan Design Home">
          <img
            src="/images/FDC-SHAKA-LOGO.png"
            alt="Hafsa Arsalan Logo"
            width={104}
            height={74}
            style={{ height: '48px', width: 'auto' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Toggle (Asterisk / Close Morph) */}
        <button
          type="button"
          className={`menu-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="toggle-icon asterisk-icon"
            viewBox="0 0 512 512"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z" />
          </svg>
          <svg
            className="toggle-icon close-icon"
            viewBox="0 0 1000 1000"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z" />
          </svg>
        </button>
      </div>

      {/* Slide-Down Mobile Drawer / Dropdown */}
      <nav
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <ul className="mobile-nav-list">
          {navItems.map((item) => (
            <li key={item.label} className="mobile-nav-item">
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-arrow">↗</span>
                </a>
              ) : (
                <Link
                  href={item.href}
                  className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                  <span className="mobile-nav-indicator">➔</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Dimmed Backdrop when menu is open */}
      <div
        className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
    </header>
  );
}
