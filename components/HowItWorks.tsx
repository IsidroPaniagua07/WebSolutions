const steps = [
  {
    number: '01',
    title: 'Strategy Call',
    body: "We learn about your brand, target neighborhoods, and goals. No forms — just a 30-minute conversation with our Las Vegas team.",
  },
  {
    number: '02',
    title: 'Design & Build',
    body: 'We design your site, configure your MLS feed, and set up all lead capture tools. You review and approve before anything goes live.',
  },
  {
    number: '03',
    title: 'Launch & Grow',
    body: "Your site goes live. We submit to Google, set up your analytics, and then maintain everything so you stay focused on selling.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section section--alt" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">The Process</div>
          <h2 className="section-title">From Sign-Up to Live in 14 Days</h2>
          <p className="section-subtitle">
            We&apos;ve streamlined our process so your site launches fast without sacrificing quality.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step, i) => (
            <>
              <div className="step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" key={`conn-${i}`} />}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
