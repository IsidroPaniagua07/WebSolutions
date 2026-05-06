import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">Exclusively for Greater Las Vegas Realtors</div>
        <h1 className="hero-title">
          Turn Your Website Into<br />
          <span className="gradient-text">Your Best Lead Source.</span>
        </h1>
        <p className="hero-subtitle">
          We design, build, and fully manage MLS-powered websites for Las Vegas Realtors — with built-in lead capture, local SEO, and a team that handles everything so you stay focused on closing.
        </p>
        <div className="hero-actions">
          <Link href="#contact" className="btn btn-primary btn-lg">Get Your Free Strategy Call</Link>
          <Link href="#who-its-for" className="btn btn-ghost btn-lg">Find Your Fit</Link>
        </div>
        <div className="hero-trust">
          <span>30-Day Money-Back Guarantee</span>
          <span className="divider">•</span>
          <span>Free Site Migration</span>
          <span className="divider">•</span>
          <span>No Long-Term Contracts</span>
        </div>
      </div>
      <div className="hero-scroll-hint">
        <span>Scroll to explore</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
