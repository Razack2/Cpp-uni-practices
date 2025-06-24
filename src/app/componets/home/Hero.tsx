import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white py-0 px-3 flex flex-col lg:flex-row items-center justify-between gap-1">
      <div >
        <h1 className="text-6xl lg:text-6xl font-bold mb-4 flex-center">Master Science Subjects. Own Your Future.</h1>
        <p className="text-lg mb-6">Get the tools you need to succeed in class, exams, and beyond — built for Malawi’s secondary school students.</p>
        <Link href="/getstarted">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-semibold cursor-pointer">Get Started</button>
        </Link>
      </div>
      <img src="/hero.png" alt="Students" className="rounded-lg w-full max-w-md" />
    </section>
  );
};

export default Hero;