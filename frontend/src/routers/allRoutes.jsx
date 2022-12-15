import React from 'react'
import Tracker from '../components/Time_Tracker/Tracker'
import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing_page/landing";
import { Projects } from '../components/projects/projects';
import { Inputform } from '../components/projects/form';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />
         <Route path='/tracker' element={<Tracker/>}/>
         <Route path='/auth/projects' element={<Projects/>}/>
         <Route path="/auth/projects/new" element={<Inputform />}/>
    </Routes>
  )
}

export default AllRoutes

