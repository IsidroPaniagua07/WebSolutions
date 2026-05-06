import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="#home" aria-label="Webaton Web Solutions home" style={{ display: 'inline-block', marginBottom: 16 }}>
            <Logo />
          </Link>
          <p>
            Professional web design, managed hosting, and ongoing support for businesses
            worldwide. We build it, host it, and keep it running.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="#services">Custom Website Design</Link>
          <Link href="#services">Managed Hosting</Link>
          <Link href="#services">E-Commerce</Link>
          <Link href="#services">Local SEO</Link>
          <Link href="#services">Ongoing Maintenance</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="#about">About Us</Link>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#comparison">Why Webaton Web Solutions</Link>
          <Link href="#get-quote">Get a Quote</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h4>Industries</h4>
          <Link href="#areas">Retail &amp; E-Commerce</Link>
          <Link href="#areas">Professional Services</Link>
          <Link href="#areas">Health &amp; Wellness</Link>
          <Link href="#areas">Contractors &amp; Trades</Link>
          <Link href="#areas">Hospitality &amp; Food</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} Webaton Web Solutions. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
