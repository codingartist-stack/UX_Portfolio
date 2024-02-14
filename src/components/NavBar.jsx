import { NavLink } from 'react-router-dom';
import logo from '../assets/logos/initialsLogoWhite.svg';

export default function NavBar() {
  return (
    <>
      <nav className="navigation">
        <img src={logo} alt="" srcset="" className="navLogo" />
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
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
