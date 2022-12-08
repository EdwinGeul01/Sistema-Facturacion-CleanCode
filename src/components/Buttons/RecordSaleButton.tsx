import React from "react";
import SalesData from "../../resources/Sales_record.json";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../Logics/Interfaces/SalesInterfaces";
import { ProducstData } from "../../Logics/DataManage";

export default function RecordSaleButton(props: {
  totalSale: number;
  products:IProduct[];
  SetProducts: React.Dispatch<React.SetStateAction<any>>;
}) {

const RedirectToURL = useNavigate();


  


  function SaveSaleData() {
    let Today = new Date();
    let now = Today.toLocaleDateString('la');
    let IsDataEnteredCorrect:boolean = true;

    for (const product of props.products) {
       IsDataEnteredCorrect = ProducstData.VerifyIsCorrectQuantity(product);
       
       if(!IsDataEnteredCorrect)
       {
        break;
       }
    }
  

    if(!IsDataEnteredCorrect)
    {
       ProducstData.RestartDataCopy();
       RedirectToURL('failed');
       return;
    }




    for (const product of props.products) {
      ProducstData.ReduceQuantityProduct(product);
    }


    SalesData.push({
      VentaID: SalesData.length,
      Total: props.totalSale,
      Date:now
    });
    props.SetProducts(new Array());
    RedirectToURL('success');
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
