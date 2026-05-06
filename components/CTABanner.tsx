import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>Ready to Dominate Your Las Vegas Market Online?</h2>
          <p>Be among the first Las Vegas Realtors to launch with NVRealtorWeb — introductory pricing available now.</p>
        </div>
        <div className="cta-actions">
          <Link href="#contact" className="btn btn-primary btn-lg">Schedule a Free Call</Link>
          <a href="tel:+17025550100" className="btn btn-ghost-light btn-lg">(702) 555-0100</a>
        </div>
      </div>
    </section>
  );
}
