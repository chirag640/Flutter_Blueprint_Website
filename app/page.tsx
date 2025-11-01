"use client";

import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProblemSolution from "./components/ProblemSolution";
import FeatureGrid from "./components/FeatureGrid";
import QuickStart from "./components/QuickStart";
import MultiPlatform from "./components/MultiPlatform";
import CICD from "./components/CICD";
import ProjectStructure from "./components/ProjectStructure";
import StateManagement from "./components/StateManagement";
import TeamCollaboration from "./components/TeamCollaboration";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Box>
      <Header />
      <Hero />
      <ProblemSolution />
      <FeatureGrid />
      <QuickStart />
      <MultiPlatform />
      <CICD />
      <ProjectStructure />
      <StateManagement />
      <TeamCollaboration />
      <FinalCTA />
      <Footer />
    </Box>
  );
}
