import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainScreen from "../screen/MainScreen";
import LoaderScreen from '../screen/LoadingScreen'

const AppRouter = () => {
   
   const [loading, setLoading] = useState(true);
   
   useEffect(() => {
	  setTimeout(() => {
		 setLoading(false);
	  }, 2000);
   }, []);
   
   return (
	   <BrowserRouter>
		  <Routes>
			 {loading ?
				 <Route
					 exact
					 path="*"
					 element={<LoaderScreen/>}
				 />
				 :
				 <Route
					 exact
					 path="/"
					 element={<MainScreen/>}
				 />
			 }
		  </Routes>
	   </BrowserRouter>
   )
};

export default AppRouter;
