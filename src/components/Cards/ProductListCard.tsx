
import React from 'react'
import {IProduct} from '../../Logics/Interfaces/SalesInterfaces';

export default function ProductListCard(props:{ product:any , quantity:any }) {
  return (
    <div
    className="flex justify-around p-4 border-b-2 border-slate-500"

  >
    <p className="overflow-x-auto w-[33%] text-center"> {props.product.nombre} </p>
    <p className="overflow-x-auto w-[33%] text-center">
      {" "}
      {props.quantity}{" "}
    </p>
    <p className="overflow-x-auto w-[33%] text-center">
      {" "}
      {props.product.precio * props.quantity}{" "}
    </p>
  </div>
  )
}
