
import Link from "next/link"
import { Music, BookOpen, Users, Mic2, ArrowRight, Sparkles } from "lucide-react"

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

        {/* Services Grid - New Magazine Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {services.map((service, index) => {
            const isLarge = index === 0 || index === 3
            const gridClass = isLarge ? "lg:col-span-7" : "lg:col-span-5"
            
            return (
              <Link
                key={service.title}
                href={service.href}
                target={service.href.startsWith("http") ? "_blank" : undefined}
                rel={service.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl ${gridClass}`}
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
                <div className={`relative z-10 p-8 md:p-10 flex flex-col ${isLarge ? "min-h-[380px] md:min-h-[420px]" : "min-h-[320px] md:min-h-[360px]"}`}>
                  
                  {/* Top Row: Badge & Icon */}
                  <div className="flex items-start justify-between mb-auto">
                    {/* Icon Container */}
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-110">
                      <service.icon className="w-7 h-7 md:w-9 md:h-9 text-cream" />
                    </div>
                    
                    {/* Highlight Badge */}
                    {service.highlight && (
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-cream text-xs font-bold tracking-widest uppercase rounded-full border border-white/20">
                        {service.highlight}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div className="mt-8">
                    {/* Subtitle */}
                    <p className="text-cream/60 text-xs font-bold tracking-[0.3em] uppercase font-sans mb-3">
                      {service.subtitle}
                    </p>

                    {/* Title */}
                    <h3
                      className={`font-bold text-cream leading-[1.1] mb-4 ${isLarge ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"}`}
                      style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className={`text-cream/70 leading-relaxed font-sans mb-6 ${isLarge ? "text-sm md:text-base max-w-md" : "text-sm"}`}>
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm text-cream text-sm font-bold tracking-wider uppercase rounded-full border border-white/20 transition-all duration-500 group-hover:bg-white group-hover:text-olive-dark">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
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
