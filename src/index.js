import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Html from './pages/html';
import Css from './pages/css';
import Javasecript from './pages/javasecript';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>sorry man no pages</h1>,
  },
  {
    path: "/html",
    element: <Html/>,
    errorElement: <h1>sorry man no pages</h1>,
  },
  {
    path: "/css",
    element: <Css/>,
    errorElement: <h1>sorry man no pages</h1>,
  },
  {
    path: "/javasecript",
    element: <Javasecript/>,
    errorElement: <h1>sorry man no pages</h1>,
  },



]);
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

 
