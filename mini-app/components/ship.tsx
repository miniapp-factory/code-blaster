"use client";

import { useEffect, useState } from "react";

export function Ship() {
  const [x, setX] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setX((prev) => (prev + 5) % 300);
    }, 100);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="absolute bottom-10 left-0"
      style={{ transform: `translateX(${x}px)` }}
    >
      <div className="w-10 h-4 bg-blue-500 rounded-md"></div>
    </div>
  );
}
