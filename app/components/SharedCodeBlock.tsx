"use client";

import React, { useState } from "react";
import { Box, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import dart from "react-syntax-highlighter/dist/cjs/languages/hljs/dart";
import javascript from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import yaml from "react-syntax-highlighter/dist/cjs/languages/hljs/yaml";
import bash from "react-syntax-highlighter/dist/cjs/languages/hljs/bash";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

// Register languages once
SyntaxHighlighter.registerLanguage("dart", dart);
SyntaxHighlighter.registerLanguage("javascript", javascript);
SyntaxHighlighter.registerLanguage("yaml", yaml);
SyntaxHighlighter.registerLanguage("bash", bash);

interface SharedCodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  customStyle?: React.CSSProperties;
  wrapLines?: boolean;
}

/**
 * Optimized shared code block component using Light version of syntax highlighter
 * ~200KB smaller than Prism version
 */
export default function SharedCodeBlock({
  code,
  language = "dart",
  showLineNumbers = false,
  customStyle = {},
  wrapLines = true,
}: SharedCodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <Box sx={{ position: "relative", mb: 2.5 }}>
      <Tooltip title={copied ? "Copied!" : "Copy code"} placement="left">
        <IconButton
          onClick={handleCopy}
          size="small"
          aria-label="Copy code to clipboard"
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
        style={atomOneDark}
        showLineNumbers={showLineNumbers}
        wrapLines={wrapLines}
        customStyle={{
          padding: "14px 16px",
          borderRadius: "6px",
          fontSize: "0.875rem",
          margin: 0,
          ...customStyle,
        }}
      >
        {code}
      </SyntaxHighlighter>
    </Box>
  );
}
