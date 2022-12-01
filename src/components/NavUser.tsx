import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogOutButton from './Buttons/LogOutButton';

export default function NavUser() {
  return (
    <div className='h-[8vh] bg-white w-[100]  flex justify-center items-center '>

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
      
      <LogOutButton />


    </div>
  )
}
