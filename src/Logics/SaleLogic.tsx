import {SalesFunctions,IProduct,RenderVariables} from './Interfaces/SalesInterfaces'
import ProductListCard from '../components/Cards/ProductListCard';
import Data from "../resources/product_List.json";



import React from 'react'



class SalesLogic  implements SalesFunctions  {
  
  products:any;
  setproducs:any;
  ShowProductList:any; 
  setShowProductList:any;
  ProducSelectedtValue: any; 
  setProducSelectedtValue: any;
  TotalPay:number;
  setTotalPay:any;
  


  constructor({ProducSelectedtValue,ShowProductList,TotalPay,products,setProducSelectedtValue,setShowProductList,setTotalPay,setproducs}:RenderVariables) {
      this.products = products;
      this.setproducs = setproducs;
      this.ShowProductList= ShowProductList;
      this.setShowProductList = setShowProductList;
      this.ProducSelectedtValue=ProducSelectedtValue;
      this.setProducSelectedtValue= setProducSelectedtValue;
      this.TotalPay = TotalPay;
      this.setTotalPay = setTotalPay;
  }




  CalculateTotalToPay = (
  ) => {
    let total: number = 0;
    this.products.map((product: IProduct) => {
      total += product.Price * product.Quantity;
    });

    this.setTotalPay(total);
    return total;

  };


  UpdateDisplayedProducts = (
    setShowProductList: React.Dispatch<React.SetStateAction<any>>
  ) =>{

    setShowProductList(() =>
    this.products.map((p: IProduct, index: number) => {
        return (
            <ProductListCard  key={index} product={p} />

        );
      })
    );
  }

  
  AddProductToList = (event: any) =>{
    console.log("asdasd");

    if (this.ProducSelectedtValue.name != "") {
      this.products.push(this.ProducSelectedtValue);
      console.log(this.products);
      this.UpdateDisplayedProducts(this.setShowProductList);
      this.CalculateTotalToPay();
    }


  }

  ChargeProductData = (productName: string)=>{
    
    let DataJSON = null;
    for (let index = 0; index < Data.length; index++) {
      if(Data[index] != undefined)
      {
        if (Data[index].nombreProducto == productName) {
          DataJSON = Data[index];
          break;
        }
      }
    }
    return DataJSON;


  }
}

export { SalesLogic };
