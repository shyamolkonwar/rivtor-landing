import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision",
  description: "A world where any idea can become a fully functioning organization run entirely by AI. The difference between a tool and an agent is the difference between a hammer and a contractor. Rivtor builds agents that hold roles, not tools that complete tasks.",
  openGraph: {
    title: "Our Vision | Rivtor",
    description: "A world where any idea can become a fully functioning organization run entirely by AI. We are building accountability infrastructure for AI agents — systems where an agent holds a role and is responsible for an outcome, not just an output.",
  },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
