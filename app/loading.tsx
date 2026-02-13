import { Box, CircularProgress, Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #16213E 100%)",
      }}
    >
      <CircularProgress
        size={60}
        thickness={4}
        sx={{
          color: "#00d4ff",
          filter: "drop-shadow(0 4px 12px rgba(0, 212, 255, 0.5))",
        }}
      />
      <Typography
        sx={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "1.1rem",
          fontWeight: 500,
        }}
      >
        Loading Flutter Blueprint...
      </Typography>
    </Box>
  );
}
