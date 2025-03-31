"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <>
      <section className="relative mx-auto mt-10 md:mt-20 flex max-w-7xl flex-col items-center justify-center w-full">
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>

        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>

        <div className="px-1 md:px-20 md:py-4 w-full " ref={containerRef}>
          {/* header */}
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-bold text-2xl md:text-4xl text-white font-jetBrains">
              Approach to <span className="text-purple">Work</span>
            </p>
            <p className="text-base md:text-lg text-white-200 max-w-2xl mx-auto py-4 font-geist">
              My approach to work is a blend of creativity, technical expertise, and a commitment to delivering high-quality results.
            </p>
          </div>

          <div ref={ref} className="relative mx-auto pb-20">
            {data.map((item, index) => (
              <div key={index} className="flex justify-start pt-10 md:pt-20 md:gap-10">
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                  </div>
                  <h3 className="hidden md:block text-base md:pl-20 md:text-xl font-bold text-neutral-500 font-jetBrains">{item.title}</h3>
                </div>

                <div className="relative pl-16 pr-4 md:pl-4 w-full">
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500  font-jetBrains">{item.title}</h3>
                  {item.content}{" "}
                </div>
              </div>
            ))}
            <div
              style={{
                height: height + "px",
              }}
              className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
