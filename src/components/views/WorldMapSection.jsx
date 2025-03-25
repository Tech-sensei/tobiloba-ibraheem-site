"use client";
import { WorldMap } from "../ui/WorldMap";
import { motion } from "motion/react";

export function WorldMapSection() {
  return (
    <div className="bg-[#000319] mt-10 lg:my-10 w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-white font-jetBrains">
          Remote <span className="text-purple">Connectivity</span>
        </p>
        <p className="text-sm md:text-lg text-white-200 max-w-3xl mx-auto py-4 font-geist">
          No borders, no limits, just seamless collaboration, and results-driven solutions — Connect with me!
        </p>
      </div>

      <WorldMap
        dots={[
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: -1.2921, lng: 36.8219 }, // Nairobi
            end: { lat: 6.5244, lng: 3.3792 }, // Lagos
          },
          {
            start: { lat: 6.5244, lng: 3.3792 }, // Lagos
            end: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
          },
          {
            start: { lat: -26.2041, lng: 28.0473 }, // Johannesburg
            end: { lat: 30.0444, lng: 31.2357 }, // Cairo
          },
          {
            start: { lat: 30.0444, lng: 31.2357 }, // Cairo
            end: { lat: 35.6895, lng: 139.6917 }, // Tokyo
          },
        ]}
      />
    </div>
  );
}
