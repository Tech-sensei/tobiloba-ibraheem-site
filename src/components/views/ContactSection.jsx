"use client";

import React, { useState } from "react";
import Link from "next/link";
import { WorldMapSection } from "./WorldMapSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="w-full mt-10 flex flex-col lg:flex-row items-center justify-start gap-12 "
    >
      {/* contact form */}

      <div className="w-full lg:w-[35%] flex flex-col items-center gap-6 bg-black-200 border border-purple/50 py-4 rounded-lg px-6 order-2 lg:order-none">
        {/* <div className="flex flex-col gap-2 items-start border-b  border-purple/20 pb-4">
          <h2 className="text-4xl font-jetBrains font-semibold text-white">
            Contact <span className="text-purple">Me</span>
          </h2>
          <p className="text-base font-jetBrains font-normal text-white-100">
            Have a question or want to work together? Feel free to reach out to
            me.
          </p>
        </div> */}
        <form
          className="flex flex-col gap-6 w-full "
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Full name */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="fullName"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Full Name
            </label>
            <input
              type="fullName"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="enter your full name..."
              className="w-full flex items-center gap-2 p-4 rounded-lg font-jetBrains text-base text-purple/50  border border-purple/20 bg-transparent outline-none placeholder:text-purple/20 placeholder:font-normal placeholder:font-jetBrains transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="email"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="enter your email address..."
              className="w-full flex items-center gap-2 p-4 rounded-lg font-jetBrains text-base text-purple/50  border border-purple/20 bg-transparent outline-none placeholder:text-purple/20 placeholder:font-normal placeholder:font-jetBrains transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Subject */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="subject"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Subject
            </label>
            <input
              type="subject"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="enter the subject of your message..."
              className="w-full flex items-center gap-2 p-4 rounded-lg font-jetBrains text-base text-purple/50  border border-purple/20 bg-transparent outline-none placeholder:text-purple/20 placeholder:font-normal placeholder:font-jetBrains transition-all duration-300 ease-in-out"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="messages"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Message
            </label>

            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="type your message here..."
              className="w-full flex items-center gap-2 p-4  h-[150px] rounded-lg font-jetBrains text-base text-purple/50  border border-purple/20 bg-transparent outline-none placeholder:text-purple/20 placeholder:font-normal placeholder:font-jetBrains transition-all duration-300 ease-in-out resize-none"
            />
          </div>
        </form>
      </div>

      {/* globe */}
      <div className="w-full lg:w-[65%] flex flex-col items-center justify-center gap-6 h-full bg-red-100 order-1 lg:order-none">
        <WorldMapSection />
      </div>
    </section>
  );
};

export default ContactSection;
