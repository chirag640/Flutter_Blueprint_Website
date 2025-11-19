"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { motion } from "framer-motion";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function QuickStart() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      id="quick-start"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Get Building in Seconds
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Choose your workflow: Interactive wizard or quick command
          </Typography>
        </Box>

        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTab-root": {
                fontSize: "1rem",
                fontWeight: 600,
                textTransform: "none",
              },
            }}
          >
            <Tab label="1. Installation" />
            <Tab label="2. Interactive Wizard" />
            <Tab label="3. Quick Mode" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Global Activation (Recommended)
            </Typography>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            >
              {`dart pub global activate flutter_blueprint`}
            </SyntaxHighlighter>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
              Once installed globally, you can use it anywhere:
            </Typography>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
                marginTop: "16px",
              }}
            >
              {`flutter_blueprint init`}
            </SyntaxHighlighter>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Beautiful Guided Experience
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Just run without arguments for an interactive wizard with arrow
              key navigation, multi-select checkboxes, smart validation, and all
              the latest features including Hive and Pagination:
            </Typography>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            >
              {`flutter_blueprint init`}
            </SyntaxHighlighter>
            <Box
              sx={{ mt: 3, p: 3, bgcolor: "background.paper", borderRadius: 2 }}
            >
              <SyntaxHighlighter
                language="text"
                style={vscDarkPlus}
                customStyle={{
                  padding: "24px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  backgroundColor: "#1E1E1E",
                }}
              >
                {`🎯 Welcome to flutter_blueprint!
   Let's create your Flutter app with professional architecture.

✔ 📱 App name · my_awesome_app

✔ 🎯 Choose state management · bloc
   • Provider (ChangeNotifier, easy to learn)
   • Riverpod (Compile-time safe, better testability)
   • Bloc (Event-driven, powerful patterns)
   [Use ↑↓ arrow keys, Enter to select]

✔ ✨ Select features to include (use space to select, enter to confirm)
   ✓ Theme system (Light/Dark modes)
   ✓ Localization (i18n support)
   ✓ Environment config (.env)
   ✓ API client (Dio + interceptors)
   ✓ Hive database (NoSQL offline caching)
   ✓ Pagination (Infinite scroll + pull-to-refresh)
   ✓ Test scaffolding

✔ 🚀 Select target platforms (use space to select)
   ✓ Mobile (iOS + Android)
   ✓ Web
   ✓ Desktop (Windows, macOS, Linux)

📋 Configuration Summary:
   App name: my_awesome_app
   State management: bloc
   Platforms: Mobile, Web, Desktop
   Theme: ✅
   Localization: ✅
   Environment: ✅
   API client: ✅
   Hive database: ✅
   Pagination: ✅
   Tests: ✅

🚀 Generating project structure...
✅ Generated 65 files successfully!`}
              </SyntaxHighlighter>
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Quick Mode (For Experienced Users)
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Skip the wizard by providing flags for full control:
            </Typography>
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            >
              {`# Provider template (classic ChangeNotifier pattern)
flutter_blueprint init my_app \\
  --state provider \\
  --theme \\
  --env \\
  --api \\
  --tests

# Riverpod template (compile-time safe with StateNotifier)
flutter_blueprint init my_app \\
  --state riverpod \\
  --theme \\
  --env \\
  --api \\
  --tests \\
  --no-localization

# With Hive database and Pagination
flutter_blueprint init my_app \\
  --state bloc \\
  --hive \\
  --pagination \\
  --api

# Full-featured app with everything
flutter_blueprint init my_app \\
  --state bloc \\
  --api \\
  --hive \\
  --pagination \\
  --theme \\
  --localization \\
  --env \\
  --tests \\
  --ci github \\
  --platforms all

# 🆕 With advanced authentication (JWT, OAuth, Biometric)
flutter_blueprint init my_app \\
  --state riverpod \\
  --auth-level advanced \\
  --jwt \\
  --oauth \\
  --biometric \\
  --refresh-token

# 🆕 With offline-first architecture
flutter_blueprint init my_app \\
  --state riverpod \\
  --offline-level advanced \\
  --background-sync \\
  --conflict-resolution \\
  --sync-interval 30

# 🆕 With advanced localization
flutter_blueprint init my_app \\
  --localization-level advanced \\
  --rtl \\
  --supported-locales en,es,ar,fr,de \\
  --default-locale en

# 🆕 With advanced memory management
flutter_blueprint init my_app \\
  --memory advanced \\
  --riverpod-level advanced \\
  --code-generation

# 🚀 ULTIMATE: All advanced features combined
flutter_blueprint init enterprise_app \\
  --state riverpod \\
  --platforms android,ios,web \\
  --memory advanced \\
  --riverpod-level advanced \\
  --localization-level advanced \\
  --auth-level advanced \\
  --offline-level advanced \\
  --background-sync \\
  --conflict-resolution \\
  --sync-interval 30 \\
  --theme \\
  --localization \\
  --env \\
  --api \\
  --tests \\
  --hive \\
  --pagination \\
  --code-generation \\
  --jwt \\
  --oauth \\
  --biometric \\
  --refresh-token \\
  --rtl \\
  --supported-locales en,es,ar,fr,de \\
  --default-locale en
  
# Result: 88 files, 0 errors, production-ready! 🎉`}
            </SyntaxHighlighter>
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}
