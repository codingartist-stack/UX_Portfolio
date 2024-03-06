import mobileProtoGif from '../assets/images/ArtMuseum/MobilePrototypeGIF.gif';
import beforeAfter from '../assets/images/ArtMuseum/beforeAfter.png';
import screens from '../assets/images/ArtMuseum/3screens.png';
import mockupGif from '../assets/images/ArtMuseum/MockupGif.gif';
import EmilyImg from '../assets/images/ArtMuseum/EmilyPersona.png';
import JohnImg from '../assets/images/ArtMuseum/JohnPersona.png';

export default function ArtMuseumPage() {
  return (
    <>
      <div className="caseStudyHero artMuseumHero">
        <h1>Responsive Art Museum</h1>
      </div>

      <div className="contentWrapper">
        <div className="projectWrapper">
          <h2>Project:</h2>
          <div className="para">
            <p>
              Creating a website for the Art Museum with a focus on
              user-friendliness and responsiveness is essential. The primary
              goals include promoting exhibitions and events, offering
              comprehensive museum information, and facilitating visitor
              scheduling.
            </p>
            <p>
              As an artist, I frequent art museums and galleries whenever I can.
              My assumption was that individuals exploring an art museum's
              website or app would primarily seek an opportunity to experience
              the artwork in person. Yet, it became evident that users,
              including myself, are more intrigued by knowing what exhibits to
              expect and whether the museum offers opportunities for study,
              learning, and active participation in art creation.
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
          <p>Project Duration: Feb 2024</p>
          <p>
            <a
              href="https://docs.google.com/presentation/d/18YKe5o1r_ceKvSgS5rVZzwj4A_vJFkZVz66f-tQ5cjY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Case Study Slide Presentation
            </a>
          </p>
        </div>

        <hr />

        <div className="Personas">
          <h2>Personas:</h2>
          <div className="persona">
            <img src={EmilyImg} alt="Emily Portrait" className="personaImg" />
            <div className="para">
              <p>Name: Emily</p>
              <p>
                Problem Statement: Emily is a busy professional who needs to
                easily find the hours of operation, classes, and lectures
                because she wants to stay connected to the art community and be
                around other art enthusiasts.
              </p>
              <p>Goals: Have access to lecture and class scheduling.</p>
              <p>
                Frustrations: Finding hours for the day she is visiting the
                site.
              </p>
            </div>
          </div>
          <div className="persona textImgPersona">
            <img src={JohnImg} alt="John Portrait" className="personaImg" />
            <div className="para">
              <p>Name: John</p>
              <p>
                Problem Statement: John is a retired carpenter who needs to
                easily find the hours of operation and lectures because he wants
                learn more about history of frames and the carpenters behind
                them.
              </p>
              <p>
                Goals: Have access to lecture scheduling and hours of
                operations.
              </p>
              <p>Frustrations: Finding hours of operations and lectures.</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="textImgWrapper">
          <h2>Mockups: </h2>
          <div className="para">
            <p>
              During the creation of paper wireframes, it became evident that
              users are keen on understanding what to expect during their visit,
              whether it's to view works from a specific artist or attend a
              particular speaker's session. As a result, users typically don't
              immediately make ticket purchases upon visiting the site. To
              address this, I aimed to provide users with multiple entry points
              into the ticket purchase flow. Within a week, I delineated the
              basic layout and developed a low-fidelity mockup using Figma.
            </p>
          </div>
          <img src={mockupGif} alt="Mockup flow to purchase ticket" />
        </div>

        <hr />

        <div className="imgTextWrapper">
          <h2>After Usability Study:</h2>
          <div className="para">
            <p>
              Seeking feedback, I enlisted the help of a software engineer named
              Ben and a UX designer named Brock as my test users. Ben suggested
              the inclusion of an event filter, while Brock emphasized the need
              to declutter the billing page. I addressed both concerns before
              progressing to the high-fidelity mockups.
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
        <h2>Final Thoughts: </h2>
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
