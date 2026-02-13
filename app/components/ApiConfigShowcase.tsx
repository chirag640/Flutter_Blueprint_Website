"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import ApiIcon from "@mui/icons-material/Api";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import SharedCodeBlock from "./SharedCodeBlock";

const apiPresets = [
  {
    name: "Modern REST",
    description: "HTTP 200 + JSON data pattern",
    color: "#4CAF50",
    icon: "🌐",
    config: `ApiConfig.modernRest()
// Success: HTTP 200 + data in body
// {
//   "id": 1,
//   "name": "John",
//   "email": "john@example.com"
// }`,
    features: ["HTTP status codes", "Direct data response", "Standard REST"],
  },
  {
    name: "Laravel",
    description: "Data wrapper with message field",
    color: "#FF2D20",
    icon: "🔶",
    config: `ApiConfig.laravel()
// Success response:
// {
//   "data": { ... },
//   "message": "Success",
//   "meta": { "pagination": ... }
// }`,
    features: ["Data wrapper", "Message field", "Meta pagination"],
  },
  {
    name: "Django REST",
    description: "Results array with detail errors",
    color: "#092E20",
    icon: "🐍",
    config: `ApiConfig.django()
// List response:
// {
//   "count": 100,
//   "results": [ ... ],
//   "next": "url",
//   "previous": null
// }`,
    features: ["Results array", "Count field", "Pagination links"],
  },
  {
    name: "Legacy .NET",
    description: "Success: true/false pattern",
    color: "#512BD4",
    icon: "🔷",
    config: `ApiConfig.legacyDotNet()
// Response pattern:
// {
//   "Success": true,
//   "Data": { ... },
//   "Message": "Operation completed"
// }`,
    features: ["Success boolean", "PascalCase keys", "Data wrapper"],
  },
  {
    name: "Custom",
    description: "Configure for any backend",
    color: "#00BCD4",
    icon: "⚙️",
    config: `ApiConfig(
  successKey: 'status',
  dataPath: 'response.data',
  errorMessagePath: 'error.details',
  tokenPath: 'auth.accessToken',
  authHeader: 'X-Auth-Token',
  authPrefix: '',
)`,
    features: ["Full control", "Any pattern", "Custom paths"],
  },
];

export default function ApiConfigShowcase() {
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(apiPresets[selectedPreset].config);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box
      id="api-config"
      sx={{
        py: { xs: 10, md: 14 },
        background: "linear-gradient(180deg, #0A0A0A 0%, #121218 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(2, 86, 155, 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Chip
              icon={<ApiIcon sx={{ fontSize: 16 }} />}
              label="UNIVERSAL API CONFIGURATOR"
              sx={{
                mb: 3,
                bgcolor: "rgba(0, 188, 212, 0.15)",
                color: "#00BCD4",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                border: "1px solid rgba(0, 188, 212, 0.3)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
                fontWeight: 900,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #00BCD4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Works With Any Backend
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
              Pre-configured presets for popular backend frameworks or fully
              customize for your unique API structure.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {/* Preset Selector */}
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              {apiPresets.map((preset, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    component={motion.div}
                    whileHover={{ x: 8 }}
                    onClick={() => setSelectedPreset(index)}
                    sx={{
                      cursor: "pointer",
                      background:
                        selectedPreset === index
                          ? `linear-gradient(135deg, ${preset.color}15 0%, ${preset.color}08 100%)`
                          : "rgba(255, 255, 255, 0.02)",
                      border:
                        selectedPreset === index
                          ? `2px solid ${preset.color}50`
                          : "1px solid rgba(255, 255, 255, 0.05)",
                      borderRadius: "16px",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: `${preset.color}10`,
                        border: `1px solid ${preset.color}30`,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="space-between"
                      >
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography sx={{ fontSize: "1.5rem" }}>
                            {preset.icon}
                          </Typography>
                          <Box>
                            <Typography
                              variant="h6"
                              sx={{
                                fontWeight: 700,
                                fontSize: "1rem",
                                color:
                                  selectedPreset === index
                                    ? preset.color
                                    : "#fff",
                              }}
                            >
                              {preset.name}
                            </Typography>
                            <Typography
                              sx={{
                                fontSize: "0.8rem",
                                color: "rgba(255,255,255,0.5)",
                              }}
                            >
                              {preset.description}
                            </Typography>
                          </Box>
                        </Stack>
                        {selectedPreset === index && (
                          <CheckCircleIcon
                            sx={{ color: preset.color, fontSize: 24 }}
                          />
                        )}
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Code Preview */}
          <Grid item xs={12} md={7}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedPreset}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Box
                  sx={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    border: `2px solid ${apiPresets[selectedPreset].color}30`,
                    background: "#1A1A1A",
                  }}
                >
                  {/* Header */}
                  <Box
                    sx={{
                      px: 3,
                      py: 2,
                      borderBottom: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: `${apiPresets[selectedPreset].color}10`,
                    }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
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
                          color: apiPresets[selectedPreset].color,
                          fontWeight: 600,
                          fontSize: "0.9rem",
                        }}
                      >
                        {apiPresets[selectedPreset].name} Configuration
                      </Typography>
                    </Stack>
                    <Tooltip title={copied ? "Copied!" : "Copy code"}>
                      <IconButton onClick={handleCopy} size="small">
                        {copied ? (
                          <DoneIcon sx={{ color: "#4CAF50", fontSize: 18 }} />
                        ) : (
                          <ContentCopyIcon
                            sx={{
                              color: "rgba(255,255,255,0.5)",
                              fontSize: 18,
                            }}
                          />
                        )}
                      </IconButton>
                    </Tooltip>
                  </Box>

                  {/* Code */}
                  <SharedCodeBlock
                    code={apiPresets[selectedPreset].config}
                    language="dart"
                    customStyle={{
                      margin: 0,
                      padding: "1.5rem",
                      background: "transparent",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  />

                  {/* Features */}
                  <Box
                    sx={{
                      px: 3,
                      py: 2,
                      borderTop: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      gap: 1,
                      flexWrap: "wrap",
                    }}
                  >
                    {apiPresets[selectedPreset].features.map((feature, i) => (
                      <Chip
                        key={i}
                        label={feature}
                        size="small"
                        sx={{
                          bgcolor: `${apiPresets[selectedPreset].color}15`,
                          color: apiPresets[selectedPreset].color,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </AnimatePresence>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
