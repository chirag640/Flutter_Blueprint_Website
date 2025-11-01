"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  useScrollTrigger,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface HeaderProps {
  window?: () => Window;
}

function ElevationScroll(
  props: HeaderProps & { children: React.ReactElement }
) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

export default function Header(props: HeaderProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ElevationScroll {...props}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 0,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                mr: 4,
              }}
            >
              🎯 flutter_blueprint
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 1 }}
            >
              <Button
                color="inherit"
                onClick={() => scrollToSection("features")}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Features
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("quick-start")}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Quick Start
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("cicd")}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                CI/CD
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("platforms")}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Platforms
              </Button>
              <Button
                color="inherit"
                onClick={() => scrollToSection("team")}
                sx={{ "&:hover": { color: "primary.main" } }}
              >
                Team
              </Button>
            </Box>

            <Button
              variant="outlined"
              href="https://github.com/chirag640/flutter_blueprint-Package"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ ml: 2 }}
            >
              GitHub
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
