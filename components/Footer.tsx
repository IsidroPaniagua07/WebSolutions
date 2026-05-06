import Link from 'next/link';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link href="#home" aria-label="NVRealtorWeb home" style={{ display: 'inline-block', marginBottom: 16 }}>
            <Logo />
          </Link>
          <p>
            Premier web solutions for Realtors in the Greater Las Vegas Valley. MLS integration,
            custom design, managed hosting, and expert support — all in one.
          </p>
        </div>
        <div className="footer-col">
          <h4>Services</h4>
          <Link href="#services">MLS / IDX Integration</Link>
          <Link href="#services">Website Design</Link>
          <Link href="#services">Managed Hosting</Link>
          <Link href="#services">SEO Optimization</Link>
          <Link href="#services">Maintenance Plans</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="#how-it-works">How It Works</Link>
          <Link href="#get-quote">Get a Quote</Link>
          <Link href="#contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <h4>Las Vegas Areas</h4>
          <Link href="#">Henderson</Link>
          <Link href="#">Summerlin</Link>
          <Link href="#">North Las Vegas</Link>
          <Link href="#">Boulder City</Link>
          <Link href="#">Green Valley</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {new Date().getFullYear()} NVRealtorWeb. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
