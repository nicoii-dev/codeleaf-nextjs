import { FOOTER, SITE } from "../lib/content";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#13231A] text-[#A9B8AE]">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-6 py-12 text-sm">
        <div className="flex items-center gap-[10px] text-white">
          <Logo variant="footer" />
          <span className="text-lg font-bold [font-family:var(--font-display)]">
            {SITE.name}
          </span>
        </div>

        <span>{FOOTER.copyright}</span>
      </div>
    </footer>
  );
}
