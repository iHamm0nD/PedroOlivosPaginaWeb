import { Navegacion } from "@/components/01-navegacion"
import { SeccionServicios } from "@/components/04-seccion-servicios"
import { PieDePagina } from "@/components/06-pie-de-pagina"

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />
      <SeccionServicios />
      <PieDePagina />
    </main>
  )
}
