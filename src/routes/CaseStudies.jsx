import { Link } from 'react-router-dom';
import artImgLink from '../assets/images/ArtMuseum/artImage.png';
import gymImgLink from '../assets/images/GymApp/GymImage.png';

export default function CaseStudies() {
  return (
    <>
      <h1>Case Studies</h1>
      <div className="caseLinkWrapper">
        <Link to="responsiveArtMuseum" className="imageLink artMuseum">
          <img src={artImgLink} alt="Art Musuem High Fidelity Mockups" />
          <h2>Responsive Art Musuem Website</h2>
        </Link>
        <Link className="imageLink gymApp">
          <img src={gymImgLink} alt="Gym App High Fidelity Mockup" />
          <h2>Gym App</h2>
        </Link>
        <div>Project Under Construction</div>
      </div>
    </>
  );
}
