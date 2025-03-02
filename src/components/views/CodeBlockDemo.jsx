"use client";

import React from "react";
import { CodeBlock } from "../ui/CodeBlock";

export function CodeBlockDemo() {
  const code = `const TechStackCard = () => {
  const skills = [
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Tailwind CSS", color: "bg-teal-500" },
  ];

  return (
    <div className="p-6 border border-gray-700 rounded-lg bg-gray-900 text-white">
      <h2 className="text-xl font-bold mb-4">My Tech Stack</h2>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="px-3 py-2 bg-purple-600 rounded-md">
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};`;

  return (
    <div className="max-w-3xl mx-auto h-full w-full">
      <CodeBlock
        language="jsx"
        filename="TechStackCard.jsx"
        highlightLines={[3, 7, 10, 14]}
        code={code}
      />
    </div>
  );
}
