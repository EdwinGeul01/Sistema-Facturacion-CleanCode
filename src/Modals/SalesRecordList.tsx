
import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useNavigate } from 'react-router-dom';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import SalesData from "../resources/Sales_record.json";
import { useState } from 'react';
import { useEffect } from 'react';
import ManageConnections from '../Connections/ManageConnections';





export default function SalesRecordList() {

    let RedirectToURL = useNavigate();
    const [SalesDataShow, setSalesDataShow] = useState([]);
    
    useEffect(() => {
        const execute = async ()=>{
            
            const response = await ManageConnections.getsellHistory();

            const data = await response.map((d,index)=>{
                return(

                    <div className=' bg-slate-400 text-white justify-around flex w-full sticky top-0 mt-1' key={index}>
                    <div className='w-[33%] flex justify-center'>
                        <p>{d.id}</p>
                    </div>
                    <div className='w-[33%] flex justify-center'>
                        <p>{d.fecha}</p>
                    </div>
                    <div className='w-[33%] flex justify-center'>
                        <p>{d.total}</p>
                    </div>
                    </div>

                )

            });


            setSalesDataShow([...SalesDataShow , data]);



        }

        execute();

    }, [])
    
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
