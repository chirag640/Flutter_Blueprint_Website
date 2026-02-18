"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Chip,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AddBoxIcon from "@mui/icons-material/AddBox";
import UpdateIcon from "@mui/icons-material/Update";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import SharedCodeBlock from "./SharedCodeBlock";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel({ children, value, index, ...other }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`v2-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const highlights = [
  {
    icon: <PhoneAndroidIcon sx={{ fontSize: 36 }} />,
    title: "AppResponsive",
    subtitle: "Zero-dependency responsive design",
    badge: "NEW",
    color: "#00BCD4",
    description:
      "Every generated mobile project now ships with AppResponsive — a pure MediaQuery utility (no flutter_screenutil) based on a 390×844 iPhone 14 Pro baseline. All widgets scale automatically across phones, tablets, and foldables.",
    highlights: [
      "rs(), rFont(), rIcon(), rPadding() scaling helpers",
      "ResponsiveContext extension on BuildContext",
      "rHSpace() / rVSpace() gap widgets",
      "rValue<T>() for breakpoint-aware values",
      "isTablet / isDesktop device detection",
      "Zero extra dependencies",
    ],
    code: `// Auto-generated in lib/core/utils/app_responsive.dart
// Every widget uses it out of the box

// LoadingIndicator — scales spinner to screen size
SizedBox(
  width: context.rs(40),   // 40dp on 390px → scaled on all devices
  height: context.rs(40),
  child: CircularProgressIndicator(),
)

// ErrorView — responsive padding + icon + font
Padding(
  padding: context.rPaddingAll(24),
  child: Column(children: [
    Icon(Icons.error, size: context.rIcon(64)),
    context.rVSpace(16),
    Text('Oops!', style: TextStyle(fontSize: context.rFont(20))),
  ]),
)

// CustomButton — icon and gap scale with screen
Icon(icon, size: context.rIcon(20)),
context.rHSpace(8),

// Pick different layouts per device type
context.rValue<Widget>(
  mobile: ListTile(...),
  tablet: Card(...),
  desktop: DataTable(...),
)`,
  },
  {
    icon: <AddBoxIcon sx={{ fontSize: 36 }} />,
    title: "add feature",
    subtitle: "Add modules to existing projects",
    badge: "NEW",
    color: "#4CAF50",
    description:
      "The new `add feature` command scaffolds a complete feature module — bloc/provider/riverpod state, repository, model, widgets, and tests — into your existing project without touching any other files.",
    highlights: [
      "Detects your project's state management automatically",
      "Generates state, events/notifier, repository, model, widgets",
      "Adds test file alongside the feature",
      "Works on any flutter_blueprint project",
      "No overwriting of existing files",
    ],
    code: `# Add a new feature module to an existing project
flutter_blueprint add feature cart

# What gets generated:
# lib/features/cart/
#   ├── data/
#   │   ├── models/cart_model.dart
#   │   └── repositories/cart_repository.dart
#   └── presentation/
#       ├── bloc/            (or provider / notifier)
#       │   ├── cart_bloc.dart
#       │   ├── cart_event.dart
#       │   └── cart_state.dart
#       ├── pages/
#       │   └── cart_page.dart
#       └── widgets/
#           └── cart_content.dart
# test/features/cart/
#   └── cart_test.dart`,
  },
  {
    icon: <AnalyticsIcon sx={{ fontSize: 36 }} />,
    title: "--analytics flag",
    subtitle: "Firebase or Sentry built-in",
    badge: "NEW",
    color: "#FF9800",
    description:
      "Pass --analytics firebase or --analytics sentry to wire up error tracking and crash reporting from day one. Interceptors, initialization, and all boilerplate are generated automatically.",
    highlights: [
      "--analytics firebase → Firebase Crashlytics + Analytics",
      "--analytics sentry   → Sentry SDK + HTTP breadcrumbs",
      "Error interceptor auto-registered in Dio client",
      "Initialization in main.dart",
      "Environment-aware (no reporting in debug mode)",
    ],
    code: `# Firebase Analytics + Crashlytics
flutter_blueprint init my_app \\
  --state riverpod \\
  --api \\
  --analytics firebase

# Sentry error tracking
flutter_blueprint init my_app \\
  --state bloc \\
  --api \\
  --analytics sentry

# Generated: lib/core/analytics/
#   ├── analytics_service.dart        (unified API)
#   ├── firebase_analytics_impl.dart  (or sentry_impl.dart)
#   └── analytics_interceptor.dart    (Dio integration)`,
  },
  {
    icon: <UpdateIcon sx={{ fontSize: 36 }} />,
    title: "Smart Update System",
    subtitle: "Background check, single banner",
    badge: "FIXED",
    color: "#9C27B0",
    description:
      "The update checker was completely reworked. It now runs in the background (never slows down your command), shows the banner exactly once, suppresses it when running `update`, and renders a pixel-perfect aligned box for any version string length.",
    highlights: [
      "Background check — zero startup delay",
      "Banner shows exactly once (was showing twice)",
      "Suppressed when running flutter_blueprint update",
      "Box alignment fixed for any version string length",
      "24-hour cache avoids repeated network requests",
      "Version fallback kept in sync with pubspec.yaml",
    ],
    code: `# Before v2.0.0: banner printed twice, blocked startup
# After v2.0.0:

$ flutter_blueprint init my_app --state bloc

🚀 Generating...
✅ Generated 50 files successfully!

┌──────────────────────────────────────────────────────┐
│           🚀 Update Available!           │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Current version : 2.0.0                            │
│  Latest version  : 2.1.0                             │
│                                                      │
│  Run to update:                                      │
│  dart pub global activate flutter_blueprint          │
└──────────────────────────────────────────────────────┘`,
  },
  {
    icon: <TextFieldsIcon sx={{ fontSize: 36 }} />,
    title: "UI Kit Widgets",
    subtitle: "AppTextField, Dropdown, ValidationAck",
    badge: "NEW",
    color: "#E91E63",
    description:
      "Every generated project now includes a production-quality UI kit: AppTextFieldWithLabel (labeled text input with validation), AppDropdownFormField (themed dropdown), and ValidationAckScope (inline checkbox acknowledgment). All zero extra dependencies.",
    highlights: [
      "AppTextFieldWithLabel — custom text field with label + error",
      "AppDropdownFormField — consistent themed dropdown",
      "ValidationAckScope  — inline checkbox with form integration",
      "LoggerInterceptor   — pretty HTTP request/response logging",
      "All generated in lib/core/widgets/",
      "Full test coverage included",
    ],
    code: `// AppTextFieldWithLabel
AppTextFieldWithLabel(
  label: 'Email',
  controller: _emailController,
  validator: Validators.email,
  keyboardType: TextInputType.emailAddress,
)

// AppDropdownFormField
AppDropdownFormField<String>(
  label: 'Country',
  items: countries,
  value: selected,
  onChanged: (v) => setState(() => selected = v),
)

// ValidationAckScope (e.g. Terms & Conditions checkbox)
ValidationAckScope(
  label: 'I agree to the Terms & Conditions',
  onChanged: (accepted) => setState(() => _agreed = accepted),
)`,
  },
];

export default function WhatsNew() {
  const [tab, setTab] = useState(0);

  return (
    <Box
      id="whats-new"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #0D1117 0%, #0A0A0A 50%, #0D1117 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glow */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse, rgba(0,188,212,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stack
              direction="row"
              spacing={1}
              justifyContent="center"
              sx={{ mb: 2 }}
            >
              <Chip
                label="v2.0.0"
                size="small"
                sx={{
                  bgcolor: "rgba(0,188,212,0.15)",
                  color: "#00BCD4",
                  fontWeight: 700,
                  border: "1px solid rgba(0,188,212,0.3)",
                }}
              />
              <Chip
                label="Latest Release"
                size="small"
                sx={{
                  bgcolor: "rgba(76,175,80,0.15)",
                  color: "#4CAF50",
                  fontWeight: 700,
                  border: "1px solid rgba(76,175,80,0.3)",
                }}
              />
            </Stack>

            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "2.5rem" },
                background: "linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              What&apos;s New in v2.0.0
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ fontWeight: 400, maxWidth: 680, mx: "auto" }}
            >
              AppResponsive design system, add feature command, analytics
              integration, smart update checker, and production UI kit widgets.
            </Typography>
          </motion.div>
        </Box>

        {/* Tab navigation */}
        <Box
          sx={{
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            mb: 0,
            overflowX: "auto",
          }}
        >
          <Tabs
            value={tab}
            onChange={(_, v) => setTab(v)}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                minWidth: 0,
                px: { xs: 1.5, sm: 2.5 },
              },
              "& .Mui-selected": { color: "#00BCD4 !important" },
              "& .MuiTabs-indicator": { bgcolor: "#00BCD4" },
            }}
          >
            {highlights.map((h, i) => (
              <Tab
                key={i}
                label={
                  <Stack direction="row" spacing={0.75} alignItems="center">
                    <span>{h.title}</span>
                    <Chip
                      label={h.badge}
                      size="small"
                      sx={{
                        height: 18,
                        fontSize: "0.6rem",
                        fontWeight: 700,
                        bgcolor: `${h.color}22`,
                        color: h.color,
                        border: `1px solid ${h.color}44`,
                        "& .MuiChip-label": { px: 0.75 },
                      }}
                    />
                  </Stack>
                }
              />
            ))}
          </Tabs>
        </Box>

        {/* Tab panels */}
        <AnimatePresence mode="wait">
          {highlights.map((feature, i) => (
            <TabPanel key={i} value={tab} index={i}>
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <Grid container spacing={4} alignItems="flex-start">
                  {/* Left: description + highlights */}
                  <Grid item xs={12} md={5}>
                    <Stack spacing={3}>
                      <Box>
                        <Stack
                          direction="row"
                          spacing={1.5}
                          alignItems="center"
                          sx={{ mb: 1.5 }}
                        >
                          <Box sx={{ color: feature.color }}>
                            {feature.icon}
                          </Box>
                          <Box>
                            <Typography
                              variant="h5"
                              sx={{ fontWeight: 700, lineHeight: 1.2 }}
                            >
                              {feature.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {feature.subtitle}
                            </Typography>
                          </Box>
                        </Stack>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{ lineHeight: 1.7 }}
                        >
                          {feature.description}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          p: 2.5,
                          borderRadius: 2,
                          border: `1px solid ${feature.color}33`,
                          bgcolor: `${feature.color}08`,
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            color: feature.color,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                            letterSpacing: 1.2,
                          }}
                        >
                          Highlights
                        </Typography>
                        <Stack spacing={1} sx={{ mt: 1.5 }}>
                          {feature.highlights.map((h, j) => (
                            <Stack
                              key={j}
                              direction="row"
                              spacing={1}
                              alignItems="flex-start"
                            >
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: "50%",
                                  bgcolor: feature.color,
                                  mt: 0.85,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography
                                variant="body2"
                                sx={{
                                  fontFamily: "monospace",
                                  fontSize: "0.82rem",
                                  color: "rgba(255,255,255,0.8)",
                                }}
                              >
                                {h}
                              </Typography>
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                    </Stack>
                  </Grid>

                  {/* Right: code block */}
                  <Grid item xs={12} md={7}>
                    <SharedCodeBlock
                      code={feature.code}
                      language="dart"
                      customStyle={{
                        borderRadius: "12px",
                        fontSize: "0.82rem",
                        padding: "24px",
                        maxHeight: "480px",
                        overflowY: "auto",
                        border: `1px solid ${feature.color}22`,
                      }}
                    />
                  </Grid>
                </Grid>
              </motion.div>
            </TabPanel>
          ))}
        </AnimatePresence>
      </Container>
    </Box>
  );
}
