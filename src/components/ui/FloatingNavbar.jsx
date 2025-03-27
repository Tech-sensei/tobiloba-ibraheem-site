"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaHome, FaRegUserCircle, FaBriefcase, FaRegNewspaper } from "react-icons/fa";

const navItems = [
  { name: "Home", link: "/", icon: <FaHome /> },
  { name: "About", link: "/about", icon: <FaRegUserCircle /> },
  { name: "Projects", link: "/projects", icon: <FaBriefcase /> },
  { name: "Blog", link: "/blog", icon: <FaRegNewspaper /> },
];

export const FloatingNav = ({ className }) => {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("Loading...");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat(undefined, options);
      setTime(formatter.format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const formattedTimeZone = timeZone.split("/")[1].replace("_", " "); // Remove continent, format nicely
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          setLocation(`${data.country_name} (${formattedTimeZone})`);
        })
        .catch(() => setLocation("Unknown Location"));
    } catch {
      setLocation("Unknown Location");
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center justify-center sm:justify-between fixed z-[5000] top-2 sm:bottom-auto inset-x-0 mx-auto px-0 py-0 ",
          className
        )}
      >
        {/* Location */}
        <p className="hidden sm:block text-white font-normal text-[10px] px-4 py-2 font-jetBrains">{location}</p>

        {/* Nav Items */}
        <div className="flex items-center rounded-2xl border border-[#3f3f3f] shadow-md backdrop-blur-md bg-[#0000004d] p-1 w-[80%] md:w-fit justify-around md:justify-normal">
          {navItems.map((navItem, idx) => {
            const isActive = pathname === navItem.link;
            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className={cn(
                  "flex items-center space-x-2 mx-0.5 px-4 py-2 text-sm transition-all duration-200 border rounded-xl ",
                  isActive
                    ? "text-white bg-[#9595951a] border-[#9595954d]"
                    : "text-white/80 border-transparent hover:text-white hover:bg-[#9595951a] hover:border-[#9595954d]"
                )}
              >
                <span className="text-lg">{navItem.icon}</span>
                <span className="hidden sm:inline">{navItem.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Time */}
        <p className="hidden sm:block text-white text-[10px] px-4 py-2 font-jetBrains">{time}</p>
      </motion.div>
    </AnimatePresence>
  );
};
