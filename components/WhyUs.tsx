const points = [
  {
    title: 'Deep Local Market Knowledge',
    body: 'We know Henderson, Summerlin, the Strip corridor, and every neighborhood in between. Your content and SEO will speak directly to Las Vegas customers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Everything Under One Roof',
    body: 'Design, development, hosting, maintenance, and SEO — all handled by one local team. No juggling vendors, no finger-pointing when something breaks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: 'Results You Can Measure',
    body: 'Every client gets a monthly report showing traffic, lead volume, and search ranking improvements — so you always know what your website is doing for your business.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" fill="currentColor"/>
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container why-grid">
        <div className="why-media">
          <div className="why-image-frame">
            <div className="why-image-placeholder">
              <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="300" fill="#0f1e3d"/>
                <path d="M50 200 L100 130 L150 170 L200 100 L250 150 L300 90 L350 120" stroke="#c9a84c" strokeWidth="3" fill="none"/>
                <circle cx="100" cy="130" r="5" fill="#c9a84c"/>
                <circle cx="200" cy="100" r="5" fill="#c9a84c"/>
                <circle cx="300" cy="90" r="5" fill="#c9a84c"/>
                <text x="200" y="260" textAnchor="middle" fill="#4a6fa5" fontSize="14" fontFamily="Inter">Greater Las Vegas Valley</text>
                <rect x="160" y="220" width="80" height="25" rx="4" fill="#1a2744"/>
              </svg>
            </div>
            <div className="why-badge">
              <strong>Las Vegas</strong>
              <span>Local Experts</span>
            </div>
          </div>
        </div>
        <div className="why-content">
          <div className="section-tag">Why Choose Us</div>
          <h2 className="section-title-left">We&apos;re Las Vegas Specialists — Not a Generic Agency</h2>
          <p className="why-body">
            We&apos;re not a generalist agency trying to serve everyone from coast to coast. Our
            entire business is built around the Greater Las Vegas market — from Henderson to
            Summerlin, from North Las Vegas to Boulder City.
          </p>
          <div className="why-points">
            {points.map((p) => (
              <div className="why-point" key={p.title}>
                <div className="why-icon">{p.icon}</div>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
