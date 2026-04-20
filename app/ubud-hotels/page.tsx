import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const HOTELS_2M = [
  {
    name: "Adiwana Bisma",
    price: "~IDR 2M",
    description: "Adults-only boutique on Jl. Bisma. Rooftop infinity pool, all-day breakfast, walking distance to Monkey Forest. Entry rooms land around this price off-season.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJz4IV0K490i0RYy9CApRdDDE",
    highlights: ["Adults-only", "Rooftop infinity pool", "All-day breakfast", "Central location"],
  },
  {
    name: "Alaya Resort Ubud",
    price: "~IDR 2M",
    description: "Central Pengosekan location. Large rooms with terraces overlooking small rice fields, multiple restaurants on-site, matcha house.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJx5WjNWw90i0RZ5aKdoXPUzE",
    highlights: ["Rice-field terraces", "Multiple restaurants", "Matcha house", "Large rooms 30, 45 m²"],
  },
  {
    name: "Vije Boutique Resort & Spa",
    price: "~IDR 2M",
    description: "Smaller boutique on Jl. Suweta. Some rooms have private plunge pools at this price tier, rare for 2M.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJWU0j8Usj0i0RVmWG6EbVIMY",
    highlights: ["Private plunge pools (rare at 2M)", "Boutique scale", "Jl. Suweta"],
  },
  {
    name: "Kastara Resort and Spa",
    price: "~IDR 2M, 3M",
    description: "Jungle-valley views, infinity pool. Spacious rooms at the lower tier; pool villas push toward 3M.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJaTRVm4U90i0R_ArmepPVClA",
    highlights: ["Jungle-valley views", "Infinity pool", "Pool villas at 3M tier"],
  },
];

const HOTELS_3M = [
  {
    name: "The Kayon Resort",
    price: "~IDR 3M",
    description: "Adults-only, 15 min from Ubud center. River Edge suites and villas land in the 3M range, with jungle canyon views, breakfast, and afternoon tea included.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJR-RGD9kj0i0RdFsUcBplrt0",
    highlights: ["Adults-only", "River Edge suites", "Jungle canyon views", "Breakfast + afternoon tea"],
  },
  {
    name: "COMO Uma Ubud",
    price: "~IDR 3M entry",
    description: "#1 resort in the world 2025 (Condé Nast Readers' Choice). Entry Garden/Terrace rooms at approximately IDR 3M with advance-purchase discount; villas much higher.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJD7l4NjE90i0RGLP1Vw4y_Ho",
    highlights: ["#1 resort globally 2025 (CNT)", "COMO Shambhala toiletries", "Uma Cucina restaurant", "Villas available"],
    featured: true,
  },
  {
    name: "Adiwana Suweta",
    price: "~IDR 3M",
    description: "One-bedroom pool villas with private pools land in this bracket off-peak. 4.9-star guest rating, exceptionally well-reviewed.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJ5b5A0O890i0RuE_uKii8qww",
    highlights: ["Private pool villas", "4.9★ guest rating", "Inclusive minibar"],
  },
  {
    name: "Kuwarasan A Pramana Experience",
    price: "~IDR 3M",
    description: "Rice-field setting 20 min north. Private pool villas (Melati, one-bedroom) hit this tier with floating breakfast included.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJmx0nulAj0i0RkYSg6daFPx8",
    highlights: ["Rice-field setting", "Private pool villas", "Floating breakfast"],
  },
  {
    name: "Pita Maha Resort & Spa",
    price: "~IDR 3M",
    description: "Traditional Balinese villa estate in Sanggingan. Garden villas with private plunge pools at the 3M mark.",
    mapsUrl: "https://www.google.com/maps/place/?q=place_id:ChIJR2iTk2oZ0i0RCfBaqUMzBr4",
    highlights: ["Traditional Balinese estate", "Garden villas", "Private plunge pools", "Sanggingan"],
  },
];

const TIER_2M_ROOM = [
  "King bed, approximately 30, 45 m²",
  "Private balcony or terrace with jungle, rice-field, or pool views",
  "Deep soaking tub and separate rainfall shower",
  "A/C, TV, minibar, safe, coffee setup",
  "Premium bedding, bathrobes, and slippers",
  "Free Wi-Fi",
];

const TIER_2M_PROPERTY = [
  "Rooftop or main infinity pool",
  "Full on-site spa (paid; daily yoga often included)",
  "1, 2 restaurants, breakfast included",
  "Concierge, laundry, tour desk",
  "Ubud-center shuttle (usually free)",
];

const TIER_3M_ROOM = [
  "Private plunge pool or full pool",
  "55, 80 m² or more, with separate living area",
  "Outdoor bathtub, sometimes open-air shower",
  "Four-poster bed, marble flooring, premium toiletries",
  "Private gazebo and daybed area",
  "Jungle canyon, river-edge, or valley views",
];

const TIER_3M_PROPERTY = [
  "Floating breakfast served in your pool",
  "Daily guided rice-field walks and yoga with instructor",
  "Complimentary afternoon tea",
  "Higher-end dining (Uma Cucina, Pita Maha estate restaurant)",
  "Higher staffing ratio, guests known by name",
];

type Hotel = {
  name: string;
  price: string;
  description: string;
  mapsUrl: string;
  highlights: string[];
  featured?: boolean;
};

function HotelAccordion({ hotels }: { hotels: Hotel[] }) {
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <Accordion type="single" collapsible>
        {hotels.map((hotel) => (
          <AccordionItem key={hotel.name} value={hotel.name}>
            <AccordionTrigger>
              <span className="flex-1 flex items-center gap-3">
                <span>{hotel.name}</span>
                {hotel.featured && (
                  <span className="text-xs font-normal text-neutral-700 bg-neutral-100 rounded px-2 py-0.5">Top pick</span>
                )}
              </span>
              <span className="font-mono text-xs font-normal text-neutral-700 w-28 text-right mr-3">{hotel.price}</span>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-sm text-neutral-700 leading-relaxed mb-4">{hotel.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {hotel.highlights.map((h) => (
                  <span key={h} className="text-xs bg-neutral-50 text-neutral-700 border border-neutral-200 rounded px-2 py-0.5">
                    {h}
                  </span>
                ))}
              </div>
              <a
                href={hotel.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-neutral-700 underline underline-offset-2 hover:text-neutral-900 transition-colors"
              >
                View on Maps ↗
              </a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

function TierHeader({ title, meta, body }: { title: string; meta: string; body: string }) {
  return (
    <div className="mb-6">
      <p className="text-sm text-neutral-700 mb-1">{meta}</p>
      <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">{title}</h2>
      <p className="text-sm text-neutral-700">{body}</p>
    </div>
  );
}

export default function UbudHotelsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-12">

      {/* Header */}
      <div className="mb-12 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Hotel Analysis · Ubud, Bali</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          IDR 2M vs 3M per night
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          A curated comparison of the upper-boutique and private-villa tiers in Ubud.
          What you get at each price point and which properties deliver the best value.
        </p>
      </div>

      {/* IDR 2M Tier */}
      <section className="mb-14">
        <TierHeader
          meta="IDR 2M · approximately USD 120, 135 per night"
          title="Upper-boutique rooms"
          body="4.5 to 5-star properties in standard rooms rather than pool villas."
        />

        <p className="text-sm font-semibold text-neutral-900 mb-2">Room includes</p>
        <ul className="space-y-1.5 mb-6">
          {TIER_2M_ROOM.map((item) => (
            <li key={item} className="text-sm text-neutral-700">{item}</li>
          ))}
        </ul>

        <p className="text-sm font-semibold text-neutral-900 mb-2">Property amenities</p>
        <ul className="space-y-1.5 mb-8">
          {TIER_2M_PROPERTY.map((item) => (
            <li key={item} className="text-sm text-neutral-700">{item}</li>
          ))}
        </ul>

        <HotelAccordion hotels={HOTELS_2M} />
      </section>

      <hr className="border-neutral-200 mb-14" />

      {/* IDR 3M Tier */}
      <section className="mb-14">
        <TierHeader
          meta="IDR 3M · approximately USD 180, 200 per night"
          title="Private pool villas"
          body="Everything in the 2M tier, plus a private pool and significantly more space."
        />

        <p className="text-sm font-semibold text-neutral-900 mb-2">Villa upgrade</p>
        <ul className="space-y-1.5 mb-6">
          {TIER_3M_ROOM.map((item) => (
            <li key={item} className="text-sm text-neutral-700">{item}</li>
          ))}
        </ul>

        <p className="text-sm font-semibold text-neutral-900 mb-2">Property adds</p>
        <ul className="space-y-1.5 mb-8">
          {TIER_3M_PROPERTY.map((item) => (
            <li key={item} className="text-sm text-neutral-700">{item}</li>
          ))}
        </ul>

        <HotelAccordion hotels={HOTELS_3M} />
      </section>

      {/* Takeaway */}
      <div className="border-t border-neutral-200 pt-8">
        <p className="text-sm text-neutral-700 mb-4">Takeaway</p>
        <p className="text-xl font-semibold text-neutral-900 leading-snug mb-3 max-w-xl">
          The jump from 2M to 3M is the biggest value step in Ubud hotels.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed max-w-xl mb-2">
          At 2M you get a well-appointed room in a 5-star property. At 3M you get your own villa with a private pool, the experience Ubud is known for.
        </p>
        <p className="text-sm text-neutral-700 leading-relaxed max-w-xl">
          For a honeymoon, anniversary, or a short trip where the hotel is the destination, stretch to 3M.
          For a longer stay where you plan to spend most days exploring, the 2M tier delivers
          80% of the comfort at 66% of the cost.
        </p>
      </div>

    </div>
  );
}
