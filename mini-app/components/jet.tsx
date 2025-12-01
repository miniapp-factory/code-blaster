"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ship } from "@/components/ship";
import { CodeIndicator } from "@/components/code-indicator";

export function Jet() {
  const [code, setCode] = useState("");

  const handleShoot = () => {
    // Basic placeholder logic: if code is non‑empty, "shoot" a bug
    if (code.trim() !== "") {
      console.log("Bug fired with code:", code);
      setCode("");
    }
  };

  return (
    <div className="flex flex-col items-center gap-4 relative h-64">
      <Ship />
      <CodeIndicator />
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Type code to shoot"
        className="border rounded px-2 py-1"
      />
      <Button onClick={handleShoot} variant="outline">
        Shoot
      </Button>
    </div>
  );
}
