"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, X, CheckCircle2 } from "lucide-react"
import { useState, useEffect } from "react"
import { createPortal } from "react-dom"

interface ProductCardProps {
  image: string
  title: string
  price?: string
  href?: string
  badge?: string
  badgeColor?: string
  description?: React.ReactNode // Permite texto enriquecido o JSX
  features?: string[] // Lista de check marks
}

export function TarjetaProducto({ 
  image, 
  title, 
  price, 
  href = "#",
  badge,
  badgeColor = "pink",
  description,
  features
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Prevenir scroll y asegurar hidratación
  useEffect(() => {
    setMounted(true)
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  return (
    <>
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
          
          {/* Hover overlay - Trigger Modal */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className="absolute inset-0 w-full h-full bg-gradient-to-t from-olive-dark/80 via-olive-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8"
          >
            <span className="inline-flex items-center gap-2 bg-white text-olive-dark text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500 font-sans shadow-lg">
              Ver detalles
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
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

      {/* MODAL DE DETALLES */}
      {mounted && isModalOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
          {/* Overlay oscuro */}
          <div 
            className="absolute inset-0 bg-olive-dark/80 transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Contenedor del Modal */}
          <div className="relative bg-cream w-full sm:max-w-xl md:max-w-4xl max-h-[85vh] sm:max-h-[90vh] rounded-t-2xl sm:rounded-2xl md:rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
            
            {/* Botón Cerrar (Mobile flotante) */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="md:hidden absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 p-1.5 sm:p-2 rounded-full text-olive-dark hover:bg-white transition-colors shadow-md"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Mitad Imagen */}
            <div className="relative hidden md:block md:w-2/5 md:min-w-[300px] bg-gradient-to-br from-white to-pink/5 p-8 flex-shrink-0">
              <Image 
                src={image} 
                alt={title} 
                fill 
                className="object-contain p-8 drop-shadow-2xl"
              />
            </div>

            {/* Mitad Contenido (Scrollable) */}
            <div className="w-full md:w-3/5 flex flex-col h-full max-h-[85vh] sm:max-h-[90vh]">
              {/* Header fijo */}
              <div className="flex items-start justify-between p-4 sm:p-6 md:p-8 border-b border-olive/10 bg-white/50">
                <div className="flex-1 pr-8 sm:pr-0">
                  {badge && (
                    <span className="inline-block bg-pink/10 text-pink text-[10px] sm:text-xs font-bold font-sans tracking-widest uppercase px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                      {badge}
                    </span>
                  )}
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl font-bold text-olive-dark leading-tight"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                  >
                    {title}
                  </h2>
                </div>
                {/* Botón Cerrar (Desktop) */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="hidden md:flex p-2 text-olive/40 hover:text-pink transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Área de scroll de texto */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow bg-white custom-scrollbar">
                
                {description && (
                  <div className="prose prose-sm md:prose-base prose-olive max-w-none">
                    {description}
                  </div>
                )}

                {features && features.length > 0 && (
                  <div className="mt-8 space-y-4">
                    <h4 className="text-sm font-bold tracking-widest uppercase text-olive font-sans">
                      Ventajas
                    </h4>
                    <ul className="space-y-3">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-pink shrink-0 mt-0.5" />
                          <span className="text-olive-dark font-sans leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Botonera fija inferior */}
              <div className="p-4 sm:p-6 md:p-8 border-t border-olive/10 bg-cream/50 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] sm:text-xs text-olive/50 font-bold uppercase tracking-widest font-sans block mb-1">Inversión</span>
                  <p 
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-olive-dark"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                  >
                    {price || "Disponible"}
                  </p>
                </div>
                <Link
                  href={href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-pink hover:bg-pink-dark text-white font-bold text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 hover:scale-105 font-sans shadow-lg shadow-pink/30"
                >
                  Obtener ahora
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
