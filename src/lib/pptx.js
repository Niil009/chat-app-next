import PptxGenJS from "pptxgenjs";

export async function generatePptxBlob(slides) {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: "A4", width: 10, height: 5.63 });

  slides.forEach((slide) => {
    const s = pptx.addSlide();
    s.addText(slide.title, { x: 0.5, y: 0.3, fontSize: 24, bold: true });
    if (slide.bullets?.length) {
      s.addText(slide.bullets.map((b) => `• ${b}`).join("\n"), {
        x: 0.5,
        y: 1.2,
        fontSize: 16,
      });
    }
    if (slide.imagePrompt) {
      s.addText(`[Image: ${slide.imagePrompt}]`, {
        x: 6.5,
        y: 1.2,
        w: 3,
        h: 3,
        align: "center",
        fill: "F0F0F0",
      });
    }
  });

  return await pptx.write({ outputType: "blob" });
}
