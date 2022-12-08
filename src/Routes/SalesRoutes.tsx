import React from 'react'
import { Route,Routes,useLocation } from "react-router-dom";
import SuccessSaleAdd from '../Modals/SuccessSaleAdd';
import SalesHistoryButton from '../Modals/SalesRecordList';
import FailedSaleAdd from '../Modals/FailedSaleAdd';

export default function SalesRoutes() {
  let location = useLocation();
    return (
    <Routes location={location}>
        <Route path='Success' element={<SuccessSaleAdd/>}/>
        <Route path='failed' element={<FailedSaleAdd/>}/>
        <Route path='history' element={<SalesHistoryButton/>}/>
        
    </Routes>
    )
}
