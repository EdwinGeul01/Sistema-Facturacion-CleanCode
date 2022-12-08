import React, { Component, useEffect } from "react";
import LogoProgram from "../resources/newlogo.png";
import { delay, motion } from "framer-motion";
import { useNavigate , Link as LinkReact} from "react-router-dom";


export default function EntryPage() {
  const RedirectURLTo = useNavigate();

  useEffect(() => {
    setTimeout(() => {
        RedirectURLTo("/login");
    }, 3000);
  }, []);

  return (
    <motion.div
      className="Entry-Page"

        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        exit={{opacity:0}}
    >
      <motion.div
        initial={{
          x: "-150vh",
        }}
        animate={{
          x: "0vh",
          rotate: 360,
        }}
        transition={{
          repeat: 0,
          duration: 2,
        }}
      >
        <img src={LogoProgram} width="150" />
      </motion.div>

      <motion.div
        className="font-retro flex flex-col justify-center items-center"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1,
          duration: 1,
        }}
      >
        <p className="mt-4">Proyecto Ing. Software ii</p>
        <p>Edwin Geul</p>
        <LinkReact to={"/Login"}>CLick para iniciar</LinkReact>
      </motion.div>
    </motion.div>
  );
}
