
type SalesFunctions = {


    CalculateTotalToPay(
      setTotalPay: React.Dispatch<React.SetStateAction<number>>
    ): void;

    UpdateDisplayedProducts(
        setTotalPay: React.Dispatch<React.SetStateAction<number>>
    ):void;


    AddProductToList(event: any):void;

    ChargeProductData(productName: string): IDataJson | null ;


  };
  
  
interface IDataJson {
    ID: number;
    nombreProducto: string;
    PrecioProducto: number;
    CantidadDisponible: number;
  }

  
interface IProduct {
    name?: string;
    Quantity: number;
    Price: number;
    MaxQuantity?: number;
}


interface RenderVariables
{
  products:any;
  setproducs:any;
  ShowProductList:any; 
  setShowProductList:any;
  ProducSelectedtValue: any; 
  setProducSelectedtValue: any;
  TotalPay:number;
  setTotalPay:any;
};


  

export type {SalesFunctions,IProduct,IDataJson,RenderVariables};