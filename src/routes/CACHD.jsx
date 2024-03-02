import mobileProtoGif from '../assets/images/CACHD/Phone_LowFi.gif';
import logoSlide from '../assets/images/CACHD/CACHD_LogoSlide.png';
import desktopGif from '../assets/images/CACHD/DeskTopMockup.gif';
// import beforeAfter from '../assets/images/ArtMuseum/beforeAfter.png';
// import screens from '../assets/images/ArtMuseum/3screens.png';

export default function CACHDPage() {
  return (
    <>
      <div className="caseStudyHero CACHDHero">
        <h1>Redesign: Local Community Theater</h1>
      </div>

      <div className="contentWrapper">
        <div className="projectWrapper">
          <h2>Project:</h2>
          <div className="para">
            <p>
              As a dedicated supporter of the performing arts, I regularly
              attend events, engaging with fellow patrons and snack bar
              volunteers. Recognizing the scarcity of UX designers and
              developers for local community theaters, I aim to show that with
              some attentive care, your website can be elevated and improved.
            </p>
            <p>
              The current Cultural Arts Center of the High Desert website has
              visually overpowering elements and an outdated logo, with a
              cluttered navigation bar and action buttons blending into the
              background. My goal is to simplify the design, ensuring a clear
              distinction between the navigation bar, main content area, and
              footer. I aim to streamline navigation, content about events,
              ticket purchasing, and facility booking.
            </p>
          </div>
          <img
            src={mobileProtoGif}
            alt="GIF (short video) of prototype"
            className="mobileGif"
          />
        </div>

        <hr />

        <p>Created by: Sarah Larsen</p>
        <p>
          Role: logo design, brand identity, lead UX designer and researcher
        </p>
        <p>Project Duration: Feb 2024-Mar 2024</p>
        <a
          href="https://www.highdesertarts.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Current Site
        </a>
        <p>
          <a
            href="https://docs.google.com/presentation/d/1yCZJDWHrNNplQ7S6E_nsuHbmt3Mk-M_Voaz-7akf1tU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Case Study Slide Presentation
          </a>
        </p>

        <hr />

        <div className="LogoWrapper">
          <h2>Logo:</h2>
          <div className="para">
            <p>
              I initiated the project by creating paper wireframes and sketches
              for a logo redesign. The existing logo lacked inspiration, and
              attempts to retain its elements resulted in an overly intricate
              design. Consequently, I crafted two logos – one for a polished and
              professional appearance, and the other specifically tailored for
              merchandise use.
            </p>
          </div>
          <img src={logoSlide} alt="Logo Process" />
        </div>
        <div className="processWrapper">
          <h2>Process:</h2>
          <div className="para">
            <p>
              I dedicated a few weeks to constructing a comprehensive mockup for
              the entire site. Even without images, the mockup exhibited a
              cleaner aesthetic compared to the current site. I enhanced the
              text contrast throughout, maintaining a consistent appearance
              across pages by eliminating background images. While the color
              scheme remains anchored in red, the addition of a gold accent, in
              my opinion, elevated the overall visual appeal.
            </p>
          </div>
          <img src={desktopGif} alt="Logo Process" />
        </div>
        <h2>Final: </h2>
        <p>The project is currently undergoing active development</p>
        {/* <img
          src={screens}
          alt="product displayed on three screens"
          className="multiScreens"
        /> */}
        {/* take aways */}
      </div>
    </>
  );
}
