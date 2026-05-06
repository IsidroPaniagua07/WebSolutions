import Link from 'next/link';

const factors = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Number of Pages',
    body: 'A simple brochure site has different needs than a full business site with service pages, team profiles, a blog, and location pages.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.55l1.65-8.45H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'E-Commerce Needs',
    body: 'Selling products or services online? The number of products, payment methods, and checkout flows all factor into the scope of your project.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Third-Party Integrations',
    body: 'Connecting to booking systems, CRMs, payment processors, scheduling tools, or other software you already use affects the scope of work.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ongoing Support Level',
    body: 'From basic hosting and security updates to a fully managed service with unlimited content changes — we tailor it to what your business actually needs.',
  },
];

export default function GetQuote() {
  return (
    <section className="section section--alt" id="get-quote">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Every Business Is Different</h2>
          <p className="section-subtitle">
            We don&apos;t believe in one-size-fits-all plans. Tell us about your business and
            we&apos;ll put together a custom quote — usually within one business day.
          </p>
        </div>

        <div className="quote-factors">
          {factors.map((f) => (
            <div className="quote-factor" key={f.title}>
              <div className="service-icon">{f.icon}</div>
              <div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="quote-cta-box">
          <div className="quote-cta-text">
            <h3>Ready to find out what it costs for your situation?</h3>
            <p>
              Fill out our short contact form and a member of our Las Vegas team will follow up
              with a detailed proposal — no pressure, no obligation.
            </p>
          </div>
          <Link href="#contact" className="btn btn-primary btn-lg">
            Request Your Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
