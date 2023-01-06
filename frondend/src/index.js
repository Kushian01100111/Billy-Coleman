import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Women from "./pages/Women"
import Men from "./pages/Men"
import Beauty from "./pages/Beauty"
import Advertising from "./pages/Advertising"
import Root from './Root';
import WPortfolios from "./pages/portfolios/WPortfolios"
import MPortfolios from "./pages/portfolios/MPortfolios"
import CPortfolios from "./pages/portfolios/CPortfolios"
import BPortfolios from "./pages/portfolios/BPortfolios"
import APortfolios from "./pages/portfolios/APortfolios"
import Contact from "./pages/Contact"

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
    children:[
      {
        index: true,
        element: <App/>
      },
      {
      path:"/women",
      element:<Women/>,
      },
      {
        path:"/women/portfolio",
        element: <WPortfolios/>,
      },
    {
      path:"/men",
      element: <Men/>,
    },
    {
      path:"/men/portfolio",
      element: <MPortfolios/>,
    },
    {
      path:"/beauty",
      element:<Beauty/>,
    },
    {
      path:"/beauty/portfolio",
      element: <BPortfolios/>
    },
    {
      path:"/advertising",
      element:<Advertising/>,
    },
    {
      path:"/advertising/portfolio",
      element: <APortfolios/>
    },
    {
      path:"/contact",
      element:<Contact/>,
    },
    {
      path:"/contact/portfolio",
      element: <CPortfolios/>
    }
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);
