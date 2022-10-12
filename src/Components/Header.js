import logo from '../logo.svg';
import React from "react";

function Header() {
    return (
      <header>
        <nav className='nav-container'>
          <img src={logo} className='nav-img' alt="App logo" />
          <ul className='nav-links'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
}

export default Header;