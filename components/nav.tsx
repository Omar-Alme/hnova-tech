"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { IconArrow, IconClose, IconMenu } from "./icons";

const links: [string, string][] = [
  ["Services", "#services"],
  ["Solutions", "#problems"],
  ["Work", "#work"],
  ["Founder", "#founder"],
  ["Contact", "#contact"],
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-4 sm:px-6 pt-4 sm:pt-5">
      <nav
        className={`mx-auto max-w-6xl glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "shadow-[0_20px_60px_-30px_rgba(80,120,255,0.5)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center">
          <Logo />
        </a>
        <div className="hidden md:flex items-center gap-1 text-[13px] text-white/70">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              className="px-3.5 py-2 rounded-full hover:text-white hover:bg-white/5 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 btn-primary rounded-full px-4 py-2 text-[13px] font-medium"
        >
          Book Consultation <IconArrow size={14} />
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden h-9 w-9 grid place-items-center rounded-full hover:bg-white/5"
          aria-label="Toggle navigation"
        >
          {open ? <IconClose size={18} /> : <IconMenu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl glass mt-2 rounded-3xl p-4 space-y-1">
          {links.map(([l, h]) => (
            <a
              key={l}
              href={h}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-xl hover:bg-white/5 text-sm"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 btn-primary rounded-full px-4 py-2.5 text-sm font-medium text-center"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
