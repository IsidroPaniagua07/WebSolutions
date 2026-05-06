'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (open && navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`nav-header${scrolled ? ' scrolled' : ''}`} ref={navRef}>
      <div className="container nav-inner">
        <Link href="#home" className="logo" onClick={close}>
          <span className="logo-mark">NV</span>
          <span className="logo-text">RealtorWeb</span>
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <Link href="#services" onClick={close}>Services</Link>
          <Link href="#how-it-works" onClick={close}>How It Works</Link>
          <Link href="#pricing" onClick={close}>Pricing</Link>
          <Link href="#testimonials" onClick={close}>Testimonials</Link>
          <Link href="#contact" className="btn btn-nav" onClick={close}>Get Started</Link>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
