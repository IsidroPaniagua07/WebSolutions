'use client';

import { useState, type FormEvent } from 'react';

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSent(false), 6000);
    }, 1400);
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title-left">Let&apos;s Build Your Site</h2>
            <p>
              Fill out the form and a member of our Las Vegas team will reach out within one
              business day to schedule your free strategy call.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" fill="currentColor"/>
                </svg>
                <span>(702) 555-0100</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <span>hello@nvwebsolutions.com</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                <span>Las Vegas, NV 89101</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" placeholder="Maria" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" placeholder="Rodriguez" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="maria@yourbusiness.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="(702) 555-0100" />
            </div>
            <div className="form-group">
              <label htmlFor="plan">Interested In</label>
              <select id="plan" name="plan">
                <option value="">Select a service...</option>
                <option value="new-website">New Website Design</option>
                <option value="redesign">Website Redesign</option>
                <option value="ecommerce">E-Commerce Store</option>
                <option value="hosting">Managed Hosting &amp; Maintenance</option>
                <option value="seo">Local SEO</option>
                <option value="custom">Custom Quote</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Business</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What does your business do? Do you have an existing website? What are your goals?"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={sending}>
              {sending ? 'Sending...' : 'Send My Request'}
            </button>
            <p className="form-note">We respond within one business day. No spam, ever.</p>
            {sent && (
              <div className="form-success show">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                </svg>
                <span>Thank you! We&apos;ll be in touch within one business day.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
