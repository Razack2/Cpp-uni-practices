import React from 'react';
import Link from 'next/link'

type Subject = {
  name: string;
  image: string;
  description: string;
};

const subjects: Subject[] = [
  {
    name: 'Chemistry',
    image: '/chemistry.png', 
    description: 'Find All Secondary Content',
  },
  {
    name: 'Physics',
    image: '/physics.png',
    description: 'Find All Secondary Content',
  },
  {
    name: 'Biology',
    image: '/biology.png',
    description: 'Find All Secondary Content',
  },
];

const FeaturedSubjects: React.FC = () => {
  return (
    <section className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Featured Subjects</h2>
            <p className="text-sm text-gray-500">Explore all science subjects</p>
          </div>
          <Link href ="/subjects">
          <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer">
            All Subjects
          </button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full p-4 flex flex-col items-center">
                <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                  {subject.name}
                </span>
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="h-32 object-contain mt-6"
                />
              </div>
              <div className="w-full border-t text-sm py-4">
                <p className="font-semibold">{subject.description}</p>
              </div>
              <div className="border-t w-full text-sm py-3">
                <button className="hover:underline cursor-pointer text-orange-600 ">View all Content</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSubjects;
