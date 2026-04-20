import Image from "next/image";

const IMAGES = [
  { src: "/concept/one.jpeg", alt: "Bar and lounge area with wooden shelving and ceramic vessels" },
  { src: "/concept/two.jpeg", alt: "Bathroom with terracotta brick wall and concrete stone sink" },
  { src: "/concept/three.jpeg", alt: "Bedroom with lime-washed walls and rattan chair" },
  { src: "/concept/four.jpeg", alt: "Suite bedroom and bathroom with wooden lattice screens" },
  { src: "/concept/five.jpeg", alt: "Room with wooden slat walls and concrete headboard" },
];

export default function ConceptPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">

      <div className="mb-10 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Visual direction · Ubud</p>
        <h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Concept</h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          Natural materials, warm tones, and crafted detail. The aesthetic draws from
          Balinese craftsmanship with a modern, minimal sensibility.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {/* First image spans full width */}
        <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-lg">
          <Image src={IMAGES[0].src} alt={IMAGES[0].alt} fill className="object-cover" />
        </div>

        {/* Two portrait images */}
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image src={IMAGES[1].src} alt={IMAGES[1].alt} fill className="object-cover" />
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image src={IMAGES[2].src} alt={IMAGES[2].alt} fill className="object-cover" />
        </div>

        {/* Last two landscape */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={IMAGES[3].src} alt={IMAGES[3].alt} fill className="object-cover" />
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image src={IMAGES[4].src} alt={IMAGES[4].alt} fill className="object-cover" />
        </div>
      </div>

    </div>
  );
}
