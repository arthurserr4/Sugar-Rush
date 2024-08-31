import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { DataProvider } from './context/CupcakeContext.jsx'
import Cart from './Cart.jsx'
import { SelectedProvider } from './context/SelectedContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/cart',
    element: <Cart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <SelectedProvider>
    <RouterProvider router={router}/>
      </SelectedProvider>
    </DataProvider>
  </React.StrictMode>,
)