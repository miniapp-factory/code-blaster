"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export interface NextLevelButtonProps {
  nextLevelPath: string;
}

export function NextLevelButton({ nextLevelPath }: NextLevelButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push(nextLevelPath);
  };

  return (
    <Button onClick={handleClick} variant="default" size="lg">
      Next Level
    </Button>
  );
}
