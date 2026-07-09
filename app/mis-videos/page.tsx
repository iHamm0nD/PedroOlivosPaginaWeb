import { Navegacion } from "@/components/01-navegacion"
import { TarjetaVideo } from "@/components/tarjeta-video"
import { UltimoVideo } from "@/components/ultimo-video"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import Image from "next/image"
import Link from "next/link"
import { Youtube } from "lucide-react"

// ─── Fallback de videos (por si falla el RSS) ───────────────────────────────
const fallbackVideoIds = [
  "65h_d1UCmY4",
  "S7u0P-arDwM",
  "tx4lPQONTjw",
  "PXeyuGRMyYo",
  "INEdqwI2c-o",
  "Qid4AD--rx4",
  "_kn_AcPcn4E",
  "3hDVmKXkMlU",
  "n-eymGzUm3Y",
  "fWgNdHd8gcI",
  "nniv3GLYcqg",
]

const CHANNEL_ID = "UCIez6YIXmcGIP8Q0-2udHjQ"

async function getVideoTitle(videoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return videoId
    const data = await res.json()
    return data.title || videoId
  } catch {
    return videoId
  }
}

async function getRecentVideos(channelId: string) {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const res = await fetch(rssUrl, { cache: "no-store" })
    if (!res.ok) return []
    const xml = await res.text()
    
    const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map(m => m[1])
    const videos = []
    
    for (const entry of entries) {
      const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)
      const mediaTitleMatch = entry.match(/<media:title>(.*?)<\/media:title>/)
      const titleMatch = mediaTitleMatch ?? entry.match(/<title>(.*?)<\/title>/)
      
      if (videoIdMatch && titleMatch) {
        videos.push({
          videoId: videoIdMatch[1],
          title: titleMatch[1].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'),
        })
      }
    }
    return videos
  } catch {
    return []
  }
}

export default async function MisVideosPage() {
  const recentVideos = await getRecentVideos(CHANNEL_ID)
  
  let videos = []
  
  if (recentVideos.length > 1) {
    // Saltamos el primer video porque se muestra en <UltimoVideo />
    videos = recentVideos.slice(1)
  } else {
    // Fallback a los videos estáticos
    videos = await Promise.all(
      fallbackVideoIds.map(async (id) => ({
        videoId: id,
        title: await getVideoTitle(id),
      }))
    )
  }

  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />

      {/* ── Hero del canal ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-cream via-white to-cream py-10 sm:py-14 md:py-20 border-b border-pink/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 rounded-full bg-pink/30 blur-md" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-pink/60 shadow-xl">
                <Image
                  src="/images/foto_perfil_PedroOlivos.jpg"
                  alt="Pedro Olivos"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-olive text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-1 sm:mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                Canal de YouTube
              </p>
              <h1
                className="text-olive-dark text-3xl sm:text-4xl md:text-5xl font-light mb-1 sm:mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Pedro Olivos
              </h1>
              <p className="text-olive/70 text-sm sm:text-base">
                Tutoriales de violín, covers y música en vivo
              </p>
            </div>

            {/* CTA */}
            <Link
              href="https://www.youtube.com/@pedroolivosmusica?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 sm:gap-2.5 bg-pink hover:bg-pink-dark text-white font-bold text-xs sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-4 h-4" />
              Suscribete
            </Link>
          </div>
        </div>
      </section>


      {/* ── Todos los videos ────────────────────────────────────────── */}
      <section className="bg-cream py-10 sm:py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 sm:w-10 h-px bg-pink" />
              <div>
                <p className="text-pink text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Toda la colección
                </p>
                <h2
                  className="text-olive-dark text-2xl sm:text-3xl md:text-4xl font-light"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Mis Videos
                </h2>
              </div>
            </div>
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-olive-dark hover:text-olive text-sm font-semibold transition-colors duration-300 group"
            >
              Ver canal completo
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Primera fila: Último video (2/3) + 2 videos apilados (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6 lg:items-stretch">
            {/* Último video - ocupa 2 columnas, llena la altura */}
            <div className="lg:col-span-2 flex flex-col">
              <UltimoVideo />
            </div>

            {/* 2 videos apilados a la derecha */}
            <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
              {videos.slice(0, 2).map((video) => (
                <TarjetaVideo
                  key={video.videoId}
                  videoId={video.videoId}
                  title={video.title}
                />
              ))}
            </div>
          </div>

          {/* Resto de videos — 3 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {videos.slice(2).map((video) => (
              <TarjetaVideo
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
              />
            ))}
          </div>

          {/* Mobile ver canal */}
          <div className="mt-8 flex md:hidden justify-center">
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-olive/30 text-olive-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-olive/10 transition-all duration-300"
            >
              Ver canal completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Pie de Página */}
      <PieDePagina />
    </main>
  )
}
