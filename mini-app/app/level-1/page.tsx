import { generateMetadata } from "@/lib/farcaster-embed";

export const metadata = generateMetadata();

export default function LevelOnePage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Level 1</h1>
    </div>
  );
}
