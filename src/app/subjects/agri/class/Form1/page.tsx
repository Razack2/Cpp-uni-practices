import React from 'react';
import Link from 'next/link';

const page = () => {
  return (

    <div className="min-h-screen bg-gray-50 p-4">
         <div>  <p className="text-red"  >This part is under development</p> </div>

      <h1 className="text-3xl font-bold text-black  mb-8">Form 1 Lessons</h1>
     
    <div>
      <ul>
        <li><a href="#">Lesson 1</a></li>
        <li><a href="#">Lesson 2</a></li>
        <li><a href="#">Lesson 3</a></li>
        <li><a href="#">Lesson 4</a></li>
        <li><a href="#">Lesson 5</a></li>
        <li><a href="#">Lesson 6</a></li>

      </ul>
    </div>
    <div>
          <h1 className="text-3xl font-bold text-black  mb-8">Form 2 Lessons</h1>
    <div>
      <ul>
        <li><a href="#">Lesson 1</a></li>
        <li><a href="#">Lesson 2</a></li>
        <li><a href="#">Lesson 3</a></li>
        <li><a href="#">Lesson 4</a></li>
        <li><a href="#">Lesson 5</a></li>
        <li><a href="#">Lesson 6</a></li>

      </ul>
    </div>

   </div>
          <h1 className="text-1xl font-bold text-black  mb-8">Form 3 Lessons</h1>
    
      <ul>
        <li><a href="#">Lesson 1</a></li>
        <li><a href="#">Lesson 2</a></li>
        <li><a href="#">Lesson 3</a></li>
        <li><a href="#">Lesson 4</a></li>
        <li><a href="#">Lesson 5</a></li>
        <li><a href="#">Lesson 6</a></li>
      </ul>

        <div>
          <h1 className="text-3xl font-bold text-black  mb-8">Form 4 Lessons</h1>
      <ul>
        <li><a href="#">Lesson 1</a></li>
        <li><a href="#">Lesson 2</a></li>
        <li><a href="#">Lesson 3</a></li>
        <li><a href="#">Lesson 4</a></li>
        <li><a href="#">Lesson 5</a></li>
        <li><a href="#">Lesson 6</a></li>
      </ul>
    </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lesson 1 */}
        <li className="bg-white p-2 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Lesson 1</h2>
          <video
            src="lesson1.mp4"
            controls
            className="w-full rounded"
          >
            Your browser does not support the video tag.
          </video>
        </li>

        {/* Lesson 2 */}
        <li className="bg-white p-4 shadow rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Lesson 2</h2>
          <video
            src="lesson2.mp4"
            controls
            className="w-full rounded"
          >
            Your browser does not support the video tag.
          </video>
        </li>

        {/* Lesson 3 */}
        <li className="bg-white p-4 shadow rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Lesson 3</h2>
          <p className="text-gray-500">Video coming soon</p>
        </li>

        {/* Lesson 4 */}
        <li className="bg-white p-4 shadow rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Lesson 4</h2>
          <p className="text-gray-500">Video coming soon</p>
        </li>

        {/* Lesson 5 */}
        <li className="bg-white p-4 shadow rounded-xl flex flex-col justify-center items-center">
          <h2 className="text-xl font-semibold mb-2">Lesson 5</h2>
          <p className="text-gray-500">Video coming soon</p>
          
        </li>
      </ul>
     <button></button>
      
     <div >
      <Link href="/resources">
            <button className='bg-orange-600 text-white w-full shadow py-6 rounded font-semibold cursor-pointer'>Find notes</button>
      </Link>
      </div>
    </div> 
       
  );
};

export default page;
