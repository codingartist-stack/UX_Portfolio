import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

//draw racoons for site.

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default App;
