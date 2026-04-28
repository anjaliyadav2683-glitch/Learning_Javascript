import React from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Slider from './Slider';
import Cards from './Cards';
import Slidertwo from './Slidertwo';



function Mainrouting() {
    return (
        <Routes>
           <Route path="/" element={<Navbar/>}/>
           <Route path="Slider" element={<Slider/>}/>
           <Route path="Cards" element={<Cards/>}/>
           <Route path="Slidertwo" element={<Slidertwo/>}/>

        </Routes>

    )
}

export default Mainrouting;