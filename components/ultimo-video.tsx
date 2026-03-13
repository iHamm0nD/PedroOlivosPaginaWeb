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
    <div className="w-full h-full">
      <Link
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col h-full rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 border-2 border-pink/40 bg-gradient-to-br from-white to-cream"
      >
        {/* Thumbnail — crece para llenar el espacio disponible */}
        <div className="relative flex-1 min-h-0 overflow-hidden">
          <Image
            src={thumbnailUrl}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            unoptimized
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/80 via-pink-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-pink/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
              <Play className="w-7 h-7 text-white ml-1" fill="currentColor" />
            </div>
          </div>

          {/* "NUEVO" badge */}
          <div className="absolute top-4 left-4 bg-pink text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
            Nuevo
          </div>
        </div>

        {/* Content — altura fija al fondo */}
        <div className="flex-shrink-0 p-6 md:p-7">
          {date && (
            <p className="text-olive text-xs font-semibold tracking-widest uppercase mb-2">{date}</p>
          )}
          <h3 className="text-lg md:text-xl font-bold text-olive-dark leading-snug line-clamp-3 group-hover:text-olive transition-colors duration-300 mb-2">
            {video.title}
          </h3>
          <p className="text-olive/60 text-sm">
            Video más reciente
          </p>
        </div>
      </Link>
    </div>
  )
}
