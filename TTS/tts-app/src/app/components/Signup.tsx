"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import supabase from "../../../supabase/supabase";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setMessage("");
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      setErrorMsg("Please fill in all fields.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: "http://localhost:3000/", // after confirmation
          data: { name }, // store in auth.user_metadata, safer
        },
      });

      if (error) {
        setErrorMsg("Sign-up failed. Please try again.");
      } else {
        setMessage(
          `Thanks for signing up, ${name}! Please check your email (${email}) to confirm your account.`
        );
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Unexpected error occurred. Try again later.");
    }

    setLoading(false);
  };

  // Optional: simple password strength indicator
  const getPasswordStrength = () => {
    if (password.length >= 12) return "Strong";
    if (password.length >= 8) return "Medium";
    if (password.length > 0) return "Weak";
    return "";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-extrabold text-blue-600 text-center mb-6">
          Sign Up
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
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
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
              minLength={8}
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Password Strength */}
          {password && (
            <p
              className={`text-sm font-semibold ${
                getPasswordStrength() === "Strong"
                  ? "text-green-600"
                  : getPasswordStrength() === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
              }`}
            >
              Strength: {getPasswordStrength()}
            </p>
          )}

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Terms & Conditions */}
          <label className="flex items-center space-x-2 text-gray-600 text-sm">
            <input type="checkbox" className="accent-blue-600" required />
            <span>
              I agree to the{" "}
              <Link href="#" className="text-blue-600 underline">
                Terms & Conditions
              </Link>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white font-semibold rounded-lg shadow-md transition cursor-pointer`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          {/* Error & Success Messages */}
          {errorMsg && (
            <p className="mt-4 text-center text-red-600 font-semibold">
              {errorMsg}
            </p>
          )}
          {message && (
            <p className="mt-4 text-center text-green-600 font-semibold">
              {message}
            </p>
          )}
        </form>

        {/* Sign In Link */}
        <div className="text-center text-gray-600 mt-6">
          Already have an account?{" "}
        <Link
        href="/pages/auth/signin"
        className="text-blue-600 font-semibold hover:underline"
        >
    Sign In
  </Link>
</div>

      </div>
    </div>
  );
};

export default SignUp;
