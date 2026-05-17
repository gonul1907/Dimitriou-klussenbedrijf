"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Betrouwbaar",
    text: "Wij komen onze afspraken altijd na en houden u op de hoogte van elke stap in het proces.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Netjes werken",
    text: "Bij ons bent u verzekerd van een schone en verzorgde werkplek — voor, tijdens en na de klus.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Duidelijke communicatie",
    text: "Transparant over planning, kosten en verwachtingen. Geen verrassingen achteraf.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "Hoogwaardige afwerking",
    text: "Elk detail telt. Wij werken met premium materialen en leveren altijd een perfect eindresultaat.",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="over-ons" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E22]/60 to-transparent" />
            </div>
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-xl p-3 shadow-2xl border border-[#E7E7E5]"
            >
              <div className="relative h-16 w-48">
                <Image
                  src="/logo.jpeg"
                  alt="Dimitriou Klussenbedrijf"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            {/* Gold accent line */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-[#C79A4A] rounded-tl-2xl" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="gold-divider !mx-0 mb-4" />
            <p className="text-[#C79A4A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Over Ons
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1E22] mb-6 leading-tight">
              Uw renovatie in{" "}
              <span className="text-gradient-gold">vertrouwde handen</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Dimitriou Klussenbedrijf staat voor kwaliteit, vakmanschap en
              klanttevredenheid. Met meer dan 10 jaar ervaring in de bouw- en
              renovatiesector leveren wij topresultaten voor particulieren en
              bedrijven in heel Nederland.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Of u nu een badkamer wilt renoveren, uw woning wilt laten
              schilderen of een complete verbouwing voor ogen heeft — wij zorgen
              voor een vlekkeloos resultaat op tijd en binnen budget.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F5F3] hover:bg-[#E7E7E5] transition-colors duration-200 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#C79A4A]/10 group-hover:bg-[#C79A4A]/20 flex items-center justify-center text-[#C79A4A] transition-colors duration-200">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E1E22] text-sm mb-1">{feature.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
