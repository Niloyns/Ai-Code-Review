const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

async function main(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: [{ role: "user", parts: [{ text: prompt }] }],
    config: {
      systemInstruction:
        "You are a senior software engineer and expert code reviewer. Your role is to provide clear, constructive, and concise feedback on code. Identify issues, suggest improvements, and ensure best practices in readability, performance, and maintainability.",
    },
  });
  console.log(response); // Debug: See the actual response structure
  const text = response?.candidates?.[0]?.content?.parts?.[0]?.text || "";
  console.log(text);
  return text;
}

module.exports = main;
// This module exports the main function that interacts with the Google Gemini AI service.
