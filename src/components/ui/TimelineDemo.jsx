import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Understanding Requirements",
      content: (
        <div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            Well, I start by breaking down project requirements, ensuring clarity on goals, user needs, and technical constraints before
            writing a single line of code.
          </p>
          <div className="mb-6 sm:mb-8">
            <div className="text-neutral-300 text-sm md:text-base">
              ✅ Break down features into actionable tasks for a structured workflow.
            </div>
            <div className="text-neutral-300 text-sm md:text-base">✅ Clarify expectations with stakeholders to prevent misalignment.</div>
          </div>
        </div>
      ),
    },

    {
      title: "Building with Scalability in Mind",
      content: (
        <div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            I develop modular and reusable components, following best practices to keep the codebase clean, maintainable, and future-proof.
          </p>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            ✅ Keep the codebase organized, ensuring easy collaboration and future enhancements.
          </p>
        </div>
      ),
    },

    {
      title: "Performance & Accessibility First",
      content: (
        <div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            I prioritize fast load times, smooth interactions, and accessible interfaces to create inclusive and high-performing user
            experiences.
          </p>
        </div>
      ),
    },

    {
      title: " Seamless Collaboration",
      content: (
        <div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            I work closely with designers, backend developers, and stakeholders to ensure smooth integration and a unified final product.
          </p>
          <div className="mb-6 sm:mb-8">
            <div className="text-neutral-300 text-sm md:text-base">
              ✅ Sync with designers to translate UI/UX concepts into responsive code.
            </div>
            <div className="text-neutral-300 text-sm md:text-base">
              ✅ Coordinate with backend teams for API integration and data handling.
            </div>
            <div className="text-neutral-300 text-sm md:text-base">
              ✅ Maintain clear documentation and version control for smooth teamwork.
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "Testing & Iteration",
      content: (
        <div>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg font-normal mb-4">
            I rigorously test for responsiveness, cross-browser compatibility, and usability, continuously refining based on feedback and
            real-world usage.
          </p>
          <div className="mb-6 sm:mb-8">
            <div className="text-neutral-300 text-sm md:text-base">
              ✅ Conduct cross-browser and device testing to ensure responsiveness.
            </div>
            <div className="text-neutral-300 text-sm md:text-base">✅ Conduct user testing for real-world feedback.</div>
            <div className="text-neutral-300 text-sm md:text-base">✅ Optimize performance and fix bugs based on user feedback.</div>
          </div>
        </div>
      ),
    },
  ];

  return <Timeline data={data} />;
}
