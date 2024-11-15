import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Thank() {
  return (
    <div className='flex justify-center items-center h-screen bg-gray-400'>
        <div className='flex flex-col justify-center items-center bg-white h-4/5 w-4/5 px-2 py-4 rounded-md'>
            <div className='justify-center items-center'>
                <img src="https://cdn-icons-png.flaticon.com/256/10252/10252202.png"/>
                
            </div>
            <div className='text-center flex flex-col'>
                <h1 className='text-3xl text-gray-700 text-center'>Thank you for submitting the feedback!</h1>
                 <p className='text-center text-xl text-gray-600'>We have recived your responses.</p>
                <div className='flex flex-row gap-x-4 mt-10 justify-center items-center'>
                    <button className='text-red-600 border-2 border-red-600 rounded-full px-2 py-4'>back to homepage</button>
                    <button className='text-red-600 border-2 border-red-600 rounded-full px-2 py-4'>Visit our page</button>
                </div>
                <div className='mt-10 flex flex-col justify-center items-center text-gray-400 text-2xl'>
                    <p className=''>Let's connect! </p>
                    <div className='flex flex-row gap-x-4'>
                        <span><a href=""><FaFacebook /></a></span>
                        <span><a href=""><FaInstagram /></a></span>
                        <span><a href=""><FaLinkedinIn /></a></span>
                        <span><a href=""><FaYoutube /></a></span>
                    </div>
                </div>
            </div>



        </div>

      
    </div>
  )
}

export default Thank
