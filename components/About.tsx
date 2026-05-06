const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
      </svg>
    ),
    title: 'Born & Raised in Las Vegas',
    body: "We're not a company parachuting in from out of state. We live here, work here, and understand the Greater Las Vegas market from Henderson to Summerlin.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Built for Realtors, Period',
    body: "We don't build sites for restaurants, lawyers, or dentists. Every tool, every integration, every design decision we make is shaped by the specific needs of real estate professionals.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'A Real Person Picks Up the Phone',
    body: 'When something needs attention, you reach a person — not a ticketing system, not an offshore help desk. Just a local team member who knows your site.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Obsessed with Results',
    body: "A beautiful site that doesn't generate leads is just an expensive business card. We care about traffic, inquiries, and ultimately closings — and we build accordingly.",
  },
];

export default function About() {
  return (
    <section className="section section--alt" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <div className="section-tag">Who We Are</div>
            <h2 className="section-title-left">
              Las Vegas Realtors Deserve Better Than Generic Web Solutions
            </h2>
            <p className="why-body">
              We started NVRealtorWeb because we watched talented agents lose business to
              competitors who simply had better websites. Cookie-cutter templates, broken MLS feeds,
              and support teams that don&apos;t know the difference between Henderson and North Las
              Vegas — Las Vegas Realtors deserved better.
            </p>
            <p className="why-body" style={{ marginTop: '-8px' }}>
              So we built a service focused entirely on one city and one profession. Everything we
              do — every feature, every integration, every support process — is designed around the
              Greater Las Vegas real estate market.
            </p>
          </div>
          <div className="about-values">
            {values.map((v) => (
              <div className="about-value" key={v.title}>
                <div className="about-value-icon">{v.icon}</div>
                <div>
                  <strong>{v.title}</strong>
                  <p>{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
