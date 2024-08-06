import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Search from './pages/Search.jsx'
 const router=createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },{
    path: '/about',
    element: <About/>
  },{
    path: '/search',
    element:<Search/>
  }
 ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
