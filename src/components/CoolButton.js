import React from 'react'

const CoolButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-6 py-3 bg-gradient-to-r from-amber-400 to-red-500 text-white font-bold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 hover:from-pink-500 hover:to-amber-400 hover:shadow-2xl focus:outline-none"
  >
    {children}
  </button>
)

export default CoolButton