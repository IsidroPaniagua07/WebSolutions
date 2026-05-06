import Link from 'next/link';

const features = [
  'Pre-configured for GLVAR MLS',
  'Custom design (not a template)',
  'Las Vegas local support team',
  'Managed hosting included',
  'Unlimited content updates',
  'Local SEO for LV neighborhoods',
  'No long-term contracts',
  'One-business-day response time',
];

const columns = [
  {
    name: 'DIY Builders',
    sub: 'Squarespace, Wix',
    featured: false,
    values: [false, false, false, false, false, false, true, false],
    note: 'You do everything yourself.',
  },
  {
    name: 'NVRealtorWeb',
    sub: 'That\'s us',
    featured: true,
    values: [true, true, true, true, true, true, true, true],
    note: null,
  },
  {
    name: 'National Providers',
    sub: 'Real Geeks, Agent Image',
    featured: false,
    values: [false, false, false, true, false, false, false, false],
    note: 'Not built for Las Vegas.',
  },
];

function Check({ yes }: { yes: boolean }) {
  return yes ? (
    <span className="comp-check comp-check--yes">
      <svg viewBox="0 0 20 20" fill="none"><path d="M4 10l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  ) : (
    <span className="comp-check comp-check--no">
      <svg viewBox="0 0 20 20" fill="none"><path d="M5 15L15 5M5 5l10 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="section" id="comparison">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Why NVRealtorWeb</div>
          <h2 className="section-title">How We Stack Up</h2>
          <p className="section-subtitle">
            Not all real estate website solutions are created equal — especially for Las Vegas.
          </p>
        </div>

        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th className="comp-feature-col" />
                {columns.map((col) => (
                  <th key={col.name} className={col.featured ? 'comp-col comp-col--featured' : 'comp-col'}>
                    {col.featured && <div className="comp-badge">Best for LV Realtors</div>}
                    <div className="comp-col-name">{col.name}</div>
                    <div className="comp-col-sub">{col.sub}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feat, i) => (
                <tr key={feat}>
                  <td className="comp-feature-label">{feat}</td>
                  {columns.map((col) => (
                    <td key={col.name} className={`comp-cell${col.featured ? ' comp-cell--featured' : ''}`}>
                      <Check yes={col.values[i]} />
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="comp-note-row">
                <td />
                {columns.map((col) => (
                  <td key={col.name} className={`comp-note-cell${col.featured ? ' comp-cell--featured' : ''}`}>
                    {col.featured
                      ? <Link href="#contact" className="btn btn-primary">Get Started</Link>
                      : <span className="comp-note">{col.note}</span>
                    }
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
