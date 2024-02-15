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
          <img src={logo} className="navLogo" />
        </NavLink>
        <ul data-visible={navToggle}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* <li>
            <NavLink to="about">About</NavLink>
          </li> */}
          <li>
            <NavLink to="caseStudies">UX Case Studies</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
