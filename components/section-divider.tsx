import Link from "next/link"

const dividerNavItems = [
  { name: "HOME", href: "/", active: false },
  { name: "TIENDA", href: "/tienda", active: true },
  { name: "SERVICIOS", href: "#servicios", active: false },
]

export function SectionDivider() {
  return (
    <div className="bg-olive h-20 shadow-md">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-white text-2xl font-black tracking-tight">PEDRO</span>
            <span className="text-white/90 text-sm font-medium -mt-1">Olivos</span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {dividerNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-105 ${item.active
                  ? "bg-pink text-white"
                  : "text-white hover:bg-white/10"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Spacer for mobile (keeps logo left-aligned) */}
          <div className="md:hidden" />
        </div>
      </div>
    </div>
  )
}
