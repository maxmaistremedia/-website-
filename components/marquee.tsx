const items = [
  "Social Media Management",
  "Email Marketing",
  "Meta Ads",
  "Creative Assets",
  "Brand Design",
  "Monthly Reporting",
  "Content Strategy",
];

export function Marquee() {
  return (
    <div className="bg-dark py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-12 animate-marquee">
        {/* First set */}
        {items.map((item, index) => (
          <span key={`first-${index}`} className="flex items-center gap-12">
            <span className="text-xs tracking-widest uppercase text-warm opacity-70">
              {item}
            </span>
            <span className="text-orange">&#10022;</span>
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, index) => (
          <span key={`second-${index}`} className="flex items-center gap-12">
            <span className="text-xs tracking-widest uppercase text-warm opacity-70">
              {item}
            </span>
            <span className="text-orange">&#10022;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
