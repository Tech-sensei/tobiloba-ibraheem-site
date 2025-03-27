"use client";

import React from "react";
import { useParams } from "next/navigation";

export const blogPosts = [
  {
    title: "What is a website template",
    date: "November 28, 2022",
    image: "/img1.png",
    shortDesc:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writers",
    content: `
      <p>Developers are always looking for the most efficient way to create a website. Website templates provide a great solution for quickly building a site. In this guide, we will discuss:</p>
      <ul>
        <li>What website templates are</li>
        <li>How they benefit developers</li>
        <li>How to make money from them</li>
        <li>Examples of good website templates</li>
      </ul>

      <h2>Introduction</h2>
      <p>A website template is a pre-designed layout used to quickly create a website...</p>

      <pre><code>
      const template = "This is to show a code snippet";
      export const ReactComponent = () => {
        return &lt;div&gt;Here's how to write a component in JSX&lt;/div&gt;;
      };
      </code></pre>

      <h2>How to Benefit from Templates</h2>
      <p>Using templates provides developers an efficient way to create websites...</p>

      <h2>Making Money from Templates</h2>
      <p>Developers can create templates or purchase existing ones and resell them...</p>

      <h2>Examples of Good Website Templates</h2>
      <p>Popular website templates include WordPress, Joomla, and Drupal...</p>

      <h2>Conclusion</h2>
      <p>Website templates provide an efficient way to create a website without starting from scratch...</p>
    `,
  },

  {
    date: "November 28, 2022",
    title: "What is a blog anyway",
    image: "/img2.png",
    shortDesc:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writers",
    content: `
      <p>Developers are always looking for the most efficient way to create a website. Website templates provide a great solution for quickly building a site. In this guide, we will discuss:</p>
      <ul>
        <li>What website templates are</li>
        <li>How they benefit developers</li>
        <li>How to make money from them</li>
        <li>Examples of good website templates</li>
      </ul>

      <h2>Introduction</h2>
      <p>A website template is a pre-designed layout used to quickly create a website...</p>

      <pre><code>
      const template = "This is to show a code snippet";
      export const ReactComponent = () => {
        return &lt;div&gt;Here's how to write a component in JSX&lt;/div&gt;;
      };
      </code></pre>

      <h2>How to Benefit from Templates</h2>
      <p>Using templates provides developers an efficient way to create websites...</p>

      <h2>Making Money from Templates</h2>
      <p>Developers can create templates or purchase existing ones and resell them...</p>

      <h2>Examples of Good Website Templates</h2>
      <p>Popular website templates include WordPress, Joomla, and Drupal...</p>

      <h2>Conclusion</h2>
      <p>Website templates provide an efficient way to create a website without starting from scratch...</p>
    `,
  },
];

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
          <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
        </div>
        <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
          <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
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
