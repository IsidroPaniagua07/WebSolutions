const areas = [
  { name: 'Henderson', desc: 'Anthem, Seven Hills, Green Valley' },
  { name: 'Summerlin', desc: 'The Ridges, Red Rock Canyon area' },
  { name: 'North Las Vegas', desc: 'Aliante, Eldorado, Craig Ranch' },
  { name: 'Downtown Las Vegas', desc: 'Arts District, Symphony Park' },
  { name: 'Green Valley', desc: 'Green Valley Ranch, Cadence' },
  { name: 'Spring Valley', desc: 'Near Boca Park, S. Rainbow area' },
  { name: 'Boulder City', desc: 'Historic downtown, lake proximity' },
  { name: 'Laughlin', desc: 'Riverfront communities, retirement' },
  { name: 'Enterprise', desc: 'Southern Highlands, Rhodes Ranch' },
  { name: 'Whitney', desc: 'East Las Vegas, near UNLV' },
  { name: 'Paradise', desc: 'The Strip corridor, near airport' },
  { name: 'Winchester', desc: 'Central valley, established neighborhoods' },
];

export default function AreasServed() {
  return (
    <section className="section section--alt" id="areas">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">Coverage</div>
          <h2 className="section-title">We Know Every Corner of the Valley</h2>
          <p className="section-subtitle">
            From the luxury high-rises on the Strip to the master-planned communities of
            Henderson — if your business is in the Greater Las Vegas area, we&apos;ve got you covered.
          </p>
        </div>
        <div className="areas-grid">
          {areas.map((area) => (
            <div className="area-card" key={area.name}>
              <div className="area-pin">
                <svg viewBox="0 0 20 20" fill="none">
                  <path d="M10 1C6.69 1 4 3.69 4 7c0 4.38 6 12 6 12s6-7.62 6-12c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1110 4.5a2.5 2.5 0 010 5z" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <strong>{area.name}</strong>
                <span>{area.desc}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="areas-note">
          Don&apos;t see your area? <a href="#contact">Get in touch</a> — if your business is in the Las Vegas Valley, we can work with you.
        </p>
      </div>
    </section>
  );
}
