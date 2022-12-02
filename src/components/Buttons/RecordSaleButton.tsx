import React from "react";
import SalesData from "../../resources/Sales_record.json";
import { useNavigate } from "react-router-dom";

export default function RecordSaleButton(props: {
  totalSale: number;
  setproducts_: any;
}) {

const RedirectToURL = useNavigate();



  function SaveSaleData() {
    let Today = new Date();

    let now = Today.toLocaleDateString('la');


    SalesData.push({
      VentaID: SalesData.length,
      Total: props.totalSale,
      Date:now
    });
    props.setproducts_(new Array());
    RedirectToURL('succes');
    console.log(SalesData);
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
