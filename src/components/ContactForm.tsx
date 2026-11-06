"use client";

import { useState, type FormEvent } from "react";
import { ACCENT, CONTACT_OPTIONS } from "../lib/content";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      type: (form.elements.namedItem("type") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const fieldStyle = {
    minHeight: 48,
    border: "1px solid #C9D6CC",
    borderRadius: 10,
    padding: "0 14px",
    fontSize: 15,
    fontFamily: "inherit",
  } as const;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-0 flex-[1_1_440px] flex-col gap-[18px] rounded-[18px] border border-[#DDE5DE] bg-white p-8"
    >
      {/* Name and Email */}
      <div className="flex flex-wrap gap-[18px]">
        <div className="flex flex-[1_1_200px] flex-col gap-2">
          <label htmlFor="cl-name" className="text-sm font-semibold">
            Your name
          </label>

          <input
            id="cl-name"
            name="name"
            type="text"
            required
            className="min-h-[48px] w-full rounded-[10px] border border-[#C9D6CC] bg-white px-[14px] text-[15px] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
          />
        </div>

        <div className="flex flex-[1_1_200px] flex-col gap-2">
          <label htmlFor="cl-email" className="text-sm font-semibold">
            Email
          </label>

          <input
            id="cl-email"
            name="email"
            type="email"
            required
            className="min-h-[48px] w-full rounded-[10px] border border-[#C9D6CC] bg-white px-[14px] text-[15px] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
          />
        </div>
      </div>

      {/* Service Type */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cl-type" className="text-sm font-semibold">
          What do you need?
        </label>

        <select
          id="cl-type"
          name="type"
          className="min-h-[48px] w-full rounded-[10px] border border-[#C9D6CC] bg-white px-3 text-[15px] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
        >
          {CONTACT_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label htmlFor="cl-msg" className="text-sm font-semibold">
          Describe your idea
        </label>

        <textarea
          id="cl-msg"
          name="message"
          rows={5}
          required
          className="w-full resize-y rounded-[10px] border border-[#C9D6CC] px-[14px] py-3 text-[15px] outline-none transition focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="min-h-[52px] rounded-full border-0 bg-[#1F7A4C] text-base font-semibold text-white transition hover:brightness-95 disabled:cursor-default disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Send my request"}
      </button>

      {/* Success Message */}
      {status === "success" && (
        <p className="m-0 text-sm text-[#1F7A4C]">
          Thanks! We&rsquo;ve received your message and will get back to you
          soon.
        </p>
      )}

      {/* Error Message */}
      {status === "error" && (
        <p className="m-0 text-sm text-[#C2410C]">
          Something went wrong sending your message. Please try again or email
          us directly.
        </p>
      )}
    </form>
  );
}
