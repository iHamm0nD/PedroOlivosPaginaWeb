import { Navegacion } from "@/components/01-navegacion"
import { TarjetaProducto } from "@/components/tarjeta-producto"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"

const products = [
  {
    image: "/images/hotmart1.png",
    title: "Empieza Bien en el Violín Rutinas de Práctica para Principiantes",
    price: "S/ 37.00",
  },
  {
    image: "/images/hotmart2.png",
    title: "¿El Violín es Fácil? Metodo Practico para aprender a tocar el violín con Enfoque Peruano",
    price: "S/ 99.00",
  },
]

export default function TiendaPage() {
  return (
    <main className="min-h-screen">
      <Navegacion />

      {/* Lista de Productos */}
      <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
        {/* Decoración de fondo suave */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 bg-olive/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center md:text-left mb-12 md:mb-16">
            <div className="inline-flex items-center gap-4 justify-center md:justify-start mb-4">
              <div className="w-10 h-px bg-pink" />
              <span
                className="text-pink text-sm font-semibold tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Cursos & Material
              </span>
              <div className="w-10 h-px bg-pink md:hidden" />
            </div>

            <h2
              className="text-4xl md:text-5xl font-light text-olive-dark"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Tienda
            </h2>
            <p className="mt-4 text-olive/70 text-base max-w-2xl mx-auto md:mx-0">
              Descubre mi colección de recursos diseñados para ayudarte a llevar tu música al siguiente nivel. Ebooks, Partituras y más.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product, index) => (
              <TarjetaProducto
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Pie de Página */}
      <PieDePagina />
    </main>
  )
}
