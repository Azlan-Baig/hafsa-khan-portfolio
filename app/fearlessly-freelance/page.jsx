'use client';

import { useState } from 'react';

export default function FearlesslyFreelancePage() {
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) setJoined(true);
  };

  return (
    <div style={{ padding: '80px 40px 140px', maxWidth: '1100px', margin: '0 auto' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '14px',
          color: 'var(--accent-orange)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          display: 'block',
          marginBottom: '20px',
        }}>
          SIGNATURE FREELANCE ACCELERATOR
        </span>

        <h1 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(44px, 7vw, 92px)',
          fontWeight: 900,
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginBottom: '24px',
        }}>
          THE FEARLESSLY FREELANCE COURSE
        </h1>

        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '28px',
          color: 'var(--accent-orange)',
          marginBottom: '32px',
        }}>
          COMING SOON — JOIN THE WAITLIST
        </p>
      </div>

      {/* Hero Visual */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <img
          src="/images/Freelance-Course.png"
          alt="Fearlessly Freelance Course Artwork"
          style={{ width: '100%', maxWidth: '780px', margin: '0 auto', borderRadius: '8px' }}
        />
      </div>

      {/* Narrative Section */}
      <section style={{
        maxWidth: '820px',
        margin: '0 auto 80px',
        fontSize: '19px',
        color: '#d0d0d0',
        lineHeight: 1.7,
      }}>
        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '36px',
          color: '#fff',
          marginBottom: '24px',
          lineHeight: 1.1,
        }}>
          HOW WILL THIS COURSE HELP YOU BECOME A FEARLESS FREELANCER?
        </h2>
        <p style={{ marginBottom: '24px' }}>
          Over the past 10 years, I’ve worked with top creative agencies, in-house art departments, and now successfully run my own freelance graphic design business, creating killer visual identities for brands all around the world.
        </p>
        <p style={{ marginBottom: '24px' }}>
          Throughout my career, I’ve developed a creative and business process that has helped me consistently create powerful logo designs, win premium clients, and price with unwavering confidence without second-guessing my worth.
        </p>
        <p style={{ marginBottom: '40px' }}>
          The Fearlessly Freelance course is the distillation of every single lesson, contract, pricing formula, and client strategy I’ve used to build a six-figure creative business on my own terms.
        </p>

        {/* Brand Artwork Icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '40px',
          margin: '60px 0',
          flexWrap: 'wrap',
        }}>
          <img src="/images/FF-SULL.png" alt="Skull mark" style={{ height: '70px', objectFit: 'contain' }} />
          <img src="/images/FF-logotype.png" alt="Logotype" style={{ height: '50px', objectFit: 'contain' }} />
          <img src="/images/FF-shaka.png" alt="Shaka mark" style={{ height: '70px', objectFit: 'contain' }} />
        </div>

        {/* Waitlist Box */}
        <div style={{
          backgroundColor: '#0a0a0a',
          border: '1px solid var(--accent-orange)',
          padding: '48px',
          borderRadius: '4px',
          textAlign: 'center',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '32px',
            color: '#fff',
            marginBottom: '16px',
          }}>
            BE THE FIRST TO KNOW WHEN DOORS OPEN
          </h3>
          <p style={{ color: '#aaa', fontSize: '16px', marginBottom: '28px' }}>
            Waitlist members get exclusive early-bird pricing and bonus 1-on-1 portfolio audit spots.
          </p>

          {joined ? (
            <div style={{
              padding: '20px',
              backgroundColor: '#111',
              color: 'var(--accent-orange)',
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
            }}>
              YOU'RE ON THE VIP LIST! TALK SOON.
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '520px',
              margin: '0 auto',
              flexWrap: 'wrap',
            }}>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                style={{ flex: '1 1 280px' }}
              />
              <button type="submit" className="btn-orange" style={{ flex: '0 0 auto' }}>
                JOIN WAITLIST
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
