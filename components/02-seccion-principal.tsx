import Image from "next/image"
import Link from "next/link"

export function SeccionPrincipal() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-64px)]">

      {/* Full-bleed background photo */}
      <div className="absolute inset-0">
        <Image
          src="/images/pedro-about-2.jpg"
          alt="Pedro Olivos tocando violin"
          fill
          className="object-cover object-[center_20%]"
          priority
        />
        {/* Dark vignette — corners and bottom, warm neutral tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208]/90 via-[#1a1208]/35 to-[#1a1208]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1208]/65 via-transparent to-[#1a1208]/40" />
        {/* Warm amber tint overlay — ties to palette */}
        <div className="absolute inset-0 bg-[#DDA15E]/08 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end min-h-[calc(100vh-64px)] pb-16 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

            {/* Left — main title block */}
            <div className="flex flex-col gap-4">

              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-pink" />
                <span className="text-pink text-xs font-bold tracking-[0.3em] uppercase font-sans">
                  Violinista &amp; Creador Digital
                </span>
              </div>

              {/* Name */}
              <div>
                <h1
                  className="leading-[1.1] drop-shadow-2xl"
                  style={{ fontFamily: "var(--font-great-vibes), 'Great Vibes', cursive" }}
                >
                  <span className="block text-cream text-7xl sm:text-9xl lg:text-[9rem] xl:text-[11rem]">
                    Pedro
                  </span>
                  <span className="block text-pink text-7xl sm:text-9xl lg:text-[9rem] xl:text-[11rem] -mt-4">
                    Olivos
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-cream/75 text-sm md:text-base max-w-xs leading-relaxed font-sans mt-1">
                Música que nace del alma. Partituras y clases que despiertan emociones.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-2">
                <Link
                  href="#sobre-mi"
                  className="inline-flex items-center gap-2 bg-pink text-olive-dark font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-[#BC6C25] transition-colors duration-300 font-sans"
                >
                  Sobre Mi
                </Link>
                <Link
                  href="https://wa.me/51987654321"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/50 text-cream font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-cream/10 transition-colors duration-300 font-sans"
                >
                  Contactame
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorative border line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink to-transparent opacity-60" />

      {/* Wave transition into page */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60L60 54C120 48 240 36 360 33C480 30 600 36 720 39C840 42 960 42 1080 40.5C1200 39 1320 39 1380 39L1440 39V60H0Z"
            fill="#FEFAE0"
          />
        </svg>
      </div>

    </section>
  )
}
