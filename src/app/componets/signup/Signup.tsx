import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      
      <div className="bg-gray-100 p-6 shadow-md rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form action="submit" method="post" encType="multipart/form-data">
          <input
            type="email"
            name="email"
            placeholder="Email"
            maxLength={50}
            required
            title="Enter your email"
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            required title="Enter your username"
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            minLength={8}
            maxLength={20}
            required title="Enter your password"
            className="w-full border p-2 mb-4 rounded"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            minLength={8}
            maxLength={20}
            required title="Confirm your password"
            className="w-full border p-2 mb-4 rounded"
          />
         
          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 transition-colors"
          >
            Sign Up
          </button>
          
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{' '}
          <Link href="/login" className="text-orange-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
