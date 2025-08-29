"use client";
import React, { useState, useEffect } from "react";
import supabase from "../../../supabase/supabase";

interface VoiceGeneratorProps {
  userId: string; // the current logged-in user's id
}

const VoiceGenerator: React.FC<VoiceGeneratorProps> = ({ userId }) => {
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const checkGenerated = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("voice_generated")
        .eq("id", userId)
        .single();

      if (error) {
        console.error(error);
        return;
      }
      if (data?.voice_generated) setDisabled(true);
    };

    checkGenerated();
  }, [userId]);

  const handleGenerate = async () => {
    if (disabled) return;

    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/generateVoice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, text: "Hello world" }), // replace text with dynamic input if needed
      });

      const data = await res.json();

      if (!res.ok) {
        setMsg(data.error || "Failed to generate voice");
      } else {
        setMsg("✅ Voice generated successfully!");
        setDisabled(true);
        console.log("Generated audio URL:", data.audioUrl); // you can play it or save
      }
    } catch (err) {
      console.error(err);
      setMsg("❌ Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={handleGenerate}
        disabled={disabled || loading}
        className={`px-4 py-2 rounded-lg font-semibold text-white transition ${
          disabled || loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }`}
      >
        {loading ? "Generating..." : disabled ? "Voice Already Generated" : "Generate Voice"}
      </button>
      {msg && <p className="text-gray-700 text-sm">{msg}</p>}
    </div>
  );
};

export default VoiceGenerator;
