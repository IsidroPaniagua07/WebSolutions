const services = [
  {
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <rect x="4" y="8" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 16h40" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M14 26l5 5 10-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 27h6M32 32h4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Custom Website Design',
    body: "A site built around your brand and your goals — not a template that looks like your competitor's. Every design is unique to your business.",
    features: ['Bespoke design & branding', 'Mobile-first responsive layout', 'Fast-loading, SEO-ready code', 'Professional copywriting support'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M24 4L6 14v10c0 10.5 7.7 20.3 18 23 10.3-2.7 18-12.5 18-23V14L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Managed Hosting',
    body: 'Enterprise-grade hosting with daily backups, SSL certificates, and a 99.9% uptime SLA — all included, no extra setup required.',
    features: ['99.9% uptime SLA', 'Free SSL certificate', 'Daily automated backups', 'CDN for lightning-fast load times'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ongoing Maintenance',
    body: 'We handle every update, security patch, and content change. Submit a request and our team turns it around within one business day.',
    features: ['Unlimited content updates', 'Security patches & monitoring', 'Plugin & software updates', '1-business-day turnaround'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="9" cy="42" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="39" cy="42" r="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 12h6l4 20h22l4-14H16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'E-Commerce',
    body: 'Sell products or services directly from your website. We set up and manage your online store — payments, inventory, shipping, and all.',
    features: ['Stripe & PayPal integration', 'Product & inventory management', 'Mobile-optimized checkout', 'Abandoned cart & order emails'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 38l8-8 6 6 8-12 10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="12" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M35 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Local SEO',
    body: 'Rank higher on Google when customers search for businesses like yours. We optimize your site so local customers find you first — before they find your competition.',
    features: ['City & neighborhood targeting', 'Google Business Profile setup', 'Schema markup for local search', 'Monthly performance reports'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <path d="M8 12h32v24H8z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 36v4h16v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 22c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-2 3.5-4 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Expert Support',
    body: 'A real person answers your call or email. No ticket queues, no overseas help desks, no automated runaround.',
    features: ['Dedicated account manager', 'Phone & email support', 'Quarterly strategy reviews', 'Training & onboarding included'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Everything Your Business Needs Online</h2>
          <p className="section-subtitle">One partner. One monthly fee. Zero headaches.</p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className={`service-card${s.featured ? ' service-card--featured' : ''}`}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul className="service-features">
                {s.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
