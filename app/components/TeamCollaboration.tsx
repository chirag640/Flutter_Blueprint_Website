"use client";

import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import SpeedIcon from "@mui/icons-material/Speed";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const benefits = [
  {
    icon: <SpeedIcon sx={{ fontSize: 48 }} />,
    title: "From Hours to Minutes",
    description: "Setup time: 2-4 hours → 5 minutes",
  },
  {
    icon: <VerifiedIcon sx={{ fontSize: 48 }} />,
    title: "Consistent Structure",
    description: "Every team member gets identical setup",
  },
  {
    icon: <GroupWorkIcon sx={{ fontSize: 48 }} />,
    title: "Automatic Enforcement",
    description: "Standards enforced through configuration",
  },
  {
    icon: <ShareIcon sx={{ fontSize: 48 }} />,
    title: "Knowledge Sharing",
    description: "Distribute best practices as code",
  },
];

export default function TeamCollaboration() {
  return (
    <Box id="team" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Built for Teams
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Share and enforce project standards across your entire organization
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {benefits.map((benefit, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: "100%",
                  textAlign: "center",
                  p: 3,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: 2,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(2, 86, 155, 0.05)",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>
                  {React.cloneElement(benefit.icon as React.ReactElement, {
                    sx: { fontSize: 32 },
                  })}
                </Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {benefit.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ mb: 3, fontWeight: 600 }}>
              Shared Blueprint Configurations
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 3, lineHeight: 1.8 }}
            >
              Share standards across your entire team with shareable
              configuration files. Create, import, and use company-wide
              templates to ensure consistency and reduce onboarding time from
              days to minutes.
            </Typography>
            <Box component="ul" sx={{ color: "text.secondary", lineHeight: 2 }}>
              <li>Instant consistency across all projects</li>
              <li>Faster onboarding for new developers</li>
              <li>Enforce standards automatically</li>
              <li>Share best practices through configuration</li>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Team Workflow Example:
            </Typography>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "0.9rem",
              }}
            >
              {`# Engineering lead creates shared config
flutter_blueprint share import ./company_standard.yaml

# All team members use it
flutter_blueprint init my_app --from-config company_standard

# Everyone gets identical setup! ✨

# Available commands:
flutter_blueprint share list
flutter_blueprint share import <file>
flutter_blueprint share export <name> <output>
flutter_blueprint share delete <name>`}
            </SyntaxHighlighter>
          </Grid>
        </Grid>

        <Box
          sx={{ mt: 6, p: 4, bgcolor: "background.default", borderRadius: 2 }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 3, fontWeight: 600, textAlign: "center" }}
          >
            Included Templates
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "primary.main",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "primary.main", fontWeight: 600 }}
                >
                  Company Standard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Enterprise-grade setup with Bloc, full platform support, and
                  comprehensive testing.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "secondary.main",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "secondary.main", fontWeight: 600 }}
                >
                  Startup Template
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lightweight MVP configuration for rapid prototyping with
                  Provider.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  p: 3,
                  border: "1px solid",
                  borderColor: "success.main",
                  borderRadius: 2,
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "success.main", fontWeight: 600 }}
                >
                  Enterprise Template
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Full-featured configuration for large-scale applications with
                  Riverpod.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
