import React, { useState } from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './style.css'

const MovieRow = ({title, items}) => {

  const [scrollX, setScrollX] = useState(-400)

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2)
    if(x > 0) {
      x = 0
    }

    setScrollX(x)
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2)
    let listWidthTotal = items.results.length * 150
    if((window.innerWidth - listWidthTotal) > x) {
      x = (window.innerWidth - listWidthTotal) - 60
    }
    setScrollX(x)
  }

  return (
    <div className="movieRow">
      <h2 className="movieRow__title">{title}</h2>

      <div className="movieRow__left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}}/>
      </div>

      <div className="movieRow__right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}}/>
      </div>
      
      <div className="movieRow__listarea">
        <div className="movieRow__list" style={{
          marginLeft: scrollX,
          width: items.results.length * 150
        }}
        
        >
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