'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section style={{
      padding: '120px 24px',
      backgroundColor: '#050505',
      borderTop: '1px solid #1a1a1a',
      borderBottom: '1px solid #1a1a1a',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(32px, 5vw, 64px)',
          fontWeight: 900,
          marginBottom: '16px',
          color: '#ffffff'
        }}>
          Join the CLUB FOR EXCLUSIVE CONTENT
        </h2>
        <h3 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(20px, 3vw, 28px)',
          color: 'var(--accent-orange)',
          marginBottom: '24px'
        }}>
          (No, not that kind)
        </h3>
        <p style={{
          fontSize: '18px',
          color: '#b0b0b0',
          lineHeight: 1.6,
          marginBottom: '40px',
          maxWidth: '680px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          The Fellow Designers Club is your behind-the-scenes access to how I build and run a kick-ass design business. Full of wins, fails, lessons, tools, and stories that actually help you become a better creative.
        </p>

        {submitted ? (
          <div style={{
            padding: '24px',
            backgroundColor: '#111',
            border: '2px solid var(--accent-orange)',
            color: '#fff',
            fontFamily: 'var(--font-heading)',
            fontSize: '22px'
          }}>
            WELCOME TO THE FELLOW DESIGNERS CLUB! CHECK YOUR INBOX SOON.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="form-input"
              style={{ textAlign: 'center' }}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input"
              style={{ textAlign: 'center' }}
            />
            <button
              type="submit"
              className="btn-orange"
              style={{ width: '100%', marginTop: '8px' }}
            >
              SUBMIT
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
