import mobileProtoGif from '../assets/images/CACHD/Phone_LowFi.gif';
import beforeAfter from '../assets/images/ArtMuseum/beforeAfter.png';
import screens from '../assets/images/ArtMuseum/3screens.png';

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
        <p>Project Duration: Feb 2024</p>
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

        <div className="processWrapper">
          <h2>Process:</h2>
          <div className="para">
            <p>
              Within a week, I outlined my basic layout and crafted a
              low-fidelity mockup using Figma. Seeking feedback, I enlisted the
              help of a software engineer named Ben and a UX designer named
              Brock as my test users. Ben suggested the inclusion of an event
              filter, while Brock emphasized the need to declutter the billing
              page. I addressed both concerns before progressing to the
              high-fidelity mockups.
            </p>
            <p>
              Spending another week fine-tuning the high-fidelity mockup, I
              presented it to Ben and Brock, who both appreciated the changes.
              However, Brock highlighted the need for improvement in the
              confirmation page hierarchy, expressing a sense of confusion.
              Acknowledging his feedback, I made the necessary adjustments to
              enhance clarity.
            </p>
          </div>
          <img
            src={beforeAfter}
            alt="before and after usability study events page mockups"
          />
        </div>
        <h2>Final: </h2>
        <p>
          After dedicating a year to learning front-end coding, I embarked on
          this project. My comprehension of the capabilities within HTML and CSS
          played a pivotal role in guiding my decisions regarding the elements
          to incorporate for achieving responsive design. Additionally, I
          incorporated Figma components in this project to maintain a tidy and
          uniform design throughout.
        </p>
        <img
          src={screens}
          alt="product displayed on three screens"
          className="multiScreens"
        />
        {/* take aways */}
      </div>
    </>
  );
}
