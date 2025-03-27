import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-6 items-center justify-center w-full my-6 max-w-[90rem] mx-auto">
      <section className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-4 w-full">
        <div className="absolute inset-x-0 top-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
          <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-purple to-transparent" />
        </div>

        <div className="flex items-center justify-center gap-4 pt-4 ">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Tobiloba Ibraheem. All rights reserved.</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <Link href="https://github.com/Tech-sensei" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} className="text-zinc-500 hover:text-white transition duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/tobiloba-ibraheem" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={20} className="text-zinc-500 hover:text-blue-600 transition duration-300" />
          </Link>
          <Link href="https://x.com/Im_Tobilobah" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} className="text-zinc-500 hover:text-blue-400 transition duration-300" />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
