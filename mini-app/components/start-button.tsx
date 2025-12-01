"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export function StartButton() {
  const router = useRouter();
  const handleStart = () => {
    router.push('/level-1');
  };

  return (
    <Button onClick={handleStart} variant="default" size="lg">
      Start Game
    </Button>
  );
}
