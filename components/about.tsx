"use client";

import { useEffect, useRef } from "react";

const team = [
  {
    initials: "CM",
    name: "Chalci Maxwath",
    role: "Co-founder - Ads & Analytics",
  },
  {
    initials: "ML",
    name: "Maria LeMaistre",
    role: "Co-founder - Creative & Strategy",
  },
];

export function About() {
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
    <section ref={sectionRef} id="about" className="bg-dark text-white py-24 px-6 md:px-12">
      <div className="fade-in">
        <div className="text-lg tracking-widest uppercase text-orange mb-3">
          About Us
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-white mb-4">
          Two creatives.
          <br />
          One mission.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-start">
        <div className="fade-in text-white/75 text-base leading-relaxed space-y-4">
          <p>
            Max Maistre Media was born out of a simple frustration: great small
            businesses were invisible online — not because their products
            {" weren't"} good, but because they {"didn't"} have the team, time, or budget
            to market themselves well.
          </p>
          <p>
            We started this studio to change that. {"We're"} a duo of marketers who
            believe approachable, beautiful, and effective digital marketing
            {" shouldn't"} be reserved for big brands with big budgets.
          </p>
          <p>
            From social content to email campaigns to paid ads, we handle the
            marketing so you can focus on what you do best.
          </p>
        </div>

        <div className="fade-in flex flex-col gap-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white/[0.07] border border-white/[0.12] rounded-2xl py-5 px-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-orange flex items-center justify-center font-serif text-lg text-white shrink-0">
                {member.initials}
              </div>
              <div>
                <h4 className="text-white text-base font-medium mb-0.5">
                  {member.name}
                </h4>
                <p className="text-white/55 text-sm">{member.role}</p>
              </div>
            </div>
          ))}

          <div className="bg-orange/[0.12] border border-orange/25 rounded-2xl py-5 px-6 mt-2">
            <p className="text-white/65 text-sm leading-relaxed">
              Together we bring hands-on experience in social media, design,
              email strategy, and paid advertising — so your marketing actually
              moves the needle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
