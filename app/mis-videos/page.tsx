import { Navegacion } from "@/components/01-navegacion"
import { TarjetaVideo } from "@/components/tarjeta-video"
import { UltimoVideo } from "@/components/ultimo-video"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import { getLatestShorts } from "@/lib/youtube"
import Image from "next/image"
import Link from "next/link"
import { Play, Youtube } from "lucide-react"

// ─── Channel ID del canal de Pedro Olivos ─────────────────────────────────
const CHANNEL_ID = "UCmBnbGTuQslnr2YfzJ3sPyQ"

// ─── IDs de videos largos ────────────────────────────────────────────────────
const videoIds = [
  "byIoQPP2Koc",
  "S7u0P-arDwM",
  "n-eymGzUm3Y",
  "Qid4AD--rx4",
  "PXeyuGRMyYo",
  "INEdqwI2c-o",
  "fWgNdHd8gcI",
  "_kn_AcPcn4E",
  "3hDVmKXkMlU",
]

async function getVideoTitle(videoId: string): Promise<string> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`,
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return videoId
    const data = await res.json()
    return data.title || videoId
  } catch {
    return videoId
  }
}

export default async function MisVideosPage() {
  const [videos, shorts] = await Promise.all([
    Promise.all(
      videoIds.map(async (id) => ({
        videoId: id,
        title: await getVideoTitle(id),
      }))
    ),
    getLatestShorts(CHANNEL_ID, 8),
  ])

  return (
    <main className="min-h-screen bg-cream">
      <Navegacion />

      {/* ── Hero del canal ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-cream via-white to-cream py-14 md:py-20 border-b border-pink/20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 rounded-full bg-pink/30 blur-md" />
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-4 ring-pink/60 shadow-xl">
                <Image
                  src="/images/foto_perfil_PedroOlivos.jpg"
                  alt="Pedro Olivos"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-pink-dark text-sm font-semibold tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                Canal de YouTube
              </p>
              <h1
                className="text-pink-dark text-4xl md:text-5xl font-light mb-2"
                style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Pedro Olivos Música
              </h1>
              <p className="text-pink-dark/60 text-base">
                Tutoriales de violín, covers y música en vivo
              </p>
            </div>

            {/* CTA */}
            <Link
              href="https://www.youtube.com/@pedroolivosmusica?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 bg-pink hover:bg-pink-dark text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Youtube className="w-4 h-4" />
              Suscribirse
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shorts (solo se muestra si YOUTUBE_API_KEY está configurada) ──── */}
      {shorts.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-px bg-pink" />
                <div>
                  <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                    Videos cortos
                  </p>
                  <h2
                    className="text-pink-dark text-3xl md:text-4xl font-light"
                    style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                  >
                    Shorts
                  </h2>
                </div>
              </div>
              <Link
                href="https://www.youtube.com/@pedroolivosmusica/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-pink-dark hover:text-pink text-sm font-semibold transition-colors duration-300 group"
              >
                Ver todos
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            {/* Shorts grid — formato vertical 9:16 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
              {shorts.map((short) => (
                <Link
                  key={short.videoId}
                  href={`https://www.youtube.com/shorts/${short.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-cream border border-pink/20"
                  style={{ aspectRatio: "9/16" }}
                >
                  <Image
                    src={short.thumbnail}
                    alt={short.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-dark/70 via-transparent to-transparent" />

                  {/* Short badge */}
                  <div className="absolute top-3 right-3 bg-pink text-white text-xs font-bold px-2.5 py-1 rounded-full tracking-wider uppercase shadow-md">
                    Short
                  </div>

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-pink-dark ml-0.5" fill="currentColor" />
                    </div>
                  </div>

                  {/* Title */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs font-semibold leading-snug line-clamp-2 drop-shadow-md">
                      {short.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile ver todos */}
            <div className="mt-6 flex md:hidden justify-center">
              <Link
                href="https://www.youtube.com/@pedroolivosmusica/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-pink/40 text-pink-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-pink/10 transition-all duration-300"
              >
                Ver todos los Shorts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Todos los videos ────────────────────────────────────────── */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-px bg-pink" />
              <div>
                <p className="text-pink text-xs font-semibold tracking-[0.3em] uppercase mb-0.5"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}>
                  Toda la colección
                </p>
                <h2
                  className="text-pink-dark text-3xl md:text-4xl font-light"
                  style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Mis Videos
                </h2>
              </div>
            </div>
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-pink-dark hover:text-pink text-sm font-semibold transition-colors duration-300 group"
            >
              Ver canal completo
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          {/* Primera fila: Último video (2/3) + 2 videos apilados (1/3) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 mb-6 lg:items-stretch">
            {/* Último video - ocupa 2 columnas, llena la altura */}
            <div className="lg:col-span-2 flex flex-col">
              <UltimoVideo />
            </div>

            {/* 2 videos apilados a la derecha */}
            <div className="flex flex-col gap-5 md:gap-6">
              {videos.slice(0, 2).map((video, i) => (
                <TarjetaVideo
                  key={video.videoId}
                  videoId={video.videoId}
                  title={video.title}
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Resto de videos — 3 columnas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {videos.slice(2).map((video, i) => (
              <TarjetaVideo
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
                index={i + 2}
              />
            ))}
          </div>

          {/* Mobile ver canal */}
          <div className="mt-8 flex md:hidden justify-center">
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-pink/40 text-pink-dark font-semibold text-sm px-6 py-2.5 rounded-full hover:bg-pink/10 transition-all duration-300"
            >
              Ver canal completo →
            </Link>
          </div>
        </div>
      </section>

      {/* Boletín */}
      <SeccionBoletin />

      {/* Pie de Página */}
      <PieDePagina />
    </main>
  )
}
