const PHASES = [
  {
    number: "01",
    title: "Development & Build",
    description: "We take ownership of the full development process, ensuring the project is built correctly from both an operational and commercial perspective.",
    areas: [
      {
        label: "Concept & Strategy",
        items: [
          "Positioning of the hotel, arget group, pricing level, experience",
          "Room mix strategy (30 vs 34 units depending on ROI and layout)",
          "Revenue model and business case",
        ],
      },
      {
        label: "Legal & Structure",
        items: [
          "Company setup and structuring",
          "Licenses (SLF, operational permits, etc.)",
          "Contracts and coordination with legal partners",
        ],
      },
      {
        label: "Build & Project Management",
        items: [
          "Full project management of construction",
          "Coordination with contractors and suppliers",
          "Budget control and cost optimization",
          "Timeline management and quality assurance",
        ],
      },
      {
        label: "Product & Setup",
        items: [
          "Interior direction and guest experience",
          "Room product design and pricing logic",
          "OTA setup (Booking, Airbnb, etc.)",
          "Systems setup, eporting, payments, operations",
        ],
      },
    ],
  },
  {
    number: "02",
    title: "Operational Setup",
    description: "Before opening, we build the organization and structure needed to run the hotel efficiently with minimal owner involvement.",
    areas: [
      {
        label: "Scope",
        items: [
          "Hiring of manager and key roles",
          "Setting operational routines and structure",
          "Reporting systems and KPI tracking",
          "Operational playbooks and guidelines",
          "Pricing structure and revenue setup",
          "Soft opening and operational ramp-up",
        ],
      },
    ],
  },
  {
    number: "03",
    title: "Ongoing Operations",
    description: "We take a leading, high-level role in ensuring the hotel performs financially and operationally, esigned to minimize owner involvement while maintaining full control and transparency.",
    areas: [
      {
        label: "Operational Leadership",
        items: [
          "Ongoing manager support and coaching",
          "Coordination of external partners",
          "Ensuring execution and performance",
        ],
      },
      {
        label: "Financial Oversight",
        items: [
          "Monthly reporting",
          "Budget tracking and cost control",
        ],
      },
      {
        label: "Revenue Management",
        items: [
          "Pricing strategy and adjustments",
          "Occupancy optimization",
          "OTA performance and positioning",
        ],
      },
      {
        label: "Quality & Performance",
        items: [
          "Guest experience and review management",
          "Continuous improvements",
        ],
      },
    ],
  },
  {
    number: "04",
    title: "Value Optimization & Exit",
    description: "If the goal is to sell or reposition the asset, we prepare the business accordingly to maximize valuation.",
    optional: true,
    areas: [
      {
        label: "Scope",
        items: [
          "Structuring the business for sale",
          "Financial clarity and documentation",
          "Performance optimization",
          "Coordination with brokers",
          "Strategy to maximize valuation",
        ],
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">

      {/* Header */}
      <div className="mb-12 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Who we are</p>
        <h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          End-to-End Hotel Development & Management
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed">
          We support hotel projects from early-stage concept all the way through operation and eventual exit.
          The goal is to create a well-structured, high-performing asset that can run efficiently and maximize long-term value.
        </p>
        <p className="text-base text-neutral-700 leading-relaxed mt-3">
          For your Ubud project (30, 34 rooms depending on final strategy), we can take a leading role across both development and operations.
        </p>
      </div>

      {/* Phases */}
      <div className="space-y-14">
        {PHASES.map((phase) => (
          <section key={phase.number}>
            <div className="flex items-baseline gap-4 mb-2">
              <span className="font-mono text-xs text-neutral-700">{phase.number}</span>
              <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight">
                {phase.title}
              </h2>
              {phase.optional && (
                <span className="text-xs text-neutral-700 bg-neutral-100 border border-neutral-200 rounded px-2 py-0.5">Optional</span>
              )}
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed mb-6 ml-10">{phase.description}</p>

            <div className="ml-10 space-y-6">
              {phase.areas.map((area) => (
                <div key={area.label}>
                  <p className="text-sm font-semibold text-neutral-900 mb-2">{area.label}</p>
                  <ul className="space-y-1.5">
                    {area.items.map((item) => (
                      <li key={item} className="text-sm text-neutral-700">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-14 pt-8 border-t border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Summary</p>
        <p className="text-xl font-semibold text-neutral-900 leading-snug mb-6">
          Concept → build → operation → exit
        </p>
        <div className="space-y-2">
          {[
            "Correct decisions from day one",
            "Efficient build and cost control",
            "Strong operational performance",
            "A structured, sellable asset",
          ].map((item) => (
            <p key={item} className="text-sm text-neutral-700">{item}</p>
          ))}
        </div>
      </div>

    </div>
  );
}
