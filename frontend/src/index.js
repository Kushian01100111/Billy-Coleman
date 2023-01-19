import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/Main content.css'
import './styles/Portfolios.css'
import './styles/Contact.css'
import App from './App';
import Women from "./pages/Women"
import Men from "./pages/Men"
import Beauty from "./pages/Beauty"
import Advertising from "./pages/Advertising"
import Root from './Root';
import WPortfolios from "./pages/portfolios/WPortfolios"
import MPortfolios from "./pages/portfolios/MPortfolios"
import BPortfolios from "./pages/portfolios/BPortfolios"
import APortfolios from "./pages/portfolios/APortfolios"
import Error from './pages/Error';
import Contact from "./pages/Contact"

import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>,
  errorElement: <Error/>, 
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
]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

