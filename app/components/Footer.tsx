import React from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Link,
  Stack,
  Grid,
  Chip,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import BugReportIcon from "@mui/icons-material/BugReport";
import DescriptionIcon from "@mui/icons-material/Description";
import StarIcon from "@mui/icons-material/Star";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        bgcolor: "#121212",
        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 1, fontSize: "1rem" }}
            >
              flutter<span style={{ color: "#00b1f1" }}>_blueprint</span>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2, fontSize: "0.875rem" }}
            >
              Production-ready Flutter scaffolding. 88+ files, zero errors, in
              seconds.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Chip
                icon={<StarIcon sx={{ fontSize: 16 }} />}
                label="757 Tests"
                size="small"
                color="success"
                sx={{ fontSize: "0.75rem", height: 24 }}
              />
              <Chip
                label="MIT License"
                size="small"
                variant="outlined"
                sx={{ fontSize: "0.75rem", height: 24 }}
              />
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1.5, fontSize: "0.875rem" }}
            >
              Resources
            </Typography>
            <Stack spacing={1}>
              <Link
                href="/docs"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/chirag640/flutter_blueprint-Package/blob/main/example/example.md"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Examples
              </Link>
              <Link
                href="https://github.com/chirag640/flutter_blueprint-Package/blob/main/CHANGELOG.md"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Changelog
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1.5, fontSize: "0.875rem" }}
            >
              Community
            </Typography>
            <Stack spacing={1}>
              <Link
                href="https://github.com/chirag640/flutter_blueprint-Package"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                GitHub
              </Link>
              <Link
                href="https://github.com/chirag640/flutter_blueprint-Package/issues"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Report Issue
              </Link>
              <Link
                href="https://github.com/chirag640/flutter_blueprint-Package/discussions"
                target="_blank"
                sx={{
                  color: "text.secondary",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  "&:hover": { color: "primary.main" },
                }}
              >
                Discussions
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography
              variant="subtitle2"
              sx={{ fontWeight: 600, mb: 1.5, fontSize: "0.875rem" }}
            >
              Connect
            </Typography>
            <Stack direction="row" spacing={1.5}>
              <IconButton
                component="a"
                href="https://github.com/chirag640/flutter_blueprint-Package"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                size="small"
                sx={{
                  color: "text.secondary",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "rgba(2, 86, 155, 0.1)",
                  },
                }}
              >
                <GitHubIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://pub.dev/packages/flutter_blueprint"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pub.dev Package"
                size="small"
                sx={{
                  color: "text.secondary",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "primary.main",
                    bgcolor: "rgba(2, 86, 155, 0.1)",
                  },
                }}
              >
                <DescriptionIcon fontSize="small" />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/chirag640/flutter_blueprint-Package/issues"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Report an Issue"
                size="small"
                sx={{
                  color: "text.secondary",
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                  "&:hover": {
                    color: "error.main",
                    bgcolor: "rgba(244, 67, 54, 0.1)",
                  },
                }}
              >
                <BugReportIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.8rem" }}
          >
            © {new Date().getFullYear()} Made with ❤️ by{" "}
            <Link
              href="https://github.com/chirag640"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Chirag Chaudhary
            </Link>
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ fontSize: "0.75rem" }}
          >
            Flutter 3.38 • Dart 3.10 • Material 3
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
