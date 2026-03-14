import { Navegacion } from "@/components/01-navegacion"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />
      <SeccionBoletin />
      <PieDePagina />
    </main>
  )
}
