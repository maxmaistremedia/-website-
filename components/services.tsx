"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    title: "Social Media Management",
    description:
      "Strategy, content planning, posting, and community management so your social channels never go silent.",
    tags: ["Instagram", "Facebook", "TikTok", "LinkedIn"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
    comingSoon: false,
  },
  {
    title: "Email Marketing",
    description:
      "Thoughtful email strategy, campaign creation, and branded newsletters designed to keep your audience engaged.",
    tags: ["Campaigns", "Brand Messaging", "Branded Designs"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    comingSoon: false,
  },
  {
    title: "Creative Design",
    description:
      "Scroll-stopping graphics, ad creatives, and branded assets that look consistent and professional everywhere.",
    tags: ["Ad Creatives", "Brand Kit", "Templates"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    comingSoon: false,
  },
  {
    title: "Meta Ads",
    description:
      "Paid social campaigns on Facebook and Instagram — strategy, targeting, creative, and ongoing optimization.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    comingSoon: false,
  },
  {
    title: "Reporting & Analytics",
    description:
      "Monthly reports with plain-English insights so you always know what's working and what's next.",
    tags: ["Monthly Reports", "Meta Insights", "Email Stats"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    comingSoon: false,
  },
  {
    title: "SEO & Paid Search",
    description:
      "Coming soon — organic SEO and Google Ads to round out your full digital presence.",
    tags: ["Coming Soon"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-dark fill-none stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    comingSoon: true,
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="bg-cream py-24 px-6 md:px-12">
      <div className="fade-in">
        <div className="text-xs tracking-widest uppercase text-orange mb-3">
          Services
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-dark mb-4">
          Everything your brand
          <br />
          needs in one place.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {services.map((service, index) => (
          <div
            key={index}
            className={`fade-in bg-white rounded-3xl p-8 border transition-colors ${
              service.comingSoon
                ? "border-dashed border-warm opacity-60"
                : "border-warm hover:border-orange"
            }`}
          >
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                service.comingSoon ? "bg-warm" : "bg-teal"
              }`}
            >
              {service.icon}
            </div>
            <h3 className="font-serif text-xl mb-2.5 text-dark">
              {service.title}
            </h3>
            <p className="text-sm text-dark/60 leading-relaxed">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-4">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-cream text-dark text-xs px-2.5 py-1 rounded-full opacity-80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
