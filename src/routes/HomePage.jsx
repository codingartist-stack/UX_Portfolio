import artMuseum from '../assets/images/ArtMuseum/artProject.png';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>Hi, I'm Sarah Larsen.</h1>
      <p>
        As a UX designer and artist, I employ a blend of creative and logical
        approaches, allowing me to address both the emotional and practical
        aspects of interface usability.
      </p>
      <div className="featureProject">
        <h2>
          Feature Project: <br /> Responsive Art Musuem
        </h2>
        <img src={artMuseum} alt="art Museum project" className="heroImage" />
        <Link to="caseStudies/responsiveArtMuseum">
          <button>
            Case Study <span className="scr-only"> arrow-right </span>
          </button>
        </Link>
      </div>
    </>
  );
}
