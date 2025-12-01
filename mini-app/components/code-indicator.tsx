"use client";

import { useState } from "react";

const snippets = [
  'console.log("Hello");',
  'const x = 5;',
  'function foo() {}',
  'if (x > 0) {}',
];

export function CodeIndicator() {
  const [code, setCode] = useState(snippets[0]);

  return (
    <div className="p-2 bg-gray-800 text-white rounded">
      Type: <code>{code}</code>
    </div>
  );
}
