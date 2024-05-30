import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// Imported pages
import App from './App';
import Layout from './components/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import RequestAppointment from './pages/RequestAppointment';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import Me from './pages/Me';
import './index.css';
import '../public/css/main.min.css'; // Ensure this path points to your compiled CSS
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'gallery',
        element: <Gallery />
      },
      {
        path: 'reviews',
        element: <Reviews />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: 'request-appointment',
        element: <RequestAppointment />
      },
      {
        path: 'me',
        element: <Me />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);