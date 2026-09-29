'use client';

import { useState } from 'react';

export default function WorkWithMePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandName: '',
    deadline: '<1 Month',
    budget: '£3000 - £5000',
    referral: 'Instagram',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '80px 40px 140px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '60px',
        alignItems: 'start',
      }}>
        {/* Left Column: Heading & Info */}
        <div>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(44px, 6vw, 84px)',
            fontWeight: 900,
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}>
            LET'S WORK TOGETHER
          </h1>
          <p style={{
            fontSize: '19px',
            color: '#c4c4c4',
            lineHeight: 1.6,
            marginBottom: '40px',
          }}>
            Are you ready to make something amazing together? Please fill out the form to arrange a ‘Say Hello Chat’ with me and we can talk about your project. I typically reply to enquiries within 48 hours.
          </p>
          <img
            src="/images/cj_cawley_failing-1024x1024.jpg"
            alt="Studio working session"
            style={{
              width: '100%',
              maxWidth: '480px',
              borderRadius: '4px',
              border: '1px solid #222',
            }}
          />
        </div>

        {/* Right Column: Inquiry Form */}
        <div style={{
          backgroundColor: '#0c0c0c',
          border: '1px solid #222',
          padding: '48px',
          borderRadius: '4px',
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '36px',
                color: 'var(--accent-orange)',
                marginBottom: '16px',
              }}>
                THANK YOU!
              </h3>
              <p style={{ fontSize: '18px', color: '#dedede', lineHeight: 1.6 }}>
                Your project inquiry has been received. I will review your details and get back to you within 48 hours!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="form-input"
                  placeholder="your.email@company.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Brand / Product Name *</label>
                <input
                  type="text"
                  required
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="form-input"
                  placeholder="e.g. Acme Studio"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Deadline</label>
                <select
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="form-select"
                >
                  <option value="<1 Month">&lt;1 Month</option>
                  <option value="1-3 Months">1-3 Months</option>
                  <option value="3-6 Months">3-6 Months</option>
                  <option value="6+ Months">6+ Months</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Budget</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="form-select"
                >
                  <option value="£3000 - £5000">£3000 - £5000</option>
                  <option value="£5000 - £7000">£5000 - £7000</option>
                  <option value="£7000 - £10,000">£7000 - £10,000</option>
                  <option value="£10,000+">£10,000+</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">How did you find me?</label>
                <select
                  value={formData.referral}
                  onChange={(e) => setFormData({ ...formData, referral: e.target.value })}
                  className="form-select"
                >
                  <option value="Instagram">Instagram</option>
                  <option value="TikTok">TikTok</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Google">Google</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Referral">Referral</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Brief Project Description *</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="form-textarea"
                  placeholder="Tell me a bit about what you need and your vision..."
                />
              </div>

              <button
                type="submit"
                className="btn-orange"
                style={{ width: '100%', marginTop: '16px' }}
              >
                SUBMIT INQUIRY
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
