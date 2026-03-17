
import Link from "next/link"
import { Music, BookOpen, Mic2, ArrowRight, Sparkles } from "lucide-react"

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
    icon: Mic2,
    title: "Presentaciones",
    subtitle: "Eventos & Serenatas",
    description:
      "Contrata a Pedro para amenizar tu evento especial: bodas, aniversarios, reuniones corporativas o momentos íntimos.",
    cta: "Consultar",
    href: "https://wa.me/51999999999",
    highlight: null,
    color: "pink",
  },
]

export function SeccionServicios() {
  return (
    <section id="servicios" className="bg-cream pt-8 sm:pt-10 md:pt-16 pb-14 sm:pb-20 md:pb-32 relative overflow-hidden">

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
        <div className="text-center mb-10 sm:mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 bg-olive-dark/5 backdrop-blur-sm border border-olive/10 rounded-full px-5 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-pink" />
            <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Música que inspira, enseña y conecta.
            </span>
          </div>

          <h2
            className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-olive-dark leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Mis{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-pink">Servicios</span>
              <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-pink/30" viewBox="0 0 200 12" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-olive/60 text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Elige la experiencia perfecta para ti.
          </p>
        </div>

        {/* Services Grid - 3 cards, asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => {
            // index 0 = 7 cols, index 1 = 5 cols, index 2 = full row
            const colSpan =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                ? "lg:col-span-5"
                : "lg:col-span-12"

            return (
              <Link
                key={service.title}
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl ${colSpan}`}
              >
                {/* Card Background */}
                <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-105 ${
                  service.color === "pink"
                    ? "bg-gradient-to-br from-pink via-pink-dark to-olive-dark"
                    : "bg-gradient-to-br from-olive via-olive-dark to-olive-dark"
                }`} />

                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                </div>

                {/* Content Container */}
                <div className={`relative z-10 p-6 sm:p-8 md:p-10 flex flex-col ${
                  index === 2
                    ? "min-h-[240px] sm:min-h-[260px] md:min-h-[280px] xl:flex-row xl:items-center xl:gap-16"
                    : index === 0
                    ? "min-h-[320px] sm:min-h-[380px] md:min-h-[420px]"
                    : "min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
                }`}>

                  {/* Top Row: Icon & Badge */}
                  <div className={`flex items-start justify-between ${index === 2 ? "xl:flex-col xl:justify-start xl:gap-6 xl:shrink-0" : "mb-auto"}`}>
                    <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
                      <service.icon className="w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 text-cream" />
                    </div>
                    {service.highlight && (
                      <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm text-cream text-[10px] sm:text-xs font-bold tracking-widest uppercase rounded-full border border-white/20">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Bottom / Main Content */}
                  <div className={`${index === 2 ? "xl:flex-1" : "mt-6 sm:mt-8"}`}>
                    <p className="text-cream/60 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase font-sans mb-2 sm:mb-3">
                      {service.subtitle}
                    </p>
                    <h3
                      className={`font-bold text-cream leading-[1.1] mb-3 sm:mb-4 ${
                        index === 0 ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl" : "text-xl sm:text-2xl md:text-3xl"
                      }`}
                      style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                    >
                      {service.title}
                    </h3>
                    <p className={`text-cream/70 leading-relaxed font-sans mb-4 sm:mb-6 ${
                      index === 0 ? "text-xs sm:text-sm md:text-base max-w-md" : "text-xs sm:text-sm"
                    } ${index === 2 ? "xl:max-w-xl" : ""}`}>
                      {service.description}
                    </p>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 backdrop-blur-sm text-cream text-xs sm:text-sm font-bold tracking-wider uppercase rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-olive-dark">
                        {service.cta}
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>

                  {/* Decorative Number */}
                  <div
                    className="absolute bottom-4 right-6 text-8xl md:text-9xl font-black text-white/5 select-none pointer-events-none leading-none"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
