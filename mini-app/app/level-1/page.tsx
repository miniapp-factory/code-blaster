import { generateMetadata } from "@/lib/farcaster-embed";
import { NextLevelButton } from "@/components/next-level-button";
import { Jet } from "@/components/jet";

export const metadata = generateMetadata();

export default function LevelOnePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Level 1</h1>
      <Jet />
      <NextLevelButton nextLevelPath="/level-2" />
    </div>
  );
}
