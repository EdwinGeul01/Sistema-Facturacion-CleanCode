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
        <Box className="h-52  bg-red-50">
          <h2 id="parent-modal-title">Text in a modal</h2>
          <p id="parent-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
        </Box>
      </Modal>
  );
}

