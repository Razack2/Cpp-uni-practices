import Link from "next/link";
import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-25 mt-5">
      <div><a href="#"><img src="/logos.ico" alt="Logo" width={80} height={80} /></a></div>
        
        
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">

        <div className="mb-4 md:mb-0">

      <div className="text-3xl font-bold justify-between" >
        <span className="text-black">Edu</span>
        <span className="text-orange-500">Pa</span>
        <span className="text-black">Malawi</span>
    
      </div>
          <span className="ml-2 text-gray-400">&copy; 2025 inc.</span>
        </div>
        <div className="flex gap-10 items-center md:flex-row justify-center py-1 px-0.5">
          <Link href="/subjects" className="hover:text-orange-400">Subjects</Link>
          <Link href="/aboutus" className="hover:text-orange-400">About us</Link>
          <Link href="/contactus" className="hover:text-orange-400">Contact us</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
