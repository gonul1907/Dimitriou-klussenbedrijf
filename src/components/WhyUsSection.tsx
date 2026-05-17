"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "10+",
    label: "Jaar ervaring",
    description: "Ruime vakervaring in bouw & renovatie",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: "500+",
    label: "Tevreden klanten",
    description: "Klanten die ons met trots aanbevelen",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
  {
    value: "100%",
    label: "Hoogwaardige afwerking",
    description: "Altijd een perfect en duurzaam eindresultaat",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    value: "24u",
    label: "Snelle reactietijd",
    description: "Binnen 24 uur een vrijblijvende offerte",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

const reasons = [
  "Gratis en vrijblijvende offerte",
  "Transparante en eerlijke prijzen",
  "Gecertificeerde vakmensen",
  "Gebruik van A-merk materialen",
  "Werkzaam in heel Nederland",
  "Garantie op al het werk",
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding bg-[#1E1E22] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C79A4A 0px, #C79A4A 1px, transparent 0px, transparent 50%)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>
      {/* Gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#C79A4A]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-divider" />
          <p className="text-[#C79A4A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Waarom Dimitriou?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Waarom kiezen voor ons?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Wij onderscheiden ons door kwaliteit, transparantie en een passie
            voor vakmanschap.
          </p>
        </div>

        {/* Stats grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#3B3B40]/50 hover:bg-[#3B3B40]/80 border border-[#C79A4A]/10 hover:border-[#C79A4A]/40 rounded-2xl p-6 text-center transition-all duration-400 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#C79A4A]/10 group-hover:bg-[#C79A4A]/20 flex items-center justify-center text-[#C79A4A] mx-auto mb-4 transition-colors duration-300">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-[#C79A4A] mb-2">{stat.value}</div>
              <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs leading-relaxed">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-[#3B3B40]/30 border border-[#C79A4A]/10 rounded-2xl p-8 lg:p-12"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C79A4A]/20 flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-[#C79A4A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-gray-300 text-sm font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
