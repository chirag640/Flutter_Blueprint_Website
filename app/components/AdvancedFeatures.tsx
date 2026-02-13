"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  Chip,
  Stack,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import WebhookIcon from "@mui/icons-material/Webhook";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MapIcon from "@mui/icons-material/Map";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LoginIcon from "@mui/icons-material/Login";
import ApiIcon from "@mui/icons-material/Api";
import TuneIcon from "@mui/icons-material/Tune";
import SyncIcon from "@mui/icons-material/Sync";
import SharedCodeBlock from "./SharedCodeBlock";

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
      id={`feature-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

const advancedFeatures = [
  {
    icon: <WebhookIcon sx={{ fontSize: 32 }} />,
    title: "WebSocket Support",
    subtitle: "Real-time Communication",
    badge: "NEW",
    color: "#9C27B0",
    description:
      "Production-ready WebSocket client with auto-reconnection, message queuing, and connection state management.",
    features: [
      "Automatic reconnection with exponential backoff",
      "Message queue for offline support",
      "Connection state stream",
      "Channel-based messaging",
    ],
    code: `// WebSocket client with auto-reconnect
final client = WebSocketClient(
  url: 'wss://api.example.com/ws',
  reconnectInterval: Duration(seconds: 5),
  maxReconnectAttempts: 10,
);

await client.connect();

// Listen for messages
client.messages.listen((data) {
  print('Received: \$data');
});

// Send messages (queued if offline)
client.send({'type': 'chat', 'message': 'Hello!'});`,
  },
  {
    icon: <NotificationsActiveIcon sx={{ fontSize: 32 }} />,
    title: "Push Notifications",
    subtitle: "FCM & Local Notifications",
    badge: "NEW",
    color: "#FF5722",
    description:
      "Complete push notification setup with Firebase Cloud Messaging and local notifications.",
    features: [
      "FCM token management",
      "Foreground & background handling",
      "Local notification scheduling",
      "Topic subscription support",
    ],
    code: `// Initialize push notifications
final pushService = PushNotificationService();
await pushService.initialize();

// Request permissions (iOS)
await pushService.requestPermission();

// Get FCM token
final token = pushService.fcmToken;

// Subscribe to topics
await pushService.subscribeToTopic('news');

// Handle notification taps
pushService.onNotificationTap.listen((data) {
  // Navigate to specific screen
});`,
  },
  {
    icon: <MapIcon sx={{ fontSize: 32 }} />,
    title: "Google Maps",
    subtitle: "Location & Mapping",
    badge: "NEW",
    color: "#4CAF50",
    description:
      "Full Google Maps integration with location services, geocoding, and marker management.",
    features: [
      "Current location tracking",
      "Geocoding & reverse geocoding",
      "Custom marker management",
      "Route calculation utilities",
    ],
    code: `// Map service for easy integration
final mapService = MapService();

// Go to current location
await mapService.goToCurrentLocation(zoom: 15);

// Add custom markers
mapService.markerManager.addMarker(
  id: 'office',
  position: LatLng(37.7749, -122.4194),
  title: 'Our Office',
  onTap: () => showOfficeDetails(),
);

// Geocode an address
final location = await geocodingService
    .getLocationFromAddress('1600 Amphitheatre Parkway');`,
  },
  {
    icon: <PhotoCameraIcon sx={{ fontSize: 32 }} />,
    title: "Media Handling",
    subtitle: "Image & Camera",
    badge: "NEW",
    color: "#2196F3",
    description:
      "Complete media handling with image picker, compression, cropping, and permission management.",
    features: [
      "Gallery & camera picker",
      "Automatic image compression",
      "Image cropping support",
      "Permission handling",
    ],
    code: `// Pick and process images
final imagePicker = ImagePickerService();

// Pick from gallery with compression
final image = await imagePicker.pickFromGallery(
  maxWidth: 1920,
  quality: 85,
  compress: true,
);

// Pick from camera
final photo = await imagePicker.pickFromCamera(
  preferredCamera: CameraDevice.rear,
);

// Crop image
final cropped = await imagePicker.cropImage(
  image,
  aspectRatio: CropAspectRatio.square,
);`,
  },
  {
    icon: <LoginIcon sx={{ fontSize: 32 }} />,
    title: "Social Authentication",
    subtitle: "Google, Apple, Facebook",
    badge: "NEW",
    color: "#E91E63",
    description:
      "Pre-configured social login with Google Sign-In, Apple Sign-In, and Facebook Login.",
    features: [
      "Google Sign-In integration",
      "Sign in with Apple",
      "Facebook Login",
      "Unified social user model",
    ],
    code: `// Social authentication service
final socialAuth = SocialAuthService();

// Google Sign-In
final googleUser = await socialAuth.signInWithGoogle();

// Apple Sign-In
final appleUser = await socialAuth.signInWithApple();

// Facebook Login
final fbUser = await socialAuth.signInWithFacebook();

// Get unified user data
print('User: \${googleUser?.displayName}');
print('Email: \${googleUser?.email}');
print('Photo: \${googleUser?.photoUrl}');`,
  },
  {
    icon: <ApiIcon sx={{ fontSize: 32 }} />,
    title: "Universal API Config",
    subtitle: "Backend Presets",
    badge: "POWERFUL",
    color: "#00BCD4",
    description:
      "Universal API configurator with presets for Laravel, Django, .NET, and custom backends.",
    features: [
      "Pre-built backend presets",
      "Configurable response parsing",
      "Custom token extraction",
      "Error message mapping",
    ],
    code: `// Choose your backend preset
final apiConfig = ApiConfig.laravel();
// or: ApiConfig.django()
// or: ApiConfig.modernRest()
// or: ApiConfig.legacyDotNet()

// Or create custom config
final custom = ApiConfig(
  successKey: 'success',
  dataPath: 'data.items',
  errorMessagePath: 'error.message',
  tokenPath: 'auth.token',
  authHeader: 'Authorization',
  authPrefix: 'Bearer',
);`,
  },
];

export default function AdvancedFeatures() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      id="advanced-features"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0F0F1A 50%, #0A0A0A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <Box
        component={motion.div}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, transparent, rgba(156, 39, 176, 0.1), transparent)",
          filter: "blur(60px)",
        }}
      />
      <Box
        component={motion.div}
        animate={{
          rotate: [360, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "conic-gradient(from 180deg, transparent, rgba(0, 188, 212, 0.1), transparent)",
          filter: "blur(80px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Chip
              icon={<TuneIcon sx={{ fontSize: 16 }} />}
              label="ADVANCED INTEGRATIONS"
              sx={{
                mb: 3,
                bgcolor: "rgba(156, 39, 176, 0.15)",
                color: "#CE93D8",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                border: "1px solid rgba(156, 39, 176, 0.3)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                mb: 2,
                background:
                  "linear-gradient(135deg, #ffffff 0%, #CE93D8 50%, #00BCD4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Beyond Basic Scaffolding
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.125rem" },
                color: "rgba(255, 255, 255, 0.65)",
                maxWidth: "700px",
                mx: "auto",
                lineHeight: 1.8,
              }}
            >
              Production-ready integrations for WebSocket, push notifications,
              maps, media handling, social auth, and more. Just enable the flags
              you need.
            </Typography>
          </motion.div>
        </Box>

        {/* Tabs */}
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              "& .MuiTabs-indicator": {
                background: "linear-gradient(90deg, #9C27B0, #00BCD4)",
                height: 3,
                borderRadius: "3px 3px 0 0",
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.9rem",
                minHeight: 60,
                color: "rgba(255, 255, 255, 0.5)",
                "&.Mui-selected": {
                  color: "#fff",
                },
              },
            }}
          >
            {advancedFeatures.map((feature, index) => (
              <Tab
                key={index}
                icon={feature.icon}
                label={feature.title}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Box>

        {/* Tab Content */}
        {advancedFeatures.map((feature, index) => (
          <TabPanel key={index} value={selectedTab} index={index}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <Grid container spacing={4}>
                  {/* Feature Info */}
                  <Grid item xs={12} md={5}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: "20px",
                        background:
                          "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        height: "100%",
                      }}
                    >
                      <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{ mb: 3 }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: "12px",
                            background: `${feature.color}20`,
                            color: feature.color,
                          }}
                        >
                          {feature.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h5"
                            sx={{ fontWeight: 700, mb: 0.5 }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            sx={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: "0.875rem",
                            }}
                          >
                            {feature.subtitle}
                          </Typography>
                        </Box>
                        <Chip
                          label={feature.badge}
                          size="small"
                          sx={{
                            bgcolor: `${feature.color}20`,
                            color: feature.color,
                            fontWeight: 700,
                            fontSize: "0.7rem",
                          }}
                        />
                      </Stack>

                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          mb: 3,
                          lineHeight: 1.7,
                        }}
                      >
                        {feature.description}
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 600,
                          mb: 2,
                          color: "rgba(255,255,255,0.9)",
                        }}
                      >
                        What&apos;s Included:
                      </Typography>
                      <Stack spacing={1.5}>
                        {feature.features.map((item, i) => (
                          <Stack
                            key={i}
                            direction="row"
                            spacing={1.5}
                            alignItems="center"
                          >
                            <Box
                              sx={{
                                width: 6,
                                height: 6,
                                borderRadius: "50%",
                                bgcolor: feature.color,
                              }}
                            />
                            <Typography
                              sx={{
                                color: "rgba(255,255,255,0.65)",
                                fontSize: "0.9rem",
                              }}
                            >
                              {item}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Box>
                  </Grid>

                  {/* Code Preview */}
                  <Grid item xs={12} md={7}>
                    <Box
                      sx={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        background: "#1E1E1E",
                      }}
                    >
                      <Box
                        sx={{
                          px: 3,
                          py: 1.5,
                          borderBottom: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}
                      >
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: "#FF5F56",
                          }}
                        />
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: "#FFBD2E",
                          }}
                        />
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: "#27C93F",
                          }}
                        />
                        <Typography
                          sx={{
                            ml: 2,
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.8rem",
                          }}
                        >
                          example.dart
                        </Typography>
                      </Box>
                      <SharedCodeBlock
                        code={feature.code}
                        language="dart"
                        customStyle={{
                          background: "transparent",
                          fontSize: "0.85rem",
                          lineHeight: 1.6,
                          padding: "1.5rem",
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </motion.div>
            </AnimatePresence>
          </TabPanel>
        ))}
      </Container>
    </Box>
  );
}
