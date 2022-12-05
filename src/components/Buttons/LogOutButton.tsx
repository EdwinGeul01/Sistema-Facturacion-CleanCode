
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';


export default function LogOutButton() {

    const RedirectTo = useNavigate();

    function CloseSession()
    {

        RedirectTo('/login');


    }



  return (
    <button className='border h-[70%] border-red-300 text-red-400  rounded-md px-5
        hover:bg-red-400 hover:text-white duration-300' onClick={()=>CloseSession()}>
    Cerrar Sesion
    <ExitToAppIcon className='ml-3'/>
    </button>
  )
}
