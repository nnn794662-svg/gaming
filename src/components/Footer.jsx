import React from 'react';
// 1. IMPORT QISMI QO'SHILDI
  import logo from '../assets/Group 5.png';
  import news from  '../assets/Group 9.png';
  import logoold from '../assets/Group 10.png';
  import logonow from '../assets/Group 11.png';

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-16 pb-8 px-8 md:px-24 border-t border-gray-100 mt-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo qismi */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-black">LOGO</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <span className="text-sm font-medium pt-4">@Lorem</span>
        </div>

        {/* About us qismi */}
        <div>
          <h3 className="text-lg font-bold mb-6">About us</h3>
          <ul className="flex flex-col gap-4 text-sm text-gray-700">
            <li className="hover:text-black cursor-pointer">Zeux</li>
            <li className="hover:text-black cursor-pointer">Portfolio</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Contact us</li>
          </ul>
        </div>

        {/* Contact us qismi */}
        <div>
          <h3 className="text-lg font-bold mb-6">Contact us</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <span className="text-sm font-medium">+908 89097 890</span>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div className="flex items-end justify-start md:justify-end pb-2">
          <div className="flex gap-4">
            <img src={logo} alt="err" />
            <img src={logonow} alt="err" />
            <img src={logoold} alt="err" />
            <img src={news} alt="err" />
          </div>
        </div>

      </div>

      {/* Copyright qismi */}
      <div className="border-t border-gray-300 mt-16 pt-8 text-center">
        <p className="text-xs text-gray-500">
          Copyright ® 2022 prodesigner All rights Reserved
        </p>
      </div>
    </footer>
  );
};

// Ikonka komponenti (Rasmga moslab qora rangga o'zgartirildi)
const SocialIcon = ({ icon }) => (
  <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 cursor-pointer transition">
    {icon}
  </div>
);

export default Footer;