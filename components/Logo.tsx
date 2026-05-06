interface LogoProps {
  variant?: 'full' | 'mark';
  className?: string;
}

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg className={className} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"
        aria-label="Webaton Web Solutions" role="img" style={{ width: 44, height: 44 }}>
        <rect width="44" height="44" rx="9" fill="#0f1e3d"/>
        {/* code brackets */}
        <path d="M14 16l-6 6 6 6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M30 16l6 6-6 6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26 13l-8 18" stroke="rgba(201,168,76,0.5)" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 240 44" fill="none" xmlns="http://www.w3.org/2000/svg"
      aria-label="Webaton Web Solutions" role="img" style={{ height: 44, width: 'auto' }}>
      {/* ── Icon mark ── */}
      <rect width="44" height="44" rx="9" fill="#0f1e3d"/>
      <path d="M14 16l-6 6 6 6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M30 16l6 6-6 6" stroke="#c9a84c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26 13l-8 18" stroke="rgba(201,168,76,0.5)" strokeWidth="2" strokeLinecap="round"/>

      {/* ── Wordmark ── */}
      <text x="56" y="24" fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="700" fontSize="16" letterSpacing="0" fill="#ffffff">Webaton</text>
      <line x1="126" y1="11" x2="126" y2="33" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5"/>
      <text x="133" y="24" fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="500" fontSize="13" fill="rgba(255,255,255,0.85)" letterSpacing="0.3">Web</text>
      <text x="133" y="38" fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="700" fontSize="13" fill="#c9a84c" letterSpacing="0.3">Solutions</text>
    </svg>
  );
}
