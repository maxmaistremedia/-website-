"use client";

import { useEffect, useRef } from "react";

export function CTA() {
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
    <section
      ref={sectionRef}
      id="contact"
      className="bg-teal text-center py-24 px-6 md:px-12"
    >
      <div className="fade-in">
        <div className="text-xs tracking-widest uppercase text-white/50 mb-3">
          Get In Touch
        </div>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-white max-w-lg mx-auto mb-4">
          Ready to grow your brand?
        </h2>

        <a
          href="mailto:maxmaistremedia@gmail.com"
          className="inline-block bg-orange text-white px-10 py-4 rounded-full text-base font-medium hover:opacity-85 transition-opacity"
        >
          {"LET'S TALK"}
        </a>

        <br />

        <a
          href="mailto:maxmaistremedia@gmail.com"
          className="inline-block font-serif text-lg text-white border-b border-white/40 pb-0.5 mt-6 opacity-80 hover:opacity-100 transition-opacity"
        >
          maxmaistremedia@gmail.com
        </a>

        <div className="flex flex-col items-center gap-4 mt-8">
          <p className="text-xs tracking-widest uppercase text-white/55">
            Connect with us
          </p>
          <div className="flex gap-4 items-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/maxmaistre.media?igsh=Z3VvZTF5OXU0M3lm&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-orange/15 border border-orange/35 text-orange flex items-center justify-center hover:bg-orange hover:border-orange hover:text-white hover:-translate-y-0.5 transition-all"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/max-maistre-media/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-orange/15 border border-orange/35 text-orange flex items-center justify-center hover:bg-orange hover:border-orange hover:text-white hover:-translate-y-0.5 transition-all"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61570817464084&mibextid=wwXIfr&rdid=uG622v0zMCmXdasz#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full bg-orange/15 border border-orange/35 text-orange flex items-center justify-center hover:bg-orange hover:border-orange hover:text-white hover:-translate-y-0.5 transition-all"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
