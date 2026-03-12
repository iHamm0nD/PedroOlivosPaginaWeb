import Image from "next/image"
import { Music, Headphones, Disc3 } from "lucide-react"

export function AboutSection() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 id="musica" className="text-3xl md:text-4xl font-black text-center text-gray-800 mb-12 md:mb-16">
          SOBRE LA ARTISTA
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Luna Rivera
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Soy cantautora independiente con una mezcla unica de pop, indie y musica 
                electronica. Mi sonido nace de experiencias reales, emociones profundas y 
                la busqueda constante de conectar con las personas.
              </p>
              
              <p>
                He acumulado mas de <span className="font-bold text-gray-800">5 millones de streams</span> en 
                plataformas digitales, con canciones que han resonado en corazones de 
                toda Latinoamerica y mas alla.
              </p>
              
              <p>
                He tocado en vivo en mas de 50 ciudades, desde pequenos venues intimos 
                hasta grandes festivales, siempre buscando crear experiencias unicas 
                para cada persona que asiste.
              </p>
              
              <p>
                Mi mision es crear musica que inspire, consuele y acompane a las personas 
                en cada momento de sus vidas. Creo que la musica tiene el poder de 
                transformar y conectar almas.
              </p>
              
              <p>
                Cada cancion es una historia, cada concierto es una experiencia compartida, 
                y cada fan es parte de esta familia musical que hemos construido juntos.
              </p>
            </div>

            <p className="text-xl md:text-2xl font-bold text-pink pt-4">
              La musica es mas que sonido, es una experiencia!
            </p>
          </div>

          {/* Right Column - Photo Collage */}
          <div className="relative h-[400px] md:h-[500px]">
            {/* Main circular image */}
            <div className="absolute top-0 right-0 md:right-8 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="/images/pedro-about-1.jpg"
                alt="Pedro Olivos posando con su violin en el parque"
                fill
                className="object-cover"
              />
            </div>

            {/* Second circular image */}
            <div className="absolute top-32 md:top-40 left-0 md:left-4 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl border-4 border-white z-20">
              <Image
                src="/images/pedro-about-2.jpg"
                alt="Pedro Olivos tocando violin en el parque"
                fill
                className="object-cover"
              />
            </div>

            {/* Third circular image */}
            <div className="absolute bottom-0 right-4 md:right-16 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="/images/pedro-about-3.jpg"
                alt="Pedro Olivos ejecutando violin en parque con flores"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating decorative elements */}
            <div className="absolute top-16 left-1/2 animate-float">
              <div className="bg-pink rounded-full p-3 shadow-lg">
                <Music className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="absolute bottom-20 left-8 animate-float-delay">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <Headphones className="w-5 h-5 text-pink" />
              </div>
            </div>

            <div className="absolute top-1/2 right-0 animate-float-slow">
              <div className="bg-olive rounded-full p-3 shadow-lg">
                <Disc3 className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Streams notification */}
            <div className="absolute bottom-32 right-32 md:right-40 bg-white rounded-2xl px-4 py-2 shadow-lg animate-pulse-soft z-30">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-green-500" />
                <span className="text-sm font-bold text-gray-700">5M+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
