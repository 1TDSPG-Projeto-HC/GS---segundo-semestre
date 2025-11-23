export interface Noticia {
  title: string;
  description: string;
  url: string;
  source: string;
  image?: string;
}

export async function buscarNoticias(): Promise<Noticia[]> {
  const API_KEY = import.meta.env.VITE_NEWSDATA_API_KEY;

  try {
    const response = await fetch(
      `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=br&language=pt&category=business,technology,top`
    );

    const data = await response.json();

    if (!data.results || data.results.length === 0) return [];

    const noticias = data.results.map((item: any) => ({
      title: item.title,
      description: item.description,
      url: item.link,
      source: item.source_id || "Desconhecida",
      image: item.image_url,
    }));

    
    return noticias.slice(0, 6);

  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
}
