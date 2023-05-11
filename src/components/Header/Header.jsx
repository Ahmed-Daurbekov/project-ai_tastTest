import React from 'react';
import logo from '../../img/logo.svg'
import './Header.scss'

const Header = () => {

  let burger = React.useRef(null)

  function showBurger() {
    burger.current.classList.add('show')
    document.querySelector('body').style.overflow = 'hidden'
  }
  
  function hideBurger() {
    burger.current.classList.remove('show')
    document.querySelector('body').style.overflow = 'visible'
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="logo" />
            <span>Artificial Intelligence</span>
          </a>
        </div>
        <nav className="nav">
          <ul ref={burger} className="navigation-lists">
            <span onClick={hideBurger} className="close">&times;</span>
            <li className="navigation-list"><a href="/">Home</a></li>
            <li className="navigation-list"><a href="/">About</a></li>
            <li className="navigation-list"><a href="/">Services</a></li>
            <li className="navigation-list"><a href="/">Blog</a></li>
            <li className="navigation-list"><a href="/">Contact</a></li>
          </ul>
          <div onClick={showBurger} className="burger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
        <div className="sign-in"><a href="/">Sign In</a></div>
      </div>
    </header>
  );
};

export default Header;