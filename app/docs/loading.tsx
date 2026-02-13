import {
  Box,
  CircularProgress,
  Typography,
  Skeleton,
  Container,
  Stack,
} from "@mui/material";

export default function DocsLoading() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default", pt: 10 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Sidebar Skeleton */}
          <Box sx={{ width: 240, display: { xs: "none", md: "block" } }}>
            <Stack spacing={2}>
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Skeleton
                  key={i}
                  variant="rectangular"
                  height={40}
                  sx={{ borderRadius: 1 }}
                />
              ))}
            </Stack>
          </Box>

          {/* Content Skeleton */}
          <Box sx={{ flex: 1 }}>
            <Skeleton
              variant="rectangular"
              height={60}
              sx={{ mb: 3, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={200}
              sx={{ mb: 2, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={150}
              sx={{ mb: 2, borderRadius: 2 }}
            />
            <Skeleton
              variant="rectangular"
              height={180}
              sx={{ borderRadius: 2 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
