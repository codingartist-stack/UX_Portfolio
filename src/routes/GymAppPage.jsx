import phoneGif from '../assets/images/GymApp/GymPrototype.gif';
import family from '../assets/images/GymApp/family.png';
import couple from '../assets/images/GymApp/Couple.png';
import lowFiGif from '../assets/images/GymApp/lowFiProtoGym.gif';
import itemBeforeAfter from '../assets/images/GymApp/itempageBeforeAfterGym.png';
import checkoutBeforeAfter from '../assets/images/GymApp/CheckoutBeforeAfterGym.png';

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

        <div className="imgTextWrapper">
          <h2>Mockups:</h2>
          <div className="para">
            <p>
              During the paper mock up phase I explored two workflows,purchasing
              a class and checking workout status, thinking they were similar,
              but they were not. I decided to focus on purchasing a class as
              that is an additional cost and talking to other mothers had the
              most paint points.
            </p>
          </div>
          <img
            src={lowFiGif}
            alt="Gif of App purchasing swim lessons"
            className="mobileGif"
          />
        </div>

        <hr />

        <div className="usabilityWrapper">
          <h2>After Usability Study:</h2>
          <div className="para">
            <p>
              For my usability study I interviewed locals who have children they
              did or will sign up for classes. The users wanted a way to find
              lessons for the home page. The users were confused as to what they
              were purchasing and felt the check ut process was abrupt.
            </p>
            <p>
              To address the users concerns I created an addition page for the
              item they there looking to purchase and a order summary page to
              the checkout process.
            </p>
          </div>
          <div className="usabilityImages">
            <img
              src={itemBeforeAfter}
              alt="Before and after of item for purchase"
              className="usabilityImage"
            />
            <img
              src={checkoutBeforeAfter}
              alt="before and after check out process"
              className="usabilityImage"
            />
          </div>
        </div>

        <hr />

        <div className="imgTextWrapper">
          <h2>Final Thoughts: </h2>
          <p>
            My first UX project proved to be a valuable learning experience,
            underscoring the depth of knowledge yet to explore. Throughout the
            process, I acquired proficiency in Figma, honed my skills in
            conducting usability studies, and adeptly utilized available
            resources to enhance my work. Recognizing the significance of
            usability studies, I realized the critical role they play in
            uncovering nuanced design elements. Reflecting on the project a year
            later, I take pride in my initial strides and the trajectory I
            continue to pursue.
          </p>
          <img
            src={phoneGif}
            alt="product displayed four mobile screens"
            className="mobileGif"
          />
        </div>
      </div>
    </>
  );
}
