"use client";

import React from "react";
import { Container, Box, Typography, Button, Chip, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 18 },
        pb: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #121212 0%, #1A1A1A 100%)",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Chip
            label="Enterprise-grade Flutter scaffolding CLI"
            color="primary"
            icon={<CodeIcon />}
            sx={{
              fontSize: "0.8rem",
              fontWeight: 600,
              py: 2.5,
              px: 1,
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 700,
              color: "text.primary",
              mb: 1,
              lineHeight: 1.2,
            }}
          >
            Stop wasting hours
            <br />
            on boilerplate.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1.125rem", sm: "1.25rem", md: "1.375rem" },
              color: "text.secondary",
              fontWeight: 400,
              maxWidth: "700px",
              mb: 2,
              lineHeight: 1.6,
            }}
          >
            Generate production-ready Flutter projects with{" "}
            <Box
              component="span"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              43+ professional files
            </Box>
            , complete architecture, and error handling—in seconds.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ mb: 3 }}
          >
            <Button
              variant="contained"
              size="large"
              startIcon={<RocketLaunchIcon />}
              onClick={() => scrollToSection("quick-start")}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
              }}
            >
              Get Started
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="https://pub.dev/packages/flutter_blueprint"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: "1rem",
              }}
            >
              View on Pub.dev
            </Button>
          </Stack>

          <Box
            sx={{
              width: "100%",
              maxWidth: "500px",
              mt: 2,
              "& pre": {
                margin: 0,
                borderRadius: 2,
              },
            }}
          >
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "20px 24px",
                backgroundColor: "#1E1E1E",
                border: "1px solid rgba(2, 86, 155, 0.3)",
                fontSize: "1rem",
              }}
            >
              {`flutter_blueprint init`}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
