import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import errorRacoon from './assets/images/ErrorRacoon.png';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  //   add image of racoon

  return (
    <div className="errorPage">
      <h1>Ooops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Return to Home Page</Link>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={errorRacoon} alt="Racoon Lost" className="lostRacoon" />
    </div>
  );
}
