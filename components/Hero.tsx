import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">Las Vegas Real Estate Web Experts</div>
        <h1 className="hero-title">
          Your Clients Are Searching.<br />
          <span className="gradient-text">Is Your Website Ready?</span>
        </h1>
        <p className="hero-subtitle">
          We build stunning, MLS-powered websites exclusively for Realtors in the Greater Las Vegas
          Valley — then host and maintain everything so you can focus on closing deals.
        </p>
        <div className="hero-actions">
          <Link href="#contact" className="btn btn-primary btn-lg">Get Your Free Consultation</Link>
          <Link href="#services" className="btn btn-ghost btn-lg">See What&apos;s Included</Link>
        </div>
        <div className="hero-trust">
          <span>IDX / MLS Integrated</span>
          <span className="divider">•</span>
          <span>99.9% Uptime Guarantee</span>
          <span className="divider">•</span>
          <span>Las Vegas Local Team</span>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
