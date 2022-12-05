
import React from 'react'
import {IProduct} from '../../Logics/Interfaces/SalesInterfaces';

export default function ProductListCard(props:{ product:IProduct }) {
  return (
    <div
    className="flex justify-around p-4 border-b-2 border-slate-500"

  >
    <p className="overflow-x-auto w-[33%] text-center"> {props.product.name} </p>
    <p className="overflow-x-auto w-[33%] text-center">
      {" "}
      {props.product.Quantity}{" "}
    </p>
    <p className="overflow-x-auto w-[33%] text-center">
      {" "}
      {props.product.Price * props.product.Quantity}{" "}
    </p>
  </div>
  )
}
