import Link from 'next/link';

const personas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Small Businesses',
    title: 'Get Online. Get Customers. Stop Overpaying.',
    body: "You run a great business — your website should reflect that. We build you something professional and handle all the tech, so you never have to think about it again.",
    points: [
      'Live in under 14 days',
      'Mobile-friendly, fast-loading design',
      'Google Business Profile setup included',
      'Unlimited content updates',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <circle cx="20" cy="21" r="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 001.95-1.55l1.65-8.45H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'E-Commerce',
    title: 'Sell Online, 24 Hours a Day.',
    body: "From a simple product catalog to a full online store with payments, inventory, and shipping — we build e-commerce sites that are easy for you to manage and easy for customers to buy from.",
    points: [
      'Secure online payments (Stripe, PayPal)',
      'Product management & inventory',
      'Abandoned cart recovery',
      'Mobile-optimized checkout',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 12v3M9 13.5h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Professional Services',
    title: 'A Website That Earns Your Clients’ Trust Before You Even Meet.',
    body: "Law firms, medical practices, consultants, financial advisors — credibility starts online. We build polished, professional sites that position you as the expert you are.",
    points: [
      'Appointment booking & contact forms',
      'Service pages built for local SEO',
      'Client portal or resource pages',
      'HIPAA-friendly contact options available',
    ],
  },
];

export default function Personas() {
  return (
    <section className="section section--alt" id="who-its-for">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Who It&apos;s For</div>
          <h2 className="section-title">Built for Businesses of Every Kind</h2>
          <p className="section-subtitle">
            Whether you&apos;re opening your first location or scaling an established brand, we have a solution built around your goals.
          </p>
        </div>
        <div className="personas-grid">
          {personas.map((p) => (
            <div className="persona-card" key={p.tag}>
              <div className="persona-icon">{p.icon}</div>
              <div className="persona-tag">{p.tag}</div>
              <h3 className="persona-title">{p.title}</h3>
              <p className="persona-body">{p.body}</p>
              <ul className="persona-points">
                {p.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <Link href="#contact" className="btn btn-outline persona-cta">
                Talk to Us About Your Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
