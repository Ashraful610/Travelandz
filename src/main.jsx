import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Pages/HomePage/HomePage.jsx';
import TravelPlanPage from './Pages/TravelPlanPage/TravelPlanPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index:true,
        element: <HomePage/>,
      },
      {
        path:'travelPlanePage',
        element:<TravelPlanPage/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
     <App />
    </RouterProvider>
  </React.StrictMode>,
)
