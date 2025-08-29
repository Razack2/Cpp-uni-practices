"use client";
import React, { useState, useRef, useEffect } from "react";

const VoiceRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    try {
      // Request mic access
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: "audio/webm", // More compatible
      });

      chunks.current = []; // reset chunks for new recording

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) chunks.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);

        // Free old object URL if exists
        if (audioURL) URL.revokeObjectURL(audioURL);

        setAudioURL(url);
        chunks.current = [];
      };

      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error("Microphone access denied or error:", err);
      alert("Unable to access microphone. Please check permissions.");
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);

    // Stop mic stream (important!)
    streamRef.current?.getTracks().forEach((track) => track.stop());
    streamRef.current = null;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioURL) URL.revokeObjectURL(audioURL);
      streamRef.current?.getTracks().forEach((track) => track.stop());
    };
  }, [audioURL]);

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-2">Record Your Voice</h2>

      {!recording ? (
        <button
          onClick={startRecording}
          className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 cursor-pointer"
        >
          🎤 Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className="px-4 py-2 bg-red-600 text-white rounded-lg shadow hover:bg-red-700 cursor-pointer"
        >
          ⏹ Stop Recording
        </button>
      )}

      {audioURL && (
        <div className="mt-4">
          <p className="font-medium">Your Recording:</p>
          <audio controls src={audioURL} className="mt-2 w-full rounded" />
        </div>
      )}
    </div>
  );
};

export default VoiceRecorder;
