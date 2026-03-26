import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className=" text-white px-8 py-4 flex items-center justify-between">
      {/* Logo qismi */}
      <div className="text-2xl font-black tracking-tighter">
        LOGO
      </div>

      {/* Menyular qismi */}
      <div className="flex items-center gap-10">
        <div className="flex gap-8 items-center text-sm font-medium">
          <Link to="/" className="hover:text-gray-300 transition duration-300">Home</Link>
          <Link to="/about us" className="hover:text-gray-300 transition duration-300">About us</Link>
          <Link to="/Portfolio" className="hover:text-gray-300 transition duration-300">Portfolio</Link>
          <Link to="/News" className="hover:text-gray-300 transition duration-300">News</Link>
        </div>

        {/* Contact Us tugmasi */}
        <button className="bg-[#e3062c] hover:bg-[#c20525] text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition duration-300">
          Contact us
        </button>
      </div>
    </nav>

    </>
  )
}

export default Header