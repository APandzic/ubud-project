"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const PROJECT_ITEMS = [
  { href: "/", label: "Home", sub: "Overview" },
  { href: "/project", label: "Our Latest Project", sub: "Case study" },
  { href: "/about", label: "What we deliver", sub: "Development to exit" },
  { href: "/ubud-hotels", label: "Ubud Hotels", sub: "IDR 2M vs 3M per night" },
  { href: "/roi", label: "ROI Calculator", sub: "Expand rooms vs. facilities" },
  { href: "/concept", label: "Concept", sub: "Visual direction" },
];

const JOINT_VENTURE_ITEMS = [
  { href: "/joint-venture", label: "PULSE + VITA", sub: "Investor pitch" },
  { href: "/pulse-numbers", label: "Financial tables", sub: "Revenue, OPEX, sensitivity" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close drawer on navigation
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const renderLink = (item: { href: string; label: string; sub: string }) => {
    const active = pathname === item.href;
    return (
      <Link
        key={item.href}
        href={item.href}
        className={`rounded-md px-3 py-2.5 transition-colors ${
          active
            ? "bg-neutral-200 text-neutral-900"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        <span className="block text-sm font-medium">{item.label}</span>
        <span className="block text-[11px] mt-0.5 text-neutral-700">{item.sub}</span>
      </Link>
    );
  };

  const navContent = (
    <>
      <div className="mb-6 pb-6 px-2 border-b border-neutral-200">
        <p className="text-sm font-semibold text-neutral-900 tracking-tight">Hotel Project Ubud</p>
      </div>
      <nav className="flex flex-col gap-0.5">
        {PROJECT_ITEMS.map(renderLink)}
      </nav>
      <div className="mt-8 pt-6 border-t border-neutral-200">
        <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider px-3 mb-2">Joint Venture</p>
        <nav className="flex flex-col gap-0.5">
          {JOINT_VENTURE_ITEMS.map(renderLink)}
        </nav>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — always visible */}
      <aside className="hidden md:flex w-56 shrink-0 border-r border-neutral-200 bg-neutral-50 min-h-screen flex-col py-8 px-4">
        {navContent}
      </aside>

      {/* Mobile hamburger button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-white border border-neutral-200 shadow-sm text-neutral-700"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 4h14M2 9h14M2 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Mobile backdrop */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col py-8 px-4 transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6 pb-6 px-2 border-b border-neutral-200">
          <p className="text-sm font-semibold text-neutral-900 tracking-tight">Hotel Project Ubud</p>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-0.5">
          {PROJECT_ITEMS.map(renderLink)}
        </nav>
        <div className="mt-8 pt-6 border-t border-neutral-200">
          <p className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider px-3 mb-2">Joint Venture</p>
          <nav className="flex flex-col gap-0.5">
            {JOINT_VENTURE_ITEMS.map(renderLink)}
          </nav>
        </div>
      </aside>
    </>
  );
}
