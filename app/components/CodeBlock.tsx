"use client";

import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
  language?: string;
  customStyle?: React.CSSProperties;
}

export default function CodeBlock({
  code,
  language = "bash",
  customStyle = {},
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Box sx={{ position: "relative", mb: 2.5 }}>
      <Tooltip title={copied ? "Copied!" : "Copy code"}>
        <IconButton
          onClick={handleCopy}
          size="small"
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            zIndex: 10,
            bgcolor: "rgba(0, 0, 0, 0.4)",
            color: "white",
            "&:hover": {
              bgcolor: "rgba(0, 0, 0, 0.6)",
            },
          }}
        >
          {copied ? (
            <CheckIcon fontSize="small" />
          ) : (
            <ContentCopyIcon fontSize="small" />
          )}
        </IconButton>
      </Tooltip>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          padding: "14px 16px",
          borderRadius: "6px",
          fontSize: "0.875rem",
          ...customStyle,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
