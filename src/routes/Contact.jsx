import linkedIn from '../assets/images/linkedInLogo.svg';
import instagram from '../assets/images/instgramLogo.svg';

export default function ContactPage() {
  return (
    <>
      <h1>Contact Me!</h1>
      <div className="contactWrapper">
        <a
          href="https://www.linkedin.com/in/sarahmlarsen/"
          target="_blank"
          className="flexLink"
        >
          <img
            src={linkedIn}
            alt="Linkedin icon"
            className="footerIcon"
            // width="24px"
          />
          <span className="linkedInURLContact">
            https://www.linkedin.com/in/sarahmlarsen/
          </span>
        </a>
        <a
          href="https://www.instagram.com/pollitolarsen/"
          target="_blank"
          className="flexLink"
        >
          <img src={instagram} alt="Linkedin icon" className="footerIcon" />
          pollitolarsen
        </a>
        <a
          href="https://docs.google.com/document/d/1z9zeW7c0c3TFS-KmFFlD7nkfAH47Dq-8Yatf7SDxy8g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flexLink"
        >
          <span className="scr-only">file-empty</span> Resume
        </a>
      </div>
    </>
  );
}
