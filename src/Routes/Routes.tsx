import {BrowserRouter, Routes ,Route, useLocation} from 'react-router-dom';
import Login from '../pages/Login'
import EntryPage from '../pages/EntryPage'
import {HomePage} from '../pages/HomePage'


export default function AnimateRoutes() {
    const location = useLocation();
    return (
        <Routes location={location} key={location.pathname}>
            <Route path='/'  element={<EntryPage />}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/home/*'  element={<HomePage/>}/>
        </Routes>
  )
}
