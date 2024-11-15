import React, { useState } from 'react'
import Survey from './Survey';
import { IoIosCloseCircleOutline } from "react-icons/io";

function Main() {
  const [surveyStarted,setSurveyStarted] = useState(false);
  const startSurvey = () =>{
    setSurveyStarted(true);
  }
  const handleClose = () =>{
    window.close();
  }
  return (
   
    <div>
      {surveyStarted?(<Survey/>):(
        
     <div className='flex  bg-purple-200 justify-center items-center h-screen'>
       <div className='flex flex-col justify-center items-center '>
             <div className='flex flex-col'>
              <span className='ml-auto text-xl text-red-500'><button onClick={handleClose}><IoIosCloseCircleOutline /></button></span>
              <h1 className='text-purple-500 text-center text-2xl'>Welcome to Our Customer Survey</h1>
              <h1 className='text-3xl font-bold'>Tell us about your experience</h1>
             </div>
             <div>
             <p className='mt-10 text-xl text-center'>Please take a moment to fill in this form and help us improve our services.</p>
             </div>
             <div className='mt-10'>
              <button onClick={startSurvey} className='text-center text-2xl bg-blue-400 text-white m-[10px] py-[10px] px-[20px] rounded-lg'>Start Survey</button>
             </div>

      </div>
     </div>
      
      )}
    </div>
  )
}

export default Main
