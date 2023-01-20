
import React from 'react'
import LoginForm from '../components/Forms/LoginForm'
import { motion } from 'framer-motion'

export default function Login() {










  return (
    <motion.div 
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{delay:0.8}}
    exit={{opacity:0}}
    className='flex text-white h-[100vh] justify-center items-center'>

        <LoginForm/>



    </motion.div>
  )
}
