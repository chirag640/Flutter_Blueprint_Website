"use client";

import { useEffect } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #16213E 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ textAlign: "center" }}>
          <ErrorOutlineIcon
            sx={{
              fontSize: 80,
              color: "#F44336",
              mb: 3,
              filter: "drop-shadow(0 4px 12px rgba(244, 67, 54, 0.3))",
            }}
          />
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: "#fff",
            }}
          >
            Something went wrong!
          </Typography>
          <Typography
            sx={{
              color: "rgba(255, 255, 255, 0.7)",
              mb: 4,
              fontSize: "1.1rem",
            }}
          >
            We encountered an unexpected error. Please try again.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<RefreshIcon />}
            onClick={reset}
            sx={{
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              fontWeight: 600,
              textTransform: "none",
              background: "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)",
              boxShadow: "0 8px 32px rgba(2, 86, 155, 0.5)",
              borderRadius: "12px",
              "&:hover": {
                background: "linear-gradient(135deg, #01447a 0%, #00b8e6 100%)",
                boxShadow: "0 12px 40px rgba(2, 86, 155, 0.6)",
                transform: "translateY(-2px)",
              },
              transition: "all 0.3s ease",
            }}
          >
            Try Again
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
