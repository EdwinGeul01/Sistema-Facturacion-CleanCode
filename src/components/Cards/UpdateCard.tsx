
import React, { useState, ChangeEvent } from 'react'
import { IProductUpdate } from '../../Logics/Interfaces/IproductUpdate';

export default function UpdateCard(props: {
    setSucces: React.Dispatch<React.SetStateAction<boolean>>,
    UpdateValues(productToUpdate:IProductUpdate):void,
    product:any

}) {


    const [ProducToUpdate, setProductToUpdate] = useState<IProductUpdate>(props.product);

    const HandleChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setProductToUpdate({
            ...ProducToUpdate,
            [event.target.name]: event.target.value
        })
    }



    const UpdateProduct = () => {

        props.UpdateValues(ProducToUpdate);
        props.setSucces(true);
        setTimeout(() => {
            props.setSucces(false);
        }, 1500);


    }

    return (


        <div key={ProducToUpdate.ID} className="DivItemNotSelect w-full flex flex-nowrap px-4">
            <div className="text-center w-[25%]  flex justify-center items-center overflow-auto ">
                <p>{ProducToUpdate.nombreProducto}</p>
            </div>
            <div className="text-center w-[25%]  flex justify-center items-center overflow-auto">
                <input type="number" value={ProducToUpdate.PrecioProducto} className=" text-center bg-transparent border-b outline-none" name="PrecioProducto" onChange={(e) => { HandleChanges(e) }} />
            </div>
            <div className="text-center w-[25%]  flex justify-center items-center overflow-auto">
                <input type="number" value={ProducToUpdate.CantidadDisponible} className=" text-center bg-transparent border-b outline-none" name="CantidadDisponible" onChange={(e) => { HandleChanges(e) }} />
            </div>

            <div className="w-[25%]  text-center flex justify-center items-center overflow-auto">
                <button className="border border-yellow-400 text-yellow-400 p-2 px-4 rounded-md hover:bg-yellow-500 hover:text-white duration-500" onClick={() => { UpdateProduct() }}>Editar Producto</button>
            </div>


        </div>


    )
}
