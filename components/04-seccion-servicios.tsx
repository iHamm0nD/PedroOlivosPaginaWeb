import Link from "next/link"
import { Music, BookOpen, Users, Mic2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Music,
    number: "01",
    title: "Clases de Violín",
    subtitle: "Online & Presencial",
    description:
      "Aprende a tocar el violín desde cero o perfecciona tu técnica con clases personalizadas adaptadas a tu nivel y ritmo. Desde lectura de partituras hasta interpretación expresiva.",
    cta: "Agendar clase",
    href: "https://wa.me/51999999999",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Partituras Exclusivas",
    subtitle: "Arreglos propios",
    description:
      "Accede a un catálogo de partituras para violín arregladas y editadas por Pedro, desde piezas clásicas hasta covers de música popular y latinoamericana.",
    cta: "Ver catálogo",
    href: "/tienda",
  },
  {
    icon: Users,
    number: "03",
    title: "Grupo VIP",
    subtitle: "Comunidad WhatsApp",
    description:
      "Únete a la comunidad exclusiva de violinistas. Recibe partituras semanales, tips de práctica, acceso anticipado a contenido y la motivación de una comunidad apasionada.",
    cta: "Unirme gratis",
    href: "https://wa.me/51999999999",
  },
  {
    icon: Mic2,
    number: "04",
    title: "Presentaciones",
    subtitle: "Eventos & Serenatas",
    description:
      "Contrata a Pedro para amenizar tu evento especial: bodas, aniversarios, reuniones corporativas o momentos íntimos. La música en vivo transforma cualquier ocasión.",
    cta: "Consultar",
    href: "https://wa.me/51999999999",
  },
]

export function SeccionServicios() {
  return (
    <section id="servicios" className="bg-cream py-24 md:py-32 relative overflow-hidden">

      {/* Subtle horizontal rule at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-olive/10" />

      {/* Very faint background watermark text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-light text-olive/4 select-none pointer-events-none leading-none whitespace-nowrap"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        aria-hidden="true"
      >
        Servicios
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-pink" />
            <span className="text-pink text-xs font-bold tracking-[0.35em] uppercase font-sans">
              Lo que ofrezco
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light text-olive-dark leading-none text-balance"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Mis <em className="text-pink not-italic font-semibold">Servicios</em>
          </h2>
          <p className="mt-5 text-olive/65 text-sm leading-relaxed font-sans max-w-md">
            Música que inspira, enseña y conecta. Elige la experiencia que necesitas.
          </p>
        </div>

        {/* Services — editorial list style */}
        <div className="space-y-0 divide-y divide-olive/10 border-y border-olive/10">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              target={service.href.startsWith("http") ? "_blank" : undefined}
              rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 md:py-10 px-0 hover:px-4 transition-all duration-500 hover:bg-white/60 rounded-xl -mx-0 hover:-mx-4"
            >
              {/* Number */}
              <span
                className="text-sm font-bold text-olive/30 tracking-[0.3em] font-sans shrink-0 w-10"
              >
                {service.number}
              </span>

              {/* Icon circle */}
              <div className="w-14 h-14 rounded-full border border-olive/15 bg-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-pink group-hover:border-pink shadow-sm">
                <service.icon className="w-5 h-5 text-olive group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Title + subtitle */}
              <div className="flex-1 min-w-0">
                <p className="text-xs uppercase tracking-[0.25em] font-sans font-semibold text-pink/70 mb-1">
                  {service.subtitle}
                </p>
                <h3
                  className="text-2xl md:text-3xl font-light text-olive-dark group-hover:text-olive transition-colors duration-300 text-balance"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-olive/60 text-sm leading-relaxed font-sans sm:max-w-xs lg:max-w-sm hidden md:block">
                {service.description}
              </p>

              {/* Arrow CTA */}
              <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase font-sans text-olive/40 group-hover:text-pink transition-all duration-300 shrink-0">
                <span className="hidden sm:inline">{service.cta}</span>
                <div className="w-9 h-9 rounded-full border border-olive/15 group-hover:border-pink group-hover:bg-pink flex items-center justify-center transition-all duration-300">
                  <ArrowRight className="w-3.5 h-3.5 text-olive/40 group-hover:text-white transition-colors duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p
            className="text-olive/40 text-xl font-light italic"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            "La música es el viaje, el violín es mi camino."
          </p>
          <Link
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-cream text-xs font-bold tracking-widest uppercase px-7 py-3.5 rounded-full transition-all duration-300 font-sans"
          >
            Contactar por WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
