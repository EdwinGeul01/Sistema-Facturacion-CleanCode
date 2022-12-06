
import React from 'react'
import { Route , Routes } from 'react-router-dom'
import ModalListDeleteProducts from '../Modals/ModalListDeleteProducts'
import ModalListUpdateProducts from '../Modals/ModalListUpdateProducts'
import ModalAdd from '../Modals/ModalAdd'


export default function MenuButtonsRoutes() {
  return (

    
    <Routes location={location}>

    <Route path='add' element={ <ModalAdd/> } />
    <Route path='update' element={ <ModalListUpdateProducts />  } />
    <Route path='delete' element={ <ModalListDeleteProducts />  } />


    </Routes>


  )
}
