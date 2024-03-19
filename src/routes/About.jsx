import profilePic from '../assets/images/ProfilePicture.jpg';

export default function AboutPage() {
  return (
    <div className="contentWrapper textImgWrapper">
      <h1>About Me</h1>
      <div className="aboutPara">
        <p>
          As a UX designer and artist, I employ a blend of creative and logical
          approaches, allowing me to address both the emotional and practical
          aspects of interface usability. Having engaged directly with users
          during my tenure at the second-largest hosting provider and education
          technology company in technical support roles, I developed a profound
          interest in not just empathizing with users' concerns but actively
          resolving them through the lens of UX/UI design.
        </p>
        <p>
          Over the last five years, my primary focus has been raising my
          daughter. Now that she is starting school, I am eager to re-enter the
          workforce. Two years ago, I embarked on my UX journey and gained
          valuable insights. I dedicated a year to mastering HTML, CSS, and
          React. Upon returning to UX design, I saw how important understanding
          front-end development was. This knowledge of element and layout
          limitations has greatly influenced my design process. Combining both
          skill sets, I successfully built my portfolio site – the one you are
          currently exploring!
        </p>
        <p>
          Thank you for taking the time to learn more about me, Sarah Larsen. I
          appreciate your interest and look forward to future endeavors and
          collaborations.
        </p>
      </div>
      <img src={profilePic} alt="A Picture of Me, Sarah Larsen" />
    </div>
  );
}
