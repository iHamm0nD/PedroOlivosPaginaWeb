import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  price?: string
  href?: string
}

export function TarjetaProducto({ image, title, price, href = "#" }: ProductCardProps) {
  return (
    <article className="group bg-white border border-olive/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">

      {/* Image area */}
      <div className="relative w-full aspect-[4/3] bg-cream overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
        />
        {/* Subtle top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-pink/0 group-hover:bg-pink/60 transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-grow border-t border-olive/8">
        <h3
          className="text-xl md:text-2xl font-light text-olive-dark leading-snug mb-4 text-balance group-hover:text-olive transition-colors duration-300"
          style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
        >
          {title}
        </h3>

        <div className="mt-auto flex items-center justify-between pt-4 border-t border-olive/8">
          {price ? (
            <div>
              <span className="text-xs text-olive/40 font-bold uppercase tracking-widest font-sans block mb-0.5">Precio</span>
              <p className="text-2xl font-light text-olive-dark" style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                {price}
              </p>
            </div>
          ) : (
            <p className="text-sm font-semibold text-olive font-sans">Disponible</p>
          )}

          <Link
            href={href}
            className="inline-flex items-center gap-2 border border-olive-dark text-olive-dark hover:bg-olive-dark hover:text-cream text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full transition-all duration-300 font-sans"
          >
            Obtener
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </article>
  )
}
