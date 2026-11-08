"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Work() {
  interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    image: string[];
    link: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "One Oasis",
      description:
        "The Oasis Dental Call Center is currently in its inception phase, having been conceived through the collaboration of the Gabucan brothers. Its primary goal is to elevate the overall patient experience within the realm of dental practice, laying the groundwork for synergistic and innovative solutions.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: ["/images/oasis.png", "/images/oasis2.png"],
      link: "https://www.oasisdentalcallcenter.com/",
    },
    {
      id: 2,
      name: "Heavey Mechanic",
      description:
        "EMS provides on-site mechanical servicing, repairs, and breakdown support for heavy equipment owners, contractors, and businesses across Melbourne and South East Victoria. We work where the machine is — on a job site, in a yard, or at a depot — so plant, diesel machinery, and trucks can get back to work.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: [
        "/images/heavymechanic.png",
        "/images/heavymechanic2.png",
        "/images/heavymechanic3.png",
        "/images/heavymechanic4.png",
      ],
      link: "https://www.evolvemechanicalservices.com.au/",
    },
    {
      id: 3,
      name: "Rentaro",
      description:
        "Your storefront, assets, bookings, and customer details, together. A clearer way to run your rental business, from the first request to the final return.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      image: [
        "/images/rentaro.png",
        "/images/rentaro1.png",
        "/images/rentaro2.png",
      ],
      link: "https://www.rentaro.ph",
    },
    {
      id: 4,
      name: "PhALGA Mobile",
      description:
        "PhALGA is a modern mobile platform designed to connect, inform, and engage communities and organizations. It provides a centralized space where users can explore upcoming events, access important documents, and participate in interactive discussions — all in one convenient app.",
      technologies: ["NestJS", "React", "PostgreSQL", "JWT"],
      image: ["/images/phalgaios.png", "/images/phalgaandroid.png"],
      link: "https://apps.apple.com/ph/app/phalga-mobile/id6754968119",
    },
  ];

  return (
    <section
      id="work"
      className="bg-gradient-to-br from-background to-background/50"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        <motion.div
          className="flex max-w-[640px] flex-col gap-[14px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex gap-[14px] items-center">
            <h2 className="m-0 text-[clamp(32px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em] [font-family:var(--font-display)]">
              Our Work
            </h2>
          </div>
          <p className="m-0 text-[17px] leading-[1.6] text-[#4A5A50]">
            A look at the digital products we&apos;ve built for our clients
            across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative group rounded-2xl border border-[#DDE5DE] bg-[#F9FBF8] overflow-hidden shadow-lg min-h-[500px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Image with Slider for multiple images */}
              <div className="absolute inset-0">
                <ImageSlider images={project.image} />
              </div>

              {/* Image Overlay for visibility */}
              <div className="absolute inset-0 bg-black/30 z-0" />

              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col gap-[14px] p-7 bg-white/95 group-hover:from-[#F9FBF8] transition-all duration-300">
                <div>
                  <span className="font-mono text-[13px] text-[#5A6B60]">
                    {project.id.toString().padStart(2, "0")}
                  </span>
                </div>

                <h3 className="m-0 text-[22px] tracking-[-0.01em] [font-family:var(--font-display)] text-[#13231A]">
                  {project.name}
                </h3>

                <p className="m-0 text-[15px] leading-[1.6] text-[#4A5A50]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#C9D6CC] bg-white/90 px-3 py-2 font-mono text-[13px] text-[#13231A]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * ImageSlider component for handling automatic slide transitions
 */
function ImageSlider({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 4000);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Project image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
