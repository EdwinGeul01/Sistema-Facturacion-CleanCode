import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {useState, ChangeEvent} from 'react'
import Alert from '@mui/material/Alert';

import { ProducstData } from "../../Logics/DataManage";



export default function FormAddProduct(props:{setSuccess:any}) {

  let Data = ProducstData.chargeData();
  let {setSuccess} = props;


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

    let newProduct = 
      {
        "ID":id,
        "nombreProducto":ValuesForm.ProductName,
        "PrecioProducto":ValuesForm.ProduyctPrice,
        "CantidadDisponible":ValuesForm.ProductQuantity
      }
    
    ProducstData.AddProduct(newProduct);

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

                    <form method="POST" onSubmit={(e)=>AddNewProduct(e)} className="px-10 py-5 text-slate-400 font-semibold w-full">
                        <p>Nombre del producto</p>
                        <input type="text" placeholder="Nombre del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProductName" value={ValuesForm.ProductName} onChange={(e)=>{HandleChanges(e)} }/>
                        <p>Cantidad del producto</p>
                        <input type="number" placeholder="Cantidad del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProductQuantity" value={ValuesForm.ProductQuantity} onChange={(e)=>{HandleChanges(e)}}  />
                        <p>Precio del Producto ( Lempiras )</p>
                        <input type="number" placeholder="Precio del producto" className="border p-2 w-full outline-none mt-2 text-black font-normal mb-3" name="ProduyctPrice" value={ValuesForm.ProduyctPrice} onChange={(e)=>{HandleChanges(e)}}  />

                        <input type="submit" value="Añadir nuevo producto" className="border w-full p-2 mt-4 border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white duration-500" />
                    </form>
               
  );
}

