import { Navegacion } from "@/components/01-navegacion"
import { SeccionServicios } from "@/components/04-seccion-servicios"
import { PieDePagina } from "@/components/06-pie-de-pagina"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />

      {/* Hero header */}
      <section className="bg-cream border-b border-olive/10 py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-10 h-px bg-pink" />
            <span className="text-pink text-xs font-bold tracking-[0.35em] uppercase font-sans">
              Pedro Olivos
            </span>
          </div>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light text-olive-dark leading-none text-balance"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Mis Servicios
          </h1>
          <p className="mt-5 text-olive/60 text-sm leading-relaxed font-sans max-w-lg">
            Descubre todas las formas en las que puedo ayudarte a mejorar en el violín o darle un toque especial a tus eventos.
          </p>
        </div>
      </section>

      <SeccionServicios />
      <PieDePagina />
    </main>
  )
}
