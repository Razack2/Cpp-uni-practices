// utils/audioControls.js
export const playAudio = (audioRef) => {
  if (audioRef.current) {
    audioRef.current.play();
  }
};

export const pauseAudio = (audioRef) => {
  if (audioRef.current) {
    audioRef.current.pause();
  }
};

export const downloadAudio = (audioUrl) => {
  if (!audioUrl) return;
  const link = document.createElement("a");
  link.href = audioUrl;
  link.download = "voice.mp3";
  link.click();
};

// Calculate credits based on number of words
export const calculateCredits = (text, currentCredits) => {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return currentCredits - words;
};
