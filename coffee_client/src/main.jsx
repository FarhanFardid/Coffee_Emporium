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
        element:<Home></Home>,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path:'addCoffee',
        element:<AddCoffee></AddCoffee>
      },
      {
        path:'coffeeDetails/:id',
        element:<CoffeeDetails></CoffeeDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:'updateCoffee/:id',
        element:<UpdateCoffee></UpdateCoffee>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`) 
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
