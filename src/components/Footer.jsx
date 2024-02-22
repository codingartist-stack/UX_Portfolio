import linkedIn from '../assets/images/linkedInLogoWhite.svg';

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          <p className="logoFont footerFont">SML</p>
          <p>Site built with React by me!</p>
        </div>

        <div className="infoWrapper">
          <a href="https://www.linkedin.com/in/sarahmlarsen/" target="_blank">
            <img src={linkedIn} alt="Linkedin icon" className="footerIcon" />
            <span className="linkedInURL">
              https://www.linkedin.com/in/sarahmlarsen/
            </span>
          </a>
          <a
            href="https://docs.google.com/document/d/1z9zeW7c0c3TFS-KmFFlD7nkfAH47Dq-8Yatf7SDxy8g/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="scr-only">file-empty</span> Resume
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
