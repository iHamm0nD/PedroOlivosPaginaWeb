import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
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
        {/* Dark vignette — corners and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#283618]/90 via-[#283618]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#283618]/70 via-transparent to-[#283618]/50" />
        {/* Warm amber tint overlay — subtle, ties to palette */}
        <div className="absolute inset-0 bg-[#DDA15E]/10 mix-blend-multiply" />
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
                  Violinista &amp; Compositor
                </span>
              </div>

              {/* Name */}
              <div>
                <h1 className="leading-[0.9] tracking-tight font-serif">
                  <span className="block text-cream font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] drop-shadow-lg">
                    Pedro
                  </span>
                  <span className="block text-pink font-bold italic text-5xl sm:text-7xl lg:text-8xl xl:text-[7rem] drop-shadow-lg">
                    Olivos
                  </span>
                </h1>
              </div>

              {/* Tagline */}
              <p className="text-cream/75 text-sm md:text-base max-w-xs leading-relaxed font-sans mt-1">
                Música que nace del alma. Partituras, conciertos y clases que despiertan emociones.
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
                  href="https://wa.me/51999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-cream/50 text-cream font-bold text-xs tracking-widest uppercase px-6 py-3 rounded-full hover:bg-cream/10 transition-colors duration-300 font-sans"
                >
                  Contratar
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
