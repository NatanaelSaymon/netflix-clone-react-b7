import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import './App.css'


const Default = () => {
    
  //Salvando a lista de filme que iremos exibir
  const [moveList, setMovieList] = useState([])

  const [featuredData, setfeaturedData] = useState(null)

  //Quando a tela for carregada, vai executar o codigo inserido
  useEffect(() => {
    const loadAll = async () => {
      //Pegando a lista total de filme
      let list = await Tmdb.getHomeList()
      setMovieList(list)


      //Pegando o featured
      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]

      console.log(chosen)
      
    }

    loadAll()
  }, [])

  return(
    <div className="page">

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className="lists">
        { moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        )) }
      </section>
    </div>
  )
}

export default Default
