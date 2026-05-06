const testimonials = [
  {
    initials: 'MR',
    name: 'Maria R.',
    role: 'REALTOR®, Summerlin',
    quote:
      'My old website was embarrassing. NVRealtorWeb built me something that actually looks like a top-producing agent\'s site. I got two leads in the first week from my new IDX search alone.',
  },
  {
    initials: 'JT',
    name: 'James T.',
    role: 'Broker, Henderson NV',
    quote:
      "The maintenance package is worth every penny. I've had zero downtime in 18 months, and whenever I need a change — a new listing page, a bio update — it's done the same day.",
  },
  {
    initials: 'SL',
    name: 'Sandra L.',
    role: 'REALTOR®, Henderson',
    quote:
      "I rank on page one for 'Henderson homes for sale' now. The SEO work they did completely changed my business. My phone rings from Google searches — that never happened before.",
  },
  {
    initials: 'DK',
    name: 'David K.',
    role: 'Team Lead, North Las Vegas',
    quote:
      "Switching from a national template provider saved my team $800/month and our new site looks ten times better. The MLS integration was live and accurate from day one.",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Client Stories</div>
          <h2 className="section-title">Realtors Who Made the Switch</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-stars">★★★★★</div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="testimonial-author">
                <div className="author-avatar">{t.initials}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
