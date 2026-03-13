"use client"

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

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+51 999 999 999",
    href: "https://wa.me/51999999999",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@pedrolivos.com",
    href: "mailto:contacto@pedrolivos.com",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Lima, Perú",
    href: "#",
  },
]

export function SeccionBoletin() {
  return (
    <section id="subscribe" className="bg-cream relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-32">

        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-px bg-pink" />
            <span className="text-pink text-xs font-bold tracking-[0.35em] uppercase font-sans">
              Hablemos
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-light text-olive-dark leading-none text-balance"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Ponte en <em className="text-pink not-italic font-semibold">Contacto</em>
          </h2>
          <p className="mt-5 text-olive/60 text-sm font-sans max-w-md leading-relaxed">
            Ya sea para una clase, una presentación especial o simplemente para conversar sobre música, estoy aquí.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid md:grid-cols-5 gap-8 lg:gap-16 items-start">

          {/* Left col — contact items */}
          <div className="md:col-span-2 space-y-10">

            {/* Contact items as editorial list */}
            <div className="space-y-0 divide-y divide-olive/8">
              {contactItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") || item.href.startsWith("mailto") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-5 py-5 group transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-full border border-olive/15 bg-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-pink group-hover:border-pink shadow-sm">
                    <item.icon className="w-4.5 h-4.5 text-olive group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-olive/40 font-bold tracking-widest uppercase font-sans">{item.label}</p>
                    <p className="text-olive-dark font-semibold font-sans text-sm mt-0.5 group-hover:text-pink transition-colors duration-300 truncate">{item.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-olive/20 group-hover:text-pink transition-all duration-300 group-hover:translate-x-1 shrink-0" />
                </Link>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-olive/40 font-bold tracking-[0.3em] uppercase font-sans mb-4">Redes sociales</p>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 border border-olive/15 bg-white hover:bg-olive-dark rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 hover:border-olive-dark group shadow-sm"
                    aria-label={social.name}
                  >
                    <social.icon className="w-4 h-4 text-olive group-hover:text-cream transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="border-l-2 border-pink/40 pl-5 py-1">
              <p
                className="text-xl text-olive-dark/60 font-light italic leading-snug"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                "La música es el viaje, el violín es mi camino."
              </p>
              <p className="text-olive/35 text-xs font-bold tracking-widest uppercase font-sans mt-2">
                — Pedro Olivos
              </p>
            </div>
          </div>

          {/* Right col — community card */}
          <div className="md:col-span-3">

            {/* Community highlight card — light style */}
            <div className="bg-white border border-olive/10 rounded-3xl p-8 md:p-10 shadow-sm relative overflow-hidden">

              {/* Decorative top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-pink rounded-t-3xl" />

              {/* Soft decorative shape */}
              <div className="absolute bottom-0 right-0 w-56 h-56 rounded-full bg-pink/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-pink/60" />
                  <span className="text-pink text-xs font-bold tracking-[0.3em] uppercase font-sans">Comunidad exclusiva</span>
                </div>

                <h3
                  className="text-3xl md:text-4xl font-light text-olive-dark leading-tight text-balance"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Pedro Olivos y sus{" "}
                  <em className="text-pink not-italic font-semibold">Violinistas</em>
                </h3>

                <p className="text-olive/60 text-sm leading-relaxed font-sans max-w-sm">
                  Una comunidad amigable para músicos aficionados y amantes de la música. Un espacio para compartir, aprender y motivarnos a practicar y disfrutar juntos.
                </p>

                {/* Benefit pills */}
                <div className="flex flex-wrap gap-2">
                  {["Partituras semanales", "Tips de práctica", "Acceso anticipado", "Comunidad activa"].map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive-dark bg-cream border border-olive/10 px-3.5 py-1.5 rounded-full font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-pink inline-block shrink-0" />
                      {benefit}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://wa.me/51999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-olive-dark hover:bg-olive text-cream font-bold text-xs tracking-widest uppercase px-7 py-4 rounded-full shadow-md transition-all duration-300 hover:shadow-lg font-sans"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Unirme a la comunidad
                  </Link>
                  <Link
                    href="mailto:contacto@pedrolivos.com"
                    className="inline-flex items-center justify-center gap-2 border border-olive/20 text-olive-dark hover:border-olive-dark text-xs font-bold tracking-widest uppercase px-7 py-4 rounded-full transition-all duration-300 font-sans"
                  >
                    Enviar email
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "500+", label: "Alumnos" },
                { value: "5★", label: "Valoración" },
                { value: "10+", label: "Años exp." },
              ].map((stat) => (
                <div key={stat.label} className="bg-white border border-olive/10 rounded-2xl p-5 text-center shadow-sm">
                  <p
                    className="text-3xl font-light text-olive-dark"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-olive/50 font-semibold uppercase tracking-widest font-sans mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
