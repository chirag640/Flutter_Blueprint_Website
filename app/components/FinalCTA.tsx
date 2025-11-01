"use client";

import React from "react";
import { Container, Box, Typography, Button } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function FinalCTA() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "background.default",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            p: { xs: 4, md: 6 },
            border: "1px solid rgba(2, 86, 155, 0.3)",
            borderRadius: 2,
            bgcolor: "rgba(2, 86, 155, 0.05)",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
            }}
          >
            Ready to build your next Flutter app?
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mb: 4,
              fontSize: { xs: "1rem", md: "1.125rem" },
            }}
          >
            Go from idea to production-ready project in minutes.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<RocketLaunchIcon />}
            sx={{
              px: 5,
              py: 1.5,
              fontSize: "1rem",
            }}
            href="https://pub.dev/packages/flutter_blueprint"
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Now
          </Button>
          <Box sx={{ mt: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                fontFamily: 'Consolas, Monaco, "Courier New", monospace',
              }}
            >
              dart pub global activate flutter_blueprint
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
