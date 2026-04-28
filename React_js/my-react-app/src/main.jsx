import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {BrowserRouter} from"react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainrouting from './Myapp/Mainrouting.jsx';
import Router_Main from './Componant/Router_Main.jsx';
import Useeffecthook from './Assingment_Task/Useeffecthook.jsx';
import './App.jsx'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Mainrouting/>
 {/* <Router_Main/> */}

 </BrowserRouter>,
)

