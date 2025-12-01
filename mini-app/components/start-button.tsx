"use client";

import { Button } from "@/components/ui/button";

export function StartButton() {
  const handleStart = () => {
    // TODO: start the game logic
    console.log("Game started");
  };

  return (
    <Button onClick={handleStart} variant="primary" size="lg">
      Start Game
    </Button>
  );
}
