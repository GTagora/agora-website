"use client";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="hidden md:flex fixed top-0 w-full z-40 bg-[#F5F5F5]/90 backdrop-blur-sm h-24 px-12 items-start pt-6 font-cormorant text-lg tracking-[0.1em] text-neutral-800 shadow-sm transition-all">
      {/* Logo */}
      <Link
        href="/"
        className="mr-12 shrink-0 hover:opacity-80 transition-opacity"
      >
        <Image
          className="w-12 h-auto"
          src="/logo-black-box.png"
          width={75}
          height={75}
          alt="Agora logo"
        />
      </Link>

      {/* Nav Menu */}
      <div className="flex gap-10 items-start">
        {/* ABOUT Group */}
        <div className="group relative">
          <Link
            href="/about"
            className="block py-2 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
          >
            ABOUT
          </Link>
          {/* Dropdown */}
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
            <div className="bg-[#F5F5F5]/90 backdrop-blur-md shadow-sm rounded-md p-4 flex flex-col gap-2 min-w-[140px] border border-neutral-100/50">
              <Link
                href="/about"
                className="text-base text-neutral-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
              >
                Mission
              </Link>
              <Link
                href="/about/staff"
                className="text-base text-neutral-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
              >
                Staff
              </Link>
            </div>
          </div>
        </div>

        {/* ARCHIVE Group */}
        <div className="group relative">
          <Link
            href="/archive"
            className="block py-2 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
          >
            ARCHIVE
          </Link>
          <div className="absolute top-full left-0 pt-2 opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
            <div className="bg-[#F5F5F5]/90 backdrop-blur-md shadow-sm rounded-md p-4 flex flex-col gap-2 min-w-[160px] border border-neutral-100/50">
              <Link
                href="/#latest-issue"
                className="text-base text-neutral-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
              >
                Latest Issue
              </Link>
              <Link
                href="/archive"
                className="text-base text-neutral-600 hover:text-black hover:underline underline-offset-4 decoration-1 transition-colors"
              >
                Past Issues
              </Link>
            </div>
          </div>
        </div>

        {/* Other Links */}
        <Link
          href="/blog"
          className="block py-2 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
        >
          BLOG
        </Link>

        <Link
          href="/contact"
          className="block py-2 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
        >
          CONTACT
        </Link>

        <Link
          href="/give"
          className="block py-2 hover:text-black hover:underline underline-offset-8 decoration-1 transition-all"
        >
          GIVE
        </Link>
      </div>
    </header>
  );
}
