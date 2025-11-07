"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          sx={{ flexGrow: 1 }}
        >
          AI PPT Chat
        </Typography>
        <Button color="inherit" onClick={() => router.push("/chat")}>
          New Chat
        </Button>
      </Toolbar>
    </AppBar>
  );
}
