"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";

const images = [
  {
    src: "/img1.png",
    alt: "Sample image 1",
  },
  {
    src: "/img2.png",
    alt: "Sample image 2",
  },
  {
    src: "/img3.png",
    alt: "Sample image 3",
  },
  {
    src: "/img3.png",
    alt: "Sample image 3",
  },
];

const WorkSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };
  return (
    <section id="projects" className="h-auto flex flex-col items-start gap-6 w-full">
      {/* header */}
      <div className="max-w-7xl mx-auto  text-center ">
        <p className="font-bold text-xl md:text-3xl text-white font-jetBrains">
          Recent <span className="text-purple">Projects</span>
        </p>
        <p className="text-sm md:text-base text-white-200 max-w-2xl mx-auto py-4 font-geist">
          Some of the latest magic I created, check them out 
        </p>
      </div>

      {/* <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white font-jetBrains">
          Featured and{" "}
          <span className="text-purple">
            {"Projects".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-white-200 max-w-2xl mx-auto py-4 font-geist">
          Tools and technologies I use to build modern, responsive, and scalable web applications.
        </p>
      </div> */}

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center gap-4">
        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-xl shadow-lg">
          <Image src={images[currentIndex].src} alt={images[currentIndex].alt} fill className="object-cover" />
        </div>

        <div className="flex gap-2 w-full">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full h-[2px] rounded-full transition-all duration-300 ${currentIndex === index ? "bg-white" : "bg-white/30"}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
