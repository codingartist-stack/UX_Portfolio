import theaterImgLink from '../assets/images/CACHD/Red_CACHD_logo.png';
import artImgLink from '../assets/images/ArtMuseum/artImage.png';
import gymImgLink from '../assets/images/GymApp/GymImage.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>Hi, I'm Sarah Larsen.</h1>
        <p>
          As a UX designer and artist, I employ a blend of creative and logical
          approaches, allowing me to address both the emotional and practical
          aspects of interface usability.
        </p>
      </div>
      <div className="caseLinkWrapper">
        <Link to="CACHDRedesign" className="imageLink Theater">
          <img src={theaterImgLink} alt="Art Museum High Fidelity Mockups" />
          <h2>
            Redesign: <br /> Local Community Theater
          </h2>
        </Link>
        <Link to="responsiveArtMuseum" className="imageLink artMuseum">
          <img src={artImgLink} alt="Art Museum High Fidelity Mockups" />
          <h2>Responsive Art Museum Website</h2>
        </Link>
        <Link to="gymAppRedesign" className="imageLink gymApp">
          <img src={gymImgLink} alt="Gym App High Fidelity Mockup" />
          <h2>
            Redesign: <br /> Local Recreation Center
          </h2>
        </Link>
        {/* <div>Project Under Construction</div> */}
      </div>
    </>
  );
}
