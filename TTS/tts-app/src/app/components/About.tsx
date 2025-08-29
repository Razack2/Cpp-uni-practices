import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-6">
      {/* Hero Section */}
      <div className="bg-blue-50 p-10 rounded-xl shadow-md mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">
          About Edma Voicefy
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Edma Voicefy is a state-of-the-art text-to-speech application that leverages advanced AI technology to deliver natural and expressive voiceovers. 
          With cutting-edge speech synthesis, every word sounds clear, professional, and human-like.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our mission is to make voice synthesis accessible and easy to use for everyone — whether for personal projects, educational purposes, or professional content creation. 
          AI-powered voices can transform learning, storytelling, and content production with simplicity and creativity.
        </p>
      </div>

      {/* Values Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Innovation</h3>
            <p className="text-gray-700">
              We constantly push the boundaries of AI technology to deliver smarter solutions.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Accessibility</h3>
            <p className="text-gray-700">
              We strive to make our tools available and user-friendly for everyone.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-blue-600 mb-2">Community</h3>
            <p className="text-gray-700">
              Collaboration and feedback are at the core of our development philosophy.
            </p>
          </div>
        </div>
      </div>

      {/* CEO Section */}
      <div className="mb-12 bg-white p-8 rounded-xl shadow hover:shadow-lg transition">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">CEO & Founder</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our CEO and Founder, <span className="font-semibold"><a href="https://RazackDeveloper.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Razack Developer</a></span>, is a visionary leader with a passion for AI and its potential to transform industries. 
          With expertise in technology and entrepreneurship, Razack drives the development of cutting-edge solutions that empower users and enhance their experiences.
        </p>
      </div>

      {/* Call-to-action */}
      <div className="text-center">
        <a
          href="/pages/contact"
          className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-bold rounded-xl shadow-md hover:bg-blue-700 transition"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About;
