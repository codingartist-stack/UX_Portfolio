import profilePic from '../assets/images/ProfilePicture.jpg';

export default function AboutPage() {
  return (
    <div className="contentWrapper textImgWrapper">
      <h1>About Me</h1>
      <div className="aboutPara">
        <p>
          I&apos;m a UX designer with a background in visual art, education, and
          technical support. I approach design by balancing creativity with
          logic, focusing on both the emotional and practical aspects of user
          experience. My early career in web hosting and education technology
          put me in direct contact with users, where listening to pain points
          and translating them into clear solutions sparked my interest in
          human-centered design.
        </p>
        <p>
          Over the past several years, I&apos;ve intentionally built my UX skill
          set through hands-on projects, coursework, and front-end development
          fundamentals. I have experience designing user flows, wireframes, and
          interfaces, and I bring working knowledge of HTML and CSS, which helps
          me design within real technical constraints and collaborate
          effectively with developers. I also designed and built this portfolio
          site from the ground up, applying both UX and front-end principles
          throughout the process.
        </p>
        <p>
          I&apos;m excited to apply my background in problem-solving,
          communication, and design thinking to create thoughtful, usable
          experiences—and to continue growing as a UX designer.
        </p>
        <p>
          <span className="scr-only">envelope</span>sarahlarsendesigns@gmail.com
        </p>
      </div>
      <img src={profilePic} alt="A Picture of Me, Sarah Larsen" />
    </div>
  );
}
