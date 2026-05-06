interface LogoProps {
  /** 'full' shows mark + wordmark, 'mark' shows icon only */
  variant?: 'full' | 'mark';
  className?: string;
}

export default function Logo({ variant = 'full', className = '' }: LogoProps) {
  if (variant === 'mark') {
    return (
      <svg
        className={className}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="NVRealtorWeb"
        role="img"
        style={{ width: 44, height: 44 }}
      >
        <rect width="44" height="44" rx="9" fill="#0f1e3d" />
        {/* roof */}
        <path d="M22 7 L37 18 L35 18 L35 37 L9 37 L9 18 L7 18 Z" fill="#c9a84c" />
        {/* door */}
        <rect x="17" y="26" width="10" height="11" rx="1.5" fill="#0f1e3d" />
        {/* window */}
        <rect x="13" y="22" width="6" height="5" rx="1" fill="#0f1e3d" opacity="0.7" />
        <rect x="25" y="22" width="6" height="5" rx="1" fill="#0f1e3d" opacity="0.7" />
      </svg>
    );
  }

  return (
    <svg
      className={className}
      viewBox="0 0 220 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NVRealtorWeb"
      role="img"
      style={{ height: 44, width: 'auto' }}
    >
      {/* ── Icon mark ── */}
      <rect width="44" height="44" rx="9" fill="#0f1e3d" />
      <path d="M22 7 L37 18 L35 18 L35 37 L9 37 L9 18 L7 18 Z" fill="#c9a84c" />
      <rect x="17" y="26" width="10" height="11" rx="1.5" fill="#0f1e3d" />
      <rect x="13" y="22" width="6" height="5" rx="1" fill="#0f1e3d" opacity="0.7" />
      <rect x="25" y="22" width="6" height="5" rx="1" fill="#0f1e3d" opacity="0.7" />

      {/* ── Wordmark ── */}
      {/* "NV" bold */}
      <text
        x="56"
        y="30"
        fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="800"
        fontSize="22"
        letterSpacing="-0.5"
        fill="#ffffff"
      >
        NV
      </text>
      {/* separator line */}
      <line x1="96" y1="11" x2="96" y2="33" stroke="#c9a84c" strokeWidth="1.5" opacity="0.5" />
      {/* "Realtor" regular weight */}
      <text
        x="103"
        y="24"
        fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="500"
        fontSize="13"
        fill="rgba(255,255,255,0.85)"
        letterSpacing="0.3"
      >
        Realtor
      </text>
      {/* "Web" gold */}
      <text
        x="103"
        y="38"
        fontFamily="var(--font-inter, Inter, system-ui, sans-serif)"
        fontWeight="700"
        fontSize="13"
        fill="#c9a84c"
        letterSpacing="0.3"
      >
        Web
      </text>
    </svg>
  );
}
