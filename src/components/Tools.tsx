"use client";

import { motion } from "framer-motion";
import { ACCENT, TOOL_GROUPS } from "../lib/content";

export default function Tools() {
  return (
    <motion.section
      id="tools"
      className="border-b border-[#DDE5DE] bg-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        {/* Section Header */}
        <div className="flex max-w-[640px] flex-col gap-[14px]">
          <h2 className="m-0 text-[clamp(32px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em] [font-family:var(--font-display)]">
            The tools we use
          </h2>

          <p className="m-0 text-[17px] leading-[1.6] text-[#4A5A50]">
            We build with modern, proven technologies so your website is fast,
            secure and ready to grow.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {TOOL_GROUPS.map((g) => (
            <div
              key={g.title}
              className="flex flex-col gap-[18px] rounded-2xl border border-[#DDE5DE] bg-[#F9FBF8] p-7"
            >
              {/* Group Header */}
              <div className="flex items-center gap-[10px]">
                <span className="font-mono text-sm text-[var(--accent)]">
                  {"</>"}
                </span>

                <h3 className="m-0 text-xl [font-family:var(--font-display)]">
                  {g.title}
                </h3>
              </div>

              {/* Tool Tags */}
              <div className="flex flex-wrap gap-2">
                {g.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-[#C9D6CC] bg-white px-3 py-2 font-mono text-[13px] text-[#13231A]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
