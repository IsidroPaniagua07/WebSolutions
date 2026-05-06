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
              Fill out the form and a member of our team will reach out within one
              business day to schedule your free strategy call.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                </svg>
                <span>hello@nvwebsolutions.com</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <span>Remote-First &mdash; Worldwide</span>
              </div>
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Response within one business day</span>
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
              <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
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
