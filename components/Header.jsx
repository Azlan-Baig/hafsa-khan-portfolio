'use client';

import { useState } from 'react';
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

  const isActive = (href) => {
    if (href === '/case-studies') {
      return pathname === '/case-studies' || pathname.startsWith('/case-studies/') || ['/mike-lane', '/rabbit-foot', '/dosti', '/nerds', '/pickled-pig'].includes(pathname);
    }
    return pathname === href;
  };

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="CJ Cawley Design Home">
        <img
          src="/images/FDC-SHAKA-LOGO.png"
          alt="CJ Cawley Logo"
          width={104}
          height={74}
        />
      </Link>

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

      {/* Mobile Hamburger / Asterisk button */}
      <button
        type="button"
        className="menu-toggle-btn"
        onClick={() => setMobileMenuOpen(true)}
        aria-label="Open Navigation Menu"
      >
        <svg width="24" height="24" viewBox="0 0 512 512" fill="currentColor">
          <path d="M478.21 334.093L336 256l142.21-78.093c11.795-6.477 15.961-21.384 9.232-33.037l-19.48-33.741c-6.728-11.653-21.72-15.499-33.227-8.523L296 186.718l3.475-162.204C299.763 11.061 288.937 0 275.48 0h-38.96c-13.456 0-24.283 11.061-23.994 24.514L216 186.718 77.265 102.607c-11.506-6.976-26.499-3.13-33.227 8.523l-19.48 33.741c-6.728 11.653-2.562 26.56 9.233 33.037L176 256 33.79 334.093c-11.795 6.477-15.961 21.384-9.232 33.037l19.48 33.741c6.728 11.653 21.721 15.499 33.227 8.523L216 325.282l-3.475 162.204C212.237 500.939 223.064 512 236.52 512h38.961c13.456 0 24.283-11.061 23.995-24.514L296 325.282l138.735 84.111c11.506 6.976 26.499 3.13 33.227-8.523l19.48-33.741c6.728-11.653 2.563-26.559-9.232-33.036z"/>
        </svg>
      </button>

      {/* Fullscreen Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay">
          <button
            type="button"
            className="mobile-menu-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Navigation Menu"
          >
            ✕
          </button>
          {navItems.map((item) => (
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`mobile-nav-link ${isActive(item.href) ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      )}
    </header>
  );
}
