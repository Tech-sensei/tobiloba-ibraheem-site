import { FaLocationArrow } from "react-icons/fa6";

import { TextGenerateEffect } from "../ui/TextGenerateEffect";
import { Spotlight } from "../ui/Spotlight";
import MagicButton from "../MagicButton";
const HeroSection = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-grid-white/[0.02] absolute top-0 left-0 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        {/* <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100
         [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        /> */}
      </div>

      <div className="flex justify-center relative my-20 z-10 ">
        <div className="flex flex-col md:flex-row items-center justify-center w-full ">
          {/* text */}
          <div className="flex flex-col items-center justify-center h-[500px] w-full bg-red-300">
            <span className="">Frontend Developer</span>
          </div>
          {/* photo */}
          <div className=" w-full h-[500px] bg-red-200"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
