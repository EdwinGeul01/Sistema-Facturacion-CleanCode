import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import {useState, ChangeEvent} from 'react'
import Data from '../resources/product_List.json'
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse/Collapse";
import CarritoBackground from '../resources/background_Carrito.png'

export default function FormAddProduct( ) {

  let RedirectToURL = useNavigate();


  const [Success, setSuccess] = useState(false)
  const [Error, setError] = useState(false)



  const [ValuesForm, setValuesForm] = useState(
    {
      ProductName:"",
      ProductQuantity:0, 
      ProduyctPrice:0
    }
  )


  function AddNewProduct(event:React.FormEvent<HTMLFormElement>)
  {
     let id = Data.length +1;

    Data.push(
      {
        "ID":id,
        "nombreProducto":ValuesForm.ProductName,
        "PrecioProducto":ValuesForm.ProduyctPrice,
        "CantidadDisponible":ValuesForm.ProductQuantity
      }
    )

    setSuccess(true);
      event.preventDefault();

      setTimeout(()=>{

        setSuccess(false);

      },1500);
  }



  const HandleChanges =(event:ChangeEvent<HTMLInputElement>)=>
  {
    setValuesForm({...ValuesForm,[event.target.name] : event.target.value})
    console.log(event);

  }


  return (
      <Modal
      open={true}
      >
        <Box className="h-[100%] flex  justify-center items-center ">
            <div className="w-[80%] h-min-[80%] h-auto bg-white">

              <div className="w-full flex">
                <button className="ml-auto" onClick={()=>{RedirectToURL(-1);}}  > 
                  <DisabledByDefaultIcon
                  className="text-gray-300 hover:text-gray-400 duration-200"
                  sx={{width:30 , height:30}}/>
                </button>
              </div>

              
              <div className=" h-[40%] w-[100%] bg-slate-100 flex justify-center ">
                  <img src={CarritoBackground} className="w-[40%] h-full" />
              </div>
                <div>
                    <form method="POST" onSubmit={(e)=>AddNewProduct(e)} className="px-10 py-5 text-slate-400 font-semibold w-full">
                        <p>Nombre del producto</p>
                        <input type="text" placeholder="Nombre del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProductName" value={ValuesForm.ProductName} onChange={(e)=>{HandleChanges(e)} }/>
                        <p>Cantidad del producto</p>
                        <input type="number" placeholder="Cantidad del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProductQuantity" value={ValuesForm.ProductQuantity} onChange={(e)=>{HandleChanges(e)}}  />
                        <p>Precio del Producto ( Lempiras )</p>
                        <input type="number" placeholder="Precio del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProduyctPrice" value={ValuesForm.ProduyctPrice} onChange={(e)=>{HandleChanges(e)}}  />

                        <input type="submit" value="Añadir nuevo producto" className="border w-full p-2 mt-4 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white duration-500" />
                    </form>
                </div>

            </div>


            <div className="absolute bottom-5 right-0">
            <Collapse in={Success}>
            <Alert severity="success" >Producto Agregado exitosamente !</Alert>
            </Collapse>
            <Collapse in={Error}>
            <Alert severity="error">Hubo un problema al Agregar el producto !</Alert>
            </Collapse>
            </div>

        </Box>
      </Modal>
  );
}

