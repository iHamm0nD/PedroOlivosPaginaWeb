export interface YouTubeShort {
  videoId: string
  title: string
  thumbnail: string
}

/**
 * Obtiene los últimos Shorts del canal usando la YouTube Data API v3.
 * Los Shorts son videos de duración <= 60 segundos y con #Shorts en el título/descripción,
 * pero la API no los distingue directamente, así que filtramos por duración (ISO 8601 <= PT60S).
 *
 * Requiere: YOUTUBE_API_KEY en las variables de entorno.
 * Si la clave no está configurada, retorna un array vacío.
 */
export async function getLatestShorts(
  channelId: string,
  maxResults = 8
): Promise<YouTubeShort[]> {
  const apiKey = process.env.YOUTUBE_API_KEY

  if (!apiKey) {
    console.log("[v0] YOUTUBE_API_KEY no configurada — la sección de Shorts no se mostrará")
    return []
  }

  try {
    // 1. Obtener los últimos videos del canal
    const searchRes = await fetch(
      `https://www.googleapis.com/youtube/v3/search?` +
        new URLSearchParams({
          key: apiKey,
          channelId,
          part: "snippet",
          order: "date",
          type: "video",
          maxResults: String(maxResults * 3), // pedimos más para tener suficientes Shorts tras filtrar
        }).toString(),
      { next: { revalidate: 3600 } } // actualizar cada hora
    )

    if (!searchRes.ok) {
      console.log("[v0] Error en YouTube Search API:", searchRes.status)
      return []
    }

    const searchData = await searchRes.json()
    const videoIds: string[] = (searchData.items ?? []).map(
      (item: { id: { videoId: string } }) => item.id.videoId
    )

    if (!videoIds.length) return []

    // 2. Obtener duración de cada video para filtrar Shorts (<= 60s)
    const detailRes = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?` +
        new URLSearchParams({
          key: apiKey,
          id: videoIds.join(","),
          part: "snippet,contentDetails",
        }).toString(),
      { next: { revalidate: 3600 } }
    )

    if (!detailRes.ok) {
      console.log("[v0] Error en YouTube Videos API:", detailRes.status)
      return []
    }

    const detailData = await detailRes.json()

    const shorts: YouTubeShort[] = (detailData.items ?? [])
      .filter((item: { contentDetails: { duration: string } }) =>
        isShortDuration(item.contentDetails.duration)
      )
      .slice(0, maxResults)
      .map(
        (item: {
          id: string
          snippet: { title: string; thumbnails: { maxres?: { url: string }; high?: { url: string }; medium?: { url: string } } }
        }) => ({
          videoId: item.id,
          title: item.snippet.title,
          thumbnail:
            item.snippet.thumbnails?.maxres?.url ||
            item.snippet.thumbnails?.high?.url ||
            item.snippet.thumbnails?.medium?.url ||
            `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`,
        })
      )

    return shorts
  } catch (err) {
    console.log("[v0] Error obteniendo Shorts:", err)
    return []
  }
}

/**
 * Parsea duración ISO 8601 (ej. PT1M3S) y retorna true si es <= 60 segundos.
 */
function isShortDuration(iso: string): boolean {
  const match = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!match) return false
  const hours = parseInt(match[1] ?? "0")
  const minutes = parseInt(match[2] ?? "0")
  const seconds = parseInt(match[3] ?? "0")
  const total = hours * 3600 + minutes * 60 + seconds
  return total <= 60
}
