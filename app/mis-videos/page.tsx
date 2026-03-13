import { Navegacion } from "@/components/01-navegacion"
import { TarjetaVideo } from "@/components/tarjeta-video"
import { UltimoVideo } from "@/components/ultimo-video"
import { SeccionBoletin } from "@/components/05-seccion-boletin"
import { PieDePagina } from "@/components/06-pie-de-pagina"
import { getLatestShorts } from "@/lib/youtube"
import Image from "next/image"
import Link from "next/link"
import { Play, Youtube } from "lucide-react"

const CHANNEL_ID = "UCmBnbGTuQslnr2YfzJ3sPyQ"

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
    <main className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      <Navegacion />

      {/* ── Hero del canal ─────────────────────────────────────────── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-14 border-b pb-12" style={{ borderColor: "#E8E0D4" }}>
            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 shadow-lg" style={{ ringColor: "#DDA15E" }}>
                <Image
                  src="/images/foto_perfil_PedroOlivos.jpg"
                  alt="Pedro Olivos"
                  width={112}
                  height={112}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <p
                className="text-xs font-semibold tracking-[0.35em] uppercase mb-3"
                style={{ color: "#DDA15E", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Canal de YouTube
              </p>
              <h1
                className="text-5xl md:text-6xl font-light leading-none mb-3"
                style={{ color: "#1C1917", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Pedro Olivos
              </h1>
              <p className="text-sm leading-relaxed" style={{ color: "#78716C" }}>
                Tutoriales de violín · Covers · Música en vivo
              </p>
            </div>

            {/* CTA */}
            <Link
              href="https://www.youtube.com/@pedroolivosmusica?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2.5 font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
              style={{ backgroundColor: "#1C1917", color: "#FAF7F2" }}
            >
              <Youtube className="w-4 h-4" />
              Suscribirse
            </Link>
          </div>
        </div>
      </section>

      {/* ── Último video ────────────────────────────────────────────── */}
      <UltimoVideo />

      {/* ── Shorts ──────────────────────────────────────────────────── */}
      {shorts.length > 0 && (
        <section className="py-16 md:py-20" style={{ backgroundColor: "#F2EDE5" }}>
          <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.35em] uppercase mb-2"
                  style={{ color: "#DDA15E", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Videos cortos
                </p>
                <h2
                  className="text-3xl md:text-4xl font-light"
                  style={{ color: "#1C1917", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
                >
                  Shorts
                </h2>
              </div>
              <Link
                href="https://www.youtube.com/@pedroolivosmusica/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group"
                style={{ color: "#78716C" }}
              >
                Ver todos
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {shorts.map((short) => (
                <Link
                  key={short.videoId}
                  href={`https://www.youtube.com/shorts/${short.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  style={{ aspectRatio: "9/16", backgroundColor: "#1C1917" }}
                >
                  <Image
                    src={short.thumbnail}
                    alt={short.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  {/* Short badge */}
                  <div
                    className="absolute top-2.5 right-2.5 text-xs font-bold px-2 py-0.5 rounded-full tracking-widest uppercase"
                    style={{ backgroundColor: "#DDA15E", color: "#FAF7F2" }}
                  >
                    Short
                  </div>

                  {/* Play */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: "#DDA15E" }}
                    >
                      <Play className="w-4 h-4 ml-0.5" fill="#FAF7F2" color="#FAF7F2" />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-xs font-medium leading-snug line-clamp-2">
                      {short.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 flex md:hidden justify-center">
              <Link
                href="https://www.youtube.com/@pedroolivosmusica/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300"
                style={{ borderColor: "#C8BFB4", color: "#78716C" }}
              >
                Ver todos los Shorts →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ── Todos los videos ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: "#FAF7F2" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 border-b pb-8" style={{ borderColor: "#E8E0D4" }}>
            <div>
              <p
                className="text-xs font-semibold tracking-[0.35em] uppercase mb-2"
                style={{ color: "#DDA15E", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Toda la colección
              </p>
              <h2
                className="text-3xl md:text-4xl font-light"
                style={{ color: "#1C1917", fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
              >
                Mis Videos
              </h2>
            </div>
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-sm font-semibold transition-colors duration-300 group"
              style={{ color: "#78716C" }}
            >
              Ver canal completo
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {videos.map((video, i) => (
              <TarjetaVideo
                key={video.videoId}
                videoId={video.videoId}
                title={video.title}
                index={i}
              />
            ))}
          </div>

          <div className="mt-10 flex md:hidden justify-center">
            <Link
              href="https://www.youtube.com/@pedroolivosmusica/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-2.5 rounded-full border transition-all duration-300"
              style={{ borderColor: "#C8BFB4", color: "#78716C" }}
            >
              Ver canal completo →
            </Link>
          </div>
        </div>
      </section>

      <SeccionBoletin />
      <PieDePagina />
    </main>
  )
}
