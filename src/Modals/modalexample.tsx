import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useState } from "react";



export default function ModalExample(props:{show:boolean , onclose:VoidFunction} ) {
  let [open, setOpen] = useState(false);

  return (
      <Modal
        open={props.show}
        onClose={props.onclose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="h-[100%] flex  justify-center items-center ">
            <div className="w-[80%] h-[80%] bg-white">
                <div>
                    <form action="" className="pl-4 text-slate-500">
                        <p>Nombre del producto</p>
                        <input type="text" placeholder="Nombre del producto" className="border p-2" />


                    </form>
                </div>

            </div>
        </Box>
      </Modal>
  );
}

