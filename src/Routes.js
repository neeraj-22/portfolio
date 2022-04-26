import React from "react";
import { BrowserRouter, Routes as RoutesAlt, Route } from "react-router-dom";

//Importing Components
import Homepage from "./pages/Homepage";
import Resume from "./pages/Resume";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesAlt>
        <Route path='/' exact element={<Homepage/>} />
        <Route path='/resume' exact element={<Resume/>} />
      </RoutesAlt>
    </BrowserRouter>
  );
};

export default Routes;
