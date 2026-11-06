"use client";

import { motion } from "framer-motion";

export default function Work() {
  interface Project {
    id: number;
    name: string;
    description: string;
    image: string;
    technologies: string[];
    category: string;
  }

  const projects: Project[] = [
    {
      id: 1,
      name: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
      image:
        "https://images.unsplash.com/photo-1664539209375-3c52c8b2c5a1?w=800&h=600&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
    },
    {
      id: 2,
      name: "Fitness Tracking App",
      description:
        "A mobile fitness application for workout tracking and health monitoring with social features.",
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21dbc174?w=800&h=600&fit=crop",
      technologies: ["React Native", "Firebase", "Redux"],
      category: "Mobile Development",
    },
    {
      id: 3,
      name: "SaaS Dashboard",
      description:
        "A subscription-based analytics dashboard with real-time data visualization for businesses.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      category: "SaaS Development",
    },
    {
      id: 4,
      name: "Corporate CRM",
      description:
        "A customer relationship management system with custom dashboards and reporting features.",
      image:
        "https://images.unsplash.com/photo-1551434679-e291-4fb3-2a02-8d49cceb5f7f?w=800&h=600&fit=crop",
      technologies: ["NestJS", "React", "PostgreSQL", "JWT"],
      category: "Enterprise Software",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-background/50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm text-primary font-semibold uppercase tracking-wide">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-foreground/70 max-w-3xl mx-auto">
            A glimpse into the digital products we&apos;ve built for our clients
            across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative aspect-video">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="text-xs bg-primary px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button
                  type="submit"
                  className="pr-5 pl-5 pt-2 pb-2 text-center [font-family:var(--font-display)] rounded-full border-0 bg-[#1F7A4C] text-base font-semibold text-white transition hover:brightness-95 disabled:cursor-default disabled:opacity-70"
                >
                  View Project
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
