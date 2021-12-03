import { createTheme } from "@mui/material/styles";

export const glassTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(11px) saturate(180%)",
          "-webkit-backdrop-filter": "blur(11px) saturate(180%)",
          backgroundColor: "rgba(54, 79, 129, 0.64)",
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(11px) saturate(180%)",
          "-webkit-backdrop-filter": "blur(11px) saturate(180%)",
          backgroundColor: "rgba(54, 79, 129, 0.64)",
          borderRadius: 8,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        },
      },
    },
  },
});
