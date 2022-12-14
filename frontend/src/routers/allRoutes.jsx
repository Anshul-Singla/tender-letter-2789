import React from 'react'
import { Route, Routes } from "react-router-dom"
import Tracker from '../components/Time_Tracker/Tracker'

const allRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={"Home"}/>
        <Route path='/tracker' element={<Tracker/>}/>
    </Routes>
    </>
  )
}

export default allRoutes