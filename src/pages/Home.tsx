import React from 'react'
import AdminMenuOptions from '../components/MenuOptionsCard';
import NavUser from '../components/NavUser';



function Home() {
  return (
    <>
    <NavUser/>
    <div className='h-[95vh]
    flex
    justify-center
    items-center 
    space-x-40'>
      
      <AdminMenuOptions/>        


    </div>
    </>
  )



}





export {Home};