
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#166534",
      light: "#22c55e",
      dark: "#14532d",
    },
    secondary: {
      main: "#D97706",
    },
    background: {
      default: "#F8FAF7",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#1F2937",
      secondary: "#64748B",
    },
  },

  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      "Arial",
      "sans-serif",
    ].join(","),

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;
