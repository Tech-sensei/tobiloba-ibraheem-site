"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const x = useMotionValue(0);
  const springConfig = { stiffness: 100, damping: 10 };
  const translateX = useSpring(x, springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-wrap gap-6 justify-center items-center">
      {items?.map((item) => (
        <div
          key={item.name}
          className="relative group cursor-pointer"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 200, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                style={{ translateX: translateX }}
                className="absolute -top-20 left-1 -translate-x-1/2 flex flex-col items-center bg-gray-900/90 text-white px-2 py-2 rounded-lg shadow-xl w-40"
              >
                <span className="font-semibold text-base">{item.name}</span>
                <span className="text-gray-300 text-xs">
                  {item.designation}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech Icon with Hover Glow Effect */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              onMouseMove={handleMouseMove}
              // height={200}
              // width={200}
              src={item.image}
              alt={item.name}
              className="w-10 h-10 md:w-20 md:h-20 object-contain rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:shadow-purple-500/50"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
