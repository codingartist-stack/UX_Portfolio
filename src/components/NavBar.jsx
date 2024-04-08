import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/initialsLogoPurple.svg';
import { useState } from 'react';

export default function NavBar() {
  const [navToggle, setNavToggle] = useState(false);

  const handleToggle = () => {
    setNavToggle(!navToggle);
  };

  return (
    <>
      <button
        className="scr-only mobileNavToggle"
        aria-controls="navigation"
        aria-expanded="false"
        onClick={handleToggle}
      >
        {!navToggle ? 'menu' : 'cross'}
      </button>
      <nav className="navigation">
        <NavLink to="/">
          <p className="logoFont">Sarah Larsen</p>
          <p className="title">UX DESIGNER</p>
        </NavLink>
        <ul data-visible={navToggle}>
          <li>
            <NavLink to="/" onClick={handleToggle}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact" onClick={handleToggle}>
              Socials
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
