import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Split from './pages/Split'
import Exercises from './pages/Exercises'
import Chest from './pages/subpages/Chest'
import Back from './pages/subpages/Back'
import Shoulder from './pages/subpages/Shoulder'
import Legs from './pages/subpages/Legs'
import Arms from './pages/subpages/Arms'
import Abs from './pages/subpages/Abs'
import Cardio from './pages/subpages/Cardio'


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/split" element={<Split />} />
        <Route path="/workouts" element={<Exercises />} />
        <Route path="/workouts/chest" element={<Chest />} />
        <Route path="/workouts/back" element={<Back />} />
        <Route path="/workouts/shoulder" element={<Shoulder />} />
        <Route path="/workouts/legs" element={<Legs />} />
        <Route path="/workouts/arms" element={<Arms />} />
        <Route path="/workouts/abs" element={<Abs />} />
        <Route path="/workouts/cardio" element={<Cardio />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
