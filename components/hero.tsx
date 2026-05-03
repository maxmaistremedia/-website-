"use client";

import { useState, useEffect } from "react";

const pills = ["Social Media", "Email Marketing", "Meta Ads", "Design", "Analytics"];

export function Hero() {
  const [activePill, setActivePill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePill((prev) => (prev + 1) % pills.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-6 pt-40 pb-16 gap-12 items-center md:px-12 lg:pt-40 lg:pb-26">
      <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
        <span className="inline-block bg-teal text-white text-xs tracking-widest uppercase px-4 py-1.5 rounded-full w-fit">
          Edmonton-Based - Digital Marketing Studio
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-[4.2rem] leading-tight text-dark">
          Marketing, <em className="text-orange italic">Maximized.</em>
        </h1>
        <p className="text-dark/65 text-[17px] leading-relaxed max-w-md">
          {"We're a boutique creative studio helping small businesses stand out online through social media, email marketing, and content that connects."}
        </p>
        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
          <a
            href="#services"
            className="bg-orange text-white px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-85 transition-opacity"
          >
            See What We Do
          </a>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center relative">
        {/* Decorative dot */}
        <div className="absolute w-32 h-32 bg-orange rounded-full -top-8 -right-5 opacity-30 z-0" />

        {/* Hero Card */}
        <div className="bg-teal rounded-3xl p-10 text-white w-full max-w-[380px] relative z-10">
          <div className="text-xs tracking-widest uppercase opacity-60 mb-2">
            Your all-in-one team
          </div>
          <div className="font-serif text-5xl font-bold mb-1">MMM.</div>
          <div className="text-sm opacity-70 mb-8">
            Social - Email - Creative - Ads
          </div>
          <div className="flex flex-wrap gap-2">
            {pills.map((pill, index) => (
              <span
                key={pill}
                className={`px-3.5 py-1.5 rounded-full text-xs border transition-all duration-300 ${
                  index === activePill
                    ? "bg-orange border-orange scale-105"
                    : "bg-white/15 border-white/20"
                }`}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
