import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from './pages'
import { ErrorElement } from './components';

import {loader as loading} from'./pages/Landing'
import {loader as SingleProductLoading} from'./pages/SingleProduct'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader:loading,
        errorElement: ErrorElement,
      },
      {
        path: 'products',
        element:<Products/>
      },
      {
        path: 'checkout',
        element:<Checkout/>
      },
      {
        path: 'cart',
        element:<Cart/>
      },
      {
        path: 'orders',
        element:<Orders/>
      },
      {
        path: 'products:/id',
        element: <SingleProduct />,
        loader: SingleProductLoading,
        errorElement:ErrorElement,
      },
      {
        path: 'about',
        element:<About/>
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement:<Error/>
  },
  {
    path: '/register',
    element: <Register />,
    errorElement:<Error/>
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
