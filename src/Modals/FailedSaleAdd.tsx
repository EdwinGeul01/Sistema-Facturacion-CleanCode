import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';

export default function FailedSaleAdd() {
const RedirectToURL = useNavigate();
  
  
    return (
    <Modal 
    open={true}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    >
        <Box className="h-[100vh] flex justify-center items-center">
            
                <div className="w-[30%] min-h-[200px] bg-red-400 overflow-auto ">
                <div className="w-full flex sticky top-0">
                <button className="ml-auto" onClick={()=>{ RedirectToURL(-1); }} >
                  <DisabledByDefaultIcon
                  className="text-red-300 hover:text-red-400 duration-200"
                  sx={{width:30 , height:30}}/>
                </button>
                </div>

                <div className='w-full h-[80%] flex flex-col justify-center text-center items-center'>

                    <h1 className='text-3xl text-white'>
                            Error en la Cantidad especificada en las compras
                    </h1>
                    <button className="border border-white text-white rounded-md px-[15%] p-3 mt-4" onClick={()=>{ RedirectToURL(-1); }} >
                        Ok
                    </button>
                </div>

                </div>
        </Box>



    </Modal>

    )
}
