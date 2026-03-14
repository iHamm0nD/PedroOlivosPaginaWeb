import { Navegacion } from "@/components/01-navegacion"
import { TarjetaProducto } from "@/components/tarjeta-producto"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const products = [
  {
    image: "/images/hotmart1.png",
    title: "Empieza Bien en el Violín: Rutinas de Práctica para Principiantes",
    price: "S/ 37.00",
  },
  {
    image: "/images/hotmart2.png",
    title: "¿El Violín es Fácil? Método Práctico para aprender a tocar el violín con Enfoque Peruano",
    price: "S/ 99.00",
  },
]

export default function TiendaPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />

      {/* Page hero */}
      <section className="bg-cream border-b border-olive/10 py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-px bg-pink" />
              <span className="text-pink text-xs font-bold tracking-[0.35em] uppercase font-sans">
                Cursos & Material
              </span>
            </div>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-light text-olive-dark leading-none text-balance"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Tienda
            </h1>
            <p className="mt-5 text-olive/60 text-sm leading-relaxed font-sans max-w-lg">
              Descubre mi colección de recursos diseñados para ayudarte a llevar tu música al siguiente nivel. Ebooks, partituras y más.
            </p>
          </div>

          <Link
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-olive/20 text-olive-dark hover:border-olive-dark text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full transition-all duration-300 font-sans shrink-0"
          >
            ¿Tienes preguntas?
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Products section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Divider label */}
          <div className="flex items-center gap-6 mb-12">
            <div className="flex-1 h-px bg-olive/10" />
            <span className="text-olive/35 text-xs font-bold tracking-[0.3em] uppercase font-sans">{products.length} productos disponibles</span>
            <div className="flex-1 h-px bg-olive/10" />
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <TarjetaProducto
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}

            {/* "Próximamente" placeholder card */}
            <div className="bg-white border border-dashed border-olive/20 rounded-2xl flex flex-col items-center justify-center text-center p-10 min-h-[320px]">
              <div className="w-10 h-px bg-pink/40 mx-auto mb-5" />
              <p
                className="text-2xl font-light text-olive/40 text-balance"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Próximamente
              </p>
              <p className="text-xs text-olive/30 font-sans mt-2 tracking-widest uppercase font-semibold">Nuevo material</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA strip */}
      <section className="bg-white border-y border-olive/10 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs text-olive/40 font-bold tracking-[0.3em] uppercase font-sans mb-1">¿Buscas algo específico?</p>
            <h3
              className="text-2xl md:text-3xl font-light text-olive-dark"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Partituras personalizadas a pedido
            </h3>
          </div>
          <Link
            href="https://wa.me/51999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-olive-dark hover:bg-olive text-cream text-xs font-bold tracking-widest uppercase px-7 py-4 rounded-full transition-all duration-300 shadow-sm font-sans shrink-0"
          >
            Solicitar por WhatsApp
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      <PieDePagina />
    </main>
  )
}
