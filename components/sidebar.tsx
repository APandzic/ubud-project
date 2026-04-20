"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <aside className="w-56 shrink-0 border-r border-neutral-200 bg-neutral-50 min-h-screen flex flex-col py-8 px-4">
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
    </aside>
  );
}
