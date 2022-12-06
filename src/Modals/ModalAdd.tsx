import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse/Collapse";
import CarritoBackground from "../resources/background_Carrito.png";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import Alert from "@mui/material/Alert";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import FormAddProduct from "../components/Forms/FormAddProduct";

export default function ModalAdd() {
  const [Success, setSuccess] = useState(false);
  let RedirectToURL = useNavigate();

  return (
    <Modal open={true}>
      <Box className="h-[100%] flex  justify-center items-center ">
        <div className="w-[80%] h-min-[80%] h-auto bg-white">
          <div className="w-full flex">
            <button
              className="ml-auto"
              onClick={() => {
                RedirectToURL(-1);
              }}
            >
              <DisabledByDefaultIcon
                className="text-gray-300 hover:text-gray-400 duration-200"
                sx={{ width: 30, height: 30 }}
              />
            </button>
          </div>

          <div className=" h-[40%] w-[100%] bg-slate-100 flex justify-center ">
            <img src={CarritoBackground} className="w-[40%] h-full" />
          </div>
          <div></div>

          <FormAddProduct setSuccess={setSuccess} />
        </div>

        <div className="absolute bottom-5 right-0">
          <Collapse in={Success}>
            <Alert severity="success">Producto Agregado exitosamente !</Alert>
          </Collapse>
        </div>
      </Box>
    </Modal>
  );
}
