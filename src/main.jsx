import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Errorpage from './pages/Errorpage';
import YourCart from './pages/Home/YourCart';
import Home from './pages/Home/Home';
import AuthProvider from './providers/AuthProvider';
import Contact from './pages/Contact';
import Registration from './users/Registration';
import Login from './users/Login';
import User from './users/User';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import TechBlog from './pages/TechBlog';
import AddProduct from './pages/AddProduct';
import Products from './pages/Products';
import UpdateProduct from './pages/UpdateProduct';
import ViewProduct from './pages/ViewProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch ('/brand.json')

      },
      {
        path:'/cart',
        element: <PrivateRoute><YourCart></YourCart></PrivateRoute>,
        loader: () => fetch('https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/cart')
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },
      {
        path: '/profile',
        element: <PrivateRoute><User></User></PrivateRoute>
      },
      {
        path: '/blog',
        element : <TechBlog></TechBlog>,
        loader: () => fetch('/blog.json')
      },
      {
        path: '/brand/:brand_name',
        element: <Products></Products>,
        loader: () => fetch('https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/product')
      },
      {
        path: 'addproduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: 'updateproduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/product/${params.id}`)
      },
      {
        path: 'viewproduct/:id',
        element: <PrivateRoute><ViewProduct></ViewProduct></PrivateRoute>,
        loader: ({params}) => fetch(`https://a-tech-server-lb6gxqnp0-arifur-rahmans-projects.vercel.app/product/${params.id}`)
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
