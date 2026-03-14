import { Navegacion } from "@/components/01-navegacion"
import { TarjetaProducto } from "@/components/tarjeta-producto"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import Link from "next/link"
import { ArrowRight, Sparkles, ShoppingBag, Star, Zap } from "lucide-react"

const products = [
  {
    image: "/images/hotmart1.png",
    title: "Empieza Bien en el Violín: Rutinas de Práctica para Principiantes",
    price: "S/ 37.00",
    badge: "Bestseller",
    badgeColor: "pink",
  },
  {
    image: "/images/hotmart2.png",
    title: "¿El Violín es Fácil? Método Práctico para aprender a tocar el violín con Enfoque Peruano",
    price: "S/ 99.00",
    badge: "Nuevo",
    badgeColor: "olive",
  },
]

const features = [
  { icon: Star, title: "Calidad Premium", description: "Material revisado y probado por cientos de alumnos" },
  { icon: Zap, title: "Acceso Inmediato", description: "Descarga instantánea después de tu compra" },
  { icon: ShoppingBag, title: "Soporte Incluido", description: "Resuelve tus dudas por WhatsApp" },
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

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-5 py-2 mb-8">
              <ShoppingBag className="w-4 h-4 text-pink" />
              <span className="text-cream text-xs font-bold tracking-[0.3em] uppercase font-sans">
                Cursos & Material
              </span>
            </div>
            
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream leading-[0.9] tracking-tight mb-6"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Mi{" "}
              <span className="text-pink">Tienda</span>
            </h1>
            
            <p className="text-cream/70 text-lg md:text-xl font-sans max-w-xl leading-relaxed mb-10">
              Descubre mi colección de recursos diseñados para ayudarte a llevar tu música al siguiente nivel.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#productos"
                className="inline-flex items-center gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-xs tracking-widest uppercase px-8 py-5 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30"
              >
                Ver productos
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="https://wa.me/51999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cream/10 hover:bg-cream/20 text-cream border border-cream/20 text-xs font-bold tracking-widest uppercase px-8 py-5 rounded-full transition-all duration-300 font-sans backdrop-blur-sm"
              >
                Consultar
              </Link>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0Z" fill="#FEFAE0"/>
          </svg>
        </div>
      </section>

      {/* Features row */}
      <section className="bg-cream py-12 md:py-16 border-b border-olive/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-olive-dark/5 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-pink" />
                </div>
                <div>
                  <h3 className="text-olive-dark font-bold text-sm font-sans mb-1">{feature.title}</h3>
                  <p className="text-olive/60 text-sm font-sans">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products section */}
      <section id="productos" className="bg-cream py-20 md:py-28 relative overflow-hidden">
        
        {/* Decorative blob */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 bg-olive-dark/5 backdrop-blur-sm border border-olive/10 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-pink" />
              <span className="text-olive-dark text-xs font-bold tracking-[0.3em] uppercase font-sans">
                {products.length} productos disponibles
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-olive-dark leading-tight"
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

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 bg-pink/20 backdrop-blur-sm border border-pink/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-pink" />
                <span className="text-cream text-xs font-bold tracking-widest uppercase font-sans">
                  Servicio personalizado
                </span>
              </div>
              <h3
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream leading-tight mb-4"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                ¿Buscas una partitura{" "}
                <span className="text-pink">específica</span>?
              </h3>
              <p className="text-cream/70 text-base md:text-lg font-sans">
                Puedo crear arreglos personalizados para cualquier canción que desees tocar en violín.
              </p>
            </div>
            
            <Link
              href="https://wa.me/51999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-xs tracking-widest uppercase px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30 shrink-0"
            >
              Solicitar por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <PieDePagina />
    </main>
  )
}
