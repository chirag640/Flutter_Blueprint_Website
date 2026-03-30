import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { buildPageMetadata } from "./seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: "flutter_blueprint - Enterprise-grade Flutter App Scaffolding",
    description:
      "Generate production-ready Flutter projects with architecture, release guardrails, and enterprise quality workflows in seconds.",
    path: "/",
    keywords: [
      "Flutter",
      "CLI",
      "scaffolding",
      "boilerplate",
      "architecture",
      "clean architecture",
      "responsive design",
      "flutter blueprint",
    ],
  }),
  authors: [{ name: "Chirag Chaudhary" }],
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/logo-full.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
