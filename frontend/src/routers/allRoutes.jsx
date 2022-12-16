import React from "react";
import Tracker from "../components/Time_Tracker/Tracker"
import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing_page/landing";
import { Projects } from '../components/projects/projects';
import { Inputform } from '../components/projects/form';
import Pricing from "../components/pricing_page/Pricing";
import Login from "../components/login/Login";
import Signup from "../components/signup/Signup";
// import Time from "../components/Time_Tracker/Time";


const AllRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<Landing/>} />
        <Route path='/tracker' element={<Tracker/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/auth/projects' element={<Projects/>}/>
        <Route path="/auth/projects/new" element={<Inputform />}/>

      <Route path="/pricing" element={<Pricing />} />

      {/* <Route path='/timer' element={<Time/>}/> */}

    </Routes>
  );
};

export default AllRoutes;
