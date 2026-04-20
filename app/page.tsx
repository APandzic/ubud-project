import Image from "next/image";
import Link from "next/link";

const CARDS = [
  { href: "/project", label: "Our Latest Project", description: "A functioning, revenue-generating hotel built end-to-end." },
  { href: "/about", label: "What we deliver", description: "From legal and build to revenue and exit." },
  { href: "/ubud-hotels", label: "Ubud Hotels", description: "Market comparison at IDR 2M and 3M per night." },
  { href: "/roi", label: "ROI Calculator", description: "Model room expansion vs. facility investment." },
  { href: "/concept", label: "Concept", description: "Visual direction and aesthetic references." },
  { href: "/joint-venture", label: "PULSE + VITA", description: "Investor pitch for the Uluwatu wellness facility." },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">

      {/* Hero image */}
      <div className="relative aspect-[16/7] overflow-hidden rounded-lg mb-10">
        <Image
          src="/concept/hero.jpeg"
          alt="Hotel room with lime-washed walls"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Title */}
      <div className="mb-10 pb-10 border-b border-neutral-200">
        <div className="flex items-baseline gap-4 mb-4">
          <h1 className="text-4xl font-semibold text-neutral-900 tracking-tight">
            Hotel Project Ubud
          </h1>
        </div>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl mb-6">
          We take hotel projects from idea to operation and beyond. Handling everything from legal and build to revenue and performance.
        </p>
        <div className="flex gap-6">
          {["30 to 34 rooms", "Ubud, Bali", "2026"].map((stat) => (
            <span key={stat} className="font-mono text-sm text-neutral-700">{stat}</span>
          ))}
        </div>
      </div>

      {/* Nav cards */}
      <div className="grid grid-cols-2 gap-3">
        {CARDS.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="border border-neutral-200 rounded-lg p-5 hover:bg-neutral-50 transition-colors"
          >
            <p className="text-sm font-semibold text-neutral-900 mb-1">{card.label}</p>
            <p className="text-sm text-neutral-700">{card.description}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}
