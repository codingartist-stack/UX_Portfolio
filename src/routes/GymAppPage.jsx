import phoneGif from '../assets/images/GymApp/GymPrototype.gif';
import family from '../assets/images/GymApp/family.png';
import couple from '../assets/images/GymApp/Couple.png';

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
              href="https://docs.google.com/presentation/d/1NwR-aTcTTCk_QUYaYg-Gmofql62RbcYXIJzdilwLG18/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Case Study Presentation
            </a>
          </p>
        </div>

        <hr />

        <div className="Personas">
          <h2>Personas:</h2>
          <div className="persona">
            <img
              src={family}
              alt="Elizabeth Portrait with her mother and son"
              className="personaImg"
            />
            <div>
              <p>Name: Elizabeth</p>
              <p>
                Problem Statement: Elizabeth is a stay at home mom who needs
                know when classes and lessons for her, her son, and mother
                because she would like to to make health a family affair.
              </p>
              <p>
                Goals: Find swim lessons for her son and classes for her and her
                mother to attend.
              </p>
              <p>
                Frustrations: doesn't want to use her computer at the gym and
                toddler often causes her to lose her place in the app.
              </p>
            </div>
          </div>
          <div className="persona textImgPersona">
            <img src={couple} alt="Alice Portrait" className="personaImg" />
            <div>
              <p>Name: Jason and Patricia</p>
              <p>
                Problem Statement: Jason and Patricia are newlyweds who would
                like to sign up for strength training because they would like to
                work on their health together.
              </p>
              <p>
                Goals: Find a class or trainer to work on strength training.
              </p>
              <p>
                Frustrations: can't always find the time to go to the gym
                together.
              </p>
            </div>
          </div>
        </div>

        <hr />

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
