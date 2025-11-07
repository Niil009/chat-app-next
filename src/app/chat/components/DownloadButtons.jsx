import { Button, Box, useMediaQuery, useTheme } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

export default function DownloadButtons({ onDownload, disabled }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        p: isMobile ? 1 : 2,
        borderTop: "1px solid #ddd",
        bgcolor: "white",
      }}
    >
      <Button
        fullWidth
        variant="contained"
        startIcon={<DownloadIcon />}
        onClick={onDownload}
        disabled={disabled}
        size={isMobile ? "medium" : "large"}
      >
        Download PPTX
      </Button>
    </Box>
  );
}
