import React from 'react'
import Tracker from '../components/Time_Tracker/Tracker'
import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing_page/Landing";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />
         <Route path='/tracker' element={<Tracker/>}/>
    </Routes>
  )
}

export default AllRoutes

