"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

/**
 * Hamburger component for hamburger menu
 * to be used when window width is small or in mobile view to avoid ugly navbar scrunching
 * Uses Tailwind CSS and Lucide Icons.
 */
export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [archiveOpen, setArchiveOpen] = useState(false);

  // Breakpoint alignment: hidden on md (768px+), visible on smaller screens.
  // Matches header.tsx "hidden md:flex" (Header visible on md+).
  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 w-full p-8 z-50 flex items-start pointer-events-none">
        <button
          onClick={() => setOpen(!open)}
          className="pointer-events-auto p-2 text-neutral-800 hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-screen w-[85vw] md:w-[50vw] bg-[#FDFBF7] z-40 shadow-xl transform transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col p-12 overflow-y-auto`}
      >
        <div className="mt-16 flex flex-col gap-6 text-neutral-800 font-cormorant tracking-widest text-lg">
          <Link href="/" onClick={() => setOpen(false)}>
            <div className="font-medium hover:font-bold hover:text-black transition-all">
              HOME
            </div>
          </Link>

          <div className="flex flex-col gap-2">
            <div
              className="flex items-center justify-between cursor-pointer font-medium hover:font-bold hover:text-black transition-all w-[120px]"
              onClick={(e) => {
                e.stopPropagation();
                setAboutOpen(!aboutOpen);
              }}
            >
              ABOUT
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${aboutOpen ? "rotate-180" : ""}`}
              />
            </div>

            <div
              className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${aboutOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
            >
              <Link href="/about" onClick={() => setOpen(false)}>
                <div className="text-base tracking-wide hover:text-black text-neutral-600">
                  Mission
                </div>
              </Link>
              <Link href="/about/staff" onClick={() => setOpen(false)}>
                <div className="text-base tracking-wide hover:text-black text-neutral-600">
                  Staff
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div
              className="flex items-center justify-between cursor-pointer font-medium hover:font-bold hover:text-black transition-all w-[140px]"
              onClick={(e) => {
                e.stopPropagation();
                setArchiveOpen(!archiveOpen);
              }}
            >
              ARCHIVE
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${archiveOpen ? "rotate-180" : ""}`}
              />
            </div>

            <div
              className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${archiveOpen ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`}
            >
              <Link href="/#latest-issue" onClick={() => setOpen(false)}>
                <div className="text-base tracking-wide hover:text-black text-neutral-600">
                  Latest Issue
                </div>
              </Link>
              <Link href="/archive" onClick={() => setOpen(false)}>
                <div className="text-base tracking-wide hover:text-black text-neutral-600">
                  Past Issues
                </div>
              </Link>
            </div>
          </div>

          <Link href="/blog" onClick={() => setOpen(false)}>
            <div className="font-medium hover:font-bold hover:text-black transition-all">
              BLOG
            </div>
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <div className="font-medium hover:font-bold hover:text-black transition-all">
              CONTACT
            </div>
          </Link>

          <Link href="/give" onClick={() => setOpen(false)}>
            <div className="font-medium hover:font-bold hover:text-black transition-all">
              GIVE
            </div>
          </Link>
        </div>

        <Link
          href="/"
          className="fixed top-8 right-8 z-30 md:hidden opacity-85 hover:opacity-100 transition-opacity"
        >
          <Image
            src="/logo-black-box.png"
            width={55}
            height={55}
            alt="Agora logo"
            className="w-[55px] h-auto"
          />
        </Link>
      </div>
    </div>
  );
}
