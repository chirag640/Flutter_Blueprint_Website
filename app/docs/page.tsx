"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Stack,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import CloudOffIcon from "@mui/icons-material/CloudOff";
import CodeIcon from "@mui/icons-material/Code";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import CodeBlock from "../components/CodeBlock";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quick-start");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "quick-start",
        "cli-commands",
        "features",
        "state-management",
        "authentication",
        "offline-first",
        "performance",
        "project-structure",
        "requirements",
      ];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      id: "quick-start",
      label: "Quick Start",
      icon: <RocketLaunchIcon sx={{ fontSize: 16 }} />,
    },
    {
      id: "cli-commands",
      label: "CLI Commands",
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 16 }} />,
    },
    {
      id: "features",
      label: "Features",
      icon: <AutoAwesomeIcon sx={{ fontSize: 16 }} />,
    },
    {
      id: "project-structure",
      label: "Structure",
      icon: <FolderIcon sx={{ fontSize: 16 }} />,
    },
    {
      id: "requirements",
      label: "Requirements",
      icon: <SettingsIcon sx={{ fontSize: 16 }} />,
    },
  ];

  return (
    <Box>
      <Header />
      <BackToTop />

      {/* Main Content */}
      <Box component="main">
        {/* Hero */}
        <Box
          sx={{
            pt: { xs: 12, md: 14 },
            pb: { xs: 6, md: 8 },
            background: "linear-gradient(135deg, #0A0A0A 0%, #16213E 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              right: "10%",
              width: "500px",
              height: "500px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(2, 86, 155, 0.3) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
            <Box sx={{ maxWidth: "900px", mx: "auto", textAlign: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mb: 3, justifyContent: "center" }}
                >
                  <Chip
                    label="v1.0.0"
                    size="small"
                    sx={{
                      bgcolor: "rgba(2, 86, 155, 0.2)",
                      color: "#00d4ff",
                      fontWeight: 600,
                      border: "1px solid rgba(0, 212, 255, 0.3)",
                    }}
                  />
                  <Chip
                    label="Production Ready"
                    size="small"
                    icon={<AutoAwesomeIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor: "rgba(76, 175, 80, 0.2)",
                      color: "#4CAF50",
                      fontWeight: 600,
                      border: "1px solid rgba(76, 175, 80, 0.3)",
                    }}
                  />
                </Stack>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "2.5rem", md: "4rem" },
                    fontWeight: 900,
                    mb: 3,
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Documentation
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: { xs: "1.125rem", md: "1.25rem" },
                    lineHeight: 1.8,
                    mb: 5,
                  }}
                >
                  Everything you need to build production-ready Flutter
                  applications with enterprise-grade architecture and zero
                  boilerplate.
                </Typography>

                {/* Navigation Pills */}
                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 1.5,
                    justifyContent: "center",
                    mb: 3,
                  }}
                >
                  {navItems.map((item) => (
                    <Button
                      key={item.id}
                      component={Link}
                      href={`#${item.id}`}
                      startIcon={item.icon}
                      sx={{
                        px: 3,
                        py: 1,
                        borderRadius: "50px",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "0.9375rem",
                        background:
                          activeSection === item.id
                            ? "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)"
                            : "rgba(255, 255, 255, 0.05)",
                        color:
                          activeSection === item.id
                            ? "#fff"
                            : "rgba(255, 255, 255, 0.7)",
                        border:
                          activeSection === item.id
                            ? "1px solid rgba(0, 212, 255, 0.3)"
                            : "1px solid rgba(255, 255, 255, 0.1)",
                        backdropFilter: "blur(10px)",
                        "&:hover": {
                          background:
                            activeSection === item.id
                              ? "linear-gradient(135deg, #01447a 0%, #00b8e6 100%)"
                              : "rgba(255, 255, 255, 0.1)",
                          borderColor: "#00d4ff",
                          transform: "translateY(-2px)",
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        {/* Content */}
        <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#0A0A0A" }}>
          <Container maxWidth="xl">
            <Box sx={{ maxWidth: "1100px", mx: "auto" }}>
              {/* Quick Start */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box id="quick-start" sx={{ mb: 8, scrollMarginTop: "100px" }}>
                  <Paper
                    sx={{
                      p: { xs: 4, md: 6 },
                      background:
                        "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "24px",
                      boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      sx={{ mb: 3 }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <RocketLaunchIcon
                          sx={{ fontSize: 28, color: "#fff" }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: "1.75rem", md: "2rem" },
                            mb: 0.5,
                          }}
                        >
                          Quick Start
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          Get up and running in under 2 minutes
                        </Typography>
                      </Box>
                    </Stack>

                    <Divider
                      sx={{ mb: 4, borderColor: "rgba(255, 255, 255, 0.1)" }}
                    />

                    <Stack spacing={4}>
                      <Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1.5}
                          sx={{ mb: 2 }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "8px",
                              bgcolor: "rgba(2, 86, 155, 0.2)",
                              border: "1px solid rgba(0, 212, 255, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              color: "#00d4ff",
                            }}
                          >
                            1
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, fontSize: "1.125rem" }}
                          >
                            Install Flutter Blueprint
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Install the CLI tool globally using Dart pub:
                        </Typography>
                        <CodeBlock code="dart pub global activate flutter_blueprint" />
                      </Box>

                      <Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1.5}
                          sx={{ mb: 2 }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "8px",
                              bgcolor: "rgba(2, 86, 155, 0.2)",
                              border: "1px solid rgba(0, 212, 255, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              color: "#00d4ff",
                            }}
                          >
                            2
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, fontSize: "1.125rem" }}
                          >
                            Create Your Project
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Initialize a new Flutter project with your preferred
                          state management:
                        </Typography>
                        <CodeBlock code="flutter_blueprint init my_app" />
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontSize: "0.875rem",
                            mt: 1,
                            fontStyle: "italic",
                          }}
                        >
                          💡 Tip: Add{" "}
                          <code style={{ color: "#00d4ff" }}>
                            --state-management riverpod
                          </code>{" "}
                          to choose your state solution
                        </Typography>
                      </Box>

                      <Box>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={1.5}
                          sx={{ mb: 2 }}
                        >
                          <Box
                            sx={{
                              width: 32,
                              height: 32,
                              borderRadius: "8px",
                              bgcolor: "rgba(76, 175, 80, 0.2)",
                              border: "1px solid rgba(76, 175, 80, 0.3)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontWeight: 700,
                              fontSize: "0.875rem",
                              color: "#4CAF50",
                            }}
                          >
                            3
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{ fontWeight: 700, fontSize: "1.125rem" }}
                          >
                            Run Your App
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Navigate to your project and run it:
                        </Typography>
                        <CodeBlock
                          code={`cd my_app\nflutter pub get\nflutter run`}
                        />
                      </Box>
                    </Stack>

                    <Box
                      sx={{
                        mt: 4,
                        p: 3,
                        borderRadius: "12px",
                        bgcolor: "rgba(76, 175, 80, 0.1)",
                        border: "1px solid rgba(76, 175, 80, 0.2)",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <AutoAwesomeIcon
                          sx={{ color: "#4CAF50", fontSize: 24, mt: 0.5 }}
                        />
                        <Box>
                          <Typography
                            sx={{ fontWeight: 600, color: "#4CAF50", mb: 1 }}
                          >
                            🎉 You're all set!
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.7)",
                              lineHeight: 1.7,
                            }}
                          >
                            Your project includes 88+ files, authentication,
                            offline-first architecture, CI/CD pipelines, and
                            passes 757 tests—ready for production.
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Paper>
                </Box>
              </motion.div>

              {/* CLI Commands */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box id="cli-commands" sx={{ mb: 8, scrollMarginTop: "100px" }}>
                  <Paper
                    sx={{
                      p: { xs: 4, md: 6 },
                      background:
                        "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "24px",
                      boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={2}
                      sx={{ mb: 3 }}
                    >
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: "12px",
                          background:
                            "linear-gradient(135deg, #FF6B6B 0%, #FFB74D 100%)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IntegrationInstructionsIcon
                          sx={{ fontSize: 28, color: "#fff" }}
                        />
                      </Box>
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            fontWeight: 800,
                            fontSize: { xs: "1.75rem", md: "2rem" },
                            mb: 0.5,
                          }}
                        >
                          CLI Commands
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.6)",
                            fontSize: "0.9375rem",
                          }}
                        >
                          Powerful commands to supercharge your workflow
                        </Typography>
                      </Box>
                    </Stack>

                    <Divider
                      sx={{ mb: 4, borderColor: "rgba(255, 255, 255, 0.1)" }}
                    />

                    <Stack spacing={3}>
                      <Box
                        sx={{
                          p: 3,
                          borderRadius: "12px",
                          bgcolor: "rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(0, 0, 0, 0.4)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1, color: "#00d4ff" }}
                        >
                          <code style={{ fontSize: "1rem" }}>
                            init [project_name]
                          </code>
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Initialize a new Flutter project with your chosen
                          architecture.
                        </Typography>
                        <CodeBlock
                          code="flutter_blueprint init my_app --state-management riverpod"
                          language="bash"
                        />
                      </Box>

                      <Box
                        sx={{
                          p: 3,
                          borderRadius: "12px",
                          bgcolor: "rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(0, 0, 0, 0.4)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1, color: "#00d4ff" }}
                        >
                          <code style={{ fontSize: "1rem" }}>
                            add-feature [name]
                          </code>
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Add a new feature module with complete architecture
                          layers.
                        </Typography>
                        <CodeBlock
                          code="flutter_blueprint add-feature user_profile"
                          language="bash"
                        />
                      </Box>

                      <Box
                        sx={{
                          p: 3,
                          borderRadius: "12px",
                          bgcolor: "rgba(0, 0, 0, 0.3)",
                          border: "1px solid rgba(255, 255, 255, 0.05)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            bgcolor: "rgba(0, 0, 0, 0.4)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                          },
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 700, mb: 1, color: "#00d4ff" }}
                        >
                          <code style={{ fontSize: "1rem" }}>analyze</code>
                        </Typography>
                        <Typography
                          sx={{
                            color: "rgba(255, 255, 255, 0.7)",
                            mb: 2,
                            lineHeight: 1.7,
                          }}
                        >
                          Analyze your project for code quality and performance
                          issues.
                        </Typography>
                        <CodeBlock
                          code="flutter_blueprint analyze"
                          language="bash"
                        />
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              </motion.div>

              {/* Features Grid */}
              <Box id="features" sx={{ mb: 8, scrollMarginTop: "100px" }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 900,
                    mb: 6,
                    fontSize: { xs: "2rem", md: "2.75rem" },
                    textAlign: "center",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Core Features
                </Typography>

                <Grid container spacing={4}>
                  {[
                    {
                      id: "state-management",
                      icon: <CodeIcon sx={{ fontSize: 32 }} />,
                      title: "State Management",
                      color: "#00d4ff",
                      description:
                        "Choose from Riverpod, BLoC, Provider, GetX, or MobX. Each comes with complete setup and best practices.",
                      features: [
                        "Riverpod 2.x with code generation",
                        "BLoC pattern with Hydrated Bloc",
                        "Provider with ChangeNotifier",
                        "GetX reactive state",
                      ],
                    },
                    {
                      id: "authentication",
                      icon: <SecurityIcon sx={{ fontSize: 32 }} />,
                      title: "Authentication & Security",
                      color: "#4CAF50",
                      description:
                        "Enterprise-grade authentication with JWT, OAuth 2.0, biometric auth, and secure storage.",
                      features: [
                        "JWT token management",
                        "OAuth 2.0 (Google, Apple, GitHub)",
                        "Biometric authentication",
                        "Encrypted local storage",
                      ],
                    },
                    {
                      id: "offline-first",
                      icon: <CloudOffIcon sx={{ fontSize: 32 }} />,
                      title: "Offline-First Architecture",
                      color: "#FFB74D",
                      description:
                        "Built-in sync queue, conflict resolution, background sync, and network monitoring.",
                      features: [
                        "Automatic data synchronization",
                        "Conflict resolution strategies",
                        "Background sync worker",
                        "Network connectivity monitoring",
                      ],
                    },
                    {
                      id: "performance",
                      icon: <SpeedIcon sx={{ fontSize: 32 }} />,
                      title: "Performance Optimization",
                      color: "#FF5252",
                      description:
                        "Optimized for speed with lazy loading, image caching, and memory management.",
                      features: [
                        "Lazy loading & code splitting",
                        "Image caching with flutter_cache_manager",
                        "Memory leak detection",
                        "Optimized bundle size",
                      ],
                    },
                  ].map((feature, index) => (
                    <Grid item xs={12} md={6} key={feature.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        style={{ height: "100%" }}
                      >
                        <Paper
                          id={feature.id}
                          sx={{
                            p: { xs: 4, md: 5 },
                            height: "100%",
                            background:
                              "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: "20px",
                            scrollMarginTop: "100px",
                            position: "relative",
                            overflow: "hidden",
                            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                            "&:hover": {
                              border: `1px solid ${feature.color}60`,
                              boxShadow: `0 16px 48px ${feature.color}30`,
                              transform: "translateY(-4px)",
                            },
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: 0,
                              left: 0,
                              width: "5px",
                              height: "100%",
                              background: `linear-gradient(180deg, ${feature.color} 0%, transparent 100%)`,
                            },
                          }}
                        >
                          <Stack
                            direction="row"
                            alignItems="center"
                            spacing={2}
                            sx={{ mb: 2 }}
                          >
                            <Box sx={{ color: feature.color }}>
                              {feature.icon}
                            </Box>
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: 700, fontSize: "1.375rem" }}
                            >
                              {feature.title}
                            </Typography>
                          </Stack>
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.7)",
                              mb: 3,
                              lineHeight: 1.7,
                            }}
                          >
                            {feature.description}
                          </Typography>
                          <Stack spacing={1}>
                            {feature.features.map((item, idx) => (
                              <Stack
                                key={idx}
                                direction="row"
                                spacing={1.5}
                                alignItems="center"
                              >
                                <Box
                                  sx={{
                                    width: 6,
                                    height: 6,
                                    borderRadius: "50%",
                                    bgcolor: feature.color,
                                  }}
                                />
                                <Typography
                                  sx={{
                                    color: "rgba(255, 255, 255, 0.8)",
                                    fontSize: "0.9375rem",
                                  }}
                                >
                                  {item}
                                </Typography>
                              </Stack>
                            ))}
                          </Stack>
                        </Paper>
                      </motion.div>
                    </Grid>
                  ))}
                </Grid>
              </Box>

              {/* Project Structure */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box
                  id="project-structure"
                  sx={{ mb: 8, scrollMarginTop: "100px" }}
                >
                  <Paper
                    sx={{
                      p: { xs: 4, md: 6 },
                      background:
                        "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "24px",
                      boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        fontSize: { xs: "1.75rem", md: "2rem" },
                      }}
                    >
                      📁 Project Structure
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        mb: 3,
                        lineHeight: 1.7,
                      }}
                    >
                      Clean architecture with clear separation of concerns:
                    </Typography>
                    <CodeBlock
                      code={`lib/\n├── core/              # Core functionality\n│   ├── auth/         # Authentication logic\n│   ├── network/      # API & HTTP clients\n│   ├── storage/      # Local storage\n│   └── utils/        # Helpers & extensions\n├── features/         # Feature modules\n│   ├── home/\n│   ├── profile/\n│   └── settings/\n├── shared/           # Shared widgets & models\n│   ├── widgets/\n│   ├── models/\n│   └── providers/\n└── main.dart         # Entry point`}
                      language="plaintext"
                    />
                  </Paper>
                </Box>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Box id="requirements" sx={{ scrollMarginTop: "100px" }}>
                  <Paper
                    sx={{
                      p: { xs: 4, md: 6 },
                      background:
                        "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "24px",
                      boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 800,
                        mb: 3,
                        fontSize: { xs: "1.75rem", md: "2rem" },
                      }}
                    >
                      ⚙️ Requirements
                    </Typography>
                    <Stack spacing={2}>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            minWidth: 32,
                            height: 32,
                            borderRadius: "8px",
                            bgcolor: "rgba(0, 212, 255, 0.2)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#00d4ff",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                            Flutter SDK 3.19.0 or higher
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.6)",
                              fontSize: "0.875rem",
                            }}
                          >
                            Latest stable version recommended
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            minWidth: 32,
                            height: 32,
                            borderRadius: "8px",
                            bgcolor: "rgba(0, 212, 255, 0.2)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#00d4ff",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                            Dart SDK 3.3.0 or higher
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.6)",
                              fontSize: "0.875rem",
                            }}
                          >
                            Included with Flutter SDK
                          </Typography>
                        </Box>
                      </Stack>
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="flex-start"
                      >
                        <Box
                          sx={{
                            minWidth: 32,
                            height: 32,
                            borderRadius: "8px",
                            bgcolor: "rgba(0, 212, 255, 0.2)",
                            border: "1px solid rgba(0, 212, 255, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#00d4ff",
                            fontWeight: 700,
                          }}
                        >
                          ✓
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 600, mb: 0.5 }}>
                            Active internet connection
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255, 255, 255, 0.6)",
                              fontSize: "0.875rem",
                            }}
                          >
                            For downloading packages and dependencies
                          </Typography>
                        </Box>
                      </Stack>
                    </Stack>
                  </Paper>
                </Box>
              </motion.div>
            </Box>
          </Container>
        </Box>

        <Footer />
      </Box>
    </Box>
  );
}
