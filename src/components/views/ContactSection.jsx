"use client";

import React, { useState, useRef } from "react";
import { WorldMapSection } from "./WorldMapSection";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactSection = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error when user starts typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validate form fields
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "You will need to enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if validation fails

    setLoading(true); // Start loading
    try {
      const result = await emailjs.sendForm(
        "service_8b8jp0h",
        "template_cn8pyg3",
        form.current,
        "ah8rCHyZJ3p0Px5k3"
      );

      console.log(result.text);
      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
    } catch (error) {
      console.log(error.text);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <section
      id="contact"
      className="w-full mt-10 flex flex-col lg:flex-row items-center justify-start gap-12"
    >
      {/* Contact Form */}
      <div className="w-full max-w-[1000px] m-auto flex flex-col items-center gap-6 bg-black-200 border border-purple/50 py-4 rounded-lg px-6 order-2 lg:order-none">
        <form
          ref={form}
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Full name */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="name"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              aria-label="Full Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name..."
              className={`w-full p-4 rounded-lg border ${
                errors.name ? "border-red-500" : "border-purple/20"
              } bg-transparent outline-none text-purple/50 placeholder:text-purple/20 transition-all`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
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
              aria-label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address..."
              className={`w-full p-4 rounded-lg border ${
                errors.email ? "border-red-500" : "border-purple/20"
              } bg-transparent outline-none text-purple/50 placeholder:text-purple/20 transition-all`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
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
              type="text"
              id="subject"
              name="subject"
              aria-label="Subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject..."
              className={`w-full p-4 rounded-lg border ${
                errors.subject ? "border-red-500" : "border-purple/20"
              } bg-transparent outline-none text-purple/50 placeholder:text-purple/20 transition-all`}
            />
            {errors.subject && (
              <p className="text-red-500 text-xs">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2 items-start w-full">
            <label
              htmlFor="message"
              className="text-base font-jetBrains font-semibold leading-[150%] text-purple/50"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
              placeholder="Type your message here..."
              className={`w-full p-4 h-[150px] rounded-lg border ${
                errors.message ? "border-red-500" : "border-purple/20"
              } bg-transparent outline-none text-purple/50 placeholder:text-purple/20 transition-all resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full relative rounded-full flex items-center gap-3 bg-slate-950 border border-transparent p-[1px] 
            bg-gradient-to-r from-[#E2CBFF] to-[#393BB2] transition-all duration-300 ease-in-out hover:scale-101 
            hover:from-[#393BB2] hover:to-[#E2CBFF] hover:shadow-[0px_0px_12px_#E2CBFF] group`}
          >
            <span className="flex items-center justify-center gap-2 w-full h-full bg-slate-950 rounded-full px-4 py-3">
              <span className="font-jetBrains font-semibold text-sm md:text-base text-white">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <GrSend
                size={18}
                className={`text-white transition-transform duration-300 ease-in-out ${
                  loading ? "animate-pulse" : "group-hover:translate-x-1"
                }`}
              />
            </span>
          </button>
        </form>
      </div>

      {/* World Map Section */}
      {/* <div className="w-full lg:w-[65%] flex flex-col items-center justify-center gap-6 h-full bg-red-100 order-1 lg:order-none"> */}
      {/* <WorldMapSection /> */}
      {/* </div> */}
    </section>
  );
};

export default ContactSection;
