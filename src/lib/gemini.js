import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
  generationConfig: { responseMimeType: "application/json" },
});

export async function generateSlides(prompt, existing = []) {
  const system = `Reply ONLY with valid JSON array of slides:
  [{"title":"string","bullets":["string"],"imagePrompt":"short description for image"}]`;

  const full = existing.length
    ? `${system}\nCurrent: ${JSON.stringify(existing)}\nEdit: ${prompt}`
    : `${system}\nGenerate: ${prompt}`;

  const result = await model.generateContent([full]);
  const text = result.response.text().trim();

  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error("Invalid JSON: " + text);
  }
}
