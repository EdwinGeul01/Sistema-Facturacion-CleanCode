
import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { NavigateFunction, useNavigate } from 'react-router-dom';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SalesData from "../resources/Sales_record.json";

interface ISalesRecordList
{
    RedirectToURL?   :   NavigateFunction;
    
}




export default function SalesRecordList(props:ISalesRecordList) {

    let {RedirectToURL} = props;
    RedirectToURL = useNavigate();
    
    let SalesDataShow = SalesData.map((sale:any, index:number)=>
    {
        if(index != 0)
        {
            return(
                <div className=' bg-slate-400 text-white justify-around flex w-full h-[4vh]  border-b-2'>
                <div className='w-[33%] flex justify-center items-center '>
                    <p>{sale.VentaID}</p>
                </div>
                <div className='w-[33%] flex justify-center items-center '>
                    <p> {sale.Date}</p>
                </div>
                <div className='w-[33%] flex justify-center items-center '>
                    <p>  {sale.Total} </p>
                </div>
            </div>
            )
        }



    })
  
    return (
    <Modal 
    open={true}
    aria-labelledby="parent-modal-title"
    aria-describedby="parent-modal-description"
    >
        <Box className="h-[100vh] flex justify-center items-center">
            
                <div className="w-[90%] h-[80%] bg-white overflow-auto ">
                <div className="w-full flex sticky top-0">
                <button className="ml-auto" onClick={()=>{ if(RedirectToURL != undefined){RedirectToURL(-1);} }} >
                  <DisabledByDefaultIcon
                  className="text-red-300 hover:text-red-400 duration-200"
                  sx={{width:30 , height:30}}/>
                </button>
                </div>
                        <div className=' bg-slate-700 text-white justify-around flex w-full sticky top-0'>
                            <div className='w-[33%] flex justify-center'>
                                <p>Id de la Venta</p>
                            </div>
                            <div className='w-[33%] flex justify-center'>
                                <p>Fecha de la Venta</p>
                            </div>
                            <div className='w-[33%] flex justify-center'>
                                <p>Total </p>
                            </div>
                        </div>
                        <div>
                            {SalesDataShow}
                        </div>

                </div>
        </Box>



    </Modal>

    )
}
