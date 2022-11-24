import { AnimatePresence } from 'framer-motion'
import {BrowserRouter, Routes ,Route, useLocation} from 'react-router-dom';
import Login from '../pages/Login'
import EntryPage from '../pages/EntryPage'
import {Home} from '../pages/Home'
import React from 'react'

export default function AnimateRoutes() {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/'  element={<EntryPage />}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/home'  element={<Home/>}/>
        </Routes>
    </AnimatePresence>
  )
}
