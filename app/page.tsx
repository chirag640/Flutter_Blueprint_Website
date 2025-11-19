"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Grid,
  Card,
  CardContent,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Link from "next/link";

export default function Home() {
  return (
    <Box>
      <Header />
      <BackToTop />

      {/* Hero Section */}
      <Box
        sx={{
          pt: { xs: 12, md: 16 },
          pb: { xs: 8, md: 12 },
          background:
            "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 50%, #16213E 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated gradient orbs */}
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          sx={{
            position: "absolute",
            top: "-20%",
            right: "10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(2, 86, 155, 0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <Box
          component={motion.div}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          sx={{
            position: "absolute",
            bottom: "-10%",
            left: "5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 1,
                  mb: 3,
                  borderRadius: "50px",
                  background:
                    "linear-gradient(90deg, rgba(2, 86, 155, 0.2) 0%, rgba(0, 212, 255, 0.2) 100%)",
                  border: "1px solid rgba(2, 86, 155, 0.3)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 18, color: "#4CAF50" }} />
                <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
                  Production-Ready • 757 Tests Passing • Zero Errors
                </Typography>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
                  fontWeight: 900,
                  mb: 3,
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #00d4ff 50%, #02569B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                Build Flutter Apps
                <br />
                <span style={{ fontSize: "0.8em" }}>10x Faster</span>
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.125rem", md: "1.375rem" },
                  color: "rgba(255, 255, 255, 0.8)",
                  maxWidth: "800px",
                  mx: "auto",
                  mb: 3,
                  lineHeight: 1.7,
                  fontWeight: 400,
                }}
              >
                Production-ready Flutter scaffolding with{" "}
                <Box
                  component="span"
                  sx={{ color: "#00d4ff", fontWeight: 600 }}
                >
                  88+ files
                </Box>
                , enterprise security, and{" "}
                <Box
                  component="span"
                  sx={{ color: "#4CAF50", fontWeight: 600 }}
                >
                  zero errors
                </Box>
                . Start building features, not boilerplate.
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
                justifyContent="center"
                sx={{ mb: 5 }}
              >
                <Button
                  component={Link}
                  href="/docs"
                  variant="contained"
                  size="large"
                  startIcon={<RocketLaunchIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    background:
                      "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)",
                    boxShadow: "0 8px 32px rgba(2, 86, 155, 0.5)",
                    borderRadius: "12px",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #01447a 0%, #00b8e6 100%)",
                      boxShadow: "0 12px 40px rgba(2, 86, 155, 0.6)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  component={Link}
                  href="/docs"
                  variant="outlined"
                  size="large"
                  startIcon={<MenuBookIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: "12px",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    color: "#fff",
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.05)",
                    "&:hover": {
                      borderColor: "#00d4ff",
                      background: "rgba(0, 212, 255, 0.1)",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Documentation
                </Button>
              </Stack>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Box
                sx={{
                  maxWidth: "600px",
                  mx: "auto",
                  p: 3,
                  borderRadius: "16px",
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(20px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "rgba(255, 255, 255, 0.5)",
                    mb: 1,
                    fontFamily: "monospace",
                  }}
                >
                  $ Install & Create
                </Typography>
                <SyntaxHighlighter
                  language="bash"
                  style={vscDarkPlus}
                  customStyle={{
                    padding: "0",
                    margin: "0",
                    background: "transparent",
                    fontSize: "0.95rem",
                  }}
                >
                  {`dart pub global activate flutter_blueprint
flutter_blueprint init my_app`}
                </SyntaxHighlighter>
              </Box>
            </motion.div>
          </Box>
        </Container>
      </Box>

      {/* Key Features Grid */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#0A0A0A" }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 800,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Everything You Need
            </Typography>
            <Typography
              sx={{ fontSize: "1.125rem", color: "rgba(255, 255, 255, 0.6)" }}
            >
              Production-ready features out of the box
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: (
                  <SpeedIcon sx={{ fontSize: 40, color: "primary.main" }} />
                ),
                title: "⚡ Lightning Fast",
                description:
                  "88 production-ready files generated in seconds. Start building features, not boilerplate.",
              },
              {
                icon: <CodeIcon sx={{ fontSize: 40, color: "primary.main" }} />,
                title: "🎯 Clean Architecture",
                description:
                  "Professional folder structure with separation of concerns. Domain, data, and presentation layers.",
              },
              {
                icon: (
                  <SecurityIcon sx={{ fontSize: 40, color: "success.main" }} />
                ),
                title: "🔒 Enterprise Security",
                description:
                  "JWT authentication, OAuth 2.0, biometric auth, certificate pinning, and encrypted storage built-in.",
              },
              {
                icon: (
                  <CheckCircleIcon
                    sx={{ fontSize: 40, color: "success.main" }}
                  />
                ),
                title: "✅ Zero Errors",
                description:
                  "757 tests passing. Every generated project compiles without errors. Production-ready from day one.",
              },
              {
                icon: (
                  <MenuBookIcon sx={{ fontSize: 40, color: "info.main" }} />
                ),
                title: "📴 Offline-First",
                description:
                  "Sync queue, conflict resolution, background sync, and network monitoring included.",
              },
              {
                icon: (
                  <RocketLaunchIcon
                    sx={{ fontSize: 40, color: "warning.main" }}
                  />
                ),
                title: "🚀 CI/CD Ready",
                description:
                  "GitHub Actions, GitLab CI, or Azure Pipelines configuration generated automatically.",
              },
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      background:
                        "linear-gradient(135deg, rgba(18, 18, 18, 0.8) 0%, rgba(36, 36, 36, 0.6) 100%)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "16px",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      position: "relative",
                      overflow: "hidden",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background:
                          "linear-gradient(90deg, #02569B 0%, #00d4ff 100%)",
                        transform: "scaleX(0)",
                        transformOrigin: "left",
                        transition: "transform 0.4s ease",
                      },
                      "&:hover": {
                        border: "1px solid rgba(0, 212, 255, 0.3)",
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 60px rgba(0, 212, 255, 0.2)",
                        background:
                          "linear-gradient(135deg, rgba(18, 18, 18, 0.95) 0%, rgba(36, 36, 36, 0.8) 100%)",
                        "&::before": {
                          transform: "scaleX(1)",
                        },
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Box sx={{ mb: 2.5 }}>{feature.icon}</Box>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 700, mb: 1.5, fontSize: "1.125rem" }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          lineHeight: 1.7,
                          fontSize: "0.9375rem",
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background:
            "linear-gradient(180deg, #0A0A0A 0%, #121212 50%, #0A0A0A 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(2, 86, 155, 0.15) 0%, transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid container spacing={4}>
            {[
              { value: "88+", label: "Generated Files", color: "#00d4ff" },
              { value: "757", label: "Tests Passing", color: "#4CAF50" },
              { value: "0", label: "Compilation Errors", color: "#FF5252" },
              { value: "10+", label: "State Management", color: "#FFB74D" },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      p: 3,
                      borderRadius: "16px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.05)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.05)",
                        border: `1px solid ${stat.color}40`,
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "2.5rem", md: "3.5rem" },
                        fontWeight: 900,
                        background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}80 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        mb: 1,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "0.9375rem",
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: { xs: 10, md: 14 },
          background: "linear-gradient(135deg, #0A0A0A 0%, #1A1A2E 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
        <Container
          maxWidth="md"
          sx={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.25rem", md: "3rem" },
                fontWeight: 900,
                mb: 3,
                background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Ready to Build Faster?
            </Typography>
            <Typography
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                mb: 5,
                lineHeight: 1.7,
                fontSize: "1.125rem",
              }}
            >
              Join developers worldwide who've saved hundreds of hours on
              boilerplate setup. Start your next Flutter project in seconds.
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
            >
              <Button
                component={Link}
                href="/docs"
                variant="contained"
                size="large"
                startIcon={<RocketLaunchIcon />}
                sx={{
                  px: 5,
                  py: 1.75,
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  textTransform: "none",
                  background:
                    "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)",
                  boxShadow: "0 8px 32px rgba(2, 86, 155, 0.5)",
                  borderRadius: "12px",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #01447a 0%, #00b8e6 100%)",
                    boxShadow: "0 12px 40px rgba(2, 86, 155, 0.6)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Get Started Now
              </Button>
              <Button
                href="https://pub.dev/packages/flutter_blueprint"
                target="_blank"
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.75,
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  textTransform: "none",
                  borderRadius: "12px",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  color: "#fff",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    borderColor: "#00d4ff",
                    background: "rgba(0, 212, 255, 0.1)",
                    transform: "translateY(-2px)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                View on Pub.dev
              </Button>
            </Stack>
          </motion.div>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
