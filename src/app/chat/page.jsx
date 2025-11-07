"use client";
import { useState } from "react";
import ChatLayout from "./components/ChatLayout";
import ChatMessages from "./components/ChatMessages";
import ChatInput from "./components/ChatInput";
import SlidePreview from "./components/SlidePreview";
import DownloadButtons from "./components/DownloadButtons";
import { useChat } from "@/hooks/useChat";
import { CircularProgress, Box, useMediaQuery, useTheme } from "@mui/material";

export default function ChatPage() {
  const { messages, slides, loading, sendPrompt, downloadPptx } = useChat();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [showPreview, setShowPreview] = useState(!isMobile);

  return (
    <>
      <ChatLayout
        chat={
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <ChatMessages messages={messages} />
            {loading && (
              <Box sx={{ p: 2, textAlign: "center" }}>
                <CircularProgress />
              </Box>
            )}
            <ChatInput onSend={sendPrompt} loading={loading} />
          </Box>
        }
        preview={
          <>
            {isMobile && (
              <Box
                sx={{
                  textAlign: "center",
                  p: 1,
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Button onClick={() => setShowPreview(!showPreview)}>
                  {showPreview ? "Hide" : "Show"} Preview
                </Button>
              </Box>
            )}
            {showPreview && <SlidePreview slides={slides} />}
            <DownloadButtons
              onDownload={downloadPptx}
              disabled={slides.length === 0 || loading}
            />
          </>
        }
      />
    </>
  );
}
