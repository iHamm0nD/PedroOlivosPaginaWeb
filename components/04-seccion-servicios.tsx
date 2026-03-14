"use client"

import Link from "next/link"
import { Music, BookOpen, Users, Mic2, ArrowRight, Sparkles } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Music,
    title: "Clases de Violín",
    subtitle: "Online & Presencial",
    description:
      "Aprende a tocar el violín desde cero o perfecciona tu técnica con clases personalizadas adaptadas a tu nivel y ritmo.",
    cta: "Agendar clase",
    href: "https://wa.me/51999999999",
    highlight: "Popular",
    color: "pink",
  },
  {
    icon: BookOpen,
    title: "Partituras Exclusivas",
    subtitle: "Arreglos propios",
    description:
      "Accede a un catálogo de partituras para violín arregladas y editadas por Pedro, desde piezas clásicas hasta covers.",
    cta: "Ver catálogo",
    href: "/tienda",
    highlight: null,
    color: "olive",
  },
  {
    icon: Users,
    title: "Grupo VIP",
    subtitle: "Comunidad WhatsApp",
    description:
      "Únete a la comunidad exclusiva de violinistas. Recibe partituras semanales, tips y la motivación de músicos apasionados.",
    cta: "Unirme gratis",
    href: "https://wa.me/51999999999",
    highlight: "Gratis",
    color: "pink",
  },
  {
    icon: Mic2,
    title: "Presentaciones",
    subtitle: "Eventos & Serenatas",
    description:
      "Contrata a Pedro para amenizar tu evento especial: bodas, aniversarios, reuniones corporativas o momentos íntimos.",
    cta: "Consultar",
    href: "https://wa.me/51999999999",
    highlight: null,
    color: "olive",
  },
]

export function SeccionServicios() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="servicios" className="bg-cream py-20 md:py-32 relative overflow-hidden">

      {/* Decorative floating elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-pink/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-olive/5 rounded-full blur-3xl pointer-events-none" />

      {/* Large background number */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-olive/[0.02] select-none pointer-events-none leading-none"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        aria-hidden="true"
      >
        04
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - More impactful */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 bg-olive-dark/5 backdrop-blur-sm border border-olive/10 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-pink" />
            <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Música que inspira, enseña y conecta.
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-olive-dark leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Mis{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-pink">Servicios</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-pink/30" viewBox="0 0 200 12" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-olive/60 text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Elige la experiencia perfecta para ti.
          </p>
        </div>

        {/* Services Grid - Bento style */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              target={service.href.startsWith("http") ? "_blank" : undefined}
              rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group relative bg-white rounded-3xl p-7 md:p-10 border border-olive/10 transition-all duration-500 hover:shadow-2xl hover:shadow-olive/10 hover:-translate-y-2 overflow-hidden ${index === 0 ? "md:row-span-2" : ""
                }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${service.color === "pink"
                ? "bg-gradient-to-br from-pink/5 via-transparent to-pink/10"
                : "bg-gradient-to-br from-olive/5 via-transparent to-olive/10"
                }`} />

              {/* Highlight badge */}
              {service.highlight && (
                <div className={`absolute top-6 right-6 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${service.highlight === "Popular"
                  ? "bg-pink text-white"
                  : "bg-olive text-cream"
                  }`}>
                  {service.highlight}
                </div>
              )}

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${service.color === "pink"
                  ? "bg-pink/10 group-hover:bg-pink group-hover:scale-110"
                  : "bg-olive/10 group-hover:bg-olive group-hover:scale-110"
                  }`}>
                  <service.icon className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-500 ${service.color === "pink"
                    ? "text-pink group-hover:text-white"
                    : "text-olive group-hover:text-cream"
                    }`} />
                </div>

                {/* Subtitle */}
                <p className="text-xs uppercase tracking-[0.25em] font-bold text-pink/70 font-sans mb-2">
                  {service.subtitle}
                </p>

                {/* Title */}
                <h3
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-olive-dark leading-tight mb-4 group-hover:text-olive transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-olive/60 text-sm md:text-base leading-relaxed font-sans flex-grow">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="mt-6 pt-6 border-t border-olive/10 flex items-center justify-between">
                  <span className="text-sm font-bold text-olive-dark group-hover:text-pink transition-colors duration-300 font-sans">
                    {service.cta}
                  </span>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${service.color === "pink"
                    ? "bg-pink/10 group-hover:bg-pink"
                    : "bg-olive/10 group-hover:bg-olive"
                    }`}>
                    <ArrowRight className={`w-5 h-5 transition-all duration-300 group-hover:translate-x-1 ${service.color === "pink"
                      ? "text-pink group-hover:text-white"
                      : "text-olive group-hover:text-cream"
                      }`} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-olive-dark rounded-3xl px-8 py-6 md:px-12 md:py-8">
            <div className="text-center sm:text-left">
              <p className="text-cream/60 text-xs font-bold tracking-widest uppercase font-sans mb-1">
                ¿Tienes dudas?
              </p>
              <p
                className="text-cream text-xl md:text-2xl font-light"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Conversemos por WhatsApp
              </p>
            </div>
            <Link
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink hover:bg-pink-dark text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/25"
            >
              Contactar ahora
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
