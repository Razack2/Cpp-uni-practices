"use client";
import React, { useRef, useState, useEffect } from "react";
import PricingModal from "../components/PricingModal";
import { playAudio, pauseAudio, downloadAudio, calculateCredits } from "../../utils/audioControls";
import VoiceRecorder from "./VoiceRecoder";

const Home = () => {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("21m00Tcm4TlvDq8ikWAM");
  const [speed, setSpeed] = useState(1);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [credits, setCredits] = useState(200);
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const maxWords = 500;

  // word counting & trimming
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= maxWords) {
      setText(e.target.value);
    } else {
      setText(words.slice(0, maxWords).join(" "));
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      pauseAudio(audioRef);
      setIsPlaying(false);
    } else {
      playAudio(audioRef);
      setIsPlaying(true);
    }
  };

  // GENERATE voice
  const handleGenerate = async () => {
  if (!text.trim()) return setMessage("Please enter some text.");
  if (!voice) return setMessage("Please select a voice.");

  if (credits <= 0 || wordCount >= maxWords) {
    setShowModal(true);
    return;
  }

  const newCredits = calculateCredits(text, credits);
  if (newCredits < 0) {
    setShowModal(true);
    return;
  }
  setCredits(newCredits);

  try {
    const response = await fetch("http://localhost:5000/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, voiceId: voice, speed }),
    });

    if (!response.ok) throw new Error(`Server error: ${response.status}`);

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
    if (audioRef.current) audioRef.current.src = url;
    setMessage("✅ Voice generated successfully! You can play, pause or download.");
  } catch (error) {
    console.error("❌ Fetch error:", error);
    setMessage("Error generating voice. Please try again.");
    setShowModal(true); // show modal on error too
  }
};

  return (
    <main className="flex flex-col items-center py-25 p-8 flex-grow">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Text-to-Speech Converter
      </h1>

      {/* TEXTAREA */}
      <textarea
        rows={10}
        className="w-3/4 p-4 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none mb-6"
        placeholder={`Enter your text here (max ${maxWords} words)...`}
        value={text}
        onChange={handleTextChange}
        disabled={credits <= 0} // disable input when credits finished
      />

      {/* Word Count + Credits */}
      <div className="w-3/4 flex items-center justify-between text-gray-600 mb-6">
        <p className="text-sm">
          Word Count:{" "}
          <span className="font-semibold text-gray-800">{wordCount}</span> / {maxWords}
        </p>
        <p className="text-sm">
          Credits Remaining:{" "}
          <span className={`font-semibold ${credits > 0 ? "text-green-600" : "text-red-600"}`}>
            {credits}
          </span>
        </p>
      </div>

      {/* Voice Selector */}
      <div className="w-3/4 mb-6">
        <label className="block mb-2 font-semibold text-gray-700">
          Choose Voice:
        </label>
        <select
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm"
          value={voice}
          onChange={(e) => setVoice(e.target.value)}
        >
          <option value="21m00Tcm4TlvDq8ikWAM"> Sophia – English (Female) • Warm & Friendly </option>
          <option value="AZnzlk1XvdvUeBnXmlld"> Olivia – English (Female) • Clear & Natural </option>
          <option value="EXAVITQu4vr4xnSDxMaL"> Emma – English (Female) • Deep & Professional </option>
          <option value="TxGEqnHWrfWFTfGW9XjX"> James – English (Male) • Energetic & Expressive </option>
          <option value="VR6AewLTigWG4xSOukaG"> Carlos – Español (Male) • Confident & Smooth </option>
          <option value="pNInz6obpgDQGcFmaJgB"> Daniel – Español (Male) • Warm & Engaging </option>
          <option value="yoZ06aMxZJJ28mfd3POQ"> Étienne – Français (Male) • Elegant & Formal </option>
          <option value="XrExE9yKIg1WjnnlVkGX"> Camille – Français (Female) • Soft & Charming </option>
          <option value="Zlb1dXrM653N07WRdFW3"> Lukas – Deutsch (Male) • Strong & Clear </option>
          <option value="ErXwobaYiN019PkySvjV"> Richard – Deutsch (Male) • Calm & Friendly </option>
        </select>
      </div>

      {/* Speed Control */}
      <div className="flex space-x-12 mb-6">
        <div>
          <label className="block font-semibold text-gray-700">Speed</label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            className="w-40"
            disabled={credits <= 0} // disable when no credits
          />
          <span className="ml-2">{speed}x</span>
        </div>
      </div>

      {/* Generate Button */}
    <button
      className="px-6 py-3 rounded-lg shadow-md transition cursor-pointer bg-blue-600 text-white hover:bg-blue-700"
      onClick={handleGenerate}
    >
    🎙 Generate Voice
</button>

      {/* Audio Controls */}
      {audioUrl && (
        <div className="mt-6 flex flex-col items-center">
          <div className="flex gap-4">
            {/* Play / Pause Toggle */}
            <button
              onClick={togglePlayPause}
              className={`px-4 py-2 rounded-lg text-white font-semibold transition cursor-pointer ${
                isPlaying
                  ? "bg-yellow-500 hover:bg-yellow-600"
                  : "bg-green-600 hover:bg-green-700"
              }`}
            >
              {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>

            {/* Download Button */}
            <button
              onClick={() => downloadAudio(audioUrl)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition cursor-pointer"
            >
              ⬇ Download
            </button>

          </div>
         
        </div>
      )}

      {/* Message */}
      {message && <p className="text-gray-700 font-semibold mt-4">{message}</p>}
      {/* Audio Element */}
       <VoiceRecorder />
      <audio ref={audioRef} src={audioUrl || undefined} className="mt-4" onEnded={() => setIsPlaying(false)} />

      {/* Pricing Modal */}
      {showModal && <PricingModal onClose={() => setShowModal(false)} isOpen={true} />}

    </main>
  );
};

export default Home;
