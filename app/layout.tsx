import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "flutter_blueprint - Enterprise-grade Flutter App Scaffolding",
  description:
    "Generate production-ready Flutter projects with 43+ professional files, complete architecture, and more—in seconds.",
  keywords: [
    "Flutter",
    "CLI",
    "scaffolding",
    "boilerplate",
    "architecture",
    "clean architecture",
  ],
  authors: [{ name: "Chirag Chaudhary" }],
  openGraph: {
    title: "flutter_blueprint - Enterprise-grade Flutter App Scaffolding",
    description:
      "Stop wasting hours on boilerplate. Generate production-ready Flutter projects in seconds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Favicon: prefer the provided PNG placed at /public/favicon.png (use icon.png as fallback) */}
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-full.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
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
