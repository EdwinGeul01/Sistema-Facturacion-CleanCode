import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState,useEffect } from "react";
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Alert from '@mui/material/Alert';
import Collapse from "@mui/material/Collapse/Collapse";


import UpdateBackground from "../resources/Product_Update.png"; 
import { useNavigate } from "react-router-dom";



import { IProductUpdate } from "../Logics/Interfaces/IproductUpdate";

import UpdateCard from "../components/Cards/UpdateCard";
import { ProducstData } from "../Logics/DataManage";
import ManageConnections from "../Connections/ManageConnections";


export default function ModalListUpdateProducts() {
    

    const RedirectToUrl  = useNavigate(); 
    const [Success, setSuccess] = useState(false);
    let productsdb:any = [];
    const [Productlist, setProductlist] = useState();

    

     useEffect(() => {


       const execute =  async () => {
            productsdb = await  ManageConnections.getproduct()
            console.log(productsdb);
            setdataList();
        };
        
        execute();


    }, []);
    
    async function setdataList()
        {
            const datalist =  await productsdb.map((product)=>
            {
                    return(
                            <UpdateCard UpdateValues={UpdateValues} product={product} setSucces={setSuccess} key={product.id} />
                    )
            })
            setProductlist(datalist);
        }

    function UpdateValues(productToUpdate:any)
    {
        console.log(productToUpdate);
        ManageConnections.modifyproduct(productToUpdate.id,productToUpdate.cantidad,productToUpdate.precio);

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
                <button className="ml-auto" onClick={()=>{ RedirectToUrl(-1); }} >
                  <DisabledByDefaultIcon
                  className="text-gray-300 hover:text-gray-400 duration-200"
                  sx={{width:30 , height:30}}/>
                </button>
                </div>
                              
              <div className=" h-[40%] w-[100%] bg-yellow-50 flex justify-center ">
                  <img src={UpdateBackground} className="w-[40%] h-full" />
              </div>
                    <div  className=" text-white  py-5 flex flex-wrap justify-between  mt-0 ">

                        <div className="justify-between flex bg-slate-400 px-4 w-full">
                            <p className="w-[25%] text-center">Nombre del producto</p>
                            <p className="w-[25%] text-center"> Precio del producto</p>
                            <p className="w-[25%] text-center">Cantidad del producto</p>
                            <p className="w-[25%] text-center">Opciones del producto</p>
                        </div>

                        <div className=" w-full  ">
                        {Productlist}
                        </div>


                    </div>
    


            <div className="absolute bottom-5 right-0">
            <Collapse in={Success}>
            <Alert severity="success" >Actualizacion realizada exitosamente !</Alert>
            </Collapse>
            </div>


                </div>
        </Box>

    </Modal>





    </>


    )
}
