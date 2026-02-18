"use client";

import React, { useState } from "react";
import { Container, Box, Typography, Tabs, Tab } from "@mui/material";
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
      id={`cicd-tabpanel-${index}`}
      aria-labelledby={`cicd-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CICD() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      id="cicd"
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
            DevOps Ready from Day One
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ fontWeight: 400 }}
          >
            Production-ready CI/CD pipelines included. Choose your provider.
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
            <Tab label="GitHub Actions" />
            <Tab label="GitLab CI" />
            <Tab label="Azure Pipelines" />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              GitHub Actions Workflow
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Generate with:{" "}
              <code
                style={{
                  backgroundColor: "#1E1E1E",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                flutter_blueprint init my_app --ci github
              </code>
            </Typography>
            <SharedCodeBlock
              code={`name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  analyze:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter analyze
      - run: dart format --set-exit-if-changed .

  test:
    needs: analyze
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter test --coverage
      - uses: codecov/codecov-action@v4

  build-android:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: subosito/flutter-action@v2
      - run: flutter build apk --release
      - uses: actions/upload-artifact@v4
        with:
          name: android-apk
          path: build/app/outputs/flutter-apk/app-release.apk`}
              language="yaml"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              GitLab CI Pipeline
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Generate with:{" "}
              <code
                style={{
                  backgroundColor: "#1E1E1E",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                flutter_blueprint init my_app --ci gitlab
              </code>
            </Typography>
            <SharedCodeBlock
              code={`stages:
  - analyze
  - test
  - build

analyze:
  stage: analyze
  image: ghcr.io/cirruslabs/flutter:stable
  script:
    - flutter analyze
    - dart format --set-exit-if-changed .
  only:
    - main
    - develop
    - merge_requests

test:
  stage: test
  image: ghcr.io/cirruslabs/flutter:stable
  script:
    - flutter test --coverage
  coverage: '/lines......: \\d+\\.\\d+%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura.xml

build:android:
  stage: build
  image: ghcr.io/cirruslabs/flutter:stable
  script:
    - flutter build apk --release
  artifacts:
    paths:
      - build/app/outputs/flutter-apk/app-release.apk
    expire_in: 7 days`}
              language="yaml"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Box sx={{ maxWidth: "900px", mx: "auto" }}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
              Azure Pipelines
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Generate with:{" "}
              <code
                style={{
                  backgroundColor: "#1E1E1E",
                  padding: "4px 8px",
                  borderRadius: "4px",
                }}
              >
                flutter_blueprint init my_app --ci azure
              </code>
            </Typography>
            <SharedCodeBlock
              code={`trigger:
  branches:
    include:
      - main
      - develop

pool:
  vmImage: 'ubuntu-latest'

stages:
  - stage: Analyze
    jobs:
      - job: CodeQuality
        steps:
          - task: FlutterInstall@0
          - script: flutter analyze
            displayName: 'Run Flutter Analyze'
          - script: dart format --set-exit-if-changed .
            displayName: 'Check Dart Formatting'

  - stage: Test
    dependsOn: Analyze
    jobs:
      - job: UnitTests
        steps:
          - task: FlutterInstall@0
          - script: flutter test --coverage
            displayName: 'Run Tests with Coverage'

  - stage: Build
    dependsOn: Test
    jobs:
      - job: BuildAndroid
        steps:
          - task: FlutterInstall@0
          - script: flutter build apk --release
            displayName: 'Build Android APK'
          - task: PublishBuildArtifacts@1
            inputs:
              pathToPublish: 'build/app/outputs/flutter-apk'
              artifactName: 'android-apk'`}
              language="yaml"
              customStyle={{
                padding: "24px",
                borderRadius: "12px",
                fontSize: "0.9rem",
              }}
            />
          </Box>
        </TabPanel>

        <Box
          sx={{
            mt: 6,
            p: 4,
            bgcolor: "background.paper",
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, color: "primary.main" }}>
            ✅ What's Included in All Pipelines:
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            component="div"
            sx={{ textAlign: "left", maxWidth: "700px", mx: "auto" }}
          >
            • Code quality checks (flutter analyze + dart format)
            <br />
            • Automated testing with coverage reporting
            <br />
            • Android APK + iOS IPA generation
            <br />
            • Artifact storage for 7 days
            <br />• Ready-to-use Firebase App Distribution templates
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
