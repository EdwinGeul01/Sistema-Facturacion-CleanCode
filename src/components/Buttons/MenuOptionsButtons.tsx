import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import FormAddProduct from "../../Modals/FormAddProduct";
import ModalListUpdateProducts from "../../Modals/FormListUpdateProducts";
import { useState } from "react";
import Data from "../../resources/product_List.json";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Route,Routes } from "react-router-dom";





export default function AdminMenuOptionsButtons() {
  

  const location = useLocation();
  const redirectToUrl = useNavigate();


  return (
    <div 
    className="w-full h-full flex justify-around items-center
              flex-col sm:flex-row"

    >
    

      <button
        className="btn-menu"
        onClick={() => {
            redirectToUrl('sale');
        }}
      >
        <ShoppingBagIcon
          className="text-slate-600"
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <p className="font-medium text-slate-400">Registrar Venta</p>
      </button>

      <button
        className="btn-menu"
        onClick={() => {
          redirectToUrl('add');
        }}
      >
        <ShoppingCartIcon
          className="text-slate-600"
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <p className="font-medium text-slate-400">Agregar Producto</p>
      </button>

      <button
        className="btn-menu"
        onClick={() => {
          redirectToUrl('update');
        }}
      >
        <SystemUpdateAltIcon
          className="text-slate-600"
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <p className="font-medium text-slate-400">Actualizar Productos</p>
      </button>

      <button
        className="btn-menu"
        onClick={() => {
          Data[0].CantidadDisponible = 200000;
        }}
      >
        <DeleteIcon
          className="text-slate-600"
          sx={{
            width: "100px",
            height: "100px",
          }}
        />
        <p className="font-medium text-slate-400">Eliminar Productos</p>
      </button>







      <Routes location={location}>

      <Route path='add' element={ <FormAddProduct/> } />
      <Route path='update' element={ <ModalListUpdateProducts />  } />

      </Routes>


      

    </div>
  );
}