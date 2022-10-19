import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Events from './components/Events';
import Albums from './components/Albums';


const Router = () =>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/events' element={<Events />} />
        <Route path='/albums' element={<Albums />} />
    </Routes>



export default Router