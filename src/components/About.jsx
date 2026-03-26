import React from 'react'
import logo from '../assets/Rectangle 6.png';

const About = () => {
  return (
    <>
    <section className="bg-[#05051e] text-white py-20 px-8 md:px-24 flex flex-col md:flex-row items-center gap-12">
      
      {/* 1. Chap tarafdagi matnlar qismi */}
      <div className="flex-1 space-y-6">
        {/* Breadcrumb (Navigatsiya yo'li) */}
        <nav className="text-sm font-medium">
          <span className="text-white opacity-80 cursor-pointer">Home</span>
          <span className="mx-2 text-red-500">{'>'}</span>
          <span className="text-red-500 cursor-pointer">About us</span>
        </nav>

        {/* Asosiy Sarlavha */}
        <h2 className="text-3xl md:text-5xl font-black leading-tight max-w-md">
          Lorem Ipsum is simply dummy text of the printing and.
        </h2>

        {/* Tavsif matni */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>

        {/* Tugma - Gradientli */}
        <div className="pt-4">
          <button className="flex items-center gap-3  bg-[#e3062c] hover:bg-[#f08542] hover:opacity-90 text-white px-8 py-3 rounded-full font-bold transition duration-300">
            Get in touch
            <span className="text-lg">→</span>
          </button>
        </div>
      </div>

      {/* 2. O'ng tarafdagi rasm qismi */}
      <div className="flex-1 relative">
        <div className="relative z-10 w-full rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
          <img src={logo} alt="err" />
          {/* Rasm ustidagi qizil effekt (glow) */}
          <div className="absolute inset-0  from-red-500/10 to-transparent pointer-events-none"></div>
        </div>

        {/* Orqadagi fon bezagi (ixtiyoriy) */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-[100px] rounded-full"></div>
      </div>

    </section>
    </>
  )
}

export default About