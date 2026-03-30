import type { Metadata } from "next";
import { Box, Container, Paper, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { buildPageMetadata } from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Flutter Blueprint vs Manual Setup and Other CLIs",
  description:
    "Compare Flutter Blueprint with manual setup and alternative CLIs across architecture, security, CI, observability, and speed-to-delivery.",
  path: "/compare",
  keywords: [
    "flutter blueprint vs",
    "flutter cli comparison",
    "flutter boilerplate alternatives",
  ],
});

const bullets = [
  "Enterprise guardrails out of the box (doctor, CI drift checks, release docs).",
  "Consistent architecture output across Provider, Riverpod, BLoC, and GetX.",
  "Built-in production readiness scaffolding for release security and observability.",
  "Faster onboarding with guided command recipes and docs-first workflows.",
];

export default function ComparePage() {
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
              Flutter Blueprint Comparison
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.72)", mb: 4 }}>
              A practical comparison for teams deciding whether to keep manual
              scaffolding, use a basic CLI starter, or adopt a production-grade
              blueprint flow.
            </Typography>
            <Stack spacing={1.5}>
              {bullets.map((bullet) => (
                <Typography
                  key={bullet}
                  sx={{ color: "rgba(255,255,255,0.88)" }}
                >
                  • {bullet}
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
