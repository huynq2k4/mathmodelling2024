import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/HomePage.tsx'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs.tsx'
import './main.css'
import Blog from './pages/Blog.tsx'
import Event from './pages/Events.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<AboutUs />}/>
        <Route path='/blog' element={<Blog />}/>
        <Route path='/events' element={<Event />}/>
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
