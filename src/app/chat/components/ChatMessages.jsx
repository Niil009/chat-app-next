import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";

export default function ChatMessages({ messages }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ flex: 1, p: isMobile ? 1 : 2, overflowY: "auto" }}>
      {messages.length === 0 && (
        <Typography color="text.secondary" align="center" sx={{ mt: 4 }}>
          Type a prompt to generate slides...
        </Typography>
      )}
      {messages.map((msg, i) => (
        <Box
          key={i}
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
          }}
        >
          <Paper
            sx={{
              p: isMobile ? 1.5 : 2,
              maxWidth: "80%",
              bgcolor: msg.role === "user" ? "primary.main" : "#eee",
              color: msg.role === "user" ? "white" : "text.primary",
            }}
          >
            <Typography variant={isMobile ? "body2" : "body1"}>
              {msg.text}
            </Typography>
          </Paper>
        </Box>
      ))}
    </Box>
  );
}
