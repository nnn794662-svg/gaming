import React from 'react'

const Portfolio = () => {
  return (
    <>
    <section className="bg-[#05051e] text-white py-20 px-8 flex flex-col items-center">
      
      {/* 1. Tepasidagi Matnlar */}
      <div className="text-center mb-16">
        <nav className="text-sm font-medium mb-6">
          <span className="opacity-80">Home</span>
          <span className="mx-2 text-red-500 font-bold">{'>'}</span>
          <span className="text-red-500">Services</span>
        </nav>
        
        <h2 className="text-3xl md:text-4xl font-black mb-6 max-w-2xl mx-auto leading-tight">
          Lorem Ipsum is simply dummy text of the printing and.
        </h2>
        
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* 2. Statistika Kartasi */}
      <div className="w-full max-w-5xl bg-[#1a1a2e]/50 border border-gray-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-around gap-8 relative overflow-hidden">
        
        {/* Stat 1 */}
        <div className="flex items-center gap-5 flex-1 justify-center">
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-red-600 shadow-lg">
            <FaUser size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black">90+</h3>
            <p className="text-gray-400 font-medium">Clients</p>
          </div>
        </div>

        {/* Vertikal Chiziq 1 */}
        <div className="hidden md:block w-px h-16 bg-gray-600 opacity-50"></div>

        {/* Stat 2 */}
        <div className="flex items-center gap-5 flex-1 justify-center">
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-red-600 shadow-lg">
            <FaMapMarkerAlt size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black">30+</h3>
            <p className="text-gray-400 font-medium">Countries</p>
          </div>
        </div>

        {/* Vertikal Chiziq 2 */}
        <div className="hidden md:block w- h-16 bg-gray-600 opacity-50"></div>

        {/* Stat 3 */}
        <div className="flex items-center gap-5 flex-1 justify-center">
          <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center text-red-600 shadow-lg">
            <FaServer size={24} />
          </div>
          <div>
            <h3 className="text-2xl font-black">50+</h3>
            <p className="text-gray-400 font-medium">Projects</p>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Portfolio