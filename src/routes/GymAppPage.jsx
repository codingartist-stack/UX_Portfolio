import phoneGif from '../assets/images/GymApp/GymPrototype.gif';

export default function GymAppPage() {
  return (
    <>
      <div className="contentWrapper">
        <h1>Redesign: Local Recreation Center</h1>
        <div className="projectWrapper">
          <h2>Project:</h2>
          <p>
            My first Figma Project. This application is designed for the Orem
            Recreation Center, a local gym I frequented during my time in Orem,
            Utah. Intended to enhance your recreation center experience, the app
            addresses the challenges posed by the current website, which often
            leads to confusion and frustration for users. Primarily catering to
            mothers, the app simplifies the process of signing up their children
            for various classes, including dance, swim, and sports, offered by
            the recreation center.
          </p>
          <img src={phoneGif} alt="Final prototype gif" className="mobileGif" />
        </div>
        <hr />
        <div className="projectDetails">
          <p>Created by: Sarah Larsen</p>
          <p>Role: brand identity, lead UX designer and researcher</p>
          <p>Project Duration: April 2022 to Aug 2022</p>
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

        <p>
          <a
            href="https://docs.google.com/presentation/d/1NwR-aTcTTCk_QUYaYg-Gmofql62RbcYXIJzdilwLG18/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Case study
          </a>
        </p>
        <div className="iframeWrapper">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vR6b-eMdJqWdZdCvHPKKFg7Rl9piTqGDdM7HViAAfTpXI2-sUMn9mOFG-I_LeVlODdJ83beZ-7CYMBS/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            // width="960"
            // height="569"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
}
