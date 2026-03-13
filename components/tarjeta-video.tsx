import Image from "next/image"
import Link from "next/link"
import { Play } from "lucide-react"

interface VideoCardProps {
  videoId: string
  title: string
}

export function TarjetaVideo({ videoId, title }: VideoCardProps) {
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Thumbnail with play overlay */}
      <Link href={videoUrl} target="_blank" rel="noopener noreferrer" className="relative block w-full aspect-video overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          unoptimized
        />
        {/* Play icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
          <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
            <Play className="w-6 h-6 text-pink ml-0.5" fill="currentColor" />
          </div>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-base font-bold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h3>

        <Link
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-cream hover:bg-cream/80 text-gray-800 font-bold text-sm px-6 py-2.5 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          Ver video
        </Link>
      </div>
    </div>
  )
}
