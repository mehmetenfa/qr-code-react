import React from 'react'
import GridLoader from "react-spinners/GridLoader";

const LoadingScreen = () => {
   return (
	   <div className='flex flex-col items-center justify-center h-screen w-screen gap-5'>
		  <GridLoader color="#36d7b7" />
		  <p className='text-2xl text-loaderBlack'>Loading...</p>
	   </div>
   )
}

export default LoadingScreen
