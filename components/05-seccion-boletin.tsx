
import Link from "next/link"

import { Mail, MessageCircle, MapPin, ArrowRight } from "lucide-react"

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
  { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@pedrolivos" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com/pedrolivos/" },
  { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com/PedrOlivosPartituras" },
  { name: "YouTube", icon: YouTubeIcon, href: "https://www.youtube.com/@pedroolivosmusica" },
]

export function SeccionBoletin() {
  return (
    <section id="subscribe" className="bg-white relative overflow-hidden">

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-pink/10 via-pink/5 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-olive/10 via-olive/5 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative z-10">

        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 bg-olive-dark/5 backdrop-blur-sm border border-olive/10 rounded-full px-5 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-pink" />
            <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Conectemos
            </span>
          </div>

          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-olive-dark leading-[0.9] tracking-tight"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Ponte en{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-pink">Contacto</span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-pink/30" viewBox="0 0 200 12" fill="currentColor" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8 T200,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>

          <p className="mt-6 text-olive/60 text-base md:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Ya sea para una clase, una presentación especial o simplemente para conversar sobre música, estoy aquí.
          </p>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-5 gap-6 md:gap-8">

          {/* Left column - Community Card */}
          <div className="lg:col-span-3">
            <div className="relative bg-olive-dark rounded-3xl md:rounded-[2rem] p-8 md:p-12 overflow-hidden h-full">

              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-40 h-40 border border-cream/30 rounded-full" />
                <div className="absolute top-20 right-20 w-60 h-60 border border-cream/20 rounded-full" />
                <div className="absolute bottom-10 left-10 w-32 h-32 border border-pink/30 rounded-full" />
              </div>

              {/* Glowing orb */}
              <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-pink/20 backdrop-blur-sm border border-pink/30 rounded-full px-4 py-2 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-pink"></span>
                  </span>
                  <span className="text-cream text-xs font-bold tracking-widest uppercase font-sans">
                    Comunidad activa
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-4"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Pedro Olivos y sus{" "}
                  <span className="text-pink">Violinistas</span>
                </h3>

                <p className="text-cream/70 text-base md:text-lg leading-relaxed font-sans max-w-lg mb-8">
                  Una comunidad amigable para músicos aficionados y amantes de la música. Un espacio para compartir, aprender y motivarnos a practicar juntos.
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Partituras semanales", "Tips de práctica", "Acceso anticipado", "Comunidad activa"].map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cream bg-cream/10 backdrop-blur-sm border border-cream/10 px-4 py-2.5 rounded-full font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block shrink-0" />
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-xs tracking-widest uppercase px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    Unirme ahora
                  </Link>
                  <Link
                    href="mailto:contacto@pedrolivos.com"
                    className="inline-flex items-center justify-center gap-3 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 text-xs font-bold tracking-widest uppercase px-8 py-5 rounded-full transition-all duration-300 font-sans backdrop-blur-sm"
                  >
                    <Mail className="w-4 h-4" />
                    Enviar email
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact info card */}
            <div className="bg-cream border border-olive/10 rounded-3xl p-6 md:p-8">
              <p className="text-xs text-olive/50 font-bold tracking-[0.3em] uppercase font-sans mb-6">Información de contacto</p>

              <div className="space-y-4">
                <Link
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-olive/10 hover:border-pink/30 hover:shadow-lg hover:shadow-pink/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-pink/10 group-hover:bg-pink flex items-center justify-center transition-all duration-300">
                    <MessageCircle className="w-5 h-5 text-pink group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-olive/40 font-bold tracking-widest uppercase font-sans">WhatsApp</p>
                    <p className="text-olive-dark font-bold font-sans">+51 999 999 999</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-olive/30 group-hover:text-pink group-hover:translate-x-1 transition-all duration-300" />
                </Link>

                <Link
                  href="mailto:contacto@pedrolivos.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-2xl border border-olive/10 hover:border-olive/30 hover:shadow-lg hover:shadow-olive/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-olive/10 group-hover:bg-olive flex items-center justify-center transition-all duration-300">
                    <Mail className="w-5 h-5 text-olive group-hover:text-cream transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-olive/40 font-bold tracking-widest uppercase font-sans">Email</p>
                    <p className="text-olive-dark font-bold font-sans text-sm">contacto@pedrolivos.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-olive/30 group-hover:text-olive group-hover:translate-x-1 transition-all duration-300" />
                </Link>

                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-olive/10">
                  <div className="w-12 h-12 rounded-xl bg-pink/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-pink" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-olive/40 font-bold tracking-widest uppercase font-sans">Ubicación</p>
                    <p className="text-olive-dark font-bold font-sans">Lima, Perú</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links card */}
            <div className="bg-cream border border-olive/10 rounded-3xl p-6 md:p-8">
              <p className="text-xs text-olive/50 font-bold tracking-[0.3em] uppercase font-sans mb-6">Sígueme en redes</p>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-white rounded-2xl border border-olive/10 hover:border-olive-dark hover:shadow-lg hover:shadow-olive/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-olive-dark group-hover:scale-110 flex items-center justify-center transition-all duration-300">
                      <social.icon className="w-4 h-4 text-cream" />
                    </div>
                    <div>
                      <p className="text-olive-dark font-bold text-sm font-sans">{social.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-block max-w-2xl">
            <p
              className="text-2xl md:text-4xl text-olive-dark/70 font-light italic leading-relaxed"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              "La música es el viaje, el violín es mi camino."
            </p>
            <p className="text-olive/40 text-xs font-bold tracking-[0.3em] uppercase font-sans mt-4">
              — Pedro Olivos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SeccionMembresia() {
  return (
    <section id="servicios" className="bg-olive-dark py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* White Card */}
          <div className="bg-cream rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center space-y-8">

              {/* WhatsApp Badge */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                  <WhatsAppIcon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Group Name */}
              <div className="space-y-2">
                <h3 className="text-2xl md:text-3xl font-black text-olive-dark font-sans">
                  Grupo VIP de Partituras
                </h3>
                <p className="text-gray-500 text-sm font-sans">
                  Grupo exclusivo de WhatsApp
                </p>
              </div>

              {/* Benefits List */}
              <ul className="space-y-4 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎻</span>
                  <span>Partituras exclusivas cada semana.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎶</span>
                  <span>Tutoriales y tips para mejorar tu técnica.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">📹</span>
                  <span>Contenido exclusivo detrás de cámaras.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Acceso anticipado a nuevos covers y arreglos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🤝</span>
                  <span>Comunidad de violinistas apasionados.</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="https://chat.whatsapp.com/TULINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <WhatsAppIcon className="w-6 h-6" />
                UNIRME AL GRUPO
              </Link>

              <p className="text-gray-400 text-xs font-sans">
                ¡Es gratis! Solo haz clic y únete al grupo 🎻
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
    <section id="subscribe" className="bg-pink py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center space-y-8">

          {/* Label */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-olive-dark/40" />
            <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
              Comunidad
            </span>
            <div className="w-8 h-px bg-olive-dark/40" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-black text-olive-dark font-sans text-balance">
              Pedro Olivos y sus Violinistas
            </h2>
            <p className="text-olive-dark/70 font-sans text-sm leading-relaxed">
              Es una comunidad amigable para músicos aficionados y amantes de la música. Aunque nace desde el violín, es un espacio abierto para compartir, aprender, motivarnos a practicar y disfrutar juntos de la música. 🎶
            </p>
          </div>

          <Link
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive-dark hover:bg-olive text-cream font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl font-sans"
          >
            Unirme
          </Link>

          {/* Social Links */}
          <div className="pt-4 space-y-4">
            <p className="text-olive-dark/80 font-sans text-sm font-semibold">Sigueme en todas mis redes</p>
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/30 hover:bg-olive-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/20"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-olive-dark group-hover:text-cream transition-colors" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}