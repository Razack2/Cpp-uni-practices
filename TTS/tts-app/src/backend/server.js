import express from "express";
import cors from "cors";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.post("/api/tts", async (req, res) => {
  try {
    const { text, voiceId, speed, pitch } = req.body;

    let parsedSpeed = 1.0; // Default
    if (speed) {
      if (typeof speed === 'string' && speed.endsWith('%')) {
        parsedSpeed = Math.min(Math.max(parseFloat(speed) / 100, 0.7), 1.2);
      } else if (typeof speed === 'number') {
        parsedSpeed = Math.min(Math.max(speed, 0.7), 1.2);
      }
      // Add mappings if speed is qualitative, e.g., if (speed === 'fast') parsedSpeed = 1.2;
    }
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": process.env.ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.5,
            speed: parsedSpeed, // Added speed here
          },
          // If you want to try SSML in text (untested for prosody):
          // text: `<speak><prosody rate="${speed}" pitch="${pitch}">${text}</prosody></speak>`,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text(); 
      throw new Error(`ElevenLabs API error: ${response.status} - ${errorText}`);
    }

    const buffer = await response.arrayBuffer();
    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Disposition": "inline; filename=output.mp3",
    });
    res.send(Buffer.from(buffer));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message }); // Send the actual error message back for better debugging
  }
});

app.listen(5000, () => console.log("Backend running on port 5000"));