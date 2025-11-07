import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function ChatLayout({ chat, preview }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: "100%",
        bgcolor: "background.default",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {chat}
      </Box>
      {!isMobile && (
        <Box
          sx={{
            width: { md: 420, lg: 500 },
            bgcolor: "#fff",
            p: 2,
            overflow: "auto",
            borderLeft: "1px solid #ddd",
          }}
        >
          {preview}
        </Box>
      )}
    </Box>
  );
}
