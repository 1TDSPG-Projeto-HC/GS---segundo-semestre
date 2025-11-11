export interface Noticia {
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
}

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const BASE_URL = "https://gnews.io/api/v4/top-headlines";

export async function buscarNoticias(): Promise<Noticia[]> {
  try {
    const response = await fetch(
      `${BASE_URL}?lang=pt&country=br&max=6&apikey=${API_KEY}`
    );

    const data = await response.json();

    if (!data.articles || data.articles.length === 0) return [];

    return data.articles.map((item: any) => ({
      title: item.title,
      description: item.description,
      url: item.url,
      source: item.source?.name || "Desconhecida",
      image: item.image,
    }));
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}
