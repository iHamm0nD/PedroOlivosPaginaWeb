import { Navegacion } from "@/components/01-navegacion"
import { SeccionServicios } from "@/components/04-seccion-servicios"
import { PieDePagina } from "@/components/06-pie-de-pagina"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />
      
      {/* Título de Página para contexto */}
      <section className="bg-olive py-12 md:py-16 text-center">
        <h1 
          className="text-4xl md:text-5xl font-light text-cream"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          Mis Servicios
        </h1>
        <p className="mt-4 text-cream/70 text-base max-w-2xl mx-auto px-4">
          Descubre todas las formas en las que puedo ayudarte a mejorar en el violín o darle un toque especial a tus eventos.
        </p>
      </section>

      <SeccionServicios />
      <PieDePagina />
    </main>
  )
}
