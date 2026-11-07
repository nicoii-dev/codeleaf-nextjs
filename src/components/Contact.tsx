"use client";

import { motion } from "framer-motion";
import { CONTACT } from "../lib/content";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="mx-auto flex max-w-[1200px] flex-wrap gap-14 px-6 py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Contact Information */}
      <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
        <h2 className="m-0 text-[clamp(32px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em] [font-family:var(--font-display)]">
          Tell us about your website idea
        </h2>

        <p className="m-0 text-[17px] leading-[1.6] text-[#4A5A50]">
          Share what you have in mind — colors, style, websites you like.
          We&rsquo;ll reply with a free quote and a plan.
        </p>

        {/* Contact Details */}
        <div className="flex flex-col gap-[10px] pt-2 text-base">
          <div>
            <strong>Email:</strong> {CONTACT.email}
          </div>

          <div>
            <strong>Phone / Viber:</strong> {CONTACT.phone}
          </div>

          <div>
            <strong>Facebook:</strong> {CONTACT.facebook}
          </div>

          <div>
            <strong>Location:</strong> {CONTACT.location}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <ContactForm />
    </motion.section>
  );
}
