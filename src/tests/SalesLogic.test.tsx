import  { SalesLogic } from '../Logics/SaleLogic';
import { render,screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import { HomePage } from '../pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import SalePage from '../pages/SalePage';
import SaleHooks from '../Logics/SaleHooks';
import { IDataJson, IProduct } from '../Logics/Interfaces/SalesInterfaces';
import Data from "../resources/product_List.json";

describe('SALES TEST', () => {

 let variableshooks = renderHook(()=>SaleHooks());

 const DataToProducts = Data.map((product)=>(
   {
      name : product.nombreProducto,
      Quantity: 10,
      Price :product.PrecioProducto,
      MaxQuantity: product.CantidadDisponible
   }
 ));

act(()=>{
     variableshooks.result.current.setproducs(DataToProducts);
})


 let SaleLogic:SalesLogic = new SalesLogic(variableshooks.result.current);




test("SalesLogic constructor Set variables " ,()=>
{
  
   expect(SaleLogic.ProducSelectedtValue).toBe(variableshooks.result.current.ProducSelectedtValue);
   expect(SaleLogic.ShowProductList).toBe(variableshooks.result.current.ShowProductList);
   expect(SaleLogic.TotalPay).toBe(SaleLogic.TotalPay);
   expect(SaleLogic.products).toBe(variableshooks.result.current.products);
   expect(SaleLogic.setProducSelectedtValue).toBe(variableshooks.result.current.setProducSelectedtValue);
   expect(SaleLogic.setShowProductList).toBe(variableshooks.result.current.setShowProductList);
   expect(SaleLogic.setTotalPay).toBe(variableshooks.result.current.setTotalPay);
   expect(SaleLogic.setproducs).toBe(variableshooks.result.current.setproducs);

})  







});


describe('SALES CALCULATETOTALTOPAY',()=>{

   let variableshooks = renderHook(()=>SaleHooks());

   const DataToProducts = Data.map((product)=>(
     {
        name : product.nombreProducto,
        Quantity: 10,
        Price :product.PrecioProducto,
        MaxQuantity: product.CantidadDisponible
     }
   ));
  
  act(()=>{
       variableshooks.result.current.setproducs(DataToProducts);
  })
  


   let SaleLogic:SalesLogic = new SalesLogic(variableshooks.result.current);



   let totaltopay = SaleLogic.CalculateTotalToPay();


   test("SalesLogic CalculateTotalToPay " ,  ()=>
   {  
         
      SaleLogic.CalculateTotalToPay();
      let products:IProduct[] = variableshooks.result.current.products;
      let total:number  = 0;
      products.forEach(product =>
         {
            total += product.Price * product.Quantity;
         }
      );
   
       expect(totaltopay).toBe(total);
      
   
   })  


})


