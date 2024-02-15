import logo from '../assets/logos/initialsLogoWhite.svg';
import linkedIn from '../assets/images/linkedInLogoWhite.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="Sarah Larsen Logo" className="FooterLogo" />
        <div className="infoWrapper">
          <a href="https://www.linkedin.com/in/sarahmlarsen/" target="_blank">
            <img src={linkedIn} alt="Linkedin icon" className="footerIcon" />
            <span className="linkedInURL">
              https://www.linkedin.com/in/sarahmlarsen/
            </span>
          </a>
          <p>
            <span className="scr-only">envelope</span> sarahlarsenux@gmail.com
          </p>
          <p>
            <span className="scr-only">map-marker</span> Hesperia, CA
          </p>
        </div>
      </footer>
    </>
  );
}
