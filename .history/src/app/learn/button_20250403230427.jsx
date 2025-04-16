"use client";
import React,{useEffect useState} from 'react'

function button() {
  return (
    <div className='w-full w-max-xl justify-center flex'>
        <div className=" w-full max-w-xl h-full max-h-28 bg-green-500 items-center justify-center flex rounded-2xl transition-transform duration-100 hover:scale-110">
            <h1>
                go back
            </h1>
        </div>
    </div>
  )
}

export default button