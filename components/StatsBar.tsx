'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { target: 99,  suffix: '.9%',   label: 'Uptime Guaranteed' },
  { target: 14,  suffix: ' Days', label: 'Average Launch Time' },
  { target: 24,  suffix: '/7',    label: 'Support Available' },
  { target: 100, suffix: '%',     label: 'Las Vegas Focused' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <>
      <span className="stat-number" ref={ref}>{value}</span>
      <span className="stat-suffix">{suffix}</span>
    </>
  );
}

export default function StatsBar() {
  return (
    <section className="stats-bar">
      <div className="container stats-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <Counter target={s.target} suffix={s.suffix} />
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
