import { Link } from 'react-router-dom';

export default function CaseStudies() {
  return (
    <>
      <h1>Case Studies</h1>
      <div className="caseLinkWrapper">
        <Link
          to="caseStudies/responsiveArtMuseum"
          className="imageLink artMuseum"
        ></Link>
        <div>box 2</div>
        <div>box 3</div>
      </div>
    </>
  );
}
