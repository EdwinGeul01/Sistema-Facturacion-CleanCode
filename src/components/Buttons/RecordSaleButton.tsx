import React from "react";
import SalesData from "../../resources/Sales_record.json";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../Logics/Interfaces/SalesInterfaces";
import { ProducstData } from "../../Logics/DataManage";
import ManageConnections from "../../Connections/ManageConnections";

export default function RecordSaleButton(props: {
  total:any,
  reducefunct:any
}) {

const RedirectToURL = useNavigate();

  function SaveSaleData() {
    const execute = async ()=>{

      const response = await ManageConnections.AddToSellHistory(props.total);

      RedirectToURL('success');

    }

    execute();
    props.reducefunct();
  }



  return (
    <div className="h-[10%]   flex flex-col">
      <button
        className="w-full h-full text-white bg-blue-300 hover:bg-blue-400"
        onClick={() => {
          SaveSaleData();
        }}
      >
        Registrar Venta
      </button>
  
  
      
  
  
  
  
    </div>
  );


}
