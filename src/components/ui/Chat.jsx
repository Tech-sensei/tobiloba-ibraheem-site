"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa6";
import { GrSend } from "react-icons/gr";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Tooltip from "./Tooltip";

const ChatFeature = () => {
  const [isOpen, setIsOpen] = useState(false);
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
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
      const result = await emailjs.sendForm("service_8b8jp0h", "template_cn8pyg3", form.current, "ah8rCHyZJ3p0Px5k3");

      console.log(result.text);
      toast.success("Message sent successfully! 🎉");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      console.log(error.text);
      toast.error("Failed to send message. Try again.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Chat Button */}
      <Tooltip text="Chat with me!">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full flex items-center justify-center hover:scale-[1.01] hover:shadow-xl transition duration-200 shadow-lg bg-[#151515] border border-[#3f3f3f] backdrop-blur-md"
        >
          <FaComments size={24} />
        </motion.button>
      </Tooltip>

      {/* Chat Form Modal */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
          className="md:w-[450px] fixed bottom-[4.5rem] right-0 md:right-6  bg-zinc-800 mb-4 rounded-xl shadow-2xl flex flex-col overflow-hidden mx-4 md:mx-0"
        >
          <div className="p-6 bg-zinc-700 ">
            <h2 className="text-zinc-200 font-bold text-sm md:text-xl ">Got a question, a job offer, or just want to grab coffee? ☕</h2>
            <small className="hidden md:block text-xs text-zinc-400 mb-4 ">
              Drop me a message below! 👇, It’ll only take a few seconds🚀😉
            </small>
          </div>

          <form ref={form} className="flex flex-col gap-4 w-full p-6  bg-zinc-800" onSubmit={handleSubmit} autoComplete="off">
            {/* Full name */}
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="name" className="text-sm font-jetBrains font-semibold leading-[150%] text-white/50">
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
                className={`w-full px-4 py-2 rounded-lg bg-[#151515] border shadow-md backdrop-blur-md border-[#3f3f3f] outline-none text-white/60 text-sm placeholder:text-white/30 transition-all`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="name" className="text-sm font-jetBrains font-semibold leading-[150%] text-white/50">
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
                className={`w-full px-4 py-2 rounded-lg bg-[#151515] border shadow-md backdrop-blur-md border-[#3f3f3f] outline-none text-white/60 text-sm placeholder:text-white/30 transition-all`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1 items-start w-full">
              <label htmlFor="name" className="text-sm font-jetBrains font-semibold leading-[150%] text-white/50">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                placeholder="Type your message here..."
                className={`w-full px-4 py-2 rounded-lg bg-[#151515] border shadow-md backdrop-blur-md border-[#3f3f3f] outline-none text-white/60 text-sm placeholder:text-white/30 transition-all h-20 resize-none`}
              />
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="transform rounded-lg px-6 py-2 font-medium transition-all duration-500 ease-in-out hover:-translate-y-0.5 bg-white hover:bg-gray-200 flex items-center justify-center gap-2 w-full "
            >
              <span className="font-jetBrains font-semibold text-sm md:text-base text-neutral-700">
                {loading ? "Sending..." : "Send Message"}
              </span>
              <GrSend
                size={18}
                className={`text-neutral-700 transition-transform duration-500 ease-in-out ${
                  loading ? "animate-pulse" : "group-hover:translate-x-1"
                }`}
              />
            </button>
          </form>
        </motion.div>
      )}
    </div>
  );
};

export default ChatFeature;
