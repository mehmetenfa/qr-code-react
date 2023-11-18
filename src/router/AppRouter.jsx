import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainScreen from "../screen/MainScreen";

const AppRouter = () => {
   return (
	  <BrowserRouter>
		 <Routes>
			<Route exact path="/" element={<MainScreen />} />
		 </Routes>
	  </BrowserRouter>
   )
};

export default AppRouter;
