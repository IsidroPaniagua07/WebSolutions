import Link from 'next/link';

const plans = [
  {
    tier: 'Starter',
    price: 149,
    desc: 'Perfect for new agents establishing their online presence.',
    included: [
      'Custom 5-page website',
      'MLS / IDX listing search',
      'Managed hosting & SSL',
      'Mobile-responsive design',
      'Lead capture forms',
      'Basic SEO setup',
    ],
    excluded: ['Neighborhood pages', 'Blog / content hub'],
  },
  {
    tier: 'Professional',
    price: 249,
    featured: true,
    desc: 'Ideal for active agents who want to dominate their market area.',
    included: [
      'Custom 10-page website',
      'MLS / IDX listing search',
      'Managed hosting & SSL',
      'Mobile-responsive design',
      'Lead capture & CRM integration',
      'Advanced local SEO',
      'Neighborhood pages (up to 5)',
      'Blog / content hub',
    ],
    excluded: [],
  },
  {
    tier: 'Team / Broker',
    price: 449,
    desc: 'Built for teams and brokerages with multiple agents and listings.',
    included: [
      'Fully custom website',
      'MLS / IDX + featured listings',
      'Priority hosting & SLA',
      'Mobile-responsive design',
      'CRM + automation integrations',
      'Full-service SEO campaign',
      'Unlimited neighborhood pages',
      'Agent roster & profiles',
    ],
    excluded: [],
  },
];

export default function Pricing() {
  return (
    <section className="section section--alt" id="pricing">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Simple, Transparent Plans</h2>
          <p className="section-subtitle">No surprise charges. No long-term contracts. Just results.</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.tier} className={`pricing-card${plan.featured ? ' pricing-card--featured' : ''}`}>
              {plan.featured && <div className="pricing-popular">Most Popular</div>}
              <div className="pricing-tier">{plan.tier}</div>
              <div className="pricing-price">
                <span className="pricing-currency">$</span>
                {plan.price}
                <span className="pricing-period">/mo</span>
              </div>
              <p className="pricing-desc">{plan.desc}</p>
              <ul className="pricing-list">
                {plan.included.map((f) => <li key={f} className="included">{f}</li>)}
                {plan.excluded.map((f) => <li key={f} className="not-included">{f}</li>)}
              </ul>
              <Link
                href="#contact"
                className={`btn btn-block${plan.featured ? ' btn-primary' : ' btn-outline'}`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
        <p className="pricing-note">
          All plans include a one-time $499 setup fee. No long-term contracts — cancel anytime.
          Setup fee waived for the first 10 sign-ups each month.
        </p>
      </div>
    </section>
  );
}
