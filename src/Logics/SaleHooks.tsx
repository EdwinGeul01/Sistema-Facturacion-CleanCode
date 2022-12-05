import { useState, ChangeEvent , useCallback } from "react";
import React from 'react'
import { IProduct} from '../Logics/Interfaces/SalesInterfaces';

export default function SaleHooks() {
    const [products, setproducs] = useState<IProduct | any>(new Array());
    const [ShowProductList, setShowProductList] = useState(new Array());
    const [ProducSelectedtValue, setProducSelectedtValue] = useState({
             name: "",
             Quantity: 1,
             MaxQuantity: 1000,
             Price: 0,
           });
    const [TotalPay, setTotalPay] = useState(0);



    return {products,setproducs,ShowProductList,setShowProductList,ProducSelectedtValue,setProducSelectedtValue , TotalPay ,setTotalPay}
}
