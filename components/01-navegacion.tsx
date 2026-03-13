"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", href: "/" },
  { name: "TIENDA", href: "/tienda" },
  { name: "MIS VIDEOS", href: "/mis-videos" },
  { name: "SERVICIOS", href: "/servicios" },
  { name: "CONTACTO", href: "/contacto" },
]

export function Navegacion() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href.startsWith("#")) return false
    return pathname.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 bg-olive h-20 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="text-cream text-3xl font-light tracking-widest uppercase transition-all duration-300 group-hover:text-pink"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif", letterSpacing: "0.18em" }}
            >
              Pedro
            </span>
            <span
              className="text-pink text-lg font-semibold tracking-[0.35em] uppercase -mt-1 transition-all duration-300 group-hover:text-cream"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Olivos
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${isActive(item.href)
                  ? "bg-pink text-white"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-olive border-t border-white/10 py-4 px-4 shadow-lg">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-5 py-3 rounded-full text-sm font-bold text-center transition-all ${isActive(item.href)
                    ? "bg-pink text-white"
                    : "text-white hover:bg-white/10"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
