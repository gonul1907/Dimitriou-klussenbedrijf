"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')",
        }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1E1E22]/90 via-[#1E1E22]/75 to-[#1E1E22]/50" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F3] to-transparent" />

      {/* Gold line accent left */}
      <div className="absolute left-0 top-1/4 w-1 h-64 bg-gradient-to-b from-transparent via-[#C79A4A] to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C79A4A]/20 border border-[#C79A4A]/40 rounded-full mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-[#C79A4A] animate-pulse" />
            <span className="text-[#C79A4A] text-xs font-semibold tracking-[0.2em] uppercase">
              Vakmanschap &amp; Kwaliteit
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
          >
            Vakmanschap in
            <br />
            <span className="text-gradient-gold">Bouw &amp; Renovatie</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light"
          >
            Dimitriou Klussenbedrijf verzorgt hoogwaardige renovaties, afwerking
            en allround kluswerk in Nederland. Betrouwbaar, netjes en precies
            zoals u het voor ogen heeft.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C79A4A] hover:bg-[#E8B96A] text-[#1E1E22] font-bold text-base rounded-sm transition-all duration-300 shadow-2xl hover:shadow-[#C79A4A]/40 hover:shadow-2xl hover:-translate-y-1 tracking-wide"
            >
              Offerte Aanvragen
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo("#projecten")}
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-base rounded-sm border border-white/20 hover:border-[#C79A4A]/50 transition-all duration-300 backdrop-blur-sm hover:-translate-y-1 tracking-wide"
            >
              Projecten Bekijken
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 flex flex-wrap gap-8 sm:gap-12"
          >
            {[
              { value: "10+", label: "Jaar ervaring" },
              { value: "500+", label: "Tevreden klanten" },
              { value: "1000+", label: "Projecten afgerond" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl font-black text-[#C79A4A]">{stat.value}</span>
                <span className="text-gray-400 text-sm mt-0.5 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => scrollTo("#over-ons")}
      >
        <span className="text-gray-400 text-xs tracking-[0.2em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-gray-400/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#C79A4A] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
