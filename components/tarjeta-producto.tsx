import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  price?: string
  href?: string
  badge?: string
  badgeColor?: string
}

export function TarjetaProducto({ 
  image, 
  title, 
  price, 
  href = "#",
  badge,
  badgeColor = "pink"
}: ProductCardProps) {
  return (
    <article className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-olive/10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full border border-olive/5">

      {/* Badge */}
      {badge && (
        <div className={`absolute top-5 left-5 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg ${
          badgeColor === "pink" 
            ? "bg-pink text-white shadow-pink/30" 
            : "bg-olive text-cream shadow-olive/30"
        }`}>
          {badge}
        </div>
      )}

      {/* Image area with gradient overlay */}
      <div className="relative w-full aspect-square bg-gradient-to-br from-cream to-cream/50 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 transition-all duration-700 group-hover:scale-110"
        />
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-olive-dark/80 via-olive-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8">
          <span className="inline-flex items-center gap-2 bg-white text-olive-dark text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-sans shadow-lg">
            Ver detalles
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-pink text-pink" />
          ))}
          <span className="text-olive/40 text-xs font-sans ml-2">5.0</span>
        </div>

        <h3
          className="text-xl md:text-2xl font-bold text-olive-dark leading-snug mb-4 text-balance group-hover:text-olive transition-colors duration-300 line-clamp-2"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>

        <div className="mt-auto pt-5 border-t border-olive/10 flex items-center justify-between">
          {price ? (
            <div>
              <span className="text-[10px] text-olive/40 font-bold uppercase tracking-widest font-sans block mb-0.5">Precio</span>
              <p 
                className="text-3xl font-bold text-olive-dark"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                {price}
              </p>
            </div>
          ) : (
            <p className="text-sm font-semibold text-olive font-sans">Disponible</p>
          )}

          <Link
            href={href}
            className="inline-flex items-center gap-2 bg-olive-dark hover:bg-pink text-cream text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-sm"
          >
            Obtener
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  )
}
