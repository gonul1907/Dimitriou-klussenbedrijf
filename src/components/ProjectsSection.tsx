"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Moderne Badkamerrenovatie",
    category: "Badkamer",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Complete Woonkamer Verbouwing",
    category: "Verbouwing",
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Luxe Parketvloer Leggen",
    category: "Vloeren",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Professioneel Schilderwerk",
    category: "Schilderwerk",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Keuken Renovatie & Afwerking",
    category: "Renovatie",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Maatwerk Timmerwerk Kast",
    category: "Timmerwerk",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["Alles", "Badkamer", "Verbouwing", "Vloeren", "Schilderwerk", "Renovatie", "Timmerwerk"];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("Alles");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filtered =
    activeCategory === "Alles"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projecten" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="gold-divider" />
          <p className="text-[#C79A4A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Ons werk
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E1E22] mb-4">
            Onze Projecten
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Bekijk een selectie van onze recente projecten en laat u inspireren
            door ons vakmanschap.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#C79A4A] text-[#1E1E22] shadow-lg shadow-[#C79A4A]/25"
                  : "bg-[#F5F5F3] text-gray-600 hover:bg-[#E7E7E5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-400 cursor-pointer aspect-[4/3]"
                onClick={() => setLightboxImage(project.image)}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E22]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#C79A4A] text-[#1E1E22] text-xs font-bold rounded-full tracking-wide">
                    {project.category}
                  </span>
                </div>
                {/* Title on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[#C79A4A] text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                    Vergroot
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightboxImage}
                alt="Project detail"
                className="w-full h-full object-contain rounded-xl shadow-2xl"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute -top-4 -right-4 w-10 h-10 bg-[#C79A4A] rounded-full flex items-center justify-center text-[#1E1E22] hover:bg-[#E8B96A] transition-colors duration-200 shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
