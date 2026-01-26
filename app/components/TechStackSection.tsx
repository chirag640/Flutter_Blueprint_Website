"use client";

import React from "react";
import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import { motion } from "framer-motion";

const technologies = [
  {
    category: "State Management",
    items: [
      { name: "Provider", color: "#4CAF50" },
      { name: "Riverpod", color: "#00D4FF" },
      { name: "BLoC", color: "#02569B" },
    ],
  },
  {
    category: "Networking",
    items: [
      { name: "Dio", color: "#FF5722" },
      { name: "WebSocket", color: "#9C27B0" },
      { name: "Connectivity Plus", color: "#2196F3" },
    ],
  },
  {
    category: "Storage",
    items: [
      { name: "Hive", color: "#FFB74D" },
      { name: "Shared Preferences", color: "#4CAF50" },
      { name: "Secure Storage", color: "#E91E63" },
    ],
  },
  {
    category: "Authentication",
    items: [
      { name: "JWT", color: "#00BCD4" },
      { name: "OAuth 2.0", color: "#FF9800" },
      { name: "Biometric", color: "#9C27B0" },
      { name: "Google Sign-In", color: "#4285F4" },
      { name: "Apple Sign-In", color: "#000000" },
    ],
  },
  {
    category: "Firebase",
    items: [
      { name: "FCM", color: "#FFCA28" },
      { name: "Analytics", color: "#F57C00" },
      { name: "Crashlytics", color: "#FF5722" },
    ],
  },
  {
    category: "Maps & Location",
    items: [
      { name: "Google Maps", color: "#34A853" },
      { name: "Geolocator", color: "#4285F4" },
      { name: "Geocoding", color: "#EA4335" },
    ],
  },
  {
    category: "Media",
    items: [
      { name: "Image Picker", color: "#2196F3" },
      { name: "Image Cropper", color: "#E91E63" },
      { name: "Permission Handler", color: "#4CAF50" },
    ],
  },
  {
    category: "CI/CD",
    items: [
      { name: "GitHub Actions", color: "#2088FF" },
      { name: "GitLab CI", color: "#FC6D26" },
      { name: "Azure Pipelines", color: "#0078D4" },
    ],
  },
];

const generatedFolders = [
  {
    name: "lib/core/api/",
    files: ["api_client.dart", "auth_interceptor.dart", "api_config.dart"],
    description: "Production-ready API client with interceptors",
  },
  {
    name: "lib/core/auth/",
    files: ["jwt_handler.dart", "oauth_helper.dart", "biometric_auth.dart"],
    description: "Complete authentication system",
  },
  {
    name: "lib/core/storage/",
    files: ["local_storage.dart", "secure_storage.dart", "hive_manager.dart"],
    description: "Multi-layer storage solution",
  },
  {
    name: "lib/core/offline/",
    files: [
      "sync_queue.dart",
      "conflict_resolver.dart",
      "network_monitor.dart",
    ],
    description: "Offline-first architecture",
  },
  {
    name: "lib/core/security/",
    files: [
      "certificate_pinner.dart",
      "encrypted_storage.dart",
      "device_checker.dart",
    ],
    description: "Enterprise-grade security",
  },
  {
    name: "lib/core/theme/",
    files: ["app_colors.dart", "app_typography.dart", "app_theme.dart"],
    description: "Material 3 theme system",
  },
];

export default function TechStackSection() {
  return (
    <Box
      id="tech-stack"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0D0D15 50%, #0A0A0A 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 900,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #FFB74D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Battle-Tested Stack
            </Typography>
            <Typography
              sx={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Built with the most popular and reliable Flutter packages
            </Typography>
          </motion.div>
        </Box>

        {/* Technology Grid */}
        <Grid container spacing={3} sx={{ mb: 10 }}>
          {technologies.map((category, catIndex) => (
            <Grid item xs={12} sm={6} md={3} key={catIndex}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    height: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "rgba(255, 255, 255, 0.4)",
                      letterSpacing: "0.1em",
                      mb: 2,
                    }}
                  >
                    {category.category.toUpperCase()}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {category.items.map((item, itemIndex) => (
                      <Chip
                        key={itemIndex}
                        label={item.name}
                        size="small"
                        sx={{
                          bgcolor: `${item.color}20`,
                          color: item.color,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          border: `1px solid ${item.color}30`,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* What's Generated Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                mb: 2,
              }}
            >
              What Gets Generated
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "500px",
                mx: "auto",
              }}
            >
              A complete, organized project structure ready for production
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3}>
          {generatedFolders.map((folder, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  component={motion.div}
                  whileHover={{ y: -5 }}
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: "rgba(0, 212, 255, 0.3)",
                      background:
                        "linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      color: "#00d4ff",
                      fontWeight: 600,
                      mb: 1,
                    }}
                  >
                    📁 {folder.name}
                  </Typography>
                  <Stack spacing={0.5} sx={{ mb: 2 }}>
                    {folder.files.map((file, fileIndex) => (
                      <Typography
                        key={fileIndex}
                        sx={{
                          fontFamily: "monospace",
                          fontSize: "0.75rem",
                          color: "rgba(255, 255, 255, 0.5)",
                          pl: 2,
                        }}
                      >
                        └── {file}
                      </Typography>
                    ))}
                  </Stack>
                  <Typography
                    sx={{
                      fontSize: "0.8rem",
                      color: "rgba(255, 255, 255, 0.6)",
                      borderTop: "1px solid rgba(255,255,255,0.05)",
                      pt: 2,
                    }}
                  >
                    {folder.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
