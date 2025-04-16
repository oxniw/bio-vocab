"use client";
import React from 'react'
import "./fadein.css"
function opoup({ onClose }) {
    console.log( onClose )
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50 shadow-lg bg-gradient-to-r bg-opacity-10 backdrop-blur-lg transition-all duration-300 fadein">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-xl font-bold mb-4">This is a pop-up!</h2>
        <p className="mb-4">You clicked the button 🎉</p>
        <button
          onClick={onClose }
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default opoup