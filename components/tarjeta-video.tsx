import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface VideoCardProps {
  videoId: string
  title: string
  index?: number
}

export function TarjetaVideo({ videoId, title, index = 0 }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <Link
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-white hover:bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-400 hover:-translate-y-2 border border-pink/25"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden bg-cream">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <Play className="w-6 h-6 text-pink-dark ml-0.5" fill="currentColor" />
          </div>
        </div>
        {/* Number badge */}
        <div className="absolute top-3 left-3 w-8 h-8 bg-pink/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <h3 className="text-sm font-bold text-olive-dark leading-snug line-clamp-2 group-hover:text-olive transition-colors duration-300">
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-olive/50 font-medium">
          <Play className="w-3 h-3" />
          <span>Ver en YouTube</span>
        </div>
      </div>
    </Link>
  )
}
