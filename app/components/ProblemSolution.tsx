import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const problems = [
  {
    problem: "`flutter create` gives bare bones",
    solution: "43+ files with pro patterns",
  },
  {
    problem: "No professional error handling",
    solution: "Custom exceptions + Failures",
  },
  {
    problem: "No reusable widgets",
    solution: "Loading, Error, Empty states",
  },
  {
    problem: "Form validation boilerplate",
    solution: "Built-in validators",
  },
  {
    problem: "GitHub templates are bloated",
    solution: "Modular generation",
  },
  {
    problem: "Basic HTTP setup",
    solution: "Auth, Retry, Logger interceptors",
  },
  {
    problem: "Storage layer missing",
    solution: "LocalStorage + SecureStorage",
  },
  {
    problem: "No proper logging",
    solution: "Professional Logger",
  },
];

export default function ProblemSolution() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Why flutter_blueprint?
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              fontSize: { xs: "1.125rem", md: "1.25rem" },
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            Stop wasting time on boilerplate.
            <br />
            Get production-ready architecture instantly.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {problems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Box
                sx={{
                  height: "100%",
                  p: 3,
                  borderRadius: 2,
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    borderColor: "primary.main",
                    bgcolor: "rgba(2, 86, 155, 0.05)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Box sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <CloseIcon
                      sx={{
                        color: "rgba(244, 67, 54, 0.6)",
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "rgba(244, 67, 54, 0.6)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "0.7rem",
                      }}
                    >
                      Problem
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ fontSize: "0.875rem", lineHeight: 1.5 }}
                  >
                    {item.problem}
                  </Typography>
                </Box>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <CheckCircleIcon
                      sx={{
                        color: "primary.main",
                        fontSize: 18,
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        color: "primary.main",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "0.7rem",
                      }}
                    >
                      Solution
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.solution}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
