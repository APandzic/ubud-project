# Ubud ROI Calculator

Next.js 15 + shadcn/ui + Tailwind.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Files

```
app/
  layout.tsx      Root layout
  page.tsx        The calculator (all logic here)
  globals.css     Tailwind + shadcn CSS vars
components/ui/
  slider.tsx      shadcn Slider
  card.tsx        shadcn Card
lib/
  utils.ts        cn() helper
package.json
tsconfig.json
tailwind.config.js
postcss.config.js
next.config.js
```

10 files total. All calculator logic lives in `app/page.tsx`.
# ubud-project
