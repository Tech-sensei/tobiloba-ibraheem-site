"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LinkPreview } from "../ui/LinkPreview";

const images = [
  {
    src: "/assets/everythingAfrican.png",
    alt: "Sample image 1",
  },
  {
    src: "/assets/cs.png",
    alt: "Sample image 2",
  },
  {
    src: "/assets/kulture.png",
    alt: "Sample image 3",
  },
  {
    src: "/assets/brsfloors.png",
    alt: "Sample image 3",
  },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };
  return (
    <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="px-1 md:px-20 py-16 md:py-28">
        <h1 className=" mx-auto max-w-4xl text-center text-2xl font-jetBrains font-bold text-white md:text-4xl lg:text-7xl !leading-[125%]">
          {" Frontend Engineer and builder".split(" ").map((word, index) => {
            const isSpecial = ["Engineer", "builder"];
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className={`mr-2 inline-block ${isSpecial.includes(word) ? "text-purple" : ""}`}
              >
                {word}
              </motion.span>
            );
          })}
        </h1>
        {/* subtitle */}
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className=" mx-auto max-w-2xl py-4 text-center text-lg font-normal text-neutral-400"
        >
          Meet Tobiloba Ibraheem, a dedicated frontend engineer with a knack for transforming complex challenges into elegant, user-friendly
          solutions.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className=" mx-auto max-w-xl pb-4 text-center md:text-left text-lg font-normal text-neutral-400"
        >
          Building digital magic at{" "}
          <LinkPreview
            url="https://radiksez.com/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Radiksez,
          </LinkPreview>{" "}
          one line of code at a time! 🔥
        </motion.div>

        {/* button link */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className=" mt-4 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/about"
            className="inline-flex items-center rounded-full bg-[#151515] border border-[#3f3f3f] shadow-md backdrop-blur-md px-4 py-2 transition-all duration-300 ease-in-out group hover:shadow-lg "
          >
            <div className="relative w-7 h-7 rounded-full overflow-hidden shadow-xl mr-2">
              <Image
                src="/Tobiloba_Ibraheem_png.png"
                alt="Profile Picture"
                width={28}
                height={28}
                className="object-cover"
                priority
                quality={100}
              />
            </div>
            <span className="font-jetBrains font-semibold text-sm text-white">About Me</span>
            <IoIosArrowRoundForward size={20} className="ml-1 text-white group-hover:translate-x-1 transition-all duration-300" />
          </Link>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className=" mt-4 md:mt-20 rounded-3xl border p-4 shadow-md border-neutral-800 bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl flex flex-col gap-8 items-start">
            <h3 className="text-sm md:text-lg text-neutral-400 font-semibold font-geist leading-normal">
              I've been <span className="text-purple">building</span> a lot of things, check out some of my{" "}
              <span className="text-purple">recent projects</span>{" "}
            </h3>
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              height={1000}
              width={1000}
              className="aspect-[16/9] h-auto w-full object-cover"
            />

            <div className="flex gap-2 w-full">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleSelect(index)}
                  className={`w-full h-[3px] rounded-full transition-all duration-300 ${
                    currentIndex === index ? "bg-white" : "bg-white/30"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
