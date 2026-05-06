const services = [
  {
    featured: true,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="12" width="40" height="30" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M4 20h40" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="12" cy="16" r="2" fill="currentColor"/>
        <circle cx="20" cy="16" r="2" fill="currentColor"/>
        <path d="M16 30l4 4 8-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'MLS / IDX Integration',
    body: 'Live Las Vegas MLS listings embedded directly into your site. Buyers search properties without ever leaving your brand.',
    features: ['Real-time listing updates', 'Advanced search & map view', 'Lead capture on every listing', 'Neighborhood market data'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 44h16M24 36v8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M14 22l6-6 4 4 6-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Website Design',
    body: "A professionally designed website built around your personal brand — not a generic template that looks like every other agent.",
    features: ['Bespoke design & branding', 'Mobile-first responsive layout', 'Fast-loading, SEO-ready code', 'Professional photography support'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 4L6 14v10c0 10.5 7.7 20.3 18 23 10.3-2.7 18-12.5 18-23V14L24 4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M16 24l5 5 11-10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Managed Hosting',
    body: 'Enterprise-grade hosting with daily backups, SSL certificates, and a 99.9% uptime SLA — all included in your plan.',
    features: ['99.9% uptime SLA', 'Free SSL certificate', 'Daily automated backups', 'CDN for lightning speed'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ongoing Maintenance',
    body: 'We handle every update, security patch, and content change. Submit a request and we turn it around within one business day.',
    features: ['Unlimited content updates', 'Security patches & monitoring', 'Plugin & software updates', '1-business-day turnaround'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 38l8-8 6 6 8-12 10 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="38" cy="12" r="6" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M35 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Local SEO Optimization',
    body: 'Rank higher on Google for Las Vegas real estate searches. We optimize your site so buyers and sellers find you first.',
    features: ['Las Vegas neighborhood targeting', 'Google Business Profile setup', 'Schema markup for listings', 'Monthly performance reports'],
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12h32v24H8z" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M16 36v4h16v-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M20 22c0-2.2 1.8-4 4-4s4 1.8 4 4c0 2.2-2 3.5-4 4.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="1.5" fill="currentColor"/>
      </svg>
    ),
    title: 'Expert Support',
    body: 'A real person answers your call or email. No ticket queues. No offshore support. Just Las Vegas-based experts who know your market.',
    features: ['Dedicated account manager', 'Phone & email support', 'Quarterly strategy reviews', 'Training & onboarding'],
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">What We Do</div>
          <h2 className="section-title">Everything a Las Vegas Realtor Needs Online</h2>
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
