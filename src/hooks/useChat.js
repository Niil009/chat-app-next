import { useState, useEffect } from "react";
import { generateSlides } from "@/lib/gemini";
import { generatePptxBlob } from "@/lib/pptx";
import { saveChat, loadChats } from "@/utils/storage";

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const history = loadChats();
    if (history.length) {
      const last = history[history.length - 1];
      setMessages(last.messages || []);
      setSlides(last.slides || []);
    }
  }, []);

  const sendPrompt = async (text) => {
    if (!text.trim()) return;
    const userMsg = { role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const newSlides = await generateSlides(text, slides);
      const aiMsg = { role: "ai", text: `${newSlides.length} slides updated!` };
      const updated = [...messages, userMsg, aiMsg];
      setMessages(updated);
      setSlides(newSlides);
      saveChat({ messages: updated, slides: newSlides });
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "ai", text: `Error: ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const downloadPptx = async () => {
    if (!slides.length) return;
    const blob = await generatePptxBlob(slides);
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `presentation-${Date.now()}.pptx`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return { messages, slides, loading, sendPrompt, downloadPptx };
}
