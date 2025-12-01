import { generateMetadata } from "@/lib/farcaster-embed";
import { NextLevelButton } from "@/components/next-level-button";

export const metadata = generateMetadata();

export default function LevelSixPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Level 6 (Endless)</h1>
      <NextLevelButton nextLevelPath="/level-6" />
    </div>
  );
}
