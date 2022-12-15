import React from "react";
import Tracker from "../components/Time_Tracker/Tracker";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/landing_page/landing";
import Pricing from "../components/pricing_page/Pricing";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/tracker" element={<Tracker />} />
      <Route path="/pricing" element={<Pricing />} />
    </Routes>
  );
};

export default AllRoutes;
