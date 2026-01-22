"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Hamburger from "./hamburger";

export default function SiteNavigation() {
  const pathname = usePathname();
  // Don't show navigation on admin pages
  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <Hamburger />
      <Header />
    </>
  );
}
