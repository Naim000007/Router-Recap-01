import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Componant/Header/Header.jsx'
import About from './Componant/About/About.jsx'
import Root from './Root';
import Contact from './Componant/Contact/Contact.jsx'
import Home from './Componant/Home/Home.jsx'
import User from './Componant/User/User.jsx';
import Github from './Componant/Github/Github.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element:<Root></Root>,
    children:[
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '',
        element: <Home/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'user/:id',
        element: <User/>
      },
      {
        path: 'github',
        element: <Github/>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
