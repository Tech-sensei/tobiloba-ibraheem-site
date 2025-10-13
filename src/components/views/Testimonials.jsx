"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import Unknown from "../../../public/assets/unknown.png";

const testimonials = [
  {
    id: 4,
    name: "Adekunle Ibraheem",
    role: "Co-Founder at Everything African",
    image: Unknown,
    content:
      "Collaborating with Tobiloba was seamless from start to finish. His design sensibility and development efficiency elevated our brand presentation to the next level.",
    rating: 5,
  },
  {
    id: 5,
    name: "David Goriola",
    role: "Project Manager at Radiksez",
    image: Unknown,
    content:
      "Tobiloba consistently delivers beyond expectations. His proactive communication and creative problem-solving make him an invaluable team asset.",
    rating: 5,
  },
  {
    id: 6,
    name: "Ajibade Kehinde",
    role: "Frontend Developer at Pertinence",
    image: Unknown,
    content:
      "Working alongside Tobiloba was a masterclass in clean code and user-centered design. His approach ensures every detail aligns perfectly with the user experience.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8 hover:border-purple/50 transition-all duration-300 hover:shadow-xl hover:shadow-purple/10"
    >
      {/* Quote Icon */}
      <div className="absolute top-6 right-6 text-purple/20 group-hover:text-purple/40 transition-colors duration-300">
        <FaQuoteLeft size={40} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-neutral-300 text-base md:text-lg font-geist leading-relaxed mb-6">"{testimonial.content}"</p>

        {/* Rating */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-purple" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Author Info */}
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-purple/30 group-hover:ring-purple/60 transition-all duration-300">
            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-white font-semibold text-base font-jetBrains">{testimonial.name}</h4>
            <p className="text-neutral-400 text-sm font-geist">{testimonial.role}</p>
          </div>
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/0 via-purple/5 to-purple/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
    </motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative mx-auto mt-20 md:mt-32 flex max-w-7xl flex-col items-center justify-center w-full">
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-purple to-transparent" />
      </div>

      <div className="px-4 md:px-20 md:py-4 w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto text-center mb-12"
        >
          <h2 className="font-bold text-3xl md:text-5xl text-white font-jetBrains mb-4">
            Client <span className="text-purple">Testimonials</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-400 max-w-2xl mx-auto font-geist">
            What clients and collaborators say about working with me.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
