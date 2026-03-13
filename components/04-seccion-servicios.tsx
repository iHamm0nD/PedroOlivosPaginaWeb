import Link from "next/link"
import { Music, BookOpen, Users, Mic2, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Music,
    label: "01",
    title: "Clases de Violín",
    subtitle: "Online & Presencial",
    description:
      "Aprende a tocar el violín desde cero o perfecciona tu técnica con clases personalizadas adaptadas a tu nivel y ritmo. Desde lectura de partituras hasta interpretación expresiva.",
    cta: "Agendar clase",
    href: "https://wa.me/51999999999",
    accent: true,
  },
  {
    icon: BookOpen,
    label: "02",
    title: "Partituras Exclusivas",
    subtitle: "Arreglos propios",
    description:
      "Accede a un catálogo de partituras para violín arregladas y editadas por Pedro, desde piezas clásicas hasta covers de música popular y latinoamericana.",
    cta: "Ver catálogo",
    href: "/tienda",
    accent: false,
  },
  {
    icon: Users,
    label: "03",
    title: "Grupo VIP",
    subtitle: "Comunidad WhatsApp",
    description:
      "Únete a la comunidad exclusiva de violinistas. Recibe partituras semanales, tips de práctica, acceso anticipado a contenido y la motivación de una comunidad apasionada.",
    cta: "Unirme gratis",
    href: "https://wa.me/51999999999",
    accent: false,
  },
  {
    icon: Mic2,
    label: "04",
    title: "Presentaciones",
    subtitle: "Eventos & Serenatas",
    description:
      "Contrata a Pedro para amenizar tu evento especial: bodas, aniversarios, reuniones corporativas o momentos íntimos. La música en vivo transforma cualquier ocasión.",
    cta: "Consultar",
    href: "https://wa.me/51999999999",
    accent: false,
  },
]

export function SeccionServicios() {
  return (
    <section id="servicios" className="bg-olive-dark py-24 md:py-32 relative overflow-hidden">

      {/* Subtle background texture lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-cream" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-cream" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-pink" />
            <span className="text-pink text-xs font-bold tracking-[0.35em] uppercase font-sans">
              Lo que ofrezco
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-none text-balance"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Mis <em className="text-pink not-italic font-semibold">Servicios</em>
            </h2>
            <p className="text-cream/60 text-sm leading-relaxed font-sans max-w-xs md:text-right">
              Música que inspira, enseña y conecta.<br />
              Elige la experiencia que necesitas.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden shadow-2xl">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col p-8 md:p-9 transition-all duration-500 hover:z-10
                ${service.accent
                  ? "bg-pink hover:bg-pink-dark"
                  : "bg-olive-dark hover:bg-[#1c260f]"
                }`}
            >
              {/* Number label */}
              <span
                className={`text-xs font-bold tracking-[0.3em] mb-6 font-sans
                  ${service.accent ? "text-olive-dark/60" : "text-cream/30"}`}
              >
                {service.label}
              </span>

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110
                  ${service.accent
                    ? "bg-olive-dark/15"
                    : "bg-cream/8 border border-cream/15"
                  }`}
              >
                <service.icon
                  className={`w-5 h-5 ${service.accent ? "text-olive-dark" : "text-pink"}`}
                />
              </div>

              {/* Text */}
              <div className="flex-1 space-y-3 mb-8">
                <p
                  className={`text-xs uppercase tracking-[0.25em] font-sans font-semibold
                    ${service.accent ? "text-olive-dark/70" : "text-pink/80"}`}
                >
                  {service.subtitle}
                </p>
                <h3
                  className={`text-2xl font-semibold leading-tight text-balance
                    ${service.accent ? "text-olive-dark" : "text-cream"}`}
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed font-sans
                    ${service.accent ? "text-olive-dark/75" : "text-cream/60"}`}
                >
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase font-sans transition-all duration-300 group/link
                  ${service.accent
                    ? "text-olive-dark hover:gap-3"
                    : "text-pink hover:gap-3"
                  }`}
              >
                {service.cta}
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom ornamental line */}
        <div className="mt-16 flex items-center gap-6">
          <div className="flex-1 h-px bg-white/10" />
          <span
            className="text-cream/25 text-2xl"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            ♩
          </span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
      </div>
    </section>
  )
}
