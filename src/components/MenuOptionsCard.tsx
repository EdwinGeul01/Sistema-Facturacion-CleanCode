import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalExample from '../Modals/modalexample';
import { useState } from 'react';
import NavUser from './NavUser';


export default function AdminMenuOptions() {

  const [show, onclose] = useState<boolean>(false)
  

  return (
    <>

        <button className='btn-menu'
        onClick={()=>{onclose(true)}}
        >
            <ShoppingCartIcon
            className='text-slate-600'
            sx={{
              width:'100px',
              height:'100px',
            }}
            />
          <p className='font-medium text-slate-400'>Agregar Producto</p>
        </button>

        <button className='btn-menu'>
            <SystemUpdateAltIcon
            className='text-slate-600'
            sx={{
              width:'100px',
              height:'100px',
            }}
            />
          <p className='font-medium text-slate-400'>Actualizar Productos</p>
        </button>
        
        <button className='btn-menu'>
            <DeleteIcon
            className='text-slate-600'
            sx={{
              width:'100px',
              height:'100px',
            }}
            />
          <p className='font-medium text-slate-400'>Eliminar Productos</p>
        </button>


      <ModalExample show={show} onclose={()=>{onclose(false)}}/>

    </>
    )
}
