"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const reviews = [
  {
    name: "Marco van den Berg",
    location: "Amsterdam",
    rating: 5,
    text: "Dimitriou Klussenbedrijf heeft onze badkamer prachtig gerenoveerd. Strak werk, nette vakmensen en precies op tijd klaar. Wij zijn absoluut tevreden en bevelen dit bedrijf aan!",
    service: "Badkamerrenovatie",
    avatar: "M",
  },
  {
    name: "Sandra de Vries",
    location: "Rotterdam",
    rating: 5,
    text: "Onze woonkamer is compleet getransformeerd. Het schilderwerk is perfect uitgevoerd en de communicatie was altijd duidelijk. Top bedrijf!",
    service: "Schilderwerk",
    avatar: "S",
  },
  {
    name: "Peter Jansen",
    location: "Utrecht",
    rating: 5,
    text: "Professioneel team, eerlijke prijs en prachtig eindresultaat. De vloer is perfect gelegd en de afwerking is fantastisch. Zeker een aanrader!",
    service: "Vloeren leggen",
    avatar: "P",
  },
  {
    name: "Lisa Bakker",
    location: "Den Haag",
    rating: 5,
    text: "Geweldig werk geleverd bij onze verbouwing. Ze denken mee, werken netjes en leveren precies wat is beloofd. Heel tevreden!",
    service: "Verbouwing",
    avatar: "L",
  },
  {
    name: "Thomas Smit",
    location: "Eindhoven",
    rating: 5,
    text: "Maatwerk kasten laten maken en het is prachtig geworden. Precies naar onze wensen, vakkundig uitgevoerd. Heel blij mee!",
    service: "Timmerwerk",
    avatar: "T",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-[#C79A4A]" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setActiveIndex((i) => (i + 1) % reviews.length);

  return (
    <section className="section-padding bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-divider" />
          <p className="text-[#C79A4A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Wat zeggen klanten
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1E22] mb-4">
            Klantbeoordelingen
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Lees wat onze tevreden klanten over ons zeggen.
          </p>
        </div>

        {/* Featured review slider */}
        <div ref={ref} className="max-w-3xl mx-auto mb-12">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-[#E7E7E5] relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-[#C79A4A]/20">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 8v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
              </svg>
            </div>
            {/* Service badge */}
            <span className="inline-block px-3 py-1 bg-[#C79A4A]/10 text-[#C79A4A] text-xs font-semibold rounded-full tracking-wide mb-4">
              {reviews[activeIndex].service}
            </span>
            <StarRating rating={reviews[activeIndex].rating} />
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed mt-4 mb-6 italic">
              &ldquo;{reviews[activeIndex].text}&rdquo;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#1E1E22] flex items-center justify-center">
                <span className="text-[#C79A4A] font-black text-lg">
                  {reviews[activeIndex].avatar}
                </span>
              </div>
              <div>
                <p className="font-bold text-[#1E1E22] text-sm">{reviews[activeIndex].name}</p>
                <p className="text-gray-500 text-xs">{reviews[activeIndex].location}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#E7E7E5] flex items-center justify-center text-[#1E1E22] hover:border-[#C79A4A] hover:text-[#C79A4A] transition-all duration-200 shadow-sm"
              aria-label="Vorige review"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === activeIndex
                      ? "w-6 h-2.5 bg-[#C79A4A]"
                      : "w-2.5 h-2.5 bg-[#E7E7E5] hover:bg-[#C79A4A]/40"
                  }`}
                  aria-label={`Ga naar review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#E7E7E5] flex items-center justify-center text-[#1E1E22] hover:border-[#C79A4A] hover:text-[#C79A4A] transition-all duration-200 shadow-sm"
              aria-label="Volgende review"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* All reviews grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`bg-white rounded-xl p-5 shadow-sm border transition-all duration-300 cursor-pointer hover:-translate-y-1 hover:shadow-md ${
                i === activeIndex ? "border-[#C79A4A]/50 shadow-[#C79A4A]/10 shadow-md" : "border-[#E7E7E5]"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#1E1E22] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#C79A4A] font-bold text-xs">{review.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1E1E22] text-xs">{review.name}</p>
                    <p className="text-gray-400 text-xs">{review.location}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                &ldquo;{review.text}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
