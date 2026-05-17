"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: connect to your API / form service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const inputClass =
    "w-full px-4 py-3.5 bg-white border border-[#E7E7E5] rounded-xl text-[#1E1E22] text-sm placeholder-gray-400 focus:outline-none focus:border-[#C79A4A] focus:ring-2 focus:ring-[#C79A4A]/20 transition-all duration-200";

  return (
    <section id="contact" className="section-padding bg-[#1E1E22] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C79A4A]/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#C79A4A]/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="gold-divider" />
          <p className="text-[#C79A4A] text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Neem contact op
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Vraag een gratis offerte aan
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
            Vertel ons over uw project en wij nemen binnen 24 uur contact met u
            op voor een vrijblijvende offerte.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Info cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                ),
                label: "Telefoon",
                value: "+31 6 12 34 56 78",
                href: "tel:+31612345678",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "E-mail",
                value: "info@dimitriouklus.nl",
                href: "mailto:info@dimitriouklus.nl",
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                ),
                label: "Werkgebied",
                value: "Heel Nederland",
                href: null,
              },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-center gap-4 p-5 bg-[#3B3B40]/40 border border-[#C79A4A]/10 rounded-xl hover:border-[#C79A4A]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C79A4A]/10 flex items-center justify-center text-[#C79A4A] flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-xs font-medium mb-0.5">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-white font-semibold text-sm hover:text-[#C79A4A] transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold text-sm">{info.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/31612345678?text=Hallo%2C%20ik%20zou%20graag%20een%20offerte%20aanvragen."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] hover:bg-[#1fbe5a] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-1 mt-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Direct via WhatsApp
            </a>

            {/* Map placeholder */}
            <div className="rounded-xl overflow-hidden border border-[#C79A4A]/10 h-36 bg-[#3B3B40]/30 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-8 h-8 text-[#C79A4A]/50 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <p className="text-gray-500 text-xs">Werkzaam in heel Nederland</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-[#F5F5F3] rounded-2xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-bold text-[#1E1E22] mb-6">
                Stuur ons een bericht
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-700 text-sm font-medium">
                    Bedankt! Wij nemen binnen 24 uur contact met u op.
                  </p>
                </motion.div>
              )}

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3B3B40] mb-1.5">
                    Uw naam *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jan de Vries"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3B3B40] mb-1.5">
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jan@email.nl"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3B3B40] mb-1.5">
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    placeholder="+31 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#3B3B40] mb-1.5">
                    Dienst
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Selecteer een dienst</option>
                    <option>Renovatie</option>
                    <option>Badkamer</option>
                    <option>Schilderwerk</option>
                    <option>Timmerwerk</option>
                    <option>Vloeren leggen</option>
                    <option>Afwerking</option>
                    <option>Verbouwing</option>
                    <option>Anders</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-xs font-semibold text-[#3B3B40] mb-1.5">
                  Uw bericht *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Beschrijf uw project of klus..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#C79A4A] hover:bg-[#E8B96A] text-[#1E1E22] font-bold text-base rounded-xl transition-all duration-300 shadow-lg hover:shadow-[#C79A4A]/30 hover:shadow-xl hover:-translate-y-0.5 tracking-wide"
              >
                Verstuur Aanvraag
              </button>

              <p className="text-gray-400 text-xs text-center mt-4">
                Uw gegevens worden vertrouwelijk behandeld en nooit gedeeld met derden.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
