import React from 'react'
import { Route,Routes,useLocation } from "react-router-dom";
import SuccessSaleAdd from '../Modals/SuccessSaleAdd';
import SalesHistoryButton from '../Modals/SalesRecordList';

export default function SalesRoutes() {
  let location = useLocation();
    return (
    <Routes location={location}>
        <Route path='Succes' element={<SuccessSaleAdd/>}/>
        <Route path='history' element={<SalesHistoryButton/>}/>
        
    </Routes>
    )
}
