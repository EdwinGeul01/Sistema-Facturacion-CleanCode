
import React from 'react'
import { Route , Routes } from 'react-router-dom'
import FormAddProduct from '../Modals/FormAddProduct'
import FormListDeleteProducts from '../Modals/FormListDeleteProducts'
import ModalListUpdateProducts from '../Modals/FormListUpdateProducts'



export default function MenuButtonsRoutes() {
  return (

    
    <Routes location={location}>

    <Route path='add' element={ <FormAddProduct/> } />
    <Route path='update' element={ <ModalListUpdateProducts />  } />
    <Route path='delete' element={ <FormListDeleteProducts />  } />


    </Routes>


  )
}
