import { Link } from 'react-router-dom';

export default function DesignsPage() {
  return (
    <>
      <h1>Designs</h1>
      <div className="caseLinkWrapper">
        <Link to="tikiBulldog" className="imageLink tikiBulldog">
          <h2>Tiki Bulldog - Teacher Appreciation Week</h2>
        </Link>
      </div>
    </>
  );
}
