import React from 'react'
import './style.css'

const MovieRow = ({title, items}) => {

  return (
    <div className="movieRow">
      <h2 className="movieRow__title">{title}</h2>

      <div className="movieRow__listarea">

        <div className="movieRow__list">
          {items.results.length > 0 && items.results.map((item, key)=>(
            <div key={key} className="movieRow__item">    
                <img 
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title} 
                  />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MovieRow