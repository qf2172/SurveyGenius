import React from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import { Button } from 'antd'

function App() {
  return <RouterProvider router={routerConfig}></RouterProvider>
}

export default App
