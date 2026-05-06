import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-inner">
        <div className="cta-text">
          <h2>Your Next Customer Could Find You Online Tonight.</h2>
          <p>
            Let&apos;s build you a site that works around the clock — capturing leads while you
            focus on running your business and doing what you do best.
          </p>
        </div>
        <div className="cta-actions">
          <Link href="#contact" className="btn btn-primary btn-lg">Schedule a Free Strategy Call</Link>
          <a href="tel:+17025550100" className="btn btn-ghost-light btn-lg">(702) 555-0100</a>
        </div>
      </div>
    </section>
  );
}
