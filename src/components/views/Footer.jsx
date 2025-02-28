import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-6 items-center justify-between w-full border-t border-white-200/50 pt-4 mt-20">
      <div className="flex items-center gap-4">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Tobiloba Ibraheem. All rights
          reserved.
        </p>
      </div>
      {/* Social Icons */}
      <div className="flex items-center space-x-6">
        {[
          {
            href: "https://github.com/Tech-sensei",
            icon: <FaGithub size={20} />,
          },
          { href: "#", icon: <FaLinkedinIn size={20} /> },
          {
            href: "https://x.com/Im_Tobilobah",
            icon: <FaTwitter size={20} />,
          },
        ].map(({ href, icon }, index) => (
          <Link
            key={index}
            href={href}
            target="_blank"
            className="relative flex items-center justify-center w-12 h-12 rounded-full p-[2px] 
               bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] transition-all duration-300 ease-in-out 
               hover:scale-101 hover:from-[#393BB2] hover:to-[#E2CBFF] hover:shadow-[0px_0px_12px_#E2CBFF]"
          >
            <span className="flex items-center justify-center w-full h-full bg-slate-950 rounded-full text-white">
              {icon}
            </span>
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
