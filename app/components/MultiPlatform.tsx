import React from "react";
import { Container, Box, Typography, Grid, Stack, Chip } from "@mui/material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopIcon from "@mui/icons-material/Laptop";
import LanguageIcon from "@mui/icons-material/Language";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import CodeBlock from "./CodeBlock";

export default function MultiPlatform() {
  return (
    <Box
      id="platforms"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              One Codebase.
              <br />
              All Platforms.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 4, lineHeight: 1.8 }}
            >
              Build apps that run on <strong>mobile, web, AND desktop</strong>{" "}
              from a single codebase. flutter_blueprint generates universal
              multi-platform projects with responsive layouts and adaptive
              navigation.
            </Typography>

            <Stack
              direction="row"
              spacing={1.5}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 4 }}
            >
              <Chip
                icon={<PhoneIphoneIcon />}
                label="Mobile"
                variant="outlined"
                sx={{ fontSize: "0.875rem", py: 2 }}
              />
              <Chip
                icon={<LanguageIcon />}
                label="Web"
                variant="outlined"
                sx={{ fontSize: "0.875rem", py: 2 }}
              />
              <Chip
                icon={<LaptopIcon />}
                label="Desktop"
                variant="outlined"
                sx={{ fontSize: "0.875rem", py: 2 }}
              />
            </Stack>

            <Box
              sx={{
                display: "flex",
                gap: 3,
                mb: 4,
                flexWrap: "wrap",
                opacity: 0.7,
              }}
            >
              <AndroidIcon sx={{ fontSize: 40, color: "#3DDC84" }} />
              <AppleIcon sx={{ fontSize: 40, color: "#A3AAAE" }} />
              <LanguageIcon sx={{ fontSize: 40, color: "#02569B" }} />
              <DesktopWindowsIcon sx={{ fontSize: 40, color: "#0078D4" }} />
              <AppleIcon
                sx={{
                  fontSize: 40,
                  color: "#000000",
                  bgcolor: "white",
                  borderRadius: 1,
                  p: 0.5,
                }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Quick Start Examples
            </Typography>
            <CodeBlock
              language="bash"
              code={`# Mobile + Web
flutter_blueprint init my_app --platforms mobile,web

# All platforms (universal app)
flutter_blueprint init my_app --platforms all --state riverpod

# Desktop only
flutter_blueprint init my_desktop_app --platforms desktop`}
            />

            <Box
              sx={{
                mt: 3,
                p: 3,
                bgcolor: "background.default",
                borderRadius: 2,
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{ mb: 2, color: "primary.main", fontWeight: 600 }}
              >
                ✨ What Gets Generated:
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                component="div"
              >
                • Universal entry points (main_mobile, main_web, main_desktop)
                <br />
                • Responsive breakpoints & layouts
                <br />
                • Adaptive navigation (bottom nav → rail → drawer)
                <br />
                • Platform-specific optimizations
                <br />• PWA-ready for web, Window management for desktop
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
