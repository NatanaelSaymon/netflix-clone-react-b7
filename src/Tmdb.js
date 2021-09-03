//ARQUIVO RESPONSAVEL PELAS REQUISÕES DA API

const API_KEY = '302f4c804ba1620ae1281c6dd6314a7c';
const API_BASE = 'https://api.themoviedb.org/3';


/**
 * - originais da netflix
 * - recomendados(treding)
 * - em alta(top rated)
 * - ação
 * - comedia
 * - terror
 * - romance
 * - documentarios
 */


//FUNÇÃO AUXILIAR, QUE DA UM FET NA URL QUE QUEREMOS PEGAR(RETORNAR UM JSON COM AS INFORMAÇÕES)


const basicFetch = async (endpoint) => { 
  const req = await fetch(`${API_BASE}${endpoint}`) //requisicao de um servico externo e espere uma resposta
  const json = await req.json()
  return json
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais da Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'toprated',
        title: 'Em alta na Netflix',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'comedy',
        title: 'Comedia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'Horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
      },
    ]
  },

  //Pegando informação do filme/Tv 
  getMovieInfo: async (movieId, type) => {
    let info = {}

    if(movieId) {
      switch(type) {
        case 'movie':
          info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break
        case 'tv':
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`)
        break

        default:
          info = null
        break
      }
    }

    return info
  }
}