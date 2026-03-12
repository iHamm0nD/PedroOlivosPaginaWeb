import { Navbar } from "@/components/navbar"
import { VideoCard } from "@/components/video-card"
import { ChannelPreview } from "@/components/channel-preview"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

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
      <Navbar />

      {/* Video Section */}
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

          {/* Channel Preview */}
          <div className="mb-12">
            <ChannelPreview
              channelName="Pedro Olivos Música"
              channelUrl="https://www.youtube.com/@pedroolivosmusica"
              avatarUrl="/images/foto_perfil_PedroOlivos.jpg"
              description="🎻 Tutoriales de violín, covers y música en vivo"
            />
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <VideoCard
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
