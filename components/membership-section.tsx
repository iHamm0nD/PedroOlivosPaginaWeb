"use client"

export function MembershipSection() {
  return (
    <section id="servicios" className="bg-blue py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* White Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center space-y-8">
              {/* Benefits List */}
              <ul className="space-y-4 text-left max-w-md mx-auto">
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Acceso anticipado a nuevos lanzamientos.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Conciertos privados en streaming.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Contenido exclusivo detras de camaras.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Merch y beneficios exclusivos para fans.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-700 text-lg">
                  <span className="text-2xl flex-shrink-0">🎵</span>
                  <span>Acceso a la comunidad del fan club!</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button 
                className="bg-pink hover:bg-pink-dark text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => window.open('#subscribe', '_self')}
              >
                UNIRME AL FAN CLUB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
