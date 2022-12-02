import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import AnimateRoutes from './Routes/Routes';

function App() {

  return (
    <BrowserRouter>
        <AnimateRoutes/>  
    </BrowserRouter>
  )
}

export default App
