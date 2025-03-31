"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const API_URL = "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";

const page = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 10;
  const totalResults = 61;
  const totalPages = Math.ceil(totalResults / blogsPerPage);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setBlog(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <main className="flex justify-center items-center h-screen text-white">
        <span className="spinner"></span> <p className="ml-4">Loading...</p>
      </main>
    );
  }

  if (error || !blog.length) {
    return (
      <main className="flex justify-center items-center h-screen text-white">
        <p>{error || "No blog posts found."}</p>
      </main>
    );
  }

  const truncateDescription = (text, limit = 100) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  const startIndex = (currentPage - 1) * blogsPerPage;
  const displayedBlogs = blog.slice(startIndex, startIndex + blogsPerPage);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-6 px-4 max-w-[90rem] w-full">
      <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-start justify-center w-full">
        <div className="px-1 md:px-20 py-16 md:py-28">
          <div className="self-start max-w-3xl text-center md:text-left">
            <motion.p className="font-bold text-xl md:text-4xl text-white font-jetBrains !leading-[150%]">
              {"All of my Technical Knowledge in one place".split(" ").map((word, index) => {
                const isSpecial = ["Technical", "Knowledge"];
                return (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut" }}
                    className={`mr-2 inline-block ${isSpecial.includes(word) ? "text-purple" : ""}`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.p>
            <motion.p className="text-sm md:text-base text-neutral-400 max-w-2xl py-4 font-geist leading-normal">
              {"I'm obsessed with writing bad code. I'm also obsessed with writing. Here, I write about my experiences with code and the things I've learned along the way."
                .split(" ")
                .map((word, index) => {
                  // const isSpecial = ["Technical", "Knowledge"];
                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{ duration: 0.1, delay: index * 0.1, ease: "easeInOut" }}
                      className={`mr-2 inline-block text-neutral-400`}
                    >
                      {word}
                    </motion.span>
                  );
                })}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-10 grid md:grid-cols-2 flex-col gap-8 items-start "
          >
            {displayedBlogs.map((blog, index) => (
              <Link key={index} href={blog.url} target="_blank" rel="noopener noreferrer">
                <div className="md:h-[300px] rounded-2xl p-4 md:p-6 border border-[#9595954d] shadow-2xl hover:bg-[#9595951a] transition-all duration-500 ease-in-out cursor-pointer">
                  <small className="md:border-l md:border-zinc-700 md:pl-4 text-zinc-500 block">
                    {new Date(blog?.publishedAt).toDateString()}
                  </small>
                  <h2 className="text-zinc-200 font-bold text-lg mt-4">{blog?.title}</h2>
                  <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
                    {" "}
                    {truncateDescription(blog?.description)}
                  </p>
                  <p className="text-purple text-sm mt-6 block">Read More</p>
                </div>
              </Link>
            ))}
          </motion.div>

          <div className="flex justify-between items-center mt-10">
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 bg-gray-700 text-white rounded-md disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
