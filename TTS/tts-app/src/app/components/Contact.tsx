"use client";
import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import supabase from "../../../supabase/supabase";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errorMsg, setErrorMsg] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.from("contact_messages").insert([
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    ]);

    if (error) {
      console.error(error);
      setErrorMsg("Something went wrong. Try again later.");
      setMessage("");
    } else {
      setMessage(`Thank you, ${formData.name}! Your message has been sent.`);
      setErrorMsg("");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
      <TopNavbar />
      <div className="max-w-4xl mx-auto p-8 mt-12 bg-white shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">Give Feedback</h1>
        <p className="text-gray-700 mb-8 text-center">
          If you have any questions, feedback, or want to collaborate, feel free to reach out! We’d love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="*Your Name"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="*Your Email"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"   // ✅ fixed name
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={6}
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition cursor-pointer"
          >
            Send Message
          </button>

          {errorMsg && <p className="text-red-600 text-sm mt-2">{errorMsg}</p>}
          {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
        </form>

        <div className="mt-8 text-center text-gray-600">
          <p>Or reach us via:</p>
          <div className="flex justify-center space-x-6 mt-3">
            <a href="mailto:support@edmavoice.ai" className="hover:text-blue-600 transition">
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
