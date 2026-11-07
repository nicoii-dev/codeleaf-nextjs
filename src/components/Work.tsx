"use client";

import { motion } from "framer-motion";

export default function Work() {
  interface Project {
    id: number;
    name: string;
    description: string;
    technologies: string[];
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      id: 2,
      name: "Fitness Tracking App",
      description:
        "A mobile fitness application for workout tracking and health monitoring with social features.",
      technologies: ["React Native", "Firebase", "Redux"],
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      description:
        "A subscription-based analytics dashboard with real-time data visualization for businesses.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    },
    {
      id: 4,
      name: "Corporate CRM",
      description:
        "A customer relationship management system with custom dashboards and reporting features.",
      technologies: ["NestJS", "React", "PostgreSQL", "JWT"],
    },
  ];

  return (
    <section id="work" className="py-20 bg-gradient-to-br from-background to-background/50">
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

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="flex flex-col gap-[14px] rounded-2xl border border-[#DDE5DE] bg-[#F9FBF8] p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="font-mono text-[13px] text-[#5A6B60]">
                  {project.id.toString().padStart(2, '0')}
                </span>
              </div>

              <h3 className="m-0 text-[22px] tracking-[-0.01em] [font-family:var(--font-display)]">
                {project.name}
              </h3>

              <p className="m-0 text-[15px] leading-[1.6] text-[#4A5A50]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-[#C9D6CC] bg-white px-3 py-2 font-mono text-[13px] text-[#13231A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
