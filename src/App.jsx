import { createBrowserRouter,RouterProvider } from 'react-router-dom';

import AppLayout from './Components/Layout/AppLayout';

import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import OurServices from './pages/OurServices';
import OurWork from './pages/OurWork';
import ErrorPage from './Components/UI/ErrorPage';
import OurservicesCardPage from './Components/Layout/OurserviceCardPage';

const router=createBrowserRouter([
  {
   path:"/",
   element:<AppLayout/>,
   errorElement:<ErrorPage/>,
   children:[
     { 
       path:"/",
       element:<Home/>,
      },
      { 
       path:"/aboutus",
       element:<AboutUs/>,
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/OurServices",
        element:<OurServices/>
      },
      {
        path:"/OurServices/:id",
        element:<OurservicesCardPage/>
      },
      {
        path:"/OurWork",
        element:<OurWork/>
      }
     ]
   }
  ])
function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )

}

export default App
