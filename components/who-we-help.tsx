"use client";

import { useEffect, useRef } from "react";

const audiences = [
  {
    title: "Restaurants & Hospitality",
    description:
      "Beautiful content, email promos, and social presence that keeps tables full.",
  },
  {
    title: "Real Estate Agents",
    description:
      "Consistent posting, drip campaigns, and branded creative that builds trust.",
  },
  {
    title: "Coaches & Creators",
    description: "Social funnels, email nurture sequences, and content that converts.",
  },
  {
    title: "Local Small Business",
    description:
      "Hands-on help to get noticed, stay consistent, and look professional online.",
  },
];

export function WhoWeHelp() {
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
    <section ref={sectionRef} id="who" className="bg-white py-24 px-6 md:px-12">
      <div className="fade-in">
        <div className="text-lg tracking-widest uppercase text-orange mb-3">
          Who We Help
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-dark mb-4">
          Built for businesses
          <br />
          that are ready to grow.
        </h2>
        <p className="text-dark/60 text-base leading-relaxed max-w-lg">
          {"Whether you're just getting started or already have a following — we meet you where you are."}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="fade-in bg-cream rounded-2xl p-6 border-l-[3px] border-orange"
          >
            <h4 className="font-serif text-lg mb-1.5 text-dark">
              {audience.title}
            </h4>
            <p className="text-sm text-dark/60 leading-relaxed">
              {audience.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
