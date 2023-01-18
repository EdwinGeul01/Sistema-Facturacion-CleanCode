import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { motion } from "framer-motion";
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {useNavigate} from "react-router-dom"
import {ChangeEvent} from 'react'
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse/Collapse";

import DataUsers from '../../resources/UserInformation.json'
import { r } from "vitest/dist/index-9f5bc072";



export default function LoginForm() {

    const redirectToURL = useNavigate();
    const [WrongAccess, setIsWrogAnswer] = useState<boolean>(false)
    
    const [RenderVariables, setnewValuesToRenderVariables] = useState(
      {
        user:"",
        pass:""
      }
    );

  function verifydata(user:string , pass:string) {
    for (const User of DataUsers) {
      if(User.user == user && User.pass == pass)
      {
        redirectToURL('/home');
      }
    }

    return true;
  }


  function TryLogin(e: React.SyntheticEvent)
  {
    let IsCorrectCredentials:boolean = verifydata(RenderVariables.user,RenderVariables.pass);
    setIsWrogAnswer(IsCorrectCredentials);



    
    setTimeout(() => {
      setIsWrogAnswer(false);
    }, 1500);

    e.preventDefault();

  }

  function handlerRenderVariablesChanges(event:ChangeEvent<HTMLInputElement>)
  {

      setnewValuesToRenderVariables(
        {
          ...RenderVariables,
          [event.target.name]:event.target.value
        }
      )

  }


  return (
    <div
      className="
                h-[500px]
                w-[90%] md:w-[50%] lg:w-[25%]
                bg-[#ffffff]
                rounded-md
                shadow-cyan-600
                shadow-lg "
    >
      <form onSubmit={TryLogin} method="post" 
      className="h-full"
      >

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
            placeholder="Usuario"
            name="user"
            value={RenderVariables.user}
            onChange={(e)=>{handlerRenderVariablesChanges(e)}}
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
            placeholder="Contraseña"
            value={RenderVariables.pass}
            name="pass"
            onChange={(e)=>{handlerRenderVariablesChanges(e)}}

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
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div className="absolute bottom-5 left-0">
            <Collapse in={WrongAccess}>
            <Alert severity="error" >Las credenciales Ingresadas son incorrectas  !</Alert>
            </Collapse>
      </div>


    </div>
  );
}
