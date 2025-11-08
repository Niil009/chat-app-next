import PptxGenJS from "pptxgenjs";

export async function generatePptxBlob(slides) {
  const pptx = new PptxGenJS();

  // Optional: Define custom layout
  pptx.defineLayout({ name: "A4", width: 10, height: 5.63 });

  slides.forEach((slide) => {
    const s = pptx.addSlide();

    // Slide Title
    s.addText(slide.title, {
      x: 0.5,
      y: 0.3,
      fontSize: 24,
      bold: true,
      color: "363636",
    });

    // Bullet Points
    if (slide.bullets?.length) {
      s.addText(slide.bullets.map((b) => `• ${b}`).join("\n"), {
        x: 0.5,
        y: 1.2,
        fontSize: 16,
        color: "595959",
        lineSpacingMultiple: 1.2,
      });
    }

    // ❌ Removed image display block
  });

  // Generate and return PPT blob
  return await pptx.write({ outputType: "blob" });
}
