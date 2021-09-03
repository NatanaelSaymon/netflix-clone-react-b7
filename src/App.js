import React, { useEffect, useState } from 'react'
import Tmdb from './Tmdb'
import MovieRow from './components/MovieRow'
import FeaturedMovie from './components/FeaturedMovie'
import Header from './components/Header'
import Footer from './components/Footer'
import Loading from './components/Loading'
import './App.css'


const Default = () => {
    
  //Salvando a lista de filme que iremos exibir
  const [moveList, setMovieList] = useState([])

  const [featuredData, setfeaturedData] = useState(null)

  //variaveis para o evento de monitoramento do scroll da pagina
  const [scrollActive, setScrollActive] = useState(false)

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
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setfeaturedData(chosenInfo)
    }

    loadAll()
  }, [])


  //Adicionando evento de monitoramento do scroll da pagina
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setScrollActive(true)
      } else {
        setScrollActive(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return(
    <div className="page">

      <Header scroll={scrollActive}/>

      {featuredData && <FeaturedMovie item={featuredData}/>}

      <section className="lists">
        { moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        )) }
      </section>

      <Footer />
      
      { moveList.length <= 0 && <Loading /> }

    </div>
  )
}

export default Default
