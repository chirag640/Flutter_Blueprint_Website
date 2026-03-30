import type { Metadata } from "next";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Migration Guide - Move Existing Apps to Flutter Blueprint",
  description:
    "Step-by-step migration approach for teams moving from manual Flutter setup or other starters to Flutter Blueprint with minimal disruption.",
  path: "/migration",
  keywords: [
    "flutter migration guide",
    "move to flutter blueprint",
    "flutter architecture migration",
  ],
});

const steps = [
  "Generate a baseline project with matching state management and platform targets.",
  "Move feature modules incrementally (core services first, then vertical slices).",
  "Adopt doctor + CI drift guardrails before release branches are cut.",
  "Switch release pipeline to secure build scripts and symbolication workflow.",
  "Validate observability tags (release/environment) before production rollout.",
];

export default function MigrationPage() {
  return (
    <Box>
      <Header />
      <Box sx={{ pt: 14, pb: 10, background: "#0A0A0A" }}>
        <Container maxWidth="md">
          <Paper
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(135deg, rgba(18,18,18,0.95), rgba(24,24,32,0.85))",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
              Migration Guide
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.72)", mb: 4 }}>
              Use this migration path to move existing Flutter apps onto the
              blueprint workflow while preserving delivery velocity.
            </Typography>
            <Stack spacing={1.5}>
              {steps.map((step, idx) => (
                <Typography key={step} sx={{ color: "rgba(255,255,255,0.88)" }}>
                  {idx + 1}. {step}
                </Typography>
              ))}
            </Stack>
          </Paper>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
