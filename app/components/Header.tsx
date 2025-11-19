"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useScrollTrigger,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface HeaderProps {
  window?: () => Window;
  onMobileMenuToggle?: () => void;
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
  const pathname = usePathname();
  const isDocsPage = pathname === "/docs";

  return (
    <ElevationScroll {...props}>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: "rgba(18, 18, 18, 0.7)",
          backdropFilter: "blur(20px) saturate(180%)",
          WebkitBackdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{ py: 0.5, minHeight: { xs: 56, sm: 64 } }}
          >
            {/* Mobile Menu Button - Only on docs page */}
            {isDocsPage && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={props.onMobileMenuToggle}
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Logo - Clickable to Home */}
            <Box
              component={Link}
              href="/"
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: 0,
                mr: 4,
                textDecoration: "none",
                cursor: "pointer",
                transition: "opacity 0.2s",
                "&:hover": { opacity: 0.8 },
              }}
            >
              <Box
                component="img"
                src="/logo-full.png"
                onError={(e: any) => (e.currentTarget.src = "/icon.png")}
                alt="flutter_blueprint logo"
                sx={{ height: 24, width: 24, mr: 1 }}
              />
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: 700,
                  display: { xs: "none", sm: "block" },
                  lineHeight: 1,
                  fontSize: "1rem",
                }}
              >
                <Box component="span" sx={{ color: "text.primary" }}>
                  flutter
                </Box>
                <Box
                  component="span"
                  sx={{ color: "#00b1f1", fontWeight: 700 }}
                >
                  _blueprint
                </Box>
              </Typography>
            </Box>

            {/* Navigation */}
            <Box sx={{ flexGrow: 1, display: "flex", gap: 0.5 }}>
              <Button
                component={Link}
                href="/docs"
                color="inherit"
                size="small"
                startIcon={<MenuBookIcon sx={{ fontSize: 18 }} />}
                sx={{
                  px: 1.5,
                  py: 0.75,
                  fontSize: "0.875rem",
                  textTransform: "none",
                  fontWeight: isDocsPage ? 600 : 400,
                  color: isDocsPage ? "primary.main" : "text.primary",
                  "&:hover": { bgcolor: "rgba(255, 255, 255, 0.05)" },
                }}
              >
                Docs
              </Button>
            </Box>

            {/* GitHub Button */}
            <Button
              variant="outlined"
              size="small"
              href="https://github.com/chirag640/flutter_blueprint-Package"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon sx={{ fontSize: 18 }} />}
              sx={{
                px: 2,
                py: 0.75,
                fontSize: "0.875rem",
                textTransform: "none",
                borderColor: "rgba(255, 255, 255, 0.2)",
                "&:hover": {
                  borderColor: "primary.main",
                  bgcolor: "rgba(2, 86, 155, 0.1)",
                },
              }}
            >
              GitHub
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
}
