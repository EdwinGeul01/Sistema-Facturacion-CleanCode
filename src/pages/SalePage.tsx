
import {Component }from 'react'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { useState, ChangeEvent } from 'react';
import Data from '../resources/product_List.json'






export default function SalePage()  {

interface IProduct
{
    name        ?       :string;
    Quantity    ?       :number;
    Price       ?       :number;
    MaxQuantity ?       :number;    
    
    // foo: (bar: string): void;
    // foo(param: string): void {
    // }
    
}

interface IDataJson
{
    ID                      :number;
    nombreProducto          :string;
    PrecioProducto          :number;
    CantidadDisponible      :number;

}

// let products:Array<IProduct | any> = new Array();

const [products, setproducs] = useState<IProduct | any>(new Array());
const [ShowProductList, setShowProductList] = useState(new Array());


const [ProducSelectedtValue, setProducSelectedtValue] = useState(
{   
    name:"",
    Quantity:1,
    MaxQuantity:1000,
    Price:0
}
);





let ProductsOption = Data.map((p)=>{

    return(
        <option value={p.nombreProducto} key={p.ID}>

            {p.nombreProducto}

        </option>
        )


})


function ChargeProductData (productName:string):IDataJson | null
{

    let DataJSON = null;

    for (let index = 0; index < Data.length; index++) {
        
        if(Data[index].nombreProducto == productName)
        {
            DataJSON = Data[index];
            break;
        }
    }

   return DataJSON;

}

function  HandlerProductSelected(event:ChangeEvent<HTMLSelectElement>)
{

    let productdata:IDataJson | any =  ChargeProductData(event.target.value);
    setProducSelectedtValue({...ProducSelectedtValue,[event.target.name]:event.target.value,"Quantity":1,"MaxQuantity":productdata.CantidadDisponible,"Price":productdata.PrecioProducto});
   

    



}

function HandlerChangeInputQuantity(event:ChangeEvent<HTMLInputElement>)
{
    setProducSelectedtValue({...ProducSelectedtValue,[event.target.name]:event.target.value});
}

function UpdateDisplayedProducts()
{
        
    setShowProductList(
        ()=>(
            products.map((p:any)=>
            {

                return(

                
                <div className='flex justify-around p-4 border-b-2 border-slate-500'>
                    
                    <p className='overflow-x-auto w-[33%] text-center'> {p.name} </p>
                    <p className='overflow-x-auto w-[33%] text-center'> {p.Quantity} </p>
                    <p className='overflow-x-auto w-[33%] text-center'> {p.Price * p.Quantity} </p>


                </div>
                
                
                )


            })
        )
        )

}

function AddProductToList(event:any)
{
    if(ProducSelectedtValue.name != "")
    {
        products.push(ProducSelectedtValue);
        console.log(products);
        UpdateDisplayedProducts();
    }
}




  return (
    <div className='w-full h-full flex   '>


        <div className=' w-[80%] bg-white h-full  '>
                <div className='w-full bg-slate-500 p-2 flex flex-nowrap justify-center items-center '>
                    
                    
                    <div  className='ml-auto w-full flex justify-end items-center'>
                    <span className='font-extralight text-white mr-4'>Producto: </span>
                        <select placeholder='Producto' className='p-3 px-[10%] rounded-md' onChange={ (e)=>{HandlerProductSelected(e)}} value={ProducSelectedtValue?.name} name="name">
                            {ProductsOption}
                        </select>
                    <span className='font-extralight text-white ml-10 mr-4'>Cantidad: </span>
                        <input type="number" max={ProducSelectedtValue?.MaxQuantity} min={1} className='p-3 px-[2%] rounded-md' value={ProducSelectedtValue?.Quantity}  name="Quantity" onChange={(e)=>{HandlerChangeInputQuantity(e)}} id="" />
                    </div>

                    <button className='flex border ml-4 p-2 px-4 rounded-md text-white bg-teal-700 hover:bg-teal-500 duration-300' onClick={(e)=>{ AddProductToList(e);}} >
                    Agregar
                    <LibraryAddIcon className='ml-3 text-white'/>
                    </button>



                </div>
                <div className='overflow-auto flex flex-col w-full h-[90%]'>
                <div className='flex justify-around p-4 border-b-2 border-slate-500'>
                    
                    <p className='overflow-x-auto w-[33%] text-center'> Nombre del producto </p>
                    <p className='overflow-x-auto w-[33%] text-center'> Cantidad </p>
                    <p className='overflow-x-auto w-[33%] text-center'> Precio </p>


                </div>
                    {ShowProductList}
                </div>

        </div>
        
        <div className=' w-[20%] bg-slate-200 h-[100%]'>
        </div>

      



    </div>
  )
}
