import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: { main: "#1976d2" },
    background: { default: "#f9f9fb" },
  },
  typography: { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif' },
});
