import { useState, ChangeEvent } from "react";

export default function DeleteCard(props:{UpdateValues(ProducToUpdate:any):any,setSuccess(state:any):any, product:any }) {
    
    
    interface IProduct {
        ID: number;
        nombreProducto: string;
        PrecioProducto: number;
        CantidadDisponible: number;
      }


    const [ProducToUpdate, setProductToUpdate] = useState<IProduct>(props.product);



    const HandleChanges = (event: ChangeEvent<HTMLInputElement>) => {
      setProductToUpdate({
        ...ProducToUpdate,
        [event.target.name]: event.target.value,
      });
    };

    const DeleteProduct = () => {
      props.UpdateValues(ProducToUpdate);
      props.setSuccess(true);
      setTimeout(() => {
        props.setSuccess(false);
      }, 1500);
    };

    return (
      <div
        key={ProducToUpdate.ID}
        className="DivItemNotSelect w-full flex flex-nowrap px-4"
      >
        <div className="text-center w-[25%]  flex justify-center items-center overflow-auto ">
          <p>{ProducToUpdate.nombreProducto}</p>
        </div>
        <div className="text-center w-[25%]  flex justify-center items-center overflow-auto">
          <input
            type="number"
            value={ProducToUpdate.PrecioProducto}
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
            value={ProducToUpdate.CantidadDisponible}
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
