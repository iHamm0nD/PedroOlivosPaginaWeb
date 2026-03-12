import Image from "next/image"
import { Music, Headphones, Disc3, Mic2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-pink overflow-hidden">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-white/15 rounded-full blur-xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] py-12 md:py-16">
          {/* Floating elements - Left side */}
          <div className="absolute left-4 md:left-12 top-1/4 animate-float">
            <div className="bg-white/90 rounded-2xl p-3 shadow-lg">
              <Music className="w-6 h-6 text-pink" />
            </div>
          </div>
          
          <div className="absolute left-8 md:left-24 top-1/2 animate-float-delay">
            <div className="bg-white/90 rounded-full p-2 shadow-lg">
              <Disc3 className="w-5 h-5 text-olive" />
            </div>
          </div>

          {/* Floating elements - Right side */}
          <div className="absolute right-4 md:right-16 top-1/3 animate-float-slow">
            <div className="bg-white/90 rounded-2xl p-3 shadow-lg">
              <Headphones className="w-6 h-6 text-blue" />
            </div>
          </div>
          
          <div className="absolute right-8 md:right-28 top-2/3 animate-float">
            <div className="bg-white/90 rounded-full p-2 shadow-lg">
              <Mic2 className="w-5 h-5 text-olive" />
            </div>
          </div>

          {/* Spotify/Music App mockup behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-64 h-80 md:h-[420px] bg-gray-900 rounded-[3rem] border-4 border-gray-800 shadow-2xl opacity-30 -rotate-6">
            <div className="absolute inset-4 flex flex-col items-center justify-center opacity-50">
              <Disc3 className="w-16 h-16 text-green-500" />
            </div>
          </div>

          {/* Main hero content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Hero image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mb-8">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-full" />
              <Image
                src="/images/pedro-hero.jpg"
                alt="Pedro Olivos violinista posando con su violin"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
              {/* Mic icon overlay */}
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-3 shadow-lg animate-pulse-soft">
                <Mic2 className="w-6 h-6 text-pink" />
              </div>
            </div>

            {/* Hero Title */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight drop-shadow-lg">
                <span className="block">SENTIR</span>
                <span className="block">CREAR</span>
                <span className="block">MUSICA</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Wave transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#FEFAE0"
          />
        </svg>
      </div>
    </section>
  )
}
