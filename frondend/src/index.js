import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Women from "./pages/Women"
import Men from "./pages/Men"
import Beauty from "./pages/Beauty"
import Advertising from "./pages/Advertising"
import Contact from "./pages/Contact"

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
    children:[{
      path:"/women",
      element:<Women/>,
    },
    {
      path:"/men",
      element: <Men/>,
    },
    {
      path:"/beauty",
      element:<Beauty/>,
    },
    {
      path:"/advertising",
      element:<Advertising/>,
    },
    {
      path:"/contact",
      element:<Contact/>,
    }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

