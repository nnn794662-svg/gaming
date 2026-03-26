import React from 'react'
import Logo from '../assets/logo.png'

const Home = () => {
  return (
    <>

 (Hero.jsx)

    <section className="relative bg-[#05051e] text-white min-h-150 flex items-center px-8 md:px-24 overflow-hidden py-20">
      
      {/* 1. Chap tarafdagi matnlar qismi */}
      <div className="relative z-10 max-w-xl">
        <h4 className="text-[#e87d3e] font-bold text-lg mb-4">
          Proved By prodesigner
        </h4>
        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
          Work that we <br /> produce for our <br /> clients
        </h1>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-md">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard.
        </p>
        
        {/* Gradientli tugma */}
        <button className=" bg-[#e3062c] hover:bg-[#f08542] hover:opacity-90 text-white px-8 py-4 rounded-full font-bold transition duration-300">
          Get more details
        </button>
      </div>

      {/* 2. Markazdagi va o'ng tarafdagi grafik elementlar */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Markaziy doira va Joystik (Rasm o'rniga vizual o'xshatish) */}
        <div className="relative  border-7.5 border-gray-500/30 rounded-full flex items-center justify-center bg-[#0a3a4a]/40 shadow-2xl overflow-hidden">
             {}
             <img src={Logo} alt="" />
             
             {/* CryEngine logosi o'rni */}
             <div className="absolute top-20 right-10 text-xs font-bold text-gray-300 flex flex-col items-center">
                <span className="text-2xl">👁️</span>
                CRYENGINE
             </div>
        </div>

        {/* Unreal Engine logosi o'rni (O'ng tarafda alohida) */}
        <div className="absolute right-20 top-20 text-center opacity-80">
            <div className="text-4xl mb-1">U</div>
            <p className="text-[10px] font-bold tracking-widest uppercase leading-none">
                Unreal <br /> Engine
            </p>
        </div>
      </div>

    </section>
    </>
  )
}

export default Home