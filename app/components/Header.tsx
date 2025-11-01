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
            <Box
              sx={{ display: "flex", alignItems: "center", flexGrow: 0, mr: 4 }}
            >
              {/* Logo image - prefer wide logo at /public/logo-full.png; fall back to /icon.png if missing */}
              <Box
                component="img"
                src="/logo-full.png"
                onError={(e: any) => (e.currentTarget.src = "/icon.png")}
                alt="flutter_blueprint logo"
                sx={{ height: 30, width: 30, mr: 1 }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  display: { xs: "none", sm: "block" },
                  lineHeight: 1,
                }}
              >
                <Box component="span" sx={{ color: "text.primary" }}> 
                  flutter
                </Box>
                <Box
                  component="span"
                  sx={{ color: "#00b1f1", fontWeight: 600 }}
                >
                  _blueprint
                </Box>
              </Typography>
            </Box>

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
