import Data from '../resources/product_List.json'
import { IDataJson, IProduct } from './Interfaces/SalesInterfaces';


class ProducstData 
{
    static DataCopy:IDataJson[] = structuredClone(Data);

    constructor()
    {

    }

    static chargeData()
    {

        return Data;

        
    }


    static AddProduct(product:IDataJson)
    {

        Data.push(product);

    }


    static UpdateValues(product:IDataJson,price:number,Quantity:number)
    {

        product.PrecioProducto = price;
        product.CantidadDisponible = Quantity;
        
    }

    
    static DeleteValues(productIndexToDelete:number)
    {

        Data.splice(productIndexToDelete,1);

        
    }

    static ReduceQuantityProduct(product:IProduct)
    {
        for (const ProductData of Data) {
            
            if(ProductData.nombreProducto == product.name)
            {
                ProductData.CantidadDisponible -= product.Quantity;
            }
        }

    }


    static VerifyIsCorrectQuantity(product:IProduct)
    {


        for (const ProductData of this.DataCopy) {
            
            if(ProductData.nombreProducto == product.name)
            {

                let MaxQuantityExceeded = ProductData.CantidadDisponible < product.Quantity;
                if(MaxQuantityExceeded)
                {
                    return false;
                }else
                {
                    ProductData.CantidadDisponible -= product.Quantity;
                }
            }
        }

        return true;


    }

    static RestartDataCopy()
    {
        this.DataCopy = structuredClone(Data);
    }


}






export{ProducstData}