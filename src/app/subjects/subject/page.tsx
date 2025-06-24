import React from 'react';
import Link from 'next/link';
import AgriPage from '../agri/page';

type Subject = {
  name: string;
  icon: string;
  description: string;

};

const subjects: Subject[] = [
  { 
     name: 'Chemistry',
     icon: '/chemistry.png', 
     description: 'Find All Secondary Content',
  },
  { name: 'Physics', 
    icon: '/physics.png',
    description: 'Find All Secondary Content',
   },
  { 
    name: 'Biology',
    icon: '/biology.png',
    description: 'Find All Secondary Content',
  },
  { 
    name: 'Mathematics',
    icon: '/math.png',
    description: 'Find All Secondary Content',
  },
  { 
    name: 'Computer Studies',
    icon: '/com.png',
    description: 'Find All Secondary Content',  },
  { 
    name: 'Agriculture',
    icon: '/Agriculture.png',
    description: 'Find All Secondary Content',
   },
];

const Subjects: React.FC = () => { 
  return (
    <section className="bg-gray-100 py-10 px-4">

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Featured Subjects</h2>
            <p className="text-sm text-gray-500">Available secondary science subjects</p>
          </div>
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
                  src={subject.icon}
                  alt={subject.name}
                  className="h-32 object-contain mt-6"
                />
              </div>
              <div className="w-full border-t text-sm py-4">
                <p className="text-black-600 font-semibold">{subject.description}</p>
              </div>
              <div className="border-t w-full text-sm py-3">
                <Link href={getContentLink(subject.name)}>
                  <button className="hover:underline cursor-pointer text-orange-600 rounded">
                    View all Content
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
//function maps subjectname to url
function getContentLink(subjectName: string): string {
  switch (subjectName) {
    case 'Chemistry':
      return '/subject/chem';
    case 'Physics':
      return '/subjects/phy';
    case 'Biology':
      return '/subjects/bio';
    case 'Mathematics':
      return '/subjects/math';
    case 'Computer Studies':
      return '/subjects/com';
    case 'Agriculture':
      return '/subjects/agri';
    default:
      return '/'; //fall back link
  }
}

export default Subjects;
