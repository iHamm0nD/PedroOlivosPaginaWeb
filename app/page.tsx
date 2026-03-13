import { Navegacion } from "@/components/01-navegacion"
import { SeccionPrincipal } from "@/components/02-seccion-principal"
import { SeccionSobreMi } from "@/components/03-seccion-sobre-mi"
import { SeccionMembresia } from "@/components/04-seccion-membresia"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navegacion />
      <SeccionPrincipal />
      <SeccionSobreMi />
      <SeccionMembresia />
      <SeccionBoletin />
      <PieDePagina />
    </main>
  )
}
