import Link from 'next/link';

const options = [
  {
    label: 'DIY Website Builders',
    examples: 'Squarespace, Wix, WordPress.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    goodFor: 'Budget-conscious business owners who have time to learn the platform and enjoy managing their own tech.',
    tradeoffs: [
      'You handle all updates, security patches, and content changes yourself',
      'Templates are used by thousands of other businesses — hard to stand out',
      'No local expertise — general-purpose tools you adapt to fit your needs',
      'Support is for the platform, not your specific business goals',
    ],
    cta: null,
    featured: false,
  },
  {
    label: 'NV Web Solutions',
    examples: 'Built exclusively for Greater Las Vegas businesses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    goodFor: 'Las Vegas business owners who want a professional, fully managed online presence without the tech headaches.',
    tradeoffs: [
      'Custom-designed for your brand — not a template someone else is using',
      'We handle design, hosting, updates, and support — all in one',
      'Local Las Vegas team that knows your market, neighborhoods, and customers',
      'Dedicated account manager who picks up the phone when you call',
    ],
    cta: '#contact',
    featured: true,
  },
  {
    label: 'Large National Web Agencies',
    examples: 'Hibu, Web.com, Thrive Internet Marketing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    goodFor: 'Businesses that want a large agency with established processes and a broad range of digital marketing services.',
    tradeoffs: [
      'Broad service offerings — SEO, PPC, social, and web under one roof',
      'Support teams serve thousands of clients — you may feel like a number',
      'Not specifically tuned for the Las Vegas local market',
      'Often higher monthly cost with annual contracts required',
    ],
    cta: null,
    featured: false,
  },
];

export default function Comparison() {
  return (
    <section className="section" id="comparison">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Your Options</div>
          <h2 className="section-title">Choosing the Right Solution</h2>
          <p className="section-subtitle">
            There&apos;s no single right answer for every business. Here&apos;s an honest look at
            your main choices so you can decide what fits your situation.
          </p>
        </div>

        <div className="options-grid">
          {options.map((opt) => (
            <div key={opt.label} className={`option-card${opt.featured ? ' option-card--featured' : ''}`}>
              {opt.featured && <div className="option-badge">Our Approach</div>}
              <div className="option-icon">{opt.icon}</div>
              <h3 className="option-title">{opt.label}</h3>
              <p className="option-examples">{opt.examples}</p>

              <div className="option-section-label">
                {opt.featured ? 'What you get' : 'Best for'}
              </div>
              <p className="option-good-for">{opt.goodFor}</p>

              <div className="option-section-label">
                {opt.featured ? 'What\'s included' : 'Things to consider'}
              </div>
              <ul className="option-list">
                {opt.tradeoffs.map((t) => (
                  <li key={t} className={opt.featured ? 'option-list--positive' : ''}>
                    {t}
                  </li>
                ))}
              </ul>

              {opt.cta && (
                <Link href={opt.cta} className="btn btn-primary btn-block" style={{ marginTop: 'auto' }}>
                  Get a Free Quote
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
