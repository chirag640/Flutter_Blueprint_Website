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
import { motion } from "framer-motion";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import StorageIcon from "@mui/icons-material/Storage";
import ApiIcon from "@mui/icons-material/Api";
import ErrorIcon from "@mui/icons-material/Error";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import DevicesIcon from "@mui/icons-material/Devices";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import DataObjectIcon from "@mui/icons-material/DataObject";
import ViewStreamIcon from "@mui/icons-material/ViewStream";
import LockIcon from "@mui/icons-material/Lock";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import LanguageIcon from "@mui/icons-material/Language";
import MemoryIcon from "@mui/icons-material/Memory";

const features = [
  {
    icon: <ArchitectureIcon sx={{ fontSize: 48 }} />,
    title: "Clean Architecture",
    description:
      "Separation of concerns with core/, features/, and app/ folders for maintainable code.",
    badge: "Core",
    color: "#02569B",
  },
  {
    icon: <LockIcon sx={{ fontSize: 48 }} />,
    title: "Advanced Authentication",
    description:
      "JWT with refresh tokens, OAuth 2.0, biometric auth, and session management—fully configured.",
    badge: "NEW",
    color: "#4CAF50",
  },
  {
    icon: <CloudOffIcon sx={{ fontSize: 48 }} />,
    title: "Offline-First Architecture",
    description:
      "Complete offline support with sync queue, network monitoring, conflict resolution, and background sync.",
    badge: "NEW",
    color: "#4CAF50",
  },
  {
    icon: <LanguageIcon sx={{ fontSize: 48 }} />,
    title: "Advanced Localization",
    description:
      "Multi-language support with RTL layouts, ARB generators, locale management, and pluralization helpers.",
    badge: "NEW",
    color: "#4CAF50",
  },
  {
    icon: <MemoryIcon sx={{ fontSize: 48 }} />,
    title: "Memory Management",
    description:
      "Advanced memory profiling, leak detection, image caching, and performance monitoring tools included.",
    badge: "NEW",
    color: "#4CAF50",
  },
  {
    icon: <StorageIcon sx={{ fontSize: 48 }} />,
    title: "State Management",
    description:
      "Choose between Provider, Riverpod, or Bloc with advanced patterns like auto-disposing and cancellable async.",
    badge: "Enhanced",
    color: "#00D4FF",
  },
  {
    icon: <ApiIcon sx={{ fontSize: 48 }} />,
    title: "Production API Client",
    description:
      "Dio with Auth, Retry, and Logger interceptors configured out of the box.",
    badge: "Core",
    color: "#02569B",
  },
  {
    icon: <ErrorIcon sx={{ fontSize: 48 }} />,
    title: "Zero Compilation Errors",
    description:
      "100% error-free generation with automatic dependency injection and validation—tested with all features.",
    badge: "FIXED",
    color: "#FFC107",
  },
  {
    icon: <IntegrationInstructionsIcon sx={{ fontSize: 48 }} />,
    title: "CI/CD Scaffolding",
    description:
      "GitHub Actions, GitLab CI, or Azure Pipelines ready from day one.",
    badge: "Core",
    color: "#02569B",
  },
  {
    icon: <DevicesIcon sx={{ fontSize: 48 }} />,
    title: "Multi-Platform Support",
    description:
      "Build for Mobile, Web, AND Desktop with responsive layouts and adaptive navigation.",
    badge: "Core",
    color: "#02569B",
  },
  {
    icon: <DataObjectIcon sx={{ fontSize: 48 }} />,
    title: "Hive Database",
    description:
      "Lightning-fast NoSQL database with cache manager, sync manager, and TTL support built-in.",
    badge: "Core",
    color: "#02569B",
  },
  {
    icon: <ViewStreamIcon sx={{ fontSize: 48 }} />,
    title: "Smart Pagination",
    description:
      "Production-ready pagination with infinite scroll, pull-to-refresh, and skeleton loaders.",
    badge: "Core",
    color: "#02569B",
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
            <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                    boxShadow: `0 12px 40px ${feature.color}33`,
                  }}
                  sx={{
                    height: "100%",
                    p: 3,
                    borderRadius: 2,
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    "&:hover": {
                      borderColor: feature.color,
                      bgcolor: `${feature.color}08`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                    },
                  }}
                >
                  {/* Badge */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      right: 12,
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 1,
                      bgcolor: `${feature.color}22`,
                      border: `1px solid ${feature.color}44`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: feature.color,
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {feature.badge}
                    </Typography>
                  </Box>

                  <Box sx={{ color: feature.color, mb: 2 }}>
                    {React.cloneElement(feature.icon as React.ReactElement, {
                      sx: { fontSize: 40 },
                    })}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ mb: 1.5, fontWeight: 600, pr: 8 }}
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
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
