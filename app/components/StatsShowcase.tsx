"use client";

import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SpeedIcon from "@mui/icons-material/Speed";
import CodeIcon from "@mui/icons-material/Code";

const stats = [
  {
    icon: <CheckCircleOutlineIcon sx={{ fontSize: 48 }} />,
    value: "0",
    label: "Compilation Errors",
    subtitle: "Down from 80 issues",
    color: "#4CAF50",
    highlight: "100% error-free",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    value: "98%",
    label: "Time Savings",
    subtitle: "5 min vs 3-4 hours",
    color: "#00D4FF",
    highlight: "Instant setup",
  },
  {
    icon: <CodeIcon sx={{ fontSize: 48 }} />,
    value: "88",
    label: "Files Generated",
    subtitle: "Production-ready code",
    color: "#02569B",
    highlight: "Complete architecture",
  },
  {
    icon: <ErrorOutlineIcon sx={{ fontSize: 48 }} />,
    value: "95%",
    label: "Issue Reduction",
    subtitle: "From 80 to 4 info",
    color: "#FFC107",
    highlight: "Clean codebase",
  },
];

export default function StatsShowcase() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #1A1A1A 0%, #121212 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated background */}
      <Box
        component={motion.div}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(2, 86, 155, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(135deg, #02569B 0%, #00D4FF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Proven Performance Metrics
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: "700px", mx: "auto" }}
            >
              Real improvements from our latest release
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Box
                  component={motion.div}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  sx={{
                    height: "100%",
                    p: 4,
                    borderRadius: 3,
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    textAlign: "center",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: stat.color,
                      boxShadow: `0 8px 40px ${stat.color}33`,
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "3px",
                      background: `linear-gradient(90deg, ${stat.color}, transparent)`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: stat.color,
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {React.cloneElement(stat.icon as React.ReactElement, {
                      sx: { fontSize: 48 },
                    })}
                  </Box>

                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: "2.5rem", md: "3rem" },
                      color: stat.color,
                      mb: 1,
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </Typography>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      color: "text.primary",
                    }}
                  >
                    {stat.label}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      mb: 1.5,
                      fontSize: "0.875rem",
                    }}
                  >
                    {stat.subtitle}
                  </Typography>

                  <Box
                    sx={{
                      display: "inline-block",
                      px: 2,
                      py: 0.5,
                      borderRadius: 2,
                      bgcolor: `${stat.color}22`,
                      border: `1px solid ${stat.color}44`,
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: stat.color,
                        fontWeight: 600,
                        fontSize: "0.75rem",
                      }}
                    >
                      {stat.highlight}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Achievement highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: 3,
              background:
                "linear-gradient(135deg, rgba(2, 86, 155, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%)",
              border: "1px solid rgba(2, 86, 155, 0.3)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: "primary.main",
              }}
            >
              🎉 Latest Achievement
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Eliminated all 58 compilation errors, reduced total issues from 80
              to 4,
              <br />
              and achieved 100% dependency auto-injection success rate.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
