import Image from "next/image"
import { Music, Globe, Headphones } from "lucide-react"

const highlights = [
  {
    icon: Music,
    title: "Música & Tutoriales",
    description:
      "Canciones propias, clases prácticas y consejos para que mejores tus habilidades musicales, ya seas principiante o más avanzado.",
  },
  {
    icon: Globe,
    title: "Viajes Musicales",
    description:
      "Vlogs donde la música acompaña cada aventura — desde Lima hasta Tarma, paisajes impresionantes con violín de fondo.",
  },
  {
    icon: Headphones,
    title: "Lives & Comunidad",
    description:
      "Transmisiones en vivo donde puedes interactuar, pedir canciones y ser parte de una comunidad apasionada por la música.",
  },
]

export function SeccionSobreMi() {
  return (
    <section id="sobre-mi" className="bg-cream py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-px bg-pink" />
          <span className="text-pink text-xs font-bold tracking-[0.3em] uppercase font-sans">
            Conoce al artista
          </span>
          <div className="w-8 h-px bg-pink" />
        </div>

        <h2 className="text-3xl md:text-4xl font-black text-center text-olive-dark mb-14 font-sans text-balance">
          PEDRO OLIVOS
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — photo collage */}
          <div className="relative h-[420px] md:h-[520px]">
            {/* Main large image */}
            <div className="absolute top-0 left-0 w-56 h-72 md:w-64 md:h-80 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
              <Image
                src="/images/pedro-about-1.jpg"
                alt="Pedro Olivos posando con su violin en el parque"
                fill
                className="object-cover object-[99%_center] scale-[1.19]" // con esto se ajusta la imagen dependendiendo izq o derecha
              />
            </div>

            {/* Second image — offset right and down */}
            <div className="absolute top-20 right-0 md:right-4 w-44s h-60 md:w-52 md:h-72 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20">
              <Image
                src="/images/pedro-about-2.jpg"
                alt="Pedro Olivos tocando violin en el parque"
                fill
                className="object-cover object-[20%_center] scale-[0.99]"
              />
            </div>

            {/* Third image — bottom left */}
            <div className="absolute bottom-0 left-8 md:left-16 w-40 h-52 md:w-48 md:h-60 rounded-3xl overflow-hidden shadow-xl border-4 border-white z-30">
              <Image
                src="/images/pedro-about-3.jpg"
                alt="Pedro Olivos ejecutando violin en parque con flores"
                fill
                className="object-cover object-[21%_center] scale-[1.05]"
              />
            </div>

            {/* Decorative accent dot */}
            <div className="absolute top-6 right-8 w-3 h-3 rounded-full bg-pink opacity-70" />
            <div className="absolute bottom-10 right-0 w-2 h-2 rounded-full bg-olive opacity-50" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-pink/20 border border-pink/40" />
          </div>

          {/* Right — text */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg font-sans">
              Soy <span className="font-bold text-olive-dark">Pedro Olivos</span>, violinista y creador digital apasionado por compartir la música en todas sus formas. Mi camino es el de un músico en constante aprendizaje, y eso es precisamente lo que me motiva cada día.
            </p>

            <p className="text-gray-700 leading-relaxed font-sans">
              Comparto mis viajes musicales — desde presentaciones en vivo hasta tutoriales, clases y momentos únicos donde el violín es el protagonista. Creo que la música nos acompaña en cada aventura, desde las calles de Lima hasta los paisajes de Tarma.
            </p>

            <p className="text-gray-700 leading-relaxed font-sans">
              Mi misión es construir una comunidad apasionada por la música: un espacio donde puedas aprender, interactuar en mis lives, pedir canciones y crecer junto a mí en este viaje. Cada transmisión es una experiencia nueva, cada tutorial un paso más en tu camino musical.
            </p>

            {/* Highlight cards */}
            <div className="space-y-3 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white rounded-2xl px-5 py-4 shadow-sm border border-gray-100"
                >
                  <div className="shrink-0 bg-pink/10 rounded-xl p-2">
                    <item.icon className="w-5 h-5 text-pink" />
                  </div>
                  <div>
                    <p className="font-bold text-olive-dark text-sm font-sans">{item.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed font-sans">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl font-bold text-pink pt-2 font-sans">
              "La musica es el viaje, el violin es mi camino."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
