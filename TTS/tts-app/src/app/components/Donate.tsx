"use client";
import React, { useState, useEffect } from "react";
import supabase from "../../../supabase/supabase";
import VoiceRecorder from "./VoiceRecoder";

interface Donor {
  id: string;
  name: string;
  phone: string;
  amount: string;
  verified: boolean;
  created_at: string;
}

const Donate = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [donors, setDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState("");

  const agentCode = "10150762";
  const agentPhone = "0996436746";

  // Fetch recent donors
  const fetchDonors = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("donations")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(3);

    if (error) {
      console.error(error);
    } else {
      setDonors(data as Donor[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchDonors();

    const subscription = supabase
      .channel("donations")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "donations" },
        () => {
          fetchDonors();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Handle donation form submission
  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !amount.trim()) {
      setMsg("Please fill all fields.");
      return;
    }

    // Check for duplicate donation (same name + phone)
    const duplicate = donors.find(
      (d) => d.name.toLowerCase() === name.toLowerCase() && d.phone === phone
    );
    if (duplicate) {
      setMsg(
        "You have already submitted a donation with this name and phone number."
      );
      return;
    }

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, amount }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server Error");
      }

      const data = await res.json();
      setMsg(
        data.message ||
          "Donation submitted! You will appear in pending until confirmed by admin."
      );

      // Reset form
      setName("");
      setPhone("");
      setAmount("");

      fetchDonors();
    } catch (err: any) {
      console.error(err);
      alert(`Error submitting donation: ${err.message}`);
    }
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Support Our Project ❤️
        </h2>
        <p className="text-gray-600 mb-8">
          Your donations help us keep this project running. Every contribution
          matters!
        </p>

        {/* Airtel Details */}
        <div className="bg-white shadow-lg rounded-xl p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send Donation To:
          </h3>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Agent Code:</span> {agentCode}
          </p>
          <p className="text-lg text-gray-700">
            <span className="font-bold">Phone Number:</span> {agentPhone}
          </p>
        </div>

        {/* Donation Form */}
        <form
          onSubmit={handleDonate}
          className="bg-white rounded-xl shadow-lg p-8 mb-12 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-lg p-3 w-full"
            minLength={3}
            required
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border rounded-lg p-3 w-full"
            maxLength={10}
            minLength={10}
            required
          />
          <input
            type="number"
            placeholder="Enter Amount (MK)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded-lg p-3 w-full"
            required
          />
          <button
            type="submit"
            className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition cursor-pointer"
          >
            Confirm Donation
          </button>
          {msg && (
            <p className="mt-4 text-center text-gray-700 font-medium">{msg}</p>
          )}
        </form>

        {/* Donors List */}
        <h3 className="text-2xl font-bold text-gray-700 mb-4">Recent Donors</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {donors.map((donor, index) => (
              <div
                key={donor.id}
                className={`bg-white shadow-md rounded-lg p-4 flex justify-between items-center ${
                  donor.verified
                    ? "border-l-4 border-green-600"
                    : "border-l-4 border-red-500"
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {donor.name} (
                    {donor.phone.replace(
                      /(\d{4})(\d{3})(\d{3})/,
                      "$1* ** ***"
                    )}
                    ){" "}
                    {index === 0 && (
                      <span className="text-yellow-500 ml-2">🌟 New</span>
                    )}
                  </p>
                  <p className="text-gray-500 text-sm">
                    Status: {donor.verified ? "✅ Paid" : "⏳ Pending"}
                  </p>
                </div>
                <p className="text-gray-800 font-bold">Mk{donor.amount}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Donate;
