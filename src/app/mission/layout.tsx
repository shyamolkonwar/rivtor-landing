import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission",
  description: "To make human organizations fully autonomous — and to do it before anyone else does it wrong. We are building infrastructure for organizations that do not need humans to operate, so that the humans inside them can do what only humans can.",
  openGraph: {
    title: "Our Mission | Rivtor",
    description: "To make human organizations fully autonomous. We are building infrastructure for organizations that do not need humans to operate, so that the humans inside them can do what only humans can.",
  },
};

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
