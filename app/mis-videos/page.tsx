import { Navegacion } from "@/components/01-navegacion"
import { TarjetaVideo } from "@/components/tarjeta-video"
import { VistaPreviaCanal } from "@/components/vista-previa-canal"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"

// Para añadir nuevos videos agregamos la ID del video y su nombre automaticamente aparece de cualquier video
// Ejemplo: https://youtu.be/fBE_2sHDt4E?list=RDGMEMQ1dJ7wXfLlqCjwV0xfSNbAVMfBE_2sHDt4E
// El id de ese video seria: fBE_2sHDt4E   (DESDE / HASTA ? EN CUALQUIER LINK )

const videoIds = [
  //ACÁ SE AÑADE LOS ID VIDEO DE YOUTUBE
  "byIoQPP2Koc",
  "S7u0P-arDwM",
  "n-eymGzUm3Y",
  "Qid4AD--rx4",
  "PXeyuGRMyYo",
  "INEdqwI2c-o",
  "fWgNdHd8gcI",
  "_kn_AcPcn4E",
  "3hDVmKXkMlU",
]

async function getVideoTitle(videoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 3600 } } // cache por 1 hora
    )
    if (!res.ok) return videoId
    const data = await res.json()
    return data.title || videoId
  } catch {
    return videoId
  }
}

// FUNCION PARA OBTENER LOS TITULOS DE LAS CANCIONES

export default async function MisVideosPage() {

  const videos = await Promise.all(
    videoIds.map(async (id) => ({
      videoId: id,
      title: await getVideoTitle(id),
    }))
  )

  return (
    <main className="min-h-screen">
      <Navegacion />

      {/* Sección de Videos */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-3">
              MIS VIDEOS
            </h2>
            <p className="text-lg text-gray-500">
              Mira mis últimos videos de YouTube
            </p>
          </div>

          {/* Vista Previa del Canal */}
          <div className="mb-12">
            <VistaPreviaCanal
              channelName="Pedro Olivos Música"
              channelUrl="https://www.youtube.com/@pedroolivosmusica"
              avatarUrl="/images/foto_perfil_PedroOlivos.jpg"
              description="🎻 Tutoriales de violín, covers y música en vivo"
            />
          </div>

          {/* Cuadrícula de Videos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <TarjetaVideo
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
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
