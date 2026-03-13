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
      className="group block rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ backgroundColor: "#FFFFFF", border: "1px solid #E8E0D4" }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300"
            style={{ backgroundColor: "#DDA15E" }}
          >
            <Play className="w-4 h-4 ml-0.5" fill="#FAF7F2" color="#FAF7F2" />
          </div>
        </div>
        {/* Index badge */}
        <div
          className="absolute top-3 left-3 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(28,25,23,0.75)", backdropFilter: "blur(4px)" }}
        >
          <span className="text-xs font-bold" style={{ color: "#FAF7F2" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="text-sm font-semibold leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-amber-700"
          style={{ color: "#1C1917" }}
        >
          {title}
        </h3>
        <div className="mt-3 flex items-center gap-1.5 text-xs font-medium" style={{ color: "#A8A29E" }}>
          <Play className="w-3 h-3" />
          <span>Ver en YouTube</span>
        </div>
      </div>
    </Link>
  )
}
