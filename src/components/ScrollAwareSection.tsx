"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface ScrollAwareSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  animateOnScroll?: boolean;
}

export function ScrollAwareSection({
  children,
  className = "",
  id,
  delay = 0,
  animateOnScroll = true,
}: ScrollAwareSectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  const lastScrollY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const [inViewport, setInViewport] = useState(false);
  const previousInViewport = useRef<boolean | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const sectionTop = ref?.current?.getBoundingClientRect().top;
      const sectionHeight = ref?.current?.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Check if section is in viewport (with 70% threshold)
      const isInViewport =
        sectionTop !== undefined &&
        sectionHeight !== undefined &&
        sectionTop < viewportHeight * 0.7 &&
        sectionTop + sectionHeight > 0;

      // Determine scroll direction
      const scrollDirection = currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;

      // Only animate if animateOnScroll is enabled
      if (animateOnScroll && isInViewport) {
        // Detect when entering viewport (scroll down)
        if (!previousInViewport.current && isInViewport) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: "easeOut",
              delay,
            },
          });
        }
        setInViewport(true);
      } else if (animateOnScroll && !isInViewport) {
        // Detect when exiting viewport (scroll up) - trigger reverse animation
        if (previousInViewport.current && !isInViewport) {
          controls.start({
            opacity: 0,
            y: scrollDirection === "down" ? 30 : -30,
            transition: {
              duration: 0.4,
              ease: "easeOut",
              delay,
            },
          });
        }
        setInViewport(false);
      }

      previousInViewport.current = isInViewport;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, delay, animateOnScroll]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
    >
      {children}
    </motion.section>
  );
}

interface ScrollDelayProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  className?: string;
}

export function MotionDiv({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: ScrollDelayProps) {
  const variants = {
    up: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants[direction]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export const stagger = {
  children: {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    initial: {
      opacity: 0,
      y: 20,
    },
  },
};

export default ScrollAwareSection;