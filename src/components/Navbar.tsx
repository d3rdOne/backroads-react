import { useState } from 'react';
import logo from '../assets/logo.svg'
import NavIcon from './NavIcon'


const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const navlinks = [
    {
      href: 'https://twitter.com',
      fabClass: 'fab fa-facebook'
    },
    {
      href: 'https://twitter.com',
      fabClass: 'fab fa-twitter'
    },

    {
      href: 'https://twitter.com',
      fabClass: 'fab fa-squarespace'
    }
  ]

  const handleMenuClick = (showValue: boolean) => {
    setShowLinks(showValue)
  }

  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle" onClick={() => handleMenuClick(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
       {/* left this comment on purpose */}
      <ul className={`nav-links ${(showLinks ?  'show-links': '')}`} id="nav-links">

        <li>
          <a href="#home" className="nav-link" onClick={() => handleMenuClick(false)}> home </a>
        </li>

        <li>
          <a href="#about" className="nav-link" onClick={() => handleMenuClick(false)}> about </a>
        </li>

        <li>
          <a href="#services" className="nav-link" onClick={() => handleMenuClick(false)}> services </a>
        </li>

        <li>
          <a href="#tours" className="nav-link" onClick={() => handleMenuClick(false)}> tours</a>
        </li>
      </ul>

      <ul className="nav-icons">
        {navlinks.map((link) => { return (<NavIcon {...link}/>)})}
      </ul>
    </div>
  </nav>
  )
}
export default Navbar;