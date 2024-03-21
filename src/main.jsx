import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import ErrorPage from './Error-Page.jsx';
import HomePage from './routes/HomePage.jsx';
import AboutPage from './routes/About.jsx';
import ContactPage from './routes/Contact.jsx';
import CaseStudies from './routes/CaseStudies.jsx';
import ArtMuseumPage from './routes/ArtMuseum.jsx';
import GymAppPage from './routes/GymAppPage.jsx';
import CACHDPage from './routes/CACHD.jsx';
import DesignsPage from './routes/DesignsPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'responsiveArtMuseum',
        element: <ArtMuseumPage />,
      },
      {
        path: 'gymAppRedesign',
        element: <GymAppPage />,
      },
      {
        path: 'CACHDRedesign',
        element: <CACHDPage />,
      },
      {
        path: 'designs',
        element: <DesignsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
