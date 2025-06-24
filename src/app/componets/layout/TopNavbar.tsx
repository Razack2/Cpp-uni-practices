import React from 'react';
import SearchBox from '../SearchBox';
import Link from 'next/link';

const TopNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray shadow-md px-6 py-1 w-full ">
        <div >
        <Link href="/"><img src="/logos.ico" alt="Logo" width={80} height={80} /></Link>

        </div>
      <div className="text-3xl font-bold justify-normal" >
        <span className="text-black">Edu</span>
        <span className="text-orange-500">Pa</span>
        <span className="text-black">Malawi</span>
      </div>
    <div>
    <ul className="flex gap-8 items-center text-sm font-medium">
    <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
    <li><Link href="/subjects" className="hover:text-orange-500">Subjects</Link></li>
    <li><Link href="/resources" className="hover:text-orange-500">Resources</Link></li>
  </ul>
</div>
      <div>
      <SearchBox /> 
      </div>
      <div className="flex gap-3">
          <Link href="/login">
            <button className="text-sm border px-4 py-1 rounded hover:bg-gray-200 cursor-pointer">Login</button>
          </Link>

          <Link href="/signup">
            <button className="text-sm bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 cursor-pointer">Sign Up</button>
          </Link> 
      </div>
    </nav>
    
  );
};

export default TopNavbar;