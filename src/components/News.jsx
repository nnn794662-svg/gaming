import React from 'react'

const News = () => {
  return (
    <>
    <section className="bg-[#05051e] text-white py-24 px-8 flex flex-col items-center">
      
      {/* 1. Breadcrumb (Yo'l ko'rsatkich) */}
      <nav className="text-sm font-medium mb-6 flex items-center gap-2">
        <span className="opacity-80 cursor-pointer hover:opacity-100 transition">Home</span>
        <span className="text-orange-500 font-bold">{'>'}</span>
        <span className="text-orange-500 cursor-pointer">News</span>
      </nav>

      {/* 2. Asosiy Sarlavha */}
      <h1 className="text-3xl md:text-5xl font-black text-center mb-6 max-w-4xl leading-tight">
        Lorem Ipsum is simply dummy text of the printing and.
      </h1>

      {/* 3. Kichik matn (Tavsif) */}
      <p className="text-gray-400 text-sm md:text-base text-center mb-12 max-w-2xl opacity-90">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {/* 4. Qidiruv inputi (Search Bar) */}
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <FiSearch className="text-gray-600 text-xl" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#e5d8d0] text-gray-800 py-4 pl-14 pr-6 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 transition-all font-medium placeholder-gray-500"
        />
      </div>

    </section><section className="bg-[#05051e] text-white py-24 px-8 flex flex-col items-center">
      
      {}
      <nav className="text-sm font-medium mb-6 flex items-center gap-2">
        <span className="opacity-80 cursor-pointer hover:opacity-100 transition">Home</span>
        <span className="text-orange-500 font-bold">{'>'}</span>
        <span className="text-orange-500 cursor-pointer">News</span>
      </nav>

      {}
      <h1 className="text-3xl md:text-5xl font-black text-center mb-6 max-w-4xl leading-tight">
        Lorem Ipsum is simply dummy text of the printing and.
      </h1>

      {}
      <p className="text-gray-400 text-sm md:text-base text-center mb-12 max-w-2xl opacity-90">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>

      {}
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
          <FiSearch className="text-gray-600 text-xl" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-[#e5d8d0] text-gray-800 py-4 pl-14 pr-6 rounded-xl outline-none focus:ring-2 focus:ring-orange-400 transition-all font-medium placeholder-gray-500"
        />
      </div>

    </section>
    </>
  )
}

export default News