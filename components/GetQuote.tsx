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
    body: 'A simple agent site has different needs than a full brokerage with team profiles, community pages, and a blog.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'MLS & IDX Needs',
    body: 'Basic listing search, advanced map search, featured listings, community pages — each adds capability and value.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'CRM & Integrations',
    body: 'Connecting to Follow Up Boss, kvCORE, LionDesk, or other tools you already use affects the scope of work.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ongoing Support Level',
    body: 'From basic hosting and security updates to a fully managed service with unlimited content changes — we tailor it to you.',
  },
];

export default function GetQuote() {
  return (
    <section className="section section--alt" id="get-quote">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Every Realtor&apos;s Needs Are Different</h2>
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
