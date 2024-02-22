import mobileProtoGif from '../assets/images/ArtMuseum/MobilePrototypeGIF.gif';

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

        <h2>Process:</h2>
        <h2>Final: </h2>
        <p>
          After dedicating a year to learning front-end coding, I embarked on
          this project. My comprehension of the capabilities within HTML and CSS
          played a pivotal role in guiding my decisions regarding the elements
          to incorporate for achieving responsive design. Additionally, I
          incorporated Figma components in this project to maintain a tidy and
          uniform design throughout.
        </p>
        {/* take aways */}
      </div>
    </>
  );
}
