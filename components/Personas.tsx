import Link from 'next/link';

const personas = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Solo Agents',
    title: 'Focus on Selling. Let Us Handle the Tech.',
    body: "You didn't get your license to become a webmaster. We build your site, keep it running, and make updates whenever you need them — so your only job is closing deals.",
    points: [
      'Up and running in under 14 days',
      'Unlimited content change requests',
      'IDX search to capture buyer leads 24/7',
      'Google-optimized for your farm areas',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    tag: 'Teams & Brokers',
    title: 'One Brand. Every Agent. Zero Chaos.',
    body: "Your team needs a cohesive online presence — individual agent profiles, shared listings, and a brokerage brand that looks like it belongs in the top 1%. We build and manage it all.",
    points: [
      'Agent roster with individual profile pages',
      'Centralized IDX search for the whole team',
      'Consistent branding across all profiles',
      'Priority support for high-volume teams',
    ],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
    tag: 'Luxury Market',
    title: 'Your Listings Deserve a Stage That Matches Them.',
    body: "Selling in Summerlin, The Ridges, or MacDonald Highlands? Your website should feel as premium as the properties you represent — with full-screen photography, video, and virtual tour support.",
    points: [
      'Full-screen video & photo hero sections',
      'Featured listing showcases with rich media',
      'Elegant design built for high-end buyers',
      'Single property pages for signature listings',
    ],
  },
];

export default function Personas() {
  return (
    <section className="section section--alt" id="who-its-for">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Who It&apos;s For</div>
          <h2 className="section-title">Built for Every Kind of Las Vegas Realtor</h2>
          <p className="section-subtitle">
            Whether you&apos;re a solo agent just starting out or a luxury broker running a full team, we have a solution tailored to your situation.
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
                Talk to Us About Your Situation
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
