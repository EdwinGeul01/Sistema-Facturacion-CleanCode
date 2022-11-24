import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {useNavigate} from "react-router-dom"





export default function LoginForm() {

    const redirectToURL = useNavigate();
    const [isLoading, setchar] = useState<boolean>(false)


  function verifydata(e: React.SyntheticEvent) {
    setchar(!isLoading);
    console.log(isLoading);
    redirectToURL('/home');
    e.preventDefault();
  }

  return (
    <div
      className="
                h-[50%]
                w-[90%] md:w-[50%] lg:w-[25%]
                bg-[#ffffff]
                rounded-md
                shadow-cyan-600
                shadow-lg "
    >
      <form onSubmit={verifydata} method="post" 
      className={(isLoading)?"hidden":"h-full"}
      >
        <div className={
            (isLoading)? "bg-red-50 h-[100px] w-[100px]": ""}>

        </div>
        <div
          className="flex flex-col
                        h-full 
                        items-center justify-center "
        >
          <PersonIcon
            className="
            bg-gray-600"
            sx={{
              height: "20%",
              width: "20%",
              marginBottom: 5,
            }}
          />

          <input
            type="text"
            className="
            rounded-md
            h-10
            w-[70%]
            border-b-2
            outline-none
            px-4
            text-slate-700"
            placeholder="Username"
          />
          <input
            type="password"
            className="
            rounded-md
            h-10
            w-[70%]
            mt-5
            px-4
            border-b-2
            outline-none
            text-slate-700"
            placeholder="Password"
          />

          <button
            className="
            border
            text-slate-700
            p-3
            px-[10%]
            rounded-md
            mt-8
            hover:bg-blue-300
            hover:text-white
            duration-300"
          >
            Login
          </button>
        </div>
      </form>

      <div
          className={(isLoading)?
            "text-slate-500 h-full flex flex-col justify-center items-center"
            :"hidden"}
      >
        
        <motion.div
        
        animate={{
            rotate:360
        }}
        transition={{
            duration:2,
            delay:0,
            repeat:Infinity
        }}
        >
             <AutorenewIcon
            sx={
                {
                    width:150,
                    height:150
                }
            }
            />
        </motion.div>
       
        Cargando ...
        </div>      

    </div>
  );
}
