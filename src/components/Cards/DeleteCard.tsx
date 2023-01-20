import { useState, ChangeEvent } from "react";
import {IProductUpdate} from '../../Logics/Interfaces/IproductUpdate';


export default function DeleteCard(props:{DeleteProduct(ProducToUpdate:any):any,setSuccess(state:boolean):any, product:any }) {



    const [ProducToUpdate, setProductToUpdate] = useState<IProductUpdate>(props.product);



    const HandleChanges = (event: ChangeEvent<HTMLInputElement>) => {
      setProductToUpdate({
        ...ProducToUpdate,
        [event.target.name]: event.target.value,
      });
    };

    const DeleteProduct = () => {
      props.DeleteProduct(ProducToUpdate);
      props.setSuccess(true);
      setTimeout(() => {
        props.setSuccess(false);
      }, 1500);
    };

    return (
      <div
        key={ProducToUpdate.id}
        className="DivItemNotSelect w-full flex flex-nowrap px-4"
      >
        <div className="text-center w-[25%]  flex justify-center items-center overflow-auto ">
          <p>{ProducToUpdate.nombre}</p>
        </div>
        <div className="text-center w-[25%]  flex justify-center items-center overflow-auto">
          <input
            type="number"
            value={ProducToUpdate.precio}
            className=" text-center bg-transparent border-b outline-none"
            name="PrecioProducto"
            onChange={(e) => {
              HandleChanges(e);
            }}
          />
        </div>
        <div className="text-center w-[25%]  flex justify-center items-center overflow-auto">
          <input
            type="number"
            value={ProducToUpdate.cantidad}
            className=" text-center bg-transparent border-b outline-none"
            name="CantidadDisponible"
            onChange={(e) => {
              HandleChanges(e);
            }}
          />
        </div>

        <div className="w-[25%]  text-center flex justify-center items-center overflow-auto">
          <button
            className="border border-red-400 text-red-400 p-2 px-4 rounded-md hover:bg-red-500 hover:text-white duration-500"
            onClick={() => {
              DeleteProduct();
            }}
          >
            Eliminar Producto
          </button>
        </div>
      </div>
    );

}
