import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/pages/Home/Home";
import ComingSoon from "./components/pages/ComingSoon";
import Booking from "./components/pages/Booking/Booking";
import routes from "./utils/routes.js";

function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path={routes.get("home").path} element={<Home />} />
          <Route path={routes.get("about").path} element={<ComingSoon />} />
          <Route path={routes.get("menu").path} element={<ComingSoon />} />
          <Route path={routes.get("booking").path} element={<Booking />} />
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
