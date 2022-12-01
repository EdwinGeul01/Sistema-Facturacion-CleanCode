import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogOutButton from './Buttons/LogOutButton';
import HomeIcon from '@mui/icons-material/Home';

import { useNavigate } from 'react-router-dom';

export default function NavUser() {
  
  let RedirectToURL = useNavigate();
  
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
      
      <div>

      <button onClick={()=>{

        RedirectToURL('/home');

      }}>
        <HomeIcon className='text-slate-300 hover:text-slate-500 duration-300'
        sx={{
          padding:"3px",
          fontSize:40
        }} />
      </button>
      
      </div>
      
      </div>

      <LogOutButton />


    </div>
  )
}
