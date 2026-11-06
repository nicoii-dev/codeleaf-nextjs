"use client";

import { ACCENT, SITE } from "../lib/content";

export default function Hero() {
  return (
<section
  id="top"
  className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 py-24 pb-[104px]"
>
  <div className="flex min-w-0 flex-[1_1_460px] flex-col gap-7">
    <span className="self-start rounded-full border border-[#C9D6CC] px-[14px] py-2 [font-family:var(--font-mono)] text-[13px] text-[#2F4A3A]">
      {"<web design & development />"}
    </span>

    <h1 className="m-0 [font-family:var(--font-display)] text-[clamp(40px,5.2vw,68px)] font-bold leading-[1.04] tracking-[-0.03em]">
      Websites that grow from{" "}
      <span className="text-[#1F7A4C]">your ideas.</span>
    </h1>

    <p className="m-0 max-w-[520px] text-[19px] leading-[1.6] text-[#4A5A50]">
      {SITE.description}
    </p>

    <div className="flex flex-wrap gap-[14px]">
      <a
        href="#contact"
        className="inline-flex min-h-[52px] items-center rounded-full bg-[#1F7A4C] px-7 font-semibold text-white no-underline"
      >
        Get a free quote
      </a>

      <a
        href="#work"
        className="inline-flex min-h-[52px] items-center rounded-full border-[1.5px] border-[#13231A] px-7 font-semibold text-[#13231A] no-underline"
      >
        See our work
      </a>
    </div>
  </div>

  <div className="min-w-0 flex-[1_1_440px]">
    <div className="overflow-hidden rounded-[18px] border border-[#DDE5DE] bg-white shadow-[0_30px_60px_-30px_rgba(19,35,26,0.35)]">
      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-[#EEF2EE] px-[18px] py-[14px]">
        <span className="size-[11px] rounded-full bg-[#E3E8E4]" />
        <span className="size-[11px] rounded-full bg-[#E3E8E4]" />
        <span className="size-[11px] rounded-full bg-[#E3E8E4]" />

        <span className="ml-3 flex-1 rounded-lg bg-[#F3F6F3] px-3 py-[6px] [font-family:var(--font-mono)] text-xs text-[#5A6B60]">
          yourbusiness.com
        </span>
      </div>

      {/* Browser Content */}
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <span className="h-3 w-[90px] rounded-md bg-[#13231A]" />

          <span className="flex gap-[10px]">
            <span className="h-2 w-10 rounded bg-[#D5DED7]" />
            <span className="h-2 w-10 rounded bg-[#D5DED7]" />
            <span className="h-2 w-10 rounded bg-[#D5DED7]" />
          </span>
        </div>

        {/* Hero Preview */}
        <div className="flex h-[150px] flex-col justify-end gap-[10px] rounded-xl bg-[#E4EEE6] p-5">
          <span className="h-4 w-[60%] rounded-md bg-[#13231A]" />
          <span className="h-[10px] w-[40%] rounded-[5px] bg-[#8FA597]" />
          <span className="h-7 w-24 rounded-full bg-[#1F7A4C]" />
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-3 gap-3">
          <span className="h-[70px] rounded-[10px] bg-[#F1F5F1]" />
          <span className="h-[70px] rounded-[10px] bg-[#F1F5F1]" />
          <span className="h-[70px] rounded-[10px] bg-[#F1F5F1]" />
        </div>

        {/* Code Preview */}
        <div className="rounded-xl bg-[#13231A] px-[18px] py-4 [font-family:var(--font-mono)] text-[13px] leading-[1.7] text-[#D6E3D9]">
          <div>
            <span className="text-[#6FD39A]">const</span> site = build({"{"}
          </div>

          <div className="pl-[18px]">
            design: <span className="text-[#F2C879]">&ldquo;your style&rdquo;</span>,
          </div>

          <div className="pl-[18px]">
            mobile: <span className="text-[#6FD39A]">true</span>,
          </div>

          <div className="pl-[18px]">
            fast: <span className="text-[#6FD39A]">true</span>
          </div>

          <div>{"});"}</div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
