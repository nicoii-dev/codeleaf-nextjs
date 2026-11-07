"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, SITE } from "../lib/content";
import Logo from "./Logo";

export default function Header() {
  return (
    <motion.header
      className="border-b border-[#DDE5DE] bg-[#F6F8F4]"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-6 py-5">
        {/* Logo and Brand */}
        <a
          href="#top"
          className="flex items-center gap-[10px] text-[#13231A] no-underline"
        >
          <Logo />

          <span className="text-[22px] font-bold tracking-[-0.02em] [font-family:var(--font-display)]">
            {SITE.name}
          </span>
        </a>

        {/* Navigation */}
        <nav
          aria-label="Main"
          className="flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px] font-medium"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#13231A] no-underline transition-colors hover:text-[var(--accent)]"
            >
              {link.label}
            </a>
          ))}

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center rounded-full bg-[#13231A] px-5 text-white no-underline transition-colors hover:bg-[var(--accent)]"
          >
            Start a project
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
