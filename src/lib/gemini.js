import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

export async function generateSlides(prompt, existing = []) {
  const system = `Reply ONLY with valid JSON array of slides:
  [{"title":"string","bullets":["string"],"imagePrompt":"optional string"}]`;

  const full = existing.length
    ? `${system}\nCurrent slides: ${JSON.stringify(
        existing
      )}\nEdit request: ${prompt}`
    : `${system}\nGenerate slides for: ${prompt}`;

  const result = await model.generateContent(full);
  const text = result.response.text().trim();

  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error("Invalid JSON from AI");
  }
}
