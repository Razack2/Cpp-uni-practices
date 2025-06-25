import Link from 'next/link';

const Content = () => {
  return (
    <section className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-4 text-blue-800">What is EduPaMalawi?</h2>
      <p className="max-w-3xl mx-auto mb-10 text-gray-700">
        EduPaMalawi is a digital platform that connects and supports secondary schools in Malawi through shared access to resources, communication tools, academic updates, and school services.
      </p>
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        <div className="bg-white shadow-md p-6 rounded-xl w-full md:w-64">
          <h3 className="font-semibold text-lg mb-2">For Instructors</h3>
          <Link href="/signup">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer">Upload Content</button>
          </Link>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl w-full md:w-64">
          <h3 className="font-semibold text-lg mb-2">For Students</h3>
          <Link href="/signup">
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 cursor-pointer">Register</button>
          </Link>
        </div>
      </div>
      <a href="/FAQ" className="text-orange-600 underline font-medium">Frequently Asked Questions: Instructor | Student</a>
    </section>
  );
};

export default Content;