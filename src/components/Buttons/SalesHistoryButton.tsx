import { useNavigate } from "react-router-dom";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

export default function SalesHistoryButton() {

const RedirectToURL = useNavigate();


    function ShowSalesList()
    {
        RedirectToURL('history');

    }
  


  return (
    <button className="border p-2 rounded-md text-white mr-auto bg-slate-700 border-slate-700 hover:bg-slate-600" onClick={()=>{ShowSalesList()}}>
    Historial de Ventas
    <ManageSearchIcon className="ml-3" />
  </button>

  );


}
