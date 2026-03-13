import Image from "next/image"
import Link from "next/link"
import { Play, Youtube } from "lucide-react"

interface VideoData {
  videoId: string
  title: string
  publishedAt: string
}

async function getLatestVideo(channelId: string): Promise<VideoData | null> {
  try {
    const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    const res = await fetch(rssUrl, {
      next: { revalidate: 1800 }, // actualizar cada 30 min
    })
    if (!res.ok) return null

    const xml = await res.text()

    // Extraer el primer <entry> (el más reciente)
    const entryMatch = xml.match(/<entry>([\s\S]*?)<\/entry>/)
    if (!entryMatch) return null

    const entry = entryMatch[1]

    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/)
    const titleMatch = entry.match(/<title>(.*?)<\/title>/)
    const publishedMatch = entry.match(/<published>(.*?)<\/published>/)

    if (!videoIdMatch || !titleMatch) return null

    return {
      videoId: videoIdMatch[1],
      title: titleMatch[1].replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"'),
      publishedAt: publishedMatch ? publishedMatch[1] : "",
    }
  } catch {
    return null
  }
}

function formatDate(iso: string): string {
  if (!iso) return ""
  try {
    return new Date(iso).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return ""
  }
}

// Channel ID de Pedro Olivos Música
const CHANNEL_ID = "UCmBnbGTuQslnr2YfzJ3sPyQ"

export async function UltimoVideo() {
  const latest = await getLatestVideo(CHANNEL_ID)

  // Fallback al primer video manual si falla el RSS
  const video = latest ?? {
    videoId: "byIoQPP2Koc",
    title: "Último video de Pedro Olivos",
    publishedAt: "",
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${video.videoId}`
  const date = formatDate(video.publishedAt)

  return (
    <section className="bg-olive-dark py-16 md:py-24 relative overflow-hidden">
      {/* Decorative background lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-cream" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-cream" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-10 h-px bg-pink" />
          <span
            className="text-pink text-sm font-semibold tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Recién publicado
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Thumbnail */}
          <div className="relative group">
            <Link href={videoUrl} target="_blank" rel="noopener noreferrer">
              {/* Glow border */}
              <div className="absolute -inset-1 bg-pink/30 rounded-2xl blur-sm group-hover:bg-pink/50 transition-all duration-500" />
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  unoptimized
                />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-all duration-300">
                  <div className="w-20 h-20 bg-pink/90 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                {/* "NUEVO" badge */}
                <div className="absolute top-4 left-4 bg-pink text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-md">
                  Nuevo
                </div>
              </div>
            </Link>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2
                className="text-cream text-4xl md:text-5xl font-light leading-tight mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Último Video
              </h2>
              {date && (
                <p className="text-cream/40 text-sm tracking-widest uppercase">{date}</p>
              )}
            </div>

            <h3 className="text-cream text-xl md:text-2xl font-semibold leading-snug">
              {video.title}
            </h3>

            <p className="text-cream/60 text-base leading-relaxed">
              Mi video más reciente en YouTube. Cada semana comparto nuevas interpretaciones, tutoriales y música en vivo. Actívate las notificaciones para no perderte nada.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-pink hover:bg-pink-dark text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <Play className="w-4 h-4" fill="currentColor" />
                Ver ahora
              </Link>
              <Link
                href="https://www.youtube.com/@pedroolivosmusica?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-cream/30 text-cream hover:bg-cream/10 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105"
              >
                <Youtube className="w-4 h-4" />
                Suscribirse
              </Link>
            </div>

            {/* Auto-update notice */}
            <p className="text-cream/30 text-xs tracking-wide">
              Se actualiza automáticamente con cada nuevo video publicado
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
