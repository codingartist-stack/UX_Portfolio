import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

//draw racoons for site.

function App() {
  return (
    <>
      <h1>UX Portfolio</h1>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
