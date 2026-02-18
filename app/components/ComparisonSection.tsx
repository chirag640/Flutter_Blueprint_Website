import React from "react";
import { Box, Container, Typography, Grid, Stack, Chip } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const comparisonData = [
  {
    feature: "Clean Architecture",
    flutter_blueprint: true,
    manual: false,
    other_cli: "partial",
  },
  {
    feature: "88+ Production Files",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Zero Compilation Errors",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "State Management Choice",
    flutter_blueprint: true,
    manual: true,
    other_cli: "partial",
  },
  {
    feature: "API Client with Interceptors",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Enterprise Security",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Offline-First Architecture",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "CI/CD Configuration",
    flutter_blueprint: true,
    manual: false,
    other_cli: "partial",
  },
  {
    feature: "WebSocket Support",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Push Notifications",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Social Authentication",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Team Configuration Sharing",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Responsive Design Built-in",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Analytics Integration",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Add Feature Command",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
  {
    feature: "Smart Auto-Update System",
    flutter_blueprint: true,
    manual: false,
    other_cli: false,
  },
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          bgcolor: "rgba(76, 175, 80, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CheckIcon sx={{ color: "#4CAF50", fontSize: 16 }} />
      </Box>
    );
  }
  if (value === false) {
    return (
      <Box
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          bgcolor: "rgba(244, 67, 54, 0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CloseIcon sx={{ color: "#F44336", fontSize: 16 }} />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0.5,
        borderRadius: "12px",
        bgcolor: "rgba(255, 193, 7, 0.2)",
        color: "#FFC107",
        fontSize: "0.7rem",
        fontWeight: 600,
      }}
    >
      Partial
    </Box>
  );
};

export default function ComparisonSection() {
  return (
    <Box
      id="comparison"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #0A0A0A 0%, #0F0F1A 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 900,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #00d4ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Flutter Blueprint?
            </Typography>
            <Typography
              sx={{
                fontSize: "1.125rem",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              See how Flutter Blueprint compares to manual setup and other CLI
              tools
            </Typography>
          </Box>
        </Box>

        {/* Comparison Table */}
        <Box
          sx={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(255, 255, 255, 0.02)",
          }}
        >
          {/* Header Row */}
          <Grid
            container
            sx={{
              p: 3,
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
              background: "rgba(2, 86, 155, 0.1)",
            }}
          >
            <Grid item xs={4}>
              <Typography
                sx={{ fontWeight: 600, color: "rgba(255,255,255,0.5)" }}
              >
                Feature
              </Typography>
            </Grid>
            <Grid item xs={3} sx={{ textAlign: "center" }}>
              <Stack alignItems="center" spacing={0.5}>
                <Chip
                  label="Flutter Blueprint"
                  size="small"
                  sx={{
                    bgcolor: "rgba(0, 212, 255, 0.2)",
                    color: "#00d4ff",
                    fontWeight: 700,
                  }}
                />
              </Stack>
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontWeight: 600, color: "rgba(255,255,255,0.5)" }}
              >
                Manual Setup
              </Typography>
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: "center" }}>
              <Typography
                sx={{ fontWeight: 600, color: "rgba(255,255,255,0.5)" }}
              >
                Other CLIs
              </Typography>
            </Grid>
          </Grid>

          {/* Feature Rows */}
          {comparisonData.map((row, index) => (
            <div key={index}>
              <Grid
                container
                alignItems="center"
                sx={{
                  p: 2.5,
                  borderBottom:
                    index < comparisonData.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.05)"
                      : "none",
                  "&:hover": {
                    background: "rgba(255, 255, 255, 0.02)",
                  },
                }}
              >
                <Grid item xs={4}>
                  <Typography sx={{ fontWeight: 500 }}>
                    {row.feature}
                  </Typography>
                </Grid>
                <Grid item xs={3} sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <FeatureIcon value={row.flutter_blueprint} />
                  </Box>
                </Grid>
                <Grid item xs={2.5} sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <FeatureIcon value={row.manual} />
                  </Box>
                </Grid>
                <Grid item xs={2.5} sx={{ textAlign: "center" }}>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <FeatureIcon value={row.other_cli} />
                  </Box>
                </Grid>
              </Grid>
            </div>
          ))}
        </Box>

        {/* Time Saved Box */}
        <Box>
          <Box
            sx={{
              mt: 6,
              p: 4,
              borderRadius: "20px",
              background:
                "linear-gradient(135deg, rgba(2, 86, 155, 0.2) 0%, rgba(0, 212, 255, 0.1) 100%)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
              textAlign: "center",
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #00d4ff 0%, #4CAF50 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  40+ Hours
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                  Saved on Initial Setup
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #4CAF50 0%, #FFB74D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  88+ Files
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                  Production-Ready Code
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography
                  sx={{
                    fontSize: "3.5rem",
                    fontWeight: 900,
                    background:
                      "linear-gradient(135deg, #FFB74D 0%, #FF5722 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  $0
                </Typography>
                <Typography sx={{ color: "rgba(255,255,255,0.6)" }}>
                  Completely Free & Open Source
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
