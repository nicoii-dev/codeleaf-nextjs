import { PROCESS_STEPS } from "../lib/content";

export default function Process() {
  return (
    <section id="process" className="bg-[#13231A] text-[#E8EFE9]">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12 px-6 py-24">
        {/* Section Header */}
        <div className="flex max-w-[640px] flex-col gap-[14px]">
          <h2 className="m-0 max-w-[708px] text-[clamp(32px,3.6vw,46px)] leading-[1.1] tracking-[-0.02em] text-white [font-family:var(--font-display)]">
            Your vision, built step by step.
          </h2>

          <p className="m-0 max-w-[682px] text-[17px] leading-[1.6] text-[#A9B8AE]">
            You&rsquo;re involved at every stage, so the final site looks
            exactly how you imagined it.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
          {PROCESS_STEPS.map((st) => (
            <div
              key={st.num}
              className="flex flex-col gap-3 border-t-2 border-[#6FD39A] pt-6"
            >
              <span className="text-[40px] font-bold text-[#6FD39A] [font-family:var(--font-display)]">
                {st.num}
              </span>

              <h3 className="m-0 text-[22px] text-white [font-family:var(--font-display)]">
                {st.title}
              </h3>

              <p className="m-0 text-[15px] leading-[1.6] text-[#A9B8AE]">
                {st.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
