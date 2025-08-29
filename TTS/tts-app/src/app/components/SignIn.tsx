"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import supabase  from "../../../supabase/supabase";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const router = useRouter();
  const handleSignIn = () => {
    router.push("/");
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMsg("Please enter both email and password.");
      return;
    }

    setLoading(true);

    // Supabase Sign In
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log("Signed in:", data);
      // redirect to home or dashboard
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <span
              className="absolute right-3 top-10 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-blue-600" />
              <span>Remember me</span>
            </label>
            <Link href="/pages/auth/forgotpassword" className="hover:text-blue-600">
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
         <button
          type="button"
          onClick={handleSignIn}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center"
          disabled={loading}
          >
           {loading ? "Signing In..." : "Sign In"}
          {loading && <FaSpinner className="animate-spin ml-2" />}
        </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center text-gray-600 mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/pages/auth/signup" className="text-blue-600 font-semibold hover:underline cursor-pointer">
            Sign Up
          </Link>
          <p className="text-red-600 font-semibold">{errorMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
