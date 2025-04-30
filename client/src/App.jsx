import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Split from './pages/Split'
import Exercises from './pages/Exercises'
import Chest from './pages/subpages/Chest'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/split" element={<Split />} />
        <Route path="/workouts" element={<Exercises />} />
        <Route path="/workouts/chest" element={<Chest />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
