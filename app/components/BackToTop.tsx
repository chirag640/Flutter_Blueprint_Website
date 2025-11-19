"use client";

import React from "react";
import { Fab, Zoom, useScrollTrigger, Tooltip } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 300,
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={trigger}>
      <Tooltip title="Back to top" placement="left">
        <Fab
          onClick={handleClick}
          size="small"
          aria-label="scroll back to top"
          sx={{
            position: "fixed",
            bottom: 24,
            right: 24,
            bgcolor: "primary.main",
            "&:hover": {
              bgcolor: "primary.dark",
            },
            zIndex: 1000,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
}
