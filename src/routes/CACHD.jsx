import mobileProtoGif from '../assets/images/CACHD/MobileHiFi_gif.gif';
import logoSlide from '../assets/images/CACHD/CACHD_LogoSlide.png';
import desktopGif from '../assets/images/CACHD/DeskTopMockup.gif';
import currentShows from '../assets/images/CACHD/listofShows.png';
import currentTickets from '../assets/images/CACHD/CurrentSite_tickets.png';
import currentHome from '../assets/images/CACHD/CACHD_homepage.png';
import beforeAfterSeats from '../assets/images/CACHD/usabilitySeats.png';
import beforeAfterBooking from '../assets/images/CACHD/usabilityBooking.png';
import phoneDisplay from '../assets/images/CACHD/PhoneDisplay.png';
import BenPortrait from '../assets/images/CACHD/BenPersona.png';
import AlicePortrait from '../assets/images/CACHD/AlicePersona.png';
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

        <div className="projectDetails">
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
        </div>

        <hr />

        <div className="painPointsWrapper">
          <h2>Pain Points:</h2>
          <div className="para">
            <ul>
              <li> Navigation bar text difficult to read</li>
              <li>Fonts and font size inconsistent</li>
              <li>Hierarchy is not always clear</li>
              <li>
                List of shows on Homepage is an image with no alternative text
              </li>
            </ul>
          </div>
          {/* <img src={logoSlide} alt="Logo Process" /> */}
          <h3>Current Site(as of Feb 2024)</h3>
          <div className="currentSiteImages">
            <img
              src={currentHome}
              alt="current Theater home page"
              className="currentImages"
            />
            <img
              src={currentShows}
              alt="current theater shows page"
              className="currentImages"
            />
            <img
              src={currentTickets}
              alt="current theater ticket checkout"
              className="currentImages"
            />
          </div>
        </div>

        <hr />

        <div className="Personas">
          <h2>Personas:</h2>
          <div className="persona">
            <img src={BenPortrait} alt="Ben Portrait" className="personaImg" />
            <div>
              <p>Name: Ben</p>
              <p>
                Problem Statement: Ben is a busy software engineer who needs to
                know when performances and auditions are at the local community
                theater because he would like to be a part of the performing
                arts community.
              </p>
              <p>
                Goals: Find auditions for musicals and performance schedules.
              </p>
              <p>Frustrations: Current site is subpar, banner is distracting</p>
            </div>
          </div>
          <div className="persona textImgPersona">
            <img
              src={AlicePortrait}
              alt="Alice Portrait"
              className="personaImg"
            />
            <div>
              <p>Name: Alice</p>
              <p>
                Problem Statement: Alice is a retired Grandmother who needs to
                know how to volunteer at the snake bar theater because she wants
                to feel useful and apart of a community.
              </p>
              <p>Goals: Find who to contact to volunteer.</p>
              <p>Frustrations: Can't read small text.</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="LogoWrapper textImgWrapper">
          <h2>Redesign Logo:</h2>
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
          <img src={logoSlide} alt="Logo Process" className="logoredesign" />
        </div>

        <hr />

        <div className="imgTextWrapper">
          <h2>Mockups:</h2>
          <div className="para">
            <p>
              I dedicated a few weeks to constructing a comprehensive mockup for
              the entire site. Even without images, the mockup exhibited a
              cleaner aesthetic compared to the current site. I enhanced the
              text contrast throughout, maintaining a consistent appearance
              across pages by eliminating background images. While the color
              scheme remains anchored in red with a gold accent keeping the
              brand of the current site.
            </p>
          </div>
          <img src={desktopGif} alt="Gif of desktop book facility path" />
        </div>

        <hr />

        <div className="usabilityWrapper">
          <h2>After Usability Study:</h2>
          <div className="para">
            <p>
              For my usability study I interviewed two theatergoers: Esther, an
              administrative professional working for a county program, and
              Betsy, an elementary school librarian.
            </p>
            <p>
              Esther pointed out that the horizontal scrolling feature for
              selecting theater seats was confusing, and she suggested including
              an email input in the checkout process for confirmation emails.
              Additionally, she recommended that the "edit seats" button should
              encompass the ability to edit both shows and show times.
            </p>
            <p>
              Betsy mentioned that if she has to read the booking disclaimer, it
              should be more prominently displayed on the page. After locating
              the booking disclaimer, she expressed the desire for additional
              checkboxes on the request form, specifically for set-up assistance
              and light and sound operation.
            </p>
          </div>
          <div className="usabilityImages">
            <img
              src={beforeAfterSeats}
              alt="Before and After Seat Selection Process"
              className="usabilityImage"
            />
            <img
              src={beforeAfterBooking}
              alt="Before and After Booking Process"
              className="usabilityImage"
            />
          </div>
        </div>
        <hr />
        <h2>Final: </h2>
        <p>
          Since I created a sticker sheet and made hierarchy decisions at the
          start the high fidelity came together quickly. I discovered that
          having a clear comprehension of the project and its branding
          streamlines the workflow, making it more efficient and
          straightforward.
        </p>
        <img
          src={phoneDisplay}
          alt="product displayed four mobile screens"
          className="multiScreens"
        />
      </div>
    </>
  );
}
