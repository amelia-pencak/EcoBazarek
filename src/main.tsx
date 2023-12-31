import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { HomePage, AboutUsPage, ProductsPage, ContactPage, PageNotFound } from './pages';
import { ProfilePage } from './pages/ProfilePage.tsx';
import { EditProfilePage } from './pages/EditProfile/EditProfilePage.tsx';
import { RegistrationPage } from './pages/RegistrationPage/RegistrationPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUsPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/not-found",
        element: <PageNotFound />,
      },
      {
        path: "/edit-profile",
        element: <EditProfilePage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      }
   
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
