function TableSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-6">{title}</h2>
      <div className="border border-neutral-200 rounded-lg overflow-hidden">
        {children}
      </div>
    </section>
  );
}

function Th({ children, right }: { children: React.ReactNode; right?: boolean }) {
  return (
    <th className={`px-4 py-3 text-left text-xs font-semibold text-neutral-900 bg-neutral-50 border-b border-neutral-200 ${right ? "text-right" : ""}`}>
      {children}
    </th>
  );
}

function Td({ children, mono, right, bold }: { children?: React.ReactNode; mono?: boolean; right?: boolean; bold?: boolean }) {
  return (
    <td className={`px-4 py-3 text-sm border-b border-neutral-100 last:border-0 ${mono ? "font-mono" : ""} ${right ? "text-right" : ""} ${bold ? "font-semibold text-neutral-900" : "text-neutral-700"}`}>
      {children}
    </td>
  );
}

function TotalRow({ children }: { children: React.ReactNode }) {
  return (
    <tr className="bg-neutral-50 border-t border-neutral-200">
      {children}
    </tr>
  );
}

export default function PulseNumbersPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 py-12">

      {/* Header */}
      <div className="mb-12 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Financial model · PULSE + VITA · v3.0</p>
        <h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          Core Financial Tables
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          Stabilized monthly projections, operating cost breakdown, revenue mix, and sensitivity analysis.
        </p>
      </div>

      {/* Revenue Streams */}
      <TableSection title="Revenue Streams (Monthly, Stabilized)">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Revenue stream</Th>
              <Th>Volume</Th>
              <Th right>Price per unit</Th>
              <Th right>Monthly (USD)</Th>
              <Th right>Monthly (IDR)</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { stream: "Traditional Gym", volume: "400 members", price: "$130/month", usd: "52,000", idr: "889,200,000" },
              { stream: "HIIT Class Studio", volume: "180 sessions × 14 pax", price: "$18/session", usd: "45,360", idr: "775,656,000" },
              { stream: "Longevity Clinic", volume: "60 consultations", price: "$250 avg", usd: "15,000", idr: "256,500,000" },
              { stream: "Spa & Recovery", volume: "220 treatments", price: "$32 avg", usd: "7,040", idr: "120,384,000" },
              { stream: "Pool & Spa Entry", volume: "280 passes", price: "$18 each", usd: "5,040", idr: "86,184,000" },
              { stream: "Personal Training", volume: "240 sessions", price: "$50/session", usd: "12,000", idr: "205,200,000" },
              { stream: "F&B / Restaurant", volume: "Scaled ops", price: "~$38k turnover", usd: "38,000", idr: "649,800,000" },
            ].map((row) => (
              <tr key={row.stream} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.stream}</Td>
                <Td>{row.volume}</Td>
                <Td mono right>{row.price}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.idr}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total monthly</Td>
              <Td></Td>
              <Td right></Td>
              <Td mono right bold>174,440</Td>
              <Td mono right bold>2,982,924,000</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total annual</Td>
              <Td></Td>
              <Td right></Td>
              <Td mono right bold>2,093,280</Td>
              <Td mono right bold>35,795,088,000</Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Revenue Mix */}
      <TableSection title="Revenue Mix">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Stream</Th>
              <Th right>Monthly (USD)</Th>
              <Th right>% of gross revenue</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { stream: "Traditional Gym", usd: "52,000", pct: "29.8%" },
              { stream: "HIIT Class Studio", usd: "45,360", pct: "26.0%" },
              { stream: "F&B / Restaurant", usd: "38,000", pct: "21.8%" },
              { stream: "Longevity Clinic", usd: "15,000", pct: "8.6%" },
              { stream: "Personal Training", usd: "12,000", pct: "6.9%" },
              { stream: "Spa & Recovery", usd: "7,040", pct: "4.0%" },
              { stream: "Pool & Spa Entry", usd: "5,040", pct: "2.9%" },
            ].map((row) => (
              <tr key={row.stream} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.stream}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.pct}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total</Td>
              <Td mono right bold>174,440</Td>
              <Td mono right bold>100.0%</Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Operating Expenses */}
      <TableSection title="Operating Expenses (Monthly)">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Category</Th>
              <Th right>Monthly (USD)</Th>
              <Th right>Monthly (IDR)</Th>
              <Th right>% of revenue</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: "Staffing & Salaries", usd: "52,000", idr: "889,200,000", pct: "29.8%" },
              { cat: "COGS (F&B)", usd: "12,540", idr: "214,434,000", pct: "7.2%" },
              { cat: "Utilities & Maintenance", usd: "9,500", idr: "162,450,000", pct: "5.4%" },
              { cat: "Marketing & Admin", usd: "12,000", idr: "205,200,000", pct: "6.9%" },
              { cat: "Equipment Maintenance Reserve", usd: "4,500", idr: "76,950,000", pct: "2.6%" },
              { cat: "Clinic & Spa Supplies", usd: "3,500", idr: "59,850,000", pct: "2.0%" },
              { cat: "Pre-opening Amortization", usd: "3,500", idr: "59,850,000", pct: "2.0%" },
              { cat: "Member Retention Programs", usd: "3,200", idr: "54,720,000", pct: "1.8%" },
              { cat: "Operational Contingency", usd: "3,200", idr: "54,720,000", pct: "1.8%" },
              { cat: "Insurance & Licenses", usd: "2,500", idr: "42,750,000", pct: "1.4%" },
              { cat: "Technology & Systems", usd: "2,500", idr: "42,750,000", pct: "1.4%" },
              { cat: "Professional Services", usd: "2,200", idr: "37,620,000", pct: "1.3%" },
            ].map((row) => (
              <tr key={row.cat} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.cat}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.idr}</Td>
                <Td mono right>{row.pct}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total monthly OPEX</Td>
              <Td mono right bold>111,140</Td>
              <Td mono right bold>1,900,494,000</Td>
              <Td mono right bold>63.7%</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>EBITDA</Td>
              <Td mono right bold>63,300</Td>
              <Td mono right bold>1,082,430,000</Td>
              <Td mono right bold>36.3%</Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Sensitivity Analysis */}
      <TableSection title="Sensitivity Analysis">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Scenario</Th>
              <Th right>vs. plan</Th>
              <Th right>Monthly rev. (USD)</Th>
              <Th right>Annual EBITDA (USD)</Th>
              <Th right>ROI post-tax</Th>
              <Th right>Payback</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { scenario: "Base case", pct: "100%", rev: "174,440", ebitda: "760,000", roi: "37.4%", payback: "2.7 years", highlight: true },
              { scenario: "Mild underperformance", pct: "85%", rev: "148,274", ebitda: "573,000", roi: "27.6%", payback: "3.6 years" },
              { scenario: "Moderate underperformance", pct: "70%", rev: "122,108", ebitda: "398,000", roi: "18.2%", payback: "5.5 years" },
              { scenario: "Severe underperformance", pct: "55%", rev: "95,942", ebitda: "222,000", roi: "9.1%", payback: "11.0 years" },
              { scenario: "Break-even", pct: "~45%", rev: "78,498", ebitda: "129,000", roi: "~2%", payback: "N/A" },
            ].map((row) => (
              <tr key={row.scenario} className={`transition-colors ${row.highlight ? "bg-neutral-50" : "hover:bg-neutral-50"}`}>
                <Td bold={row.highlight}>{row.scenario}</Td>
                <Td mono right bold={row.highlight}>{row.pct}</Td>
                <Td mono right bold={row.highlight}>{row.rev}</Td>
                <Td mono right bold={row.highlight}>{row.ebitda}</Td>
                <Td mono right bold={row.highlight}>{row.roi}</Td>
                <Td mono right bold={row.highlight}>{row.payback}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableSection>

    </div>
  );
}
