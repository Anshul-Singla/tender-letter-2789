import React from 'react'
import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing_page/Landing";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Landing/>} />
    </Routes>
  )
}

export default AllRoutes