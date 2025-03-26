"use client";

import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative flex items-center" onMouseEnter={() => setIsVisible(true)} onMouseLeave={() => setIsVisible(false)}>
      {children}
      {isVisible && (
        <div className="absolute z-10 left-1/2 -translate-x-1/2 bottom-full mb-2 w-max max-w-xs p-2 text-xs bg-[#151515] border border-transparent backdrop-blur-md text-primary-10 rounded-lg shadow-lg">
          {text}
          <div className="absolute z-10 left-1/2 -translate-x-1/2 top-full border-8 border-transparent border-t-[#151515]"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
