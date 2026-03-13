import { Navegacion } from "@/components/01-navegacion"
import { TarjetaProducto } from "@/components/tarjeta-producto"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"

const products = [
  {
    image: "/images/product-checklist.png",
    title: "Producto 1",
    price: "s/. 7.99",
  },
  {
    image: "/images/product-hooks.png",
    title: "Producto 2",
    price: "s/. 7.99",
  },
  {
    image: "/images/product-ebook.png",
    title: "Producto 3",
    price: "s/. 49.99",
  },
  {
    image: "/images/product-ugc.png",
    title: "Producto 4",
    price: "s/. 7.99",
  },
  {
    image: "/images/product-challenge.png",
    title: "Producto 5",
    price: "s/. 7.99",
  },
]

export default function TiendaPage() {
  return (
    <main className="min-h-screen">
      <Navegacion />

      {/* Lista de Productos */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-12 md:mb-16">
            LISTA DE PRODUCTOS
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Boletín */}
      <SeccionBoletin />

      {/* Pie de Página */}
      <PieDePagina />
    </main>
  )
}
