"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { Logo } from "./logo";
import { IconArrow, IconClose, IconMenu } from "./icons";

const links: [string, string][] = [
  ["Services", "#services"],
  ["Solutions", "#problems"],
  ["Work", "#work"],
  ["Founder", "#founder"],
  ["Contact", "#contact"],
];

const islandTransition: Transition = {
  type: "tween",
  ease: [0.22, 1, 0.36, 1],
  duration: 0.5,
};

const islandSpring: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Top nav (no glass, transparent) ── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.header
            key="top-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -16, transition: { duration: 0.25, ease: "easeIn" } }}
            className="fixed top-0 inset-x-0 z-[60] px-6 sm:px-10 pt-7 pointer-events-none"
          >
            <div className="mx-auto max-w-7xl flex items-center justify-between gap-6 pointer-events-auto">
              {/* Logo */}
              <a href="#top" className="flex items-center">
                <Logo size={20} />
              </a>

              {/* Desktop nav links */}
              <nav className="hidden md:flex items-center gap-7 text-[13px] text-white/60">
                {links.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="ml-2 btn-primary rounded-none px-5 py-2.5 text-[13px] font-medium inline-flex items-center gap-2 text-white"
                >
                  Book Consultation <IconArrow size={13} />
                </a>
              </nav>

              {/* Mobile toggle */}
              <button
                onClick={() => setOpen((o) => !o)}
                className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-white/10 bg-ink-900 text-white/85"
                aria-label="Toggle navigation"
              >
                {open ? <IconClose size={16} /> : <IconMenu size={16} />}
              </button>
            </div>

            {/* Mobile drawer */}
            <AnimatePresence>
              {open && (
                <motion.div
                  key="mobile-drawer"
                  initial={{ opacity: 0, y: -8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden mx-auto max-w-7xl bg-ink-900 border border-white/10 mt-3 rounded-2xl p-3 space-y-0.5 shadow-2xl"
                >
                  {links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 rounded-xl hover:bg-white/5 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block mt-1 btn-primary rounded-none px-4 py-2.5 text-sm font-medium text-center"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        )}
      </AnimatePresence>

      {/* ── Dynamic Island (scrolled) ── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="island"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={islandSpring}
            className="fixed top-4 inset-x-0 z-[60] flex justify-center px-4 pointer-events-none"
          >
            <motion.div
              initial={false}
              animate={{ borderRadius: 999 }}
              transition={islandTransition}
              className="pointer-events-auto relative overflow-hidden border border-white/10 bg-ink-900 shadow-2xl shadow-black/40"
            >
              <div className="flex items-center gap-1 pl-4 pr-1.5 py-1.5">
                {/* Logo */}
                <a href="#top" className="pr-3 mr-1 border-r border-white/10 flex items-center">
                  <Logo size={16} />
                </a>

                {/* Links */}
                <nav className="hidden sm:flex items-center gap-0.5 text-[12.5px] text-white/65 pl-1">
                  {links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/[0.06] transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </nav>

                {/* CTA */}
                <a
                  href="#contact"
                  className="ml-1 btn-primary rounded-full px-4 py-1.5 text-[12.5px] font-medium inline-flex items-center gap-1.5"
                >
                  Book <IconArrow size={12} />
                </a>

                {/* Mobile toggle inside island */}
                <button
                  onClick={() => setOpen((o) => !o)}
                  className="sm:hidden ml-1 h-8 w-8 grid place-items-center rounded-full bg-white/5 border border-white/10 text-white/85"
                  aria-label="Toggle navigation"
                >
                  {open ? <IconClose size={14} /> : <IconMenu size={14} />}
                </button>
              </div>
            </motion.div>

            {/* Mobile island drawer */}
            <AnimatePresence>
              {open && (
                <motion.div
                  key="island-drawer"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="sm:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-ink-900 border border-white/10 rounded-2xl p-3 space-y-0.5 shadow-2xl"
                >
                  {links.map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2.5 rounded-xl hover:bg-white/5 text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="block mt-1 btn-primary rounded-none px-4 py-2.5 text-sm font-medium text-center"
                  >
                    Book Consultation
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
