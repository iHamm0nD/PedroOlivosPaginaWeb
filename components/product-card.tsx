import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  image: string
  title: string
  price?: string
  href?: string
}

export function ProductCard({ image, title, price, href = "#" }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-3">
        <h3 className="text-base font-bold text-gray-800 leading-snug line-clamp-2">
          {title}
        </h3>

        {price && (
          <p className="text-lg font-extrabold text-gray-900">
            {price}
          </p>
        )}

        <Link
          href={href}
          className="inline-block bg-cream hover:bg-cream/80 text-gray-800 font-bold text-sm px-6 py-2.5 rounded-full shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
        >
          Ver más
        </Link>
      </div>
    </div>
  )
}
