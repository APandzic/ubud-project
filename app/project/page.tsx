import Image from "next/image";

const IMAGES = [
  { src: "/sola/sola-8.jpeg", alt: "Sola project" },
  { src: "/sola/sola-1.jpeg", alt: "Sola project" },
  { src: "/sola/sola-2.jpeg", alt: "Sola project" },
  { src: "/sola/sola-3.jpeg", alt: "Sola project" },
  { src: "/sola/sola-4.jpeg", alt: "Sola project" },
  { src: "/sola/sola-6.jpeg", alt: "Sola project" },
  { src: "/sola/sola-7.jpeg", alt: "Sola project" },
];

export default function ProjectPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-12">

      {/* Header */}
      <div className="mb-12 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Case study · Bali</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          Our Latest Project
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          This project is a reflection of our end-to-end approach, turning a vision into a functioning,
          revenue-generating hotel with the right structure, team and strategy in place.
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 gap-3">
        {IMAGES.map((image) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            sizes="50vw"
            className="w-full h-auto rounded-lg"
          />
        ))}
      </div>

    </div>
  );
}
