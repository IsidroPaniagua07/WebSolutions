const guarantees = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '30-Day Satisfaction Guarantee',
    body: "If you're not happy with your site within the first 30 days, we'll refund everything — no questions asked.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 10l2.5 2.5L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Free Site Migration',
    body: "Already have a website? We'll move everything over — content, domain, and files — at zero cost and with zero downtime.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: '1-Business-Day Support',
    body: "Every request — content update, bug fix, or question — gets a response from our team within one business day.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
    title: '99.9% Uptime SLA',
    body: "Your site is monitored around the clock. If we ever fall short of our uptime commitment, we credit your account automatically.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'No Long-Term Contracts',
    body: "Month-to-month, always. We earn your business every single month. If you ever want to leave, we'll hand everything over cleanly.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 015.13 12.8a19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'You Own Everything',
    body: "Your domain, your content, your data. Everything is registered and stored in your name — we never hold your site hostage.",
  },
];

export default function Guarantees() {
  return (
    <section className="section" id="guarantees">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Our Promises</div>
          <h2 className="section-title">We Put It in Writing</h2>
          <p className="section-subtitle">
            These aren&apos;t marketing talking points — they&apos;re commitments we stand behind for every client.
          </p>
        </div>
        <div className="guarantees-grid">
          {guarantees.map((g) => (
            <div className="guarantee-card" key={g.title}>
              <div className="guarantee-icon">{g.icon}</div>
              <div>
                <h3>{g.title}</h3>
                <p>{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
