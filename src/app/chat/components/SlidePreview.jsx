import { Box, Typography, Paper, useMediaQuery, useTheme } from "@mui/material";

export default function SlidePreview({ slides }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  if (slides.length === 0) {
    return (
      <Typography color="text.secondary" align="center" sx={{ mt: 8 }}>
        No slides yet.
      </Typography>
    );
  }

  return (
    <Box sx={{ p: isMobile ? 1 : 2 }}>
      <Typography variant="h6" gutterBottom>
        Preview ({slides.length} slides)
      </Typography>
      {slides.map((slide, i) => (
        <Paper
          key={i}
          sx={{ p: isMobile ? 1.5 : 2, mb: 2, bgcolor: "#fafafa" }}
        >
          <Typography
            variant={isMobile ? "subtitle2" : "subtitle1"}
            fontWeight="bold"
          >
            {slide.title}
          </Typography>
          {slide.bullets?.map((b, bi) => (
            <Typography key={bi} variant={isMobile ? "caption" : "body2"}>
              • {b}
            </Typography>
          ))}
          {slide.imagePrompt && (
            <Typography variant="caption" color="primary">
              [Image: {slide.imagePrompt}]
            </Typography>
          )}
        </Paper>
      ))}
    </Box>
  );
}
