'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'How long does it take to launch my website?',
    a: 'Most sites are live within 14 business days of our strategy call. Complex projects with lots of custom pages, e-commerce, or integrations may take a bit longer — we\'ll give you a realistic timeline during our initial conversation.',
  },
  {
    q: 'What if I already have a website?',
    a: 'No problem. We\'ll review your current site, migrate any content you want to keep, and handle the domain transfer so there\'s no downtime. You won\'t have to deal with any of the technical side.',
  },
  {
    q: 'Do I own my website when I work with you?',
    a: 'Yes. Your content, your domain, your brand — all yours. We host and maintain the site on your behalf, but you\'re never locked in. If you ever decide to move on, we\'ll hand everything over cleanly.',
  },
  {
    q: 'What\'s included in a custom website?',
    a: 'Every project includes a bespoke design tailored to your brand, mobile-responsive layout, fast-loading code, on-page SEO setup, SSL certificate, contact forms, and Google Analytics integration. Additional features like e-commerce, booking systems, or third-party integrations are scoped per project.',
  },
  {
    q: 'What does "managed hosting" mean exactly?',
    a: 'It means we take care of everything infrastructure-related: server uptime, SSL certificates, daily backups, software updates, and security monitoring. You never need to log into a hosting control panel or worry about your site going down.',
  },
  {
    q: 'Can I make changes to my site myself?',
    a: 'You can — we\'ll set you up with access to update basic content like your bio, service descriptions, and blog posts. But most clients prefer to just send us the changes and let us handle it, usually within one business day.',
  },
  {
    q: 'What areas of Las Vegas do you serve?',
    a: 'We work with businesses across the entire Greater Las Vegas Valley — Henderson, Summerlin, North Las Vegas, Downtown Las Vegas, Green Valley, Boulder City, Laughlin, and all surrounding communities.',
  },
  {
    q: 'Do I need to provide my own domain name?',
    a: 'If you already have a domain, great — we\'ll connect it. If not, we\'ll help you choose and register one as part of the setup process. Either way, the domain will be registered in your name.',
  },
];

function Item({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <div className="faq-answer">
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section" id="faq">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Questions We Hear All the Time</h2>
          <p className="section-subtitle">
            Still on the fence? Here are answers to the questions we get most often.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <Item
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
