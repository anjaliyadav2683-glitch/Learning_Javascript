import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Navbar_one from './Navbar'
import Login from './Login'
import Parent from '../Assingment_Task/Parent'
import Counter from '../Reducer/Counter'
import Index from '../Task/Index'
import Lifting from '../StateLifting/Lifting'
import Hoc from '../HOC/Hoc'
import Memo from '../Memo/Memo'
import Custom from '../Custom_hook/Custom'
import Toggle from '../Custom_hook/Toggle'
import Api from '../Api/Api'
import Useeffecthook from '../Assingment_Task/Useeffecthook'



function Router_Main() {
  return (
   <Routes>
    <Route path="/" element={<Navbar_one/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/Parent' element={<Parent/>}/>
    <Route path='/Counter' element={<Counter/>}/>
    <Route path='/Index' element={<Index/>}/> 
    <Route path='Lifting' element={<Lifting/>}/>
    <Route path='Hoc' element={<Hoc/>}/>
    <Route path='Memo' element={<Memo/>}/>
    <Route path='Custom' element={<Custom/>}/>
    <Route path='Toggle' element={<Toggle/>}/>
    <Route path='Api' element={<Api/>}/>
    <Route path='Useeffecthook' element={<Useeffecthook/>}/>

    
   </Routes>
  )
  


}

export default Router_Main