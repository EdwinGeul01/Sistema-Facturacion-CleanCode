import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { ChangeEvent } from "react";
import Data from "../resources/product_List.json";
import SalesRoutes from "../Routes/SalesRoutes";

import RecordSaleButton from "../components/Buttons/RecordSaleButton";
import SalesRecordButton from "../components/Buttons/SalesHistoryButton";

import { SalesLogic } from "../Logics/SaleLogic";
import {
  IDataJson,
  RenderVariables,
} from "../Logics/Interfaces/SalesInterfaces";
import SaleHooks from "../Logics/SaleHooks";

import { useState, useEffect } from "react";
import ManageConnections from "../Connections/ManageConnections";
import ProductListCard from "../components/Cards/ProductListCard";

export default function SalePage() {
  const [ProductsOption, setProductsOption] = useState();
  let [ShowProductList, setShowProductList] = useState([]);
  const [ProducSelectedtValue, setProducSelectedtValue] = useState("default");
  const [ProducSelectedInfo, setProducSelectedInfo] = useState({});

  const [productsInList, setproductsInList] = useState([] as any);

  const [variables, setvariables] = useState({
    cantidad: 0,
    total: 0,
  });

  function AddProductToList() {
    setproductsInList([
      ...productsInList,
      { product: ProducSelectedInfo, cantidad: variables.cantidad },
    ]);
  }

  useEffect(() => {
    const execute = async () => {
      const productshow = await productsInList.map(
        ({ product, cantidad }, index) => {
          return (
            <ProductListCard
              key={index}
              product={product}
              quantity={cantidad}
            />
          );
        }
      );
      setShowProductList(productshow);

      let totals = 0;
      productsInList.forEach(({ product, cantidad }) => {
        totals += product.precio * cantidad;
      });

      setvariables({ ...variables, total: totals });
    };
    execute();
  }, [productsInList]);

  useEffect(() => {
    const execute = async () => {
      const options = await ManageConnections.getproduct();
      let productopt = options.map((p) => {
        return (
          <option value={p.id} key={p.id}>
            {p.nombre}
          </option>
        );
      });
      setProductsOption(productopt);
    };

    execute();
  }, []);

  useEffect(() => {
    GetData();
  }, [ProducSelectedtValue]);

  function GetData() {
    const execute = async () => {
      const ProductInformation = await ManageConnections.getproductById(
        ProducSelectedtValue
      );
      setProducSelectedInfo({ ...ProducSelectedInfo, ...ProductInformation });
      // console.log(ProductInformation);
    };

    execute();
  }

  const handlechangevariables = (event) => {
    if (event.target.name == "cantidad") {
      if (event.target.value > ProducSelectedInfo.cantidad) {
        return;
      }
    }
    setvariables({ ...variables, [event.target.name]: event.target.value });
  };

  function reduceItems() {
    const execute = () => {
      productsInList.forEach(({ product, cantidad }) => {
        ManageConnections.ReduceById(product.id, cantidad);
      });
    };

    execute();
  }

  const handleChange = (event) => {
    setProducSelectedtValue(event.target.value);
  };

  return (
    <div className="w-full h-[90%] flex overflow-hidden  ">
      <div className=" w-[75%]  h-full ml-[2.5%] mr-[1%]   ">
        <div className="w-full bg-slate-500 p-2 flex flex-nowrap justify-center items-center mb-[5px] border border-transparent  rounded-xl  ">
          <div className="ml-auto w-full flex justify-end items-center">
            <SalesRecordButton />
            <span className="font-extralight text-white mr-4">Producto: </span>
            <select
              className="p-3 px-[10%] rounded-md"
              onChange={(e) => {
                handleChange(e);
              }}
              defaultValue={ProducSelectedtValue}
              name="nombre"
            >
              <option disabled={true} hidden value="default">
                --Choose and Product --
              </option>
              {ProductsOption}
            </select>
            <span className="font-extralight text-white ml-10 mr-4">
              Cantidad:{" "}
            </span>
            <input
              type="number"
              max={ProducSelectedInfo?.cantidad}
              min={1}
              className="p-3 px-[2%] rounded-md"
              value={variables.cantidad}
              name="cantidad"
              onChange={(e) => {
                handlechangevariables(e);
              }}
              id=""
            />
          </div>

          <button
            className="flex borde border-transparent ml-4 p-2 px-4 rounded-md text-white bg-teal-700 hover:bg-teal-500 duration-300"
            onClick={(e) => {
              AddProductToList();
            }}
          >
            Agregar
            <LibraryAddIcon className="ml-3 text-white" />
          </button>
        </div>
        <div className="overflow-auto flex flex-col w-full h-[90%] bg-slate-100 shadow-md">
          <div className="flex justify-around p-4 border-b-2 border-slate-500 bg-slate-800  text-white sticky w-full top-0">
            <p className="overflow-x-auto w-[33%] text-center">
              Nombre del producto
            </p>
            <p className="overflow-x-auto w-[33%] text-center"> Cantidad </p>
            <p className="overflow-x-auto w-[33%] text-center"> Precio </p>
          </div>
          {ShowProductList}
        </div>
      </div>

      <div className=" w-[20%] bg-slate-50  h-[100%] flex flex-col justify-end shadow-2xl">
        <div className="h-[75%] font-light flex flex-col px-[5%] pt-[10%]">
          <h2 className="text-2xl">Nombre del Producto: </h2>
          <div className="border shadow-inner p-2">
            <p>{ProducSelectedInfo.nombre}</p>
          </div>
          <h2 className="text-2xl">Precio por Unidad del Producto: </h2>
          <div className="border shadow-inner p-2">
            <p>L {ProducSelectedInfo.precio}</p>
          </div>
          <h2 className="text-2xl">Cantidad Disponible: </h2>
          <div className="border shadow-inner p-2">
            <p>{ProducSelectedInfo.cantidad}</p>
          </div>
        </div>

        <div className="h-[20%] bg-slate-700 px-2 flex flex-col">
          <span className="text-white text-[180%]">TOTAL:</span>
          <span className="text-white text-[180%]" id="totalPagar">
            L {variables.total}{" "}
          </span>
        </div>
        <RecordSaleButton total={variables.total} reducefunct={reduceItems} />
      </div>

      <SalesRoutes />
    </div>
  );
}
