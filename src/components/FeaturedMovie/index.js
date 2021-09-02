import React from 'react'
import './style.css'

const FeaturedMovie = ({item}) => {
  console.log(item)

  let firstDate = new Date(item.first_air_date)

  let genres = []

  for(let i in item.genres) {
    genres.push( item.genres[i].name )
  }

  //Limitando caracteres
  let description = item.overview

  if(description.length > 200) {
    description = description.substring(0, 200) + '...'
  }

  return(
    <section className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}
    >
      <div className="featured__vertical">
        <div className="featured__horizontal">

          <div className="featured__name">{ item.original_name }</div>

          <div className="featured__info">
            <div className="featured__points">{ item.vote_average } pontos</div>
            <div className="featured__year">{ firstDate.getFullYear() }</div>
            <div className="featured__seasons">{ item.number_of_seasons } temporada{item.number_of_seasons !== 1 ? 's' : ''} </div>
            <div className="featured__episodes">{ item.number_of_episodes } episodios </div>
          </div>

          <div className="featured__description">{ description }</div>

          <div className="featured__buttons">
            <a href={`/watch/${item.id}`} className="featured__btn featured__btn--watch">► Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured__btn featured__btn--myList">+ Minha Lista</a>
          </div>

          <div className="featured__genres">
            <strong>Gêneros:</strong> { genres.join(', ') }
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedMovie 