import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Alert from "@mui/material/Alert";
import Collapse from "@mui/material/Collapse/Collapse";

import DeleteBackground from "../resources/Product_Delete.png";
import { useNavigate } from "react-router-dom";
import DeleteCard from "../components/Cards/DeleteCard";
import { ProducstData } from "../Logics/DataManage";
import ManageConnections from "../Connections/ManageConnections";


export default function ModalListDeleteProducts() {

  let products = ProducstData.chargeData();
  interface IProduct {
    ID: number;
    nombreProducto: string;
    PrecioProducto: number;
    CantidadDisponible: number;
  }

  const RedirectToUrl = useNavigate();

  const [Success, setSuccess] = useState(false);


  let productsdb:any = [];
  const [Productlist, setProductlist] = useState([]);



function DeleteProduct(productToDelete:any) 
{
  const execute =  async () => {
   await ManageConnections.deleteproduct(productToDelete.id);
    productsdb =  await ManageConnections.getproduct();
    const datalist = await productsdb.map((product)=>
    {
      return(
        <DeleteCard key={product.id} product={product} DeleteProduct={DeleteProduct} setSuccess={setSuccess} />
      )
    })

    console.log("en el datalist existe : " ,  datalist);
    
    
    setProductlist(datalist);
  };
  execute();

};




useEffect(() => {

  const execute =  async () => {
    productsdb = await ManageConnections.getproduct()
    setdataList();
};

execute();

}, []);

 function setdataList()
{
    const datalist =  productsdb.map((product)=>
    {
      return(
        <DeleteCard key={product.id} product={product} DeleteProduct={DeleteProduct} setSuccess={setSuccess} />
      )
    })

    setProductlist(datalist);
    console.log("en el datalist existe : " ,  datalist);
}


  return (
    <>
      <Modal
        open={true}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="h-[100vh] flex justify-center items-center">
          <div className="w-[90%] h-[80%] bg-white overflow-auto ">
            <div className="w-full flex sticky top-0">
              <button
                className="ml-auto"
                onClick={() => {
                  RedirectToUrl(-1);
                }}
              >
                <DisabledByDefaultIcon
                  className="text-gray-300 hover:text-gray-400 duration-200"
                  sx={{ width: 30, height: 30 }}
                />
              </button>
            </div>

            <div className=" h-[40%] w-[100%] bg-red-50 flex justify-center ">
              <img src={DeleteBackground} className="w-[40%] h-full" />
            </div>
            <div className=" text-white py-5 flex flex-wrap justify-between mt-0  ">
              <div className="justify-between flex bg-slate-400 px-4 w-full [&>p]:w-[25%] [&>p]:text-center">
                <p>Nombre del producto</p>
                <p> Precio del producto</p>
                <p>Cantidad del producto</p>
                <p>Opciones del producto</p>
              </div>

              <div className=" w-full  ">{Productlist}</div>
            </div>

            <div className="absolute bottom-5 right-0">
              <Collapse in={Success}>
                <Alert severity="success">
                  Actualizacion realizada exitosamente !
                </Alert>
              </Collapse>
            </div>


            
          </div>
        </Box>
      </Modal>
    </>
  );
}
