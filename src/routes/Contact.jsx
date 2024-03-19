import linkedIn from '../assets/images/linkedInLogo.svg';

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
        {/* <p>
          <span className="scr-only">envelope</span> sarahlarsenux@gmail.com
        </p> */}
      </div>
    </>
  );
}
