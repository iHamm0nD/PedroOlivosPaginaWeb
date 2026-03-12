import Image from "next/image"
import Link from "next/link"

interface ChannelPreviewProps {
  channelName: string
  channelUrl: string
  avatarUrl: string
  description?: string
}

export function ChannelPreview({ channelName, channelUrl, avatarUrl, description }: ChannelPreviewProps) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-md max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {/* Avatar */}
        <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-md flex-shrink-0 ring-3 ring-pink/30">
          <Image
            src={avatarUrl}
            alt={channelName}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Channel Info */}
        <div className="flex-1 text-center sm:text-left space-y-2">
          <h3 className="text-lg font-bold text-gray-800">{channelName}</h3>
          {description && (
            <p className="text-sm text-gray-500">{description}</p>
          )}
        </div>

        {/* Subscribe / Link button */}
        <Link
          href={channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-pink hover:bg-pink-dark text-white font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg flex-shrink-0"
        >
          Ver canal en YouTube
        </Link>
      </div>
    </div>
  )
}
