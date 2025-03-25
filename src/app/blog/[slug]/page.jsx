"use client";

import React from "react";
import { useParams } from "next/navigation";
import { blogPosts } from "../page";

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const Page = () => {
  const { slug } = useParams();

  // Find the blog post by slug
  const blog = blogPosts.find((b) => slugify(b.title) === slug);

  if (!blog) {
    return (
      <main className="flex justify-center items-center h-screen text-white">
        <p>Blog post not found.</p>
      </main>
    );
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 pb-12 max-w-[90rem]">
      <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
        {/* Decorative Borders */}
        <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="px-4 md:px-20 pt-16 md:pt-28">
          <small className="md:border-l md:border-zinc-700 md:pl-4 text-zinc-500 block mb-6">{blog.date}</small>

          <p className="font-bold text-xl md:text-4xl text-white font-jetBrains !leading-[150%]">{blog.title}</p>

          {/* Blog Image */}
          <img src={blog.image} alt={blog.title} className="mt-6 w-full max-w-4xl rounded-lg shadow-lg" />

          {/* Render HTML Content */}
          <div
            className="text-zinc-200 font-normal text-sm mt-6 leading-loose max-w-4xl"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
    </main>
  );
};

export default Page;
