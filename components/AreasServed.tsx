const industries = [
  { name: 'Retail & E-Commerce', desc: 'Boutiques, online stores, product brands' },
  { name: 'Professional Services', desc: 'Law, finance, consulting, accounting' },
  { name: 'Health & Wellness', desc: 'Clinics, gyms, therapists, med spas' },
  { name: 'Hospitality & Food', desc: 'Restaurants, cafes, hotels, caterers' },
  { name: 'Contractors & Trades', desc: 'Builders, plumbers, electricians, HVAC' },
  { name: 'Beauty & Lifestyle', desc: 'Salons, spas, stylists, photographers' },
  { name: 'Real Estate', desc: 'Agents, brokers, property managers' },
  { name: 'Automotive', desc: 'Dealerships, repair shops, detailing' },
  { name: 'Education & Coaching', desc: 'Tutors, trainers, online course creators' },
  { name: 'Non-Profits', desc: 'Charities, foundations, community orgs' },
  { name: 'Technology', desc: 'SaaS, agencies, tech startups' },
  { name: 'Events & Entertainment', desc: 'Venues, planners, performers, studios' },
];

export default function AreasServed() {
  return (
    <section className="section section--alt" id="areas">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Industries</div>
          <h2 className="section-title">We Work With Businesses of Every Kind</h2>
          <p className="section-subtitle">
            From solo service providers to multi-location brands — if you need a professional
            online presence, we have the experience to build it right.
          </p>
        </div>
        <div className="areas-grid">
          {industries.map((item) => (
            <div className="area-card" key={item.name}>
              <div className="area-pin">
                <svg viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 10h8M10 6v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <strong>{item.name}</strong>
                <span>{item.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="areas-note">
          Don&apos;t see your industry? <a href="#contact">Get in touch</a> — we work with businesses across every sector.
        </p>
      </div>
    </section>
  );
}
