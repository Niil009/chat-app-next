"use client";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "@/styles/theme";
import { CssBaseline, Container } from "@mui/material";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Container
            maxWidth={false}
            disableGutters
            sx={{ height: "calc(100vh - 64px)" }}
          >
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
