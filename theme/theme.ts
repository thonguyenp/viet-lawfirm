import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0d47a1" // xanh navy
    },
    secondary: {
      main: "#ffb400" // vàng gold
    },
    text: {
      primary: "#000000",
      secondary: "#455a64" // xám
    }
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    h2: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    h3: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    h4: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    h5: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    h6: {
      fontFamily: "Playfair Display, serif",
      fontWeight: 700
    },
    button: {
      textTransform: "none",
      fontWeight: 600
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: "all 0.3s",
          ":hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
          }
        }
      }
    }
  }
});

export default theme;
