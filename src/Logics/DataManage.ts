import Data from '../resources/product_List.json'
import { IDataJson, IProduct } from './Interfaces/SalesInterfaces';


class ProducstData 
{


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

}






export{ProducstData}