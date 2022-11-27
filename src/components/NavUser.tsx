import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export default function NavUser() {
  return (
    <div className='h-[8vh] bg-white w-[100vw] flex justify-center items-center '>

      <div className='w-[80%] flex flex-row items-center'>
      <AccountCircleIcon
      sx={{
        width:30,
        height:30
      }}
      className='text-red-400'/>
      <span
      className='text-slate-500 mx-5'>USUARIO</span>
      </div>
      
      <button className='border h-[70%] border-red-300 text-red-400  rounded-md px-5
                         hover:bg-red-400 hover:text-white duration-300'>
        Cerrar Sesion
        <ExitToAppIcon
         className='ml-3'/>
      </button>


    </div>
  )
}
