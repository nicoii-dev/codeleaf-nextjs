import { SERVICES } from "../lib/content";

export default function Services() {
  return (
    <section id="services" className="border-y border-[#DDE5DE] bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        {/* Section Header */}
        <div className="flex max-w-[640px] flex-col gap-[14px]">
          <h2 className="m-0 text-[clamp(32px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em] [font-family:var(--font-display)]">
            Everything your business needs online
          </h2>

          <p className="m-0 text-[17px] leading-[1.6] text-[#4A5A50]">
            Every site is designed from scratch around your preferences. No
            cookie-cutter templates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.num}
              className="flex flex-col gap-[14px] rounded-2xl border border-[#DDE5DE] bg-[#F9FBF8] p-7"
            >
              <span className="font-mono text-[13px] text-[#5A6B60]">
                {s.num}
              </span>

              <h3 className="m-0 text-[22px] tracking-[-0.01em] [font-family:var(--font-display)]">
                {s.title}
              </h3>

              <p className="m-0 text-[15px] leading-[1.6] text-[#4A5A50]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
