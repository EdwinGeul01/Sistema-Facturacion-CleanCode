import React from 'react'
import AdminMenuOptions from '../components/MenuOptionsCard';
import NavUser from '../components/NavUser';
import {motion} from 'framer-motion';
import { BrowserRouter, Routes,Route, useLocation } from 'react-router-dom';
import AddProductPage from './AddProductPage';

import SalePage from './SalePage';



function HomePage() {

const Location = useLocation();



  return (
    <>
    <motion.div
   

>

      <NavUser/>
      <div className='h-[92vh]
      flex
      justify-center
      items-center 
      space-x-40
      '>
      


      <Routes location={location}>

        <Route path='/*' element={<AdminMenuOptions/>}/>
        <Route path='sale' element={<SalePage/>}/>


      </Routes>          


      </div>
    </motion.div>
    </>
  )



}





export {HomePage};