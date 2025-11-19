"use client";

import React from "react";
import { Container, Box, Typography, Button, Chip, Stack } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

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
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background gradient */}
      <Box
        component={motion.div}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 50%, rgba(2, 86, 155, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
          backgroundSize: "200% 200%",
          opacity: 0.6,
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Chip
              label="✨ Now with 100% Error-Free Generation"
              color="primary"
              icon={<CheckCircleIcon />}
              sx={{
                fontSize: "0.8rem",
                fontWeight: 600,
                py: 2.5,
                px: 1,
                boxShadow: "0 0 20px rgba(2, 86, 155, 0.3)",
                animation: "pulse 2s ease-in-out infinite",
                "@keyframes pulse": {
                  "0%, 100%": {
                    boxShadow: "0 0 20px rgba(2, 86, 155, 0.3)",
                  },
                  "50%": {
                    boxShadow: "0 0 30px rgba(2, 86, 155, 0.5)",
                  },
                },
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
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
                88 professional files
              </Box>
              , authentication, offline-first architecture, and{" "}
              <Box
                component="span"
                sx={{ color: "success.main", fontWeight: 600 }}
              >
                zero compilation errors
              </Box>
              —in seconds.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ mb: 3 }}
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-block" }}
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
                    boxShadow: "0 4px 15px rgba(2, 86, 155, 0.3)",
                    "&:hover": {
                      boxShadow: "0 8px 30px rgba(2, 86, 155, 0.4)",
                    },
                  }}
                >
                  Get Started
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ display: "inline-block" }}
              >
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
              </motion.div>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ width: "100%", maxWidth: "500px", marginTop: "16px" }}
          >
            <Box
              sx={{
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
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}
