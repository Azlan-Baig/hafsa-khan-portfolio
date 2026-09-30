'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CoachingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    portfolio: '',
    biggestChallenge: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-container-responsive" style={{ maxWidth: '1100px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          display: 'block',
          marginBottom: '20px',
        }}>
          1-ON-1 PRIVATE COACHING
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(32px, 5.5vw, 76px)',
          fontWeight: 900,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '28px',
        }}>
          A COACHING PROGRAMME FOR LOGO &amp; BRAND DESIGNERS READY TO BECOME FULL-TIME CREATIVE PROFESSIONALS
        </h1>

        <p style={{
          fontSize: '19px',
          color: '#c4c4c4',
          maxWidth: '820px',
          margin: '0 auto 40px',
          lineHeight: 1.6,
        }}>
          This isn’t a course. This is you and me, side by side, solving the real stuff that’s been holding you and your design business back.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
        gap: '60px',
        alignItems: 'start',
      }}>
        {/* Left Column: Image & Details */}
        <div>
          <img
            src="/images/cj_cawley_failing.jpg"
            alt="1:1 Coaching session"
            style={{ width: '100%', borderRadius: '4px', border: '1px solid #222', marginBottom: '32px' }}
          />

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: '#fff', marginBottom: '16px' }}>
            WHAT WE TACKLE IN COACHING:
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: '#ccc', fontSize: '17px' }}>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-orange)' }}>➔</span>
              Live portfolio and case study teardowns to maximize perceived value
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-orange)' }}>➔</span>
              Accurate project pricing so you never leave thousands on the table
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-orange)' }}>➔</span>
              Client communication scripts to stand your ground with confidence
            </li>
            <li style={{ display: 'flex', gap: '12px' }}>
              <span style={{ color: 'var(--accent-orange)' }}>➔</span>
              Personalized positioning strategy to attract dream high-budget clients
            </li>
          </ul>
        </div>

        {/* Right Column: Application Form */}
        <div className="form-card-responsive">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', color: '#fff', marginBottom: '24px' }}>
            APPLY FOR 1-ON-1 COACHING
          </h2>

          {submitted ? (
            <div style={{ padding: '32px 16px', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', color: 'var(--accent-orange)', marginBottom: '12px' }}>
                APPLICATION RECEIVED!
              </h3>
              <p style={{ color: '#ccc', fontSize: '17px', lineHeight: 1.6 }}>
                Thank you for applying. I review applications weekly and will reach out via email to arrange a preliminary call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Portfolio / Website Link *</label>
                <input
                  type="url"
                  required
                  placeholder="https://yourportfolio.com"
                  value={formData.portfolio}
                  onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">What is currently holding you back in your business? *</label>
                <textarea
                  required
                  placeholder="Tell me about your current revenue, client struggles, or pricing challenges..."
                  value={formData.biggestChallenge}
                  onChange={(e) => setFormData({ ...formData, biggestChallenge: e.target.value })}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-orange" style={{ width: '100%', marginTop: '12px' }}>
                SUBMIT APPLICATION
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
