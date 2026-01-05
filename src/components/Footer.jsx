import linkedIn from '../assets/images/linkedInLogoWhite.svg';
import instagram from '../assets/images/instgramLogoWhite.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <Link>
            <p className="logoFont footerFont">SML</p>
          </Link>
          <p>Hesperia, CA</p>
          <p>Site built with React by me!</p>
        </div>

        <div className="infoWrapper">
          <a href="https://www.linkedin.com/in/sarahmlarsen/" target="_blank">
            <img src={linkedIn} alt="Linkedin icon" className="footerIcon" />
            <span className="hideMobile">
              https://www.linkedin.com/in/sarahmlarsen/
            </span>
          </a>
          <a href="https://www.instagram.com/pollitolarsen/" target="_blank">
            <img src={instagram} alt="Linkedin icon" className="footerIcon" />
            <span className="hideMobile">pollitolarsen</span>
          </a>
          <a
            href="https://docs.google.com/document/d/1KqdQfU4lWxVkgNaDRRPsTgxhhzaIWbFwVfkr0r8kBKA/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="scr-only">file-empty</span>{' '}
            <span className="hideMobile">Resume</span>
          </a>
        </div>
      </footer>
    </>
  );
}
