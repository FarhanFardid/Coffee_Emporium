import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import PageLayout from './Components/PageLayout.jsx'
import Home from './Components/Home.jsx'
import AddCoffee from './Components/AddCoffee.jsx'
import CoffeeDetails from './Components/CoffeeDetails.jsx'
import UpdateCoffee from './Components/UpdateCoffee.jsx'
import Error from './Components/Error'
import About from './Components/About'


const router = createBrowserRouter([
  {
    path:'/',
    element:<PageLayout></PageLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'coffeeDetails',
        element:<CoffeeDetails></CoffeeDetails>
      },
      {
        path:'updateCoffee',
        element:<UpdateCoffee></UpdateCoffee>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'*',
        element:<Error></Error>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router}></RouterProvider>
  </React.StrictMode>,
)
