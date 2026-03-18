import { Navegacion } from "@/components/01-navegacion"
import { TarjetaProducto } from "@/components/tarjeta-producto"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import Link from "next/link"
import { ArrowRight, Sparkles, ShoppingBag } from "lucide-react"

const products = [
  {
    image: "/images/hotmart1.png",
    title: "Empieza Bien en el Violín: Rutinas de Práctica para Principiantes",
    price: "S/ 37.00",
    badge: "Nuevo",
    badgeColor: "pink",
    href: "https://pay.hotmart.com/D104500426K?sck=HOTMART_PRODUCT_PAGE&off=lq0kdrk8&hotfeature=32&bid=1773452234704",
    description: (
      <>
        <p className="mb-4"><strong>🎻 Empieza Bien en el Violín – Rutinas de Práctica para Principiantes</strong></p>
        <p className="mb-4">Si estás comenzando en el violín, sabes que practicar puede generar muchas dudas:</p>
        <p className="mb-4 font-bold italic">¿Estoy haciéndolo bien? ¿Por dónde empiezo? ¿Cuánto debería practicar?</p>
        <p className="mb-4">Este eBook fue creado para brindarte una guía clara, práctica y estructurada desde tus primeras sesiones.</p>
        <p className="mb-4">A lo largo del material encontrarás los fundamentos de una práctica eficiente, estrategias para evitar errores comunes del principiante y seis rutinas cuidadosamente diseñadas para desarrollar control del arco, sonido limpio, coordinación y estabilidad rítmica.</p>
        <p className="mb-4">El enfoque prioriza la práctica consciente, la reducción de tensión y el progreso progresivo, permitiéndote avanzar con mayor seguridad y menor frustración.</p>
        <p className="mb-4">Ideal para violinistas principiantes que desean construir una base sólida desde el inicio.</p>
        <p className="mb-4 mt-6 italic">✨ Pequeñas prácticas constantes generan grandes avances.</p>
      </>
    )
  },
  {
    image: "/images/hotmart2.png",
    title: "¿El Violín es Fácil? Método Práctico para aprender a tocar el violín con Enfoque Peruano",
    price: "S/ 99.00",
    badgeColor: "olive",
    href: "https://pay.hotmart.com/O104704980X?sck=HOTMART_PRODUCT_PAGE&off=2izqn3d9&hotfeature=32&bid=1773452254969",
    description: (
      <>
        <p className="mb-4"><strong>🎻 ¿El Violín es Fácil?</strong></p>
        <p className="mb-4"><strong>Método práctico con enfoque andino – Pedro Olivos</strong></p>
        <p className="mb-4">Muchos se hacen la misma pregunta antes de empezar:</p>
        <p className="mb-4 font-bold italic">¿El violín es fácil?</p>
        <p className="mb-4">La verdad es que no es cuestión de facilidad… sino de tener el método correcto.</p>
        <p className="mb-4">Este libro nace de años de experiencia enseñando y formando violinistas, y está diseñado para guiarte paso a paso desde cero hasta un nivel intermedio, con una estructura clara, progresiva y práctica.</p>
        <p className="mb-4">Aquí no encontrarás teoría innecesaria ni explicaciones complicadas.</p>
        <p className="mb-6">Encontrarás un camino organizado para que realmente avances.</p>

        <p className="mb-4"><strong>📈 ¿Para quién es este libro?</strong></p>
        <ul className="list-disc pl-5 mb-6 space-y-2 text-olive/80">
          <li>Personas que quieren empezar violín desde cero</li>
          <li>Estudiantes que desean reforzar su técnica</li>
          <li>Docentes que buscan material estructurado</li>
          <li>Músicos que quieren integrar repertorio andino al violín</li>
          <li>Autodidactas disciplinados que buscan una guía clara</li>
        </ul>

        <p className="mb-4"><strong>🎯 Lo que hace diferente a este método</strong></p>
        <p className="mb-4">No es solo un manual.</p>
        <p className="mb-4">Es una herramienta práctica de acompañamiento.</p>
        <p className="mb-4">Cada ejercicio fue diseñado para que desarrolles memoria muscular, seguridad técnica y calidad sonora.</p>
        <p className="mb-4">Si practicas con constancia, verás resultados reales.</p>
        <p className="mb-4">Porque aprender violín no depende del talento.</p>
        <p className="mb-4">Depende de la disciplina, la guía correcta y la conexión con la música que te representa.</p>

        <p className="mb-4 mt-6 italic">🎶 Si estás listo para dejar de preguntarte si el violín es difícil y comenzar a avanzar con estructura, claridad e identidad…</p>
        <p className="mb-4 font-bold">Este libro es tu punto de partida.</p>
      </>
    ),
    features: [
      "Aprender la postura correcta y el agarre natural del arco",
      "Producir un sonido limpio y controlado",
      "Desarrollar coordinación en la mano izquierda",
      "Entender y aplicar la digitación correctamente",
      "Practicar con rutinas estructuradas que aceleran tu progreso",
      "Interpretar melodías y repertorio andino adaptado al violín"
    ]
  },
]


export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />

      {/* Hero section - More impactful */}
      <section className="relative bg-olive-dark overflow-hidden">

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink/20 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-olive/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3" />
        </div>

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-64 h-64 border border-cream rounded-full" />
          <div className="absolute top-32 left-32 w-80 h-80 border border-cream rounded-full" />
          <div className="absolute bottom-20 right-20 w-48 h-48 border border-pink rounded-full" />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-5 py-2 mb-8">
              <ShoppingBag className="w-4 h-4 text-pink" />
              <span className="text-cream text-xs font-bold tracking-[0.3em] uppercase font-sans">
                eBooks & Material
              </span>
            </div>

            <h1
              className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.9] tracking-tight mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Mi{" "}
              <span className="text-pink">Tienda</span>
            </h1>

            <p className="text-cream/70 text-sm sm:text-base md:text-lg lg:text-xl font-sans max-w-xl leading-relaxed mb-6 sm:mb-8 md:mb-10">
              Descubre mi colección de recursos diseñados para ayudarte a llevar tu música al siguiente nivel.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
              <a
                href="#productos"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-[10px] sm:text-xs tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-5 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30"
              >
                Ver productos
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <Link
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 text-[10px] sm:text-xs font-bold tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-5 rounded-full transition-all duration-300 font-sans backdrop-blur-sm"
              >
                Consultar
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="#FEFAE0" />
          </svg>
        </div>
      </section>



      {/* Products section */}
      <section id="productos" className="bg-cream py-8 md:py-16 relative overflow-hidden">

        {/* Decorative blob */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 bg-olive-dark/5 backdrop-blur-sm border border-olive/10 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-pink" />
              <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
                {products.length} productos disponibles
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-olive-dark leading-tight"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Recursos para{" "}
              <span className="text-pink">Violinistas</span>
            </h2>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <TarjetaProducto
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                badge={product.badge}
                badgeColor={product.badgeColor}
                description={product.description}
                features={product.features}
                href={product.href}
              />
            ))}

            {/* "Próximamente" placeholder card */}
            <div className="group relative bg-white border-2 border-dashed border-olive/20 rounded-3xl flex flex-col items-center justify-center text-center p-10 min-h-[400px] hover:border-pink/40 transition-all duration-500">
              {/* Pulsing circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-pink/10 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-pink/20 flex items-center justify-center animate-pulse">
                    <Sparkles className="w-6 h-6 text-pink" />
                  </div>
                </div>
              </div>

              <p
                className="text-3xl font-bold text-olive/40 mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Próximamente
              </p>
              <p className="text-xs text-olive/30 font-sans tracking-widest uppercase font-semibold">Nuevo material en camino</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom partituras CTA */}
      <section className="bg-olive-dark relative overflow-hidden">

        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3" />
        </div>

        {/* Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-48 h-48 border border-cream rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 h-32 border border-pink rounded-full" />
        </div>
      </section>
      <PieDePagina />
    </main>
  )
}
