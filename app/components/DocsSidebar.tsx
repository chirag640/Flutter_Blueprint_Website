"use client";

import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Typography,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import LanguageIcon from "@mui/icons-material/Language";
import BuildIcon from "@mui/icons-material/Build";
import SpeedIcon from "@mui/icons-material/Speed";
import StorageIcon from "@mui/icons-material/Storage";
import FolderIcon from "@mui/icons-material/Folder";
import SettingsIcon from "@mui/icons-material/Settings";

const DRAWER_WIDTH = 260;

interface DocsSidebarProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const sections = [
  { id: "quick-start", label: "Quick Start", icon: <RocketLaunchIcon /> },
  { id: "cli-commands", label: "CLI Commands", icon: <CodeIcon /> },
  {
    id: "features",
    label: "Features & Architecture",
    icon: <SettingsIcon />,
    isTitle: true,
  },
  {
    id: "state-management",
    label: "State Management",
    icon: <CodeIcon />,
    nested: true,
  },
  {
    id: "authentication",
    label: "Authentication",
    icon: <SecurityIcon />,
    nested: true,
  },
  {
    id: "offline-first",
    label: "Offline-First",
    icon: <CloudIcon />,
    nested: true,
  },
  {
    id: "localization",
    label: "Localization",
    icon: <LanguageIcon />,
    nested: true,
  },
  { id: "cicd", label: "CI/CD Integration", icon: <BuildIcon />, nested: true },
  {
    id: "memory",
    label: "Memory Management",
    icon: <SpeedIcon />,
    nested: true,
  },
  {
    id: "database",
    label: "Database & Storage",
    icon: <StorageIcon />,
    nested: true,
  },
  { id: "project-structure", label: "Project Structure", icon: <FolderIcon /> },
  { id: "requirements", label: "Requirements", icon: <SettingsIcon /> },
];

export default function DocsSidebar({
  mobileOpen,
  onMobileClose,
}: DocsSidebarProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [activeSection, setActiveSection] = React.useState("quick-start");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(sectionId);
      if (isMobile && onMobileClose) {
        onMobileClose();
      }
    }
  };

  // Track scroll position to highlight active section
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const drawerContent = (
    <Box sx={{ overflow: "auto", height: "100%" }}>
      <Box sx={{ p: 2, pt: 3 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            fontSize: "0.75rem",
            color: "text.secondary",
            mb: 2,
          }}
        >
          ON THIS PAGE
        </Typography>
      </Box>
      <List sx={{ px: 1 }}>
        {sections.map((section) => (
          <React.Fragment key={section.id}>
            {section.isTitle && <Divider sx={{ my: 1, mx: 2 }} />}
            <ListItemButton
              onClick={() => scrollToSection(section.id)}
              selected={activeSection === section.id}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                pl: section.nested ? 3 : 2,
                py: 0.75,
                "&.Mui-selected": {
                  bgcolor: "rgba(2, 86, 155, 0.15)",
                  borderLeft: "3px solid",
                  borderColor: "primary.main",
                  "&:hover": {
                    bgcolor: "rgba(2, 86, 155, 0.2)",
                  },
                },
                "&:hover": {
                  bgcolor: "rgba(255, 255, 255, 0.05)",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 36,
                  color:
                    activeSection === section.id
                      ? "primary.main"
                      : "text.secondary",
                }}
              >
                {React.cloneElement(section.icon, { sx: { fontSize: 20 } })}
              </ListItemIcon>
              <ListItemText
                primary={section.label}
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  fontWeight: activeSection === section.id ? 600 : 400,
                  color:
                    activeSection === section.id
                      ? "primary.main"
                      : "text.primary",
                }}
              />
            </ListItemButton>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={onMobileClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              width: DRAWER_WIDTH,
              boxSizing: "border-box",
              bgcolor: "#1A1A1A",
              borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Desktop Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
            bgcolor: "#1A1A1A",
            borderRight: "1px solid rgba(255, 255, 255, 0.1)",
            top: 64,
            height: "calc(100vh - 64px)",
            position: "fixed",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

export { DRAWER_WIDTH };
