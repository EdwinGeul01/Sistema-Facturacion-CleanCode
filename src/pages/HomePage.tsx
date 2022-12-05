import React from "react";
import AdminMenuOptionsButtons from "../components/Buttons/MenuOptionsButtons";
import NavUser from "../components/NavUser";
import { motion } from "framer-motion";
import {  Routes, Route } from "react-router-dom";

import SalePage from "./SalePage";

function HomePage() {
  return (
    <>
      <motion.div>
        <NavUser />
        <div
          className="h-[92vh]
      flex
      justify-center
      items-center 
      space-x-40
      "
        >
          <Routes location={location}>
            <Route path="/*" element={<AdminMenuOptionsButtons />} />
            <Route path="sale/*" element={<SalePage />} />
          </Routes>
        </div>
      </motion.div>
    </>
  );
}

export { HomePage };
