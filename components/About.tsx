const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Remote-First, Worldwide',
    body: "We work with businesses across the globe. Wherever you are, our team is available, responsive, and fully equipped to handle your project from start to finish.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Built for Local Businesses',
    body: "We focus on businesses that serve their communities. Every design decision, every feature, and every support process is shaped around the needs of real business owners — not a generic template.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'A Real Person Picks Up the Phone',
    body: 'When something needs attention, you reach a person — not a ticketing system, not an offshore help desk. Just a dedicated team member who knows your site.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Obsessed with Results',
    body: "A beautiful site that doesn't generate leads is just an expensive business card. We care about traffic, inquiries, and new customers — and we build accordingly.",
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
              Every Business Deserves More Than a Generic Website
            </h2>
            <p className="why-body">
              We started Webaton Web Solutions because we watched great businesses get overlooked
              online while competitors with better websites took their customers. Cookie-cutter
              templates, unreliable hosting, and support teams that treat you like a ticket
              number — business owners deserved better.
            </p>
            <p className="why-body" style={{ marginTop: '-8px' }}>
              So we built a service focused entirely on you. Everything we do — every design,
              every integration, every support interaction — is built around helping your
              business grow online.
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
