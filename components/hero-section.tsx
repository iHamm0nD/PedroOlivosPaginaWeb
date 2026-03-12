import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-pink overflow-hidden min-h-[calc(100vh-64px)]">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #283618 0px,
            #283618 1px,
            transparent 1px,
            transparent 12px
          )`
        }}
      />

      {/* Decorative large letter behind */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none">
        <span
          className="text-[20rem] md:text-[28rem] font-black leading-none text-white/10 tracking-tighter"
          aria-hidden="true"
        >
          P
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-64px)] gap-8 py-16">

          {/* Left — text content */}
          <div className="flex-1 flex flex-col justify-center z-10 order-2 md:order-1 text-center md:text-left">

            {/* Eyebrow label */}
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <div className="w-8 h-px bg-olive-dark" />
              <span className="text-olive-dark text-xs font-bold tracking-[0.25em] uppercase">
                Violinista &amp; Compositor
              </span>
            </div>

            {/* Main title */}
            <h1 className="font-black leading-[0.9] tracking-tight mb-6 text-olive-dark">
              <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl">PEDRO</span>
              <span className="block text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-white drop-shadow-sm">OLIVOS</span>
            </h1>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <div className="w-16 h-0.5 bg-olive-dark/40" />
              <div className="w-2 h-2 rounded-full bg-olive-dark" />
              <div className="w-16 h-0.5 bg-olive-dark/40" />
            </div>

            {/* Tagline */}
            <p className="text-olive-dark/80 text-base md:text-lg leading-relaxed mb-10 max-w-sm mx-auto md:mx-0 font-sans">
              Música que nace del alma. Partituras, clases y presentaciones en vivo que despiertan emociones.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link
                href="#partituras"
                className="inline-flex items-center justify-center gap-2 bg-olive-dark text-cream font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-olive transition-colors duration-300"
              >
                Ver Partituras
              </Link>
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-olive-dark text-olive-dark font-bold text-sm tracking-widest uppercase px-8 py-4 rounded-full hover:bg-olive-dark hover:text-cream transition-colors duration-300"
              >
                Contratar
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center md:justify-start">
              <div>
                <p className="text-2xl font-black text-olive-dark">10+</p>
                <p className="text-xs text-olive-dark/70 uppercase tracking-wider font-semibold">Años de experiencia</p>
              </div>
              <div className="w-px bg-olive-dark/20" />
              <div>
                <p className="text-2xl font-black text-olive-dark">500+</p>
                <p className="text-xs text-olive-dark/70 uppercase tracking-wider font-semibold">Presentaciones</p>
              </div>
              <div className="w-px bg-olive-dark/20" />
              <div>
                <p className="text-2xl font-black text-olive-dark">100+</p>
                <p className="text-xs text-olive-dark/70 uppercase tracking-wider font-semibold">Partituras</p>
              </div>
            </div>
          </div>

          {/* Right — image */}
          <div className="flex-shrink-0 z-10 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring behind photo */}
              <div className="absolute -inset-4 rounded-[2.5rem] border border-olive-dark/20" />
              <div className="absolute -inset-8 rounded-[3rem] border border-olive-dark/10" />

              {/* Photo container */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-[420px] md:w-[340px] md:h-[480px] lg:w-[380px] lg:h-[540px] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image
                  src="/images/pedro-hero.jpg"
                  alt="Pedro Olivos violinista"
                  fill
                  className="object-cover object-[center_10%]"
                  priority
                />
                {/* Bottom gradient to blend */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#DDA15E]/70 to-transparent" />
              </div>

              {/* Floating accent card */}
              <div className="absolute -left-6 bottom-16 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-white/50">
                <p className="text-xs text-olive-dark/60 uppercase tracking-wider font-semibold mb-0.5">Disponible para</p>
                <p className="text-sm font-black text-olive-dark">Eventos &amp; Clases</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 54C1200 52 1320 52 1380 52L1440 52V80H0Z"
            fill="#FEFAE0"
          />
        </svg>
      </div>
    </section>
  )
}
