import React from 'react'
import './style.css'
// import logo from '../../../pulbic/img/netflix-logo.png'

const Header = ({scroll}) => {
  return(
    <header className={scroll ? 'scroll-active' : ''}>
      <div className="header__logo">
        <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </div>

      <div className="header__user">
        <a href="#">
          <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="User" />
        </a>
      </div>
    </header>
  )
}

export default Header