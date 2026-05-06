'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';

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
        <Link href="#home" onClick={close} aria-label="Webaton Web Solutions home">
          <Logo />
        </Link>

        <nav className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <Link href="#who-its-for" onClick={close}>Who It&apos;s For</Link>
          <Link href="#services" onClick={close}>Services</Link>
          <Link href="#guarantees" onClick={close}>Our Promises</Link>
          <Link href="#get-quote" onClick={close}>Get a Quote</Link>
          <Link href="#faq" onClick={close}>FAQ</Link>
          <Link href="#contact" className="btn btn-nav" onClick={close}>Free Strategy Call</Link>
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
