import type { Metadata } from "next";
import { buildPageMetadata } from "../seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Flutter Blueprint Docs - Commands, Features, and Architecture",
  description:
    "Official Flutter Blueprint documentation covering quick start, command reference, project structure, and enterprise-ready patterns.",
  path: "/docs",
  keywords: [
    "flutter blueprint docs",
    "flutter cli docs",
    "flutter generator documentation",
    "flutter architecture docs",
  ],
});

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
