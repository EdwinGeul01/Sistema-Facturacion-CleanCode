import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";
import Data from '../resources/product_List.json'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import {ChangeEvent} from 'react'
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse/Collapse";
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';


import UpdateBackground from "../resources/Product_Update.png"; 
import { useNavigate } from "react-router-dom";


export default function ModalListUpdateProducts() {
    

    const RedirectToUrl  = useNavigate(); 

    const [Success, setSuccess] = useState(false)
    const [Error, setError] = useState(false)


    const ListOfProducts = Data.map((i)=>
    {

    const [ProducToUpdate, setProductToUpdate] = useState(i);

    const HandleChanges =(event:ChangeEvent<HTMLInputElement>)=>
    {
    setProductToUpdate({...ProducToUpdate,
        [event.target.name] : event.target.value})
    }


    const UpdateProduct = () =>{

        
        setSuccess(true);
        

        setTimeout(()=>{
            setSuccess(false);
        },1500);


    }

    return(
        <tr  key={ProducToUpdate.ID} className="DivItemNotSelect w-full">
           <td>
            <p>{ProducToUpdate.nombreProducto}</p>
           </td>
           <td>
            <input type="number" value={ProducToUpdate.PrecioProducto} className=" text-center bg-transparent border-b outline-none" name="PrecioProducto" onChange={(e)=>{HandleChanges(e)}}/>
           </td>
           <td>
           <input type="number"  value={ProducToUpdate.CantidadDisponible} className=" text-center bg-transparent border-b outline-none" name="CantidadDisponible" onChange={(e)=>{HandleChanges(e)}}/>
           </td>
           <td>
            <button className="border border-yellow-400 text-yellow-400 p-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white duration-500" onClick={()=>{UpdateProduct()}}>Editar Producto</button>
           </td>


        </tr>
    
    )

    })
  
    return (
        <>
    <Modal 
    open={true}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    >
        <Box className="h-[100vh] flex justify-center items-center">
            
                <div className="w-[90%] h-[80%] bg-white overflow-auto ">
                <div className="w-full flex">
                <button className="ml-auto" onClick={()=>{ RedirectToUrl(-1); }} >
                  <DisabledByDefaultIcon
                  className="text-gray-300 hover:text-gray-400 duration-200"
                  sx={{width:30 , height:30}}/>
                </button>
                </div>
                              
              <div className=" h-[40%] w-[100%] bg-yellow-50 flex justify-center ">
                  <img src={UpdateBackground} className="w-[40%] h-full" />
              </div>
                    <table  className=" text-white mt-1 py-5 px-4 flex flex-wrap justify-between  mt-0 ">

                        <thead className=" w-full  ">
                        <tr className="justify-between flex bg-slate-400 px-4">
                            <th>Nombre del producto</th>
                            <th> Precio del producto</th>
                            <th>Cantidad del producto</th>
                            <th>Opciones del producto</th>
                        </tr>

                        </thead>
                        <tbody className=" w-full  px-4">
                        {ListOfProducts}
                        </tbody>


                    </table>
    



            <div className="absolute bottom-5 right-0">
            <Collapse in={Success}>
            <Alert severity="success" >Actualizacion realizada exitosamente !</Alert>
            </Collapse>
            <Collapse in={Error}>
            <Alert severity="error">Hubo un problema al actualizar los datos !</Alert>
            </Collapse>
            </div>


                </div>
        </Box>



    </Modal>





    </>


    )
}
