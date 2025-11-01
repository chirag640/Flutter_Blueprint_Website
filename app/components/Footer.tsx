"use client";

import React from "react";
import {
  Container,
  Box,
  Typography,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import BugReportIcon from "@mui/icons-material/BugReport";
import DescriptionIcon from "@mui/icons-material/Description";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        bgcolor: "background.paper",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ by{" "}
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

          <Stack direction="row" spacing={2}>
            <IconButton
              component="a"
              href="https://github.com/chirag640/flutter_blueprint-Package"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://pub.dev/packages/flutter_blueprint"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pub.dev Package"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "primary.main" },
              }}
            >
              <DescriptionIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://github.com/chirag640/flutter_blueprint-Package/issues"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Report an Issue"
              sx={{
                color: "text.secondary",
                "&:hover": { color: "error.main" },
              }}
            >
              <BugReportIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} flutter_blueprint. Licensed under MIT.
          </Typography>
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ display: "block", mt: 1 }}
          >
            Enterprise-grade Flutter app scaffolding CLI
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
