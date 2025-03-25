import React from "react";
import Link from "next/link";

export const blogPosts = [
  {
    title: "What is a website template",
    date: "November 28, 2022",
    image: "/img1.png", // Add an image URL or path
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
    content:
      "A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at what a website template is and why it can be a great creative outlet for writers",
  },
];

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const page = () => {
  return (
    <section className="relative mx-auto mt-10 flex max-w-7xl flex-col items-center justify-center w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>

      <div className="px-4 md:px-20 pt-16 md:pt-28">
        {/* header */}
        <div className="self-start max-w-3xl text-center md:text-left">
          <p className="font-bold text-xl md:text-4xl text-white font-jetBrains !leading-[150%]">
            All of my <span className="text-purple">Technical Knowledge </span>in one place
          </p>
          <p className="text-sm md:text-base text-neutral-400 max-w-2xl py-4 font-geist leading-normal">
            I'm obsessed with writing bad code. I'm also obsessed with writing. Here, I write about my experiences with code and the things
            I've learned along the way.
          </p>
        </div>
        {/* blog container */}
        <div className="mt-10 grid md:grid-cols-2 flex-col gap-8 items-start max-w-3xl ">
          {blogPosts.map((blog, index) => (
            <Link key={index} href={`/blog/${slugify(blog.title)}`}>
              <div className="rounded-2xl p-4 md:p-6 border border-[#9595954d] shadow-2xl hover:bg-[#9595951a] transition-all duration-500 ease-in-out cursor-pointer">
                <small className="md:border-l md:border-zinc-700 md:pl-4  text-zinc-500 block">{blog.date}</small>
                <h2 className="text-zinc-200 font-bold text-lg mt-4">{blog.title}</h2>
                <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">{blog.content}</p>
                <p className="text-purple text-sm mt-6 block">Read More</p>
              </div>
            </Link>
          ))}
          {/* <div className="rounded-2xl p-4 md:p-6 border border-[#9595954d] shadow-2xl hover:bg-[#9595951a] transition-all duration-500 ease-in-out">
            <small className="md:border-l md:border-zinc-700 md:pl-4  text-zinc-500 block">November 28, 2022</small>
            <h2 className="text-zinc-200 font-bold text-lg mt-4">What is a website template</h2>
            <p className="text-zinc-200 font-normal text-sm mt-4 leading-loose max-w-4xl">
              A website template is a pre-designed website that can be customized to suit your needs. In this post, we’ll take a look at
              what a website template is and why it can be a great creative outlet for writers
            </p>
            <p className="text-purple text-sm mt-6 block">Read More</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default page;
