"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  Chip,
  Stack,
  Button,
  Paper,
  IconButton,
  Tooltip,
} from "@mui/material";
import { motion } from "framer-motion";
import TerminalIcon from "@mui/icons-material/Terminal";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

interface CommandOptions {
  appName: string;
  state: string;
  api: boolean;
  theme: boolean;
  tests: boolean;
  hive: boolean;
  pagination: boolean;
  ci: string;
  security: string;
  auth: string;
  offline: string;
  memory: string;
  localization: string;
  websocket: boolean;
  notifications: boolean;
  maps: boolean;
  socialAuth: boolean;
}

const defaultOptions: CommandOptions = {
  appName: "my_app",
  state: "provider",
  api: true,
  theme: true,
  tests: true,
  hive: false,
  pagination: false,
  ci: "none",
  security: "none",
  auth: "none",
  offline: "none",
  memory: "none",
  localization: "none",
  websocket: false,
  notifications: false,
  maps: false,
  socialAuth: false,
};

export default function CommandBuilder() {
  const [options, setOptions] = useState<CommandOptions>(defaultOptions);
  const [command, setCommand] = useState("");
  const [copied, setCopied] = useState(false);
  const [fileCount, setFileCount] = useState(43);

  useEffect(() => {
    let cmd = `flutter_blueprint init ${options.appName}`;
    let files = 43;

    if (options.state !== "provider") {
      cmd += ` --state ${options.state}`;
    }
    if (options.api) {
      cmd += " --api";
      files += 8;
    }
    if (options.theme) {
      cmd += " --theme";
      files += 4;
    }
    if (options.tests) {
      cmd += " --tests";
      files += 6;
    }
    if (options.hive) {
      cmd += " --hive";
      files += 5;
    }
    if (options.pagination) {
      cmd += " --pagination";
      files += 3;
    }
    if (options.ci !== "none") {
      cmd += ` --ci ${options.ci}`;
      files += 2;
    }
    if (options.security !== "none") {
      cmd += ` --security ${options.security}`;
      files += options.security === "enterprise" ? 12 : 6;
    }
    if (options.auth !== "none") {
      cmd += ` --auth-level ${options.auth}`;
      files += options.auth === "advanced" ? 10 : 5;
    }
    if (options.offline !== "none") {
      cmd += ` --offline-level ${options.offline}`;
      files += options.offline === "advanced" ? 12 : 6;
    }
    if (options.memory !== "none") {
      cmd += ` --memory ${options.memory}`;
      files += options.memory === "advanced" ? 8 : 4;
    }
    if (options.localization !== "none") {
      cmd += ` --localization-level ${options.localization}`;
      files += options.localization === "advanced" ? 6 : 3;
    }
    if (options.websocket) {
      cmd += " --websocket";
      files += 4;
    }
    if (options.notifications) {
      cmd += " --notifications";
      files += 4;
    }
    if (options.maps) {
      cmd += " --maps";
      files += 5;
    }
    if (options.socialAuth) {
      cmd += " --social-auth";
      files += 5;
    }

    setCommand(cmd);
    setFileCount(files);
  }, [options]);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setOptions(defaultOptions);
  };

  const OptionSwitch = ({
    label,
    checked,
    onChange,
    color = "#00BCD4",
  }: {
    label: string;
    checked: boolean;
    onChange: () => void;
    color?: string;
  }) => (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          sx={{
            "& .MuiSwitch-switchBase.Mui-checked": {
              color: color,
            },
            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
              backgroundColor: color,
            },
          }}
        />
      }
      label={
        <Typography sx={{ fontSize: "0.875rem", fontWeight: 500 }}>
          {label}
        </Typography>
      }
      sx={{ m: 0 }}
    />
  );

  const OptionSelect = ({
    label,
    value,
    options,
    onChange,
  }: {
    label: string;
    value: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
  }) => (
    <Box>
      <Typography
        sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", mb: 0.5 }}
      >
        {label}
      </Typography>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        size="small"
        fullWidth
        sx={{
          bgcolor: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.1)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255,255,255,0.2)",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#00BCD4",
          },
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );

  return (
    <Box
      id="command-builder"
      sx={{
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(180deg, #0A0A0A 0%, #0D1117 50%, #0A0A0A 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid pattern background */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 188, 212, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 188, 212, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.5,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Chip
              icon={<TerminalIcon sx={{ fontSize: 16 }} />}
              label="INTERACTIVE COMMAND BUILDER"
              sx={{
                mb: 3,
                bgcolor: "rgba(76, 175, 80, 0.15)",
                color: "#4CAF50",
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                border: "1px solid rgba(76, 175, 80, 0.3)",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2rem", md: "2.75rem" },
                fontWeight: 900,
                mb: 2,
                background: "linear-gradient(135deg, #ffffff 0%, #4CAF50 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Build Your Perfect Command
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.6)",
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              Toggle features and see the CLI command update in real-time
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          {/* Options Panel */}
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 3,
                borderRadius: "16px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <Stack spacing={3}>
                {/* State Management */}
                <OptionSelect
                  label="State Management"
                  value={options.state}
                  options={[
                    { value: "provider", label: "Provider" },
                    { value: "riverpod", label: "Riverpod" },
                    { value: "bloc", label: "BLoC" },
                  ]}
                  onChange={(v) => setOptions({ ...options, state: v })}
                />

                {/* Core Features */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    CORE FEATURES
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="API Client"
                        checked={options.api}
                        onChange={() =>
                          setOptions({ ...options, api: !options.api })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Theme System"
                        checked={options.theme}
                        onChange={() =>
                          setOptions({ ...options, theme: !options.theme })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Tests"
                        checked={options.tests}
                        onChange={() =>
                          setOptions({ ...options, tests: !options.tests })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Hive Cache"
                        checked={options.hive}
                        onChange={() =>
                          setOptions({ ...options, hive: !options.hive })
                        }
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Pagination"
                        checked={options.pagination}
                        onChange={() =>
                          setOptions({
                            ...options,
                            pagination: !options.pagination,
                          })
                        }
                      />
                    </Grid>
                  </Grid>
                </Box>

                {/* Advanced Options */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <OptionSelect
                      label="CI/CD"
                      value={options.ci}
                      options={[
                        { value: "none", label: "None" },
                        { value: "github", label: "GitHub Actions" },
                        { value: "gitlab", label: "GitLab CI" },
                        { value: "azure", label: "Azure Pipelines" },
                      ]}
                      onChange={(v) => setOptions({ ...options, ci: v })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <OptionSelect
                      label="Security Level"
                      value={options.security}
                      options={[
                        { value: "none", label: "None" },
                        { value: "basic", label: "Basic" },
                        { value: "standard", label: "Standard" },
                        { value: "enterprise", label: "Enterprise" },
                      ]}
                      onChange={(v) => setOptions({ ...options, security: v })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <OptionSelect
                      label="Authentication"
                      value={options.auth}
                      options={[
                        { value: "none", label: "None" },
                        { value: "basic", label: "Basic" },
                        { value: "advanced", label: "Advanced" },
                      ]}
                      onChange={(v) => setOptions({ ...options, auth: v })}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <OptionSelect
                      label="Offline Support"
                      value={options.offline}
                      options={[
                        { value: "none", label: "None" },
                        { value: "basic", label: "Basic" },
                        { value: "advanced", label: "Advanced" },
                      ]}
                      onChange={(v) => setOptions({ ...options, offline: v })}
                    />
                  </Grid>
                </Grid>

                {/* Integrations */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.5)",
                      mb: 1,
                      fontWeight: 600,
                    }}
                  >
                    INTEGRATIONS
                  </Typography>
                  <Grid container spacing={1}>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="WebSocket"
                        checked={options.websocket}
                        onChange={() =>
                          setOptions({
                            ...options,
                            websocket: !options.websocket,
                          })
                        }
                        color="#9C27B0"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Push Notifications"
                        checked={options.notifications}
                        onChange={() =>
                          setOptions({
                            ...options,
                            notifications: !options.notifications,
                          })
                        }
                        color="#FF5722"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Google Maps"
                        checked={options.maps}
                        onChange={() =>
                          setOptions({ ...options, maps: !options.maps })
                        }
                        color="#4CAF50"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <OptionSwitch
                        label="Social Auth"
                        checked={options.socialAuth}
                        onChange={() =>
                          setOptions({
                            ...options,
                            socialAuth: !options.socialAuth,
                          })
                        }
                        color="#E91E63"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>

          {/* Command Preview */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: "sticky",
                top: 100,
              }}
            >
              {/* Stats */}
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: "12px",
                    background: "rgba(76, 175, 80, 0.1)",
                    border: "1px solid rgba(76, 175, 80, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#4CAF50",
                    }}
                  >
                    {fileCount}+
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}
                  >
                    Files Generated
                  </Typography>
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    p: 2,
                    borderRadius: "12px",
                    background: "rgba(0, 188, 212, 0.1)",
                    border: "1px solid rgba(0, 188, 212, 0.2)",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#00BCD4",
                    }}
                  >
                    ~3s
                  </Typography>
                  <Typography
                    sx={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}
                  >
                    Generation Time
                  </Typography>
                </Box>
              </Stack>

              {/* Terminal */}
              <Box
                sx={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "#1A1A1A",
                }}
              >
                {/* Terminal Header */}
                <Box
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "rgba(255,255,255,0.02)",
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
                        color: "rgba(255,255,255,0.5)",
                        fontSize: "0.8rem",
                      }}
                    >
                      Terminal
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1}>
                    <Tooltip title="Reset">
                      <IconButton onClick={handleReset} size="small">
                        <RestartAltIcon
                          sx={{ color: "rgba(255,255,255,0.5)", fontSize: 18 }}
                        />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title={copied ? "Copied!" : "Copy"}>
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
                  </Stack>
                </Box>

                {/* Command */}
                <Box sx={{ p: 3 }}>
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      color: "#4CAF50",
                      wordBreak: "break-all",
                      lineHeight: 1.8,
                    }}
                  >
                    <Box component="span" sx={{ color: "#FF79C6" }}>
                      $
                    </Box>{" "}
                    {command}
                  </Typography>
                </Box>
              </Box>

              {/* Action Button */}
              <Button
                variant="contained"
                fullWidth
                startIcon={<PlayArrowIcon />}
                onClick={handleCopy}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: "1rem",
                  fontWeight: 600,
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #02569B 0%, #00d4ff 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(135deg, #01447a 0%, #00b8e6 100%)",
                  },
                }}
              >
                Copy Command & Run
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
