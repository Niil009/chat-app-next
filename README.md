# 🎨 Gemini AI Slide Generator

An intelligent **presentation generator** built using **Next.js**, **Google Gemini AI**, and **PptxGenJS**.  
This app allows users to enter a topic or prompt, automatically generate structured slide content (title, bullet points, image prompts), and download it as a PowerPoint (`.pptx`) file.

---

## 🚀 Features

- ✨ Generate slides instantly using **Gemini 2.5 Flash**
- 📋 Each slide includes a **title**, **bulleted points**, and **optional image prompts**
- 💾 Download the presentation as a `.pptx` file
- 🧠 AI-generated content with smart formatting
- 🌐 Deployed seamlessly on **Vercel**

---

## 🛠️ Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/)
- **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Presentation Builder:** [PptxGenJS](https://gitbrent.github.io/PptxGenJS/)
- **Styling:**  MUI (optional)
- **Hosting:** [Vercel](https://vercel.com/)

---

## ⚙️ Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/gemini-slide-generator.git
cd gemini-slide-generator
npm install

NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
chat-app-next/
├── .env.local
├── .gitignore
├── README.md                   
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── public/
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── chat/
│   │   │   ├── page.jsx
│   │   │   └── components/
│   │   │       ├── Header.jsx
│   │   │       ├── ChatLayout.jsx
│   │   │       ├── MessageList.jsx
│   │   │       ├── SlidePreview.jsx
│   │   │       └── InputArea.jsx
│   │   └── layout.js
│   ├── hooks/
│   │   └── useChat.js
│   ├── lib/
│   │   ├── gemini.js           # AI Logic
│   │   └── pptx.js             # PPTX with Images
│   └── utils/
│       └── storage.js
└── components.json
