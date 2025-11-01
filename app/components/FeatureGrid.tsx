"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import ErrorIcon from "@mui/icons-material/Error";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";

const features = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 48 }} />,
    title: "Clean Architecture",
    description:
      "Separation of concerns with core/, features/, and app/ folders for maintainable code.",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 48 }} />,
    title: "State Management",
    description:
      "Choose between Provider, Riverpod, or Bloc to match your team's preferences.",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 48 }} />,
    title: "Production API Client",
    description:
      "Dio with Auth, Retry, and Logger interceptors configured out of the box.",
  },
  {
    icon: <ErrorIcon sx={{ fontSize: 48 }} />,
    title: "Pro Error Handling",
    description:
      "9 custom exception classes + Failures for clean architecture patterns.",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 48 }} />,
    title: "CI/CD Scaffolding",
    description:
      "GitHub Actions, GitLab CI, or Azure Pipelines ready from day one.",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 48 }} />,
    title: "Multi-Platform Support",
    description:
      "Build for Mobile, Web, AND Desktop with responsive layouts and adaptive navigation.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 48 }} />,
    title: "Storage Layers",
    description:
      "LocalStorage (SharedPreferences) + SecureStorage for sensitive data like tokens.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 48 }} />,
    title: "Team Collaboration",
    description:
      "Share and enforce project standards with shareable configuration files.",
  },
];

export default function FeatureGrid() {
  return (
    <Box
      id="features"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Features That Matter
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Everything you need to build professional Flutter apps
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(2, 86, 155, 0.05)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>
                  {React.cloneElement(feature.icon as React.ReactElement, {
                    sx: { fontSize: 32 },
                  })}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ mb: 1.5, fontWeight: 600 }}
                >
                  {feature.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
