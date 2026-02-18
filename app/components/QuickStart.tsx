"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
import SharedCodeBlock from "./SharedCodeBlock";
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
            Choose your workflow: Interactive wizard, quick command, or add to
            existing
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
            <Tab label="4. Add to Existing" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Global Activation (Recommended)
            </Typography>
            <SharedCodeBlock
              code={`dart pub global activate flutter_blueprint`}
              language="bash"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ mt: 3 }}>
              Once installed globally, you can use it anywhere:
            </Typography>
            <SharedCodeBlock
              code={`flutter_blueprint init`}
              language="bash"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
                marginTop: "16px",
              }}
            />
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
            <SharedCodeBlock
              code={`flutter_blueprint init`}
              language="bash"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            />
            <Box
              sx={{ mt: 3, p: 3, bgcolor: "background.paper", borderRadius: 2 }}
            >
              <SharedCodeBlock
                code={`🚀 Welcome to Flutter Blueprint Interactive Setup!
Let's create an amazing Flutter project together.

✔ 📱 Enter your app name (lowercase_with_underscores) · my_awesome_app

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
                language="text"
                customStyle={{
                  padding: "24px",
                  borderRadius: "12px",
                  fontSize: "0.95rem",
                  backgroundColor: "#1E1E1E",
                }}
              />
            </Box>
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box sx={{ maxWidth: "800px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Quick Mode (For Experienced Users)
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              For experienced users, skip the wizard by directly providing flags
              for full control:
            </Typography>
            <SharedCodeBlock
              code={`# Provider template (simple, beginner-friendly)
flutter_blueprint init my_app \\
  --state provider \\
  --theme \\
  --api \\
  --tests

# Bloc template
flutter_blueprint init my_app \\
  --state bloc \\
  --theme \\
  --api \\
  --hive \\
  --pagination

# With CI/CD + analytics (real flags)
flutter_blueprint init my_app \\
  --state riverpod \\
  --api \\
  --theme \\
  --tests \\
  --ci github \\
  --analytics sentry

# Full-featured mobile app
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
  --analytics firebase \\
  --websocket \\
  --push-notifications \\
  --maps \\
  --social-auth
  
# Result: 88+ files, 0 errors, production-ready! 🎉`}
              language="bash"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={3}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Add a Feature to an Existing Project
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Already have a flutter_blueprint project? Use{" "}
              <code>add feature</code> to scaffold a complete feature module —
              state management, repository, model, widgets, and tests — without
              touching any existing files.
            </Typography>
            <SharedCodeBlock
              code={`# Navigate to your existing project
cd my_app

# Add a new feature module
flutter_blueprint add feature cart

# What gets generated:
# lib/features/cart/
#   ├── data/
#   │   ├── models/cart_model.dart
#   │   └── repositories/cart_repository.dart
#   └── presentation/
#       ├── bloc/          ← matches your project's state management
#       │   ├── cart_bloc.dart
#       │   ├── cart_event.dart
#       │   └── cart_state.dart
#       ├── pages/
#       │   └── cart_page.dart
#       └── widgets/
#           └── cart_content.dart
# test/features/cart/
#   └── cart_test.dart

# Examples
flutter_blueprint add feature auth
flutter_blueprint add feature profile
flutter_blueprint add feature checkout
flutter_blueprint add feature settings`}
              language="bash"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "1rem",
              }}
            />
          </Box>
        </TabPanel>
      </Container>
    </Box>
  );
}
