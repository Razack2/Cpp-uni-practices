import React from 'react'
import Link from 'next/link';


const Login = () => {
  return (
   <>
      <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-2 shadow-md rounded-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form action="submit" method="post" encType="multipart/form-data">
          <input
            maxLength={20}
            form="multipart/form-data"
            type="email"
            placeholder="Email"
            className="w-full border p-2 mb-4 rounded"
            required title="Enter your email"

          />
          <input 
            minLength={8}
            maxLength={20}

            type="password"
            placeholder="Password"
            className="w-full border p-2 mb-4 rounded"
            required title = "Enter your password"
           
          /> 
         
          <button
          type="submit" 
          className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 pointer-events-auto"
          >
            Log In
          </button> 
          <Link className="text-sm text-black-900 font-semibold"  href="/reset">Lost Your Password?</Link>
        </form>
      </div>
    </div>
   </>

  );
}

export default Login
