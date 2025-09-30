import React from 'react'
import profileImage from '../assets/profile.png'

const Landing = ({ onCreate }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm max-w-2xl w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Make your own portfolio</h1>
        <p className="text-gray-600 mb-6">Use this template and generate a personalized portfolio in minutes.</p>
        <div className="flex items-center justify-center mb-6">
          <img src={profileImage} alt="Template" className="w-56 h-56 object-cover rounded-2xl shadow" />
        </div>
        <button onClick={onCreate} className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium">
          Create
        </button>
      </div>
    </div>
  )
}

export default Landing


