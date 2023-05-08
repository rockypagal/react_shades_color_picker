import React from 'react';
import logo from '../../assets/Logo/Fox_logo.png';
import './Navbar.css';
// import '' 
const Navbar = () => {
  return (
    <header className="container header__border">
      <nav className='header__nav header__flex'>
         <div className="header__logo">
         <img src={logo} />
         </div>
        <button className='header__github' ><i className="fa-brands fa-github"></i><a href="https://github.com/rockypagal?tab=repositories" target="_blank">Github</a></button>
      </nav>
    </header>
  )
}

export default Navbar