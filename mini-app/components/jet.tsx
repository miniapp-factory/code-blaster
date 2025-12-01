"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

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
    <div className="flex flex-col items-center gap-4">
      <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center text-white">
        {/* Placeholder for the jet and bugs */}
        <span>🚀 Jet</span>
      </div>
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
