import linkedIn from '../assets/images/linkedInLogo.svg';
import instagram from '../assets/images/instgramLogo.svg';

export default function ContactPage() {
  return (
    <>
      <h1>Socials</h1>
      <div className="contactWrapper">
        <a
          href="https://www.linkedin.com/in/sarahmlarsen/"
          target="_blank"
          className="flexLink"
        >
          {' '}
          linkedIn:
          <span className="linkedInURLContact">
            https://www.linkedin.com/in/sarahmlarsen/
          </span>
        </a>
        <a
          href="https://www.instagram.com/pollitolarsen/"
          target="_blank"
          className="flexLink"
        >
          instagram: pollitolarsen
        </a>
        <a
          href="https://docs.google.com/document/d/1z9zeW7c0c3TFS-KmFFlD7nkfAH47Dq-8Yatf7SDxy8g/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flexLink"
        >
          Resume
        </a>
      </div>
    </>
  );
}
