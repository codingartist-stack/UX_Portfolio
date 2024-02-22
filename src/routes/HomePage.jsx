import artMuseum from '../assets/images/ArtMuseum/artProject.png';
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
        <Link to="responsiveArtMuseum" className="imageLink artMuseum">
          <img src={artImgLink} alt="Art Musuem High Fidelity Mockups" />
          <h2>Responsive Art Musuem Website</h2>
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
