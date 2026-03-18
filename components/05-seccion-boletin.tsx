import Link from "next/link"
import { Mail, MessageCircle, MapPin, ArrowRight, ExternalLink } from "lucide-react"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const socialLinks = [
  {
    name: "TikTok",
    handle: "@pedrolivos",
    icon: TikTokIcon,
    href: "https://www.tiktok.com/@pedrolivos",
    bg: "bg-black",
    description: "Videos cortos y reels",
  },
  {
    name: "Instagram",
    handle: "@pedrolivos",
    icon: InstagramIcon,
    href: "https://www.instagram.com/pedrolivos/",
    bg: "bg-[#E1306C]",
    description: "Fotos y stories",
  },
  {
    name: "Facebook",
    handle: "PedrOlivosPartituras",
    icon: FacebookIcon,
    href: "https://www.facebook.com/PedrOlivosPartituras",
    bg: "bg-[#1877F2]",
    description: "Partituras y comunidad",
  },
  {
    name: "YouTube",
    handle: "@pedroolivosmusica",
    icon: YouTubeIcon,
    href: "https://www.youtube.com/@pedroolivosmusica",
    bg: "bg-[#FF0000]",
    description: "Covers y tutoriales",
  },
]

export function SeccionBoletin() {
  return (
    <section id="contacto" className="bg-cream pt-8 md:pt-12 pb-20 md:pb-32 relative overflow-hidden">

      {/* Subtle background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-olive/10 pointer-events-none" />
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-olive/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-olive-dark/5 border border-olive/10 rounded-full px-5 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-pink" />
            <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Conectemos
            </span>
          </div>

          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-olive-dark leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Ponte en{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-pink">Contacto</span>
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-3 sm:h-4 text-pink/30"
                viewBox="0 0 200 12"
                fill="currentColor"
                preserveAspectRatio="none"
              >
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-olive/80 text-sm sm:text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
            Ya sea para una clase, una presentación especial o simplemente para conversar sobre música, estoy aquí.
          </p>
        </div>


        {/* ── Row 2: Community card + Contact info ── */}
        <div className="grid lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6">

          {/* WhatsApp Community Card */}
          <div className="lg:col-span-7">
            <div className="relative bg-olive-dark rounded-2xl overflow-hidden h-full">

              {/* Decorative rings */}
              <div className="absolute top-0 right-0 w-72 h-72 border border-cream/10 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />
              <div className="absolute top-0 right-0 w-48 h-48 border border-pink/20 rounded-full -translate-y-1/4 translate-x-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-pink/10 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />

              <div className="relative z-10 p-5 sm:p-8 md:p-10 flex flex-col h-full">

                {/* Live badge */}
                <div className="inline-flex items-center gap-2 bg-pink/20 border border-pink/30 rounded-full px-4 py-1.5 mb-6 self-start">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink" />
                  </span>
                  <span className="text-cream text-[10px] font-bold tracking-widest uppercase font-sans">
                    Comunidad activa
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-[1.1] mb-3"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Pedro Olivos y sus{" "}
                  <span className="text-pink">Violinistas</span>
                </h3>

                <p className="text-cream/90 text-sm md:text-base leading-relaxed font-sans mb-6 max-w-lg">
                  Una comunidad para músicos aficionados. Partituras semanales, tips de práctica y motivación para tocar cada día.
                </p>

                {/* Benefits chips */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                  {["Partituras semanales", "Tips de práctica", "Acceso anticipado", "Comunidad activa"].map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-semibold text-cream bg-cream/10 border border-cream/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-sans"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-pink shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>

                {/* CTA — "Unirme ahora" links to /#subscribe on homepage */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                  <Link
                    href="/#subscribe"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30"
                  >
                    <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    Unirme ahora
                  </Link>
                  <Link
                    href="mailto:contacto@pedrolivos.com"
                    className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-sans"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Enviar email
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: contact + quote */}
          <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4">

            {/* Direct contact card */}
            <div className="bg-white border border-olive/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 flex-1">
              <p className="text-[10px] text-olive/70 font-bold tracking-[0.3em] uppercase font-sans mb-5">
                Contacto directo
              </p>

              <div className="space-y-3">
                <Link
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-olive/8 hover:border-pink/30 hover:bg-pink/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-pink/10 group-hover:bg-pink flex items-center justify-center shrink-0 transition-all duration-300">
                    <WhatsAppIcon className="w-5 h-5 text-pink group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-olive/70 font-bold tracking-widest uppercase font-sans">WhatsApp</p>
                    <p className="text-olive-dark font-bold font-sans text-sm truncate">+51 999 999 999</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-olive/20 group-hover:text-pink group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                </Link>

                <Link
                  href="mailto:contacto@pedrolivos.com"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-olive/8 hover:border-olive/30 hover:bg-olive/5 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-olive/10 group-hover:bg-olive flex items-center justify-center shrink-0 transition-all duration-300">
                    <Mail className="w-5 h-5 text-olive group-hover:text-cream transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-olive/70 font-bold tracking-widest uppercase font-sans">Email</p>
                    <p className="text-olive-dark font-bold font-sans text-sm truncate">contacto@pedrolivos.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-olive/20 group-hover:text-olive group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                </Link>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-olive/8">
                  <div className="w-11 h-11 rounded-xl bg-pink/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-pink" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-olive/70 font-bold tracking-widest uppercase font-sans">Ubicación</p>
                    <p className="text-olive-dark font-bold font-sans text-sm">Huánuco, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote card */}
            <div className="bg-olive-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7">
              <p
                className="text-lg sm:text-xl md:text-2xl text-cream font-light italic leading-snug mb-2 sm:mb-3"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                "La música es el viaje, el violín es mi camino."
              </p>
              <p className="text-cream/70 text-[9px] sm:text-[10px] font-bold tracking-[0.3em] uppercase font-sans">
                — Pedro Olivos
              </p>
            </div>
          </div>
        </div>

        {/* ── Row 1: Social networks (Moved below) ── */}
        <div className="mt-6 sm:mt-8 md:mt-10">
          <p className="text-[10px] sm:text-[11px] text-olive/60 font-bold tracking-[0.3em] uppercase font-sans mb-3 sm:mb-4">
            Sígueme en redes sociales
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-olive/10 bg-white hover:shadow-xl hover:shadow-olive/10 transition-all duration-500 hover:-translate-y-1"
              >
                {/* Colored top accent strip */}
                <div className={`h-1.5 w-full ${social.bg} transition-all duration-300 group-hover:h-2`} />

                <div className="p-4 sm:p-5 md:p-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${social.bg} flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cream" />
                  </div>

                  <p className="text-olive-dark font-bold text-sm sm:text-base font-sans leading-none mb-1">
                    {social.name}
                  </p>
                  <p className="text-olive/70 text-[10px] sm:text-xs font-sans mb-1 sm:mb-2 truncate">{social.handle}</p>
                  <p className="text-olive/80 text-[10px] sm:text-xs font-sans leading-relaxed line-clamp-2">{social.description}</p>

                  <div className="flex items-center gap-1 mt-3 sm:mt-4">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-olive/60 font-sans group-hover:text-pink transition-colors duration-300">
                      Seguir
                    </span>
                    <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-olive/30 group-hover:text-pink transition-colors duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function SeccionMembresia() {
  return (
    <section id="servicios" className="bg-olive-dark py-10 sm:py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl">
            <div className="text-center space-y-6 sm:space-y-8">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                  <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-olive-dark font-sans">
                  Grupo VIP de Partituras
                </h3>
                <p className="text-olive-dark/80 font-medium text-xs sm:text-sm font-sans">Grupo exclusivo de WhatsApp</p>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-left max-w-md mx-auto">
                <li className="flex items-start gap-2 sm:gap-3 text-olive-dark/90 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink mt-2 shrink-0" />
                  <span>Partituras exclusivas cada semana.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-olive-dark/90 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink mt-2 shrink-0" />
                  <span>Tutoriales y tips para mejorar tu técnica.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-olive-dark/90 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink mt-2 shrink-0" />
                  <span>Contenido exclusivo detrás de cámaras.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-olive-dark/90 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink mt-2 shrink-0" />
                  <span>Acceso anticipado a nuevos covers y arreglos.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-olive-dark/90 text-sm sm:text-base md:text-lg">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-pink mt-2 shrink-0" />
                  <span>Comunidad de violinistas apasionados.</span>
                </li>
              </ul>
              <Link
                href="https://chat.whatsapp.com/TULINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
              >
                <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6" />
                UNIRME AL GRUPO
              </Link>
              <p className="text-olive-dark/70 font-medium text-[10px] sm:text-xs font-sans">
                Es gratis. Solo haz clic y únete al grupo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SeccionBoletinmain() {
  return (
    <section id="subscribe" className="bg-pink py-10 sm:py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center space-y-6 sm:space-y-8">
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <div className="w-6 sm:w-8 h-px bg-olive-dark/40" />
            <span className="text-olive-dark text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Comunidad
            </span>
            <div className="w-6 sm:w-8 h-px bg-olive-dark/40" />
          </div>
          <div className="space-y-2 sm:space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-olive-dark font-sans text-balance">
              Pedro Olivos y sus Violinistas
            </h2>
            <p className="text-olive-dark/90 font-medium font-sans text-xs sm:text-sm leading-relaxed px-2 sm:px-0">
              Una comunidad amigable para músicos aficionados y amantes de la música.
            </p>
          </div>
          <Link
            href="https://chat.whatsapp.com/TULINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 bg-olive-dark hover:bg-olive text-cream font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg"
          >
            <WhatsAppIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            Unirme gratis
          </Link>
        </div>
      </div>
    </section>
  )
}
