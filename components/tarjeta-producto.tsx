import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowRight, Star } from "lucide-react"

interface ProductCardProps {
  image: string
  title: string
  price?: string
  href?: string
}

export function TarjetaProducto({ image, title, price, href = "#" }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-olive/10 flex flex-col h-full">
      {/* Etiqueta de Destacado / Oferta */}
      <div className="absolute top-4 right-4 z-10 bg-pink text-white text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
        <Star className="w-3 h-3 fill-white" />
        Nuevo
      </div>

      {/* Área de Imagen con fondo decorativo */}
      <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-cream/50 to-olive/5 overflow-hidden p-6 flex flex-col justify-center items-center">
        {/* Decoración circular de fondo */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <div className="w-48 h-48 bg-white rounded-full blur-2xl" />
        </div>

        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-8 drop-shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl group-hover:rotate-1"
        />

        {/* Overlay tenue al hacer hover */}
        <div className="absolute inset-0 bg-olive-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 md:p-8 flex flex-col flex-grow bg-white relative">
        {/* Gradiente sutil en el borde superior */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-olive/10 to-transparent" />

        <h3 className="text-xl md:text-2xl font-bold text-olive-dark leading-tight mb-3 group-hover:text-pink transition-colors duration-300">
          {title}
        </h3>

        <div className="mt-auto pt-4 flex items-center justify-between border-t border-olive/5">
          {price ? (
            <div className="flex flex-col">
              <span className="text-xs text-olive/50 font-semibold uppercase tracking-wider mb-0.5">Precio</span>
              <p className="text-2xl font-black text-olive-dark">
                {price}
              </p>
            </div>
          ) : (
            <div className="flex flex-col">
              <span className="text-xs text-olive/50 font-semibold uppercase tracking-wider mb-0.5">Estado</span>
              <p className="text-lg font-bold text-olive-dark">Disponible</p>
            </div>
          )}

          <Link
            href={href}
            className="flex items-center justify-center w-14 h-14 bg-pink hover:bg-pink-dark text-white rounded-full shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 group/btn"
          >
            <ShoppingBag className="w-6 h-6 group-hover/btn:hidden" />
            <ArrowRight className="w-6 h-6 hidden group-hover/btn:block" />
          </Link>
        </div>
      </div>
    </div>
  )
}
