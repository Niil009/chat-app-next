import {
  TextField,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function ChatInput({ onSend, loading }) {
  const [input, setInput] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSend = () => {
    if (input.trim() && !loading) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <Box
      sx={{
        p: isMobile ? 1 : 2,
        borderTop: "1px solid #ddd",
        bgcolor: "white",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="e.g., Create 5 slides on AI"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
        disabled={loading}
        size={isMobile ? "small" : "medium"}
        InputProps={{
          endAdornment: (
            <IconButton onClick={handleSend} disabled={loading} color="primary">
              <SendIcon />
            </IconButton>
          ),
        }}
      />
    </Box>
  );
}
