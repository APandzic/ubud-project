function TableSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-6">{title}</h2>
      <div className="border border-neutral-200 rounded-lg overflow-x-auto">
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
    <div className="max-w-3xl mx-auto px-4 py-8 md:px-8 md:py-12">

      {/* Header */}
      <div className="mb-12 pb-10 border-b border-neutral-200">
        <p className="text-sm text-neutral-700 mb-4">Financial model · PULSE + VITA · v5.0</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          Core Financial Tables
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          Stabilized monthly projections, operating cost breakdown, revenue mix, and sensitivity analysis. Gym at $80/month, F&B at $24k, Longevity at $12.5k. EBITDA target: 37%.
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
              { stream: "Traditional Gym (Pulse)", volume: "400 members", price: "$80/month", usd: "32,000", idr: "547,200,000" },
              { stream: "HIIT Class Studio", volume: "180 sessions × 14 pax", price: "$18/session", usd: "45,360", idr: "775,656,000" },
              { stream: "Longevity Clinic (Vita)", volume: "50 consultations", price: "$250 avg", usd: "12,500", idr: "213,750,000" },
              { stream: "Spa & Recovery", volume: "220 treatments", price: "$32 avg", usd: "7,040", idr: "120,384,000" },
              { stream: "Pool & Spa Entry", volume: "280 passes", price: "$18 each", usd: "5,040", idr: "86,184,000" },
              { stream: "Personal Training", volume: "240 sessions", price: "$50/session", usd: "12,000", idr: "205,200,000" },
              { stream: "F&B / Restaurant", volume: "Scaled ops", price: "~$24k turnover", usd: "24,000", idr: "410,400,000" },
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
              <Td mono right bold>137,940</Td>
              <Td mono right bold>2,358,774,000</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total annual</Td>
              <Td></Td>
              <Td right></Td>
              <Td mono right bold>1,655,280</Td>
              <Td mono right bold>28,305,288,000</Td>
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
              { stream: "HIIT Class Studio", usd: "45,360", pct: "32.9%" },
              { stream: "Traditional Gym", usd: "32,000", pct: "23.2%" },
              { stream: "F&B / Restaurant", usd: "24,000", pct: "17.4%" },
              { stream: "Longevity Clinic", usd: "12,500", pct: "9.1%" },
              { stream: "Personal Training", usd: "12,000", pct: "8.7%" },
              { stream: "Spa & Recovery", usd: "7,040", pct: "5.1%" },
              { stream: "Pool & Spa Entry", usd: "5,040", pct: "3.6%" },
            ].map((row) => (
              <tr key={row.stream} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.stream}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.pct}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total</Td>
              <Td mono right bold>137,940</Td>
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
              <Th right>Monthly (IDR)</Th>
              <Th right>Monthly (USD)</Th>
              <Th right>% of revenue</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { cat: "Staffing & Salaries", idr: "889,200,000", usd: "52,000", pct: "37.7%" },
              { cat: "COGS (F&B)", idr: "123,000,000", usd: "7,193", pct: "5.2%" },
              { cat: "Clinic & Spa Supplies", idr: "40,000,000", usd: "2,339", pct: "1.7%" },
              { cat: "Utilities & Maintenance", idr: "100,000,000", usd: "5,848", pct: "4.2%" },
              { cat: "Marketing & Admin", idr: "100,000,000", usd: "5,848", pct: "4.2%" },
              { cat: "Insurance & Licenses", idr: "42,750,000", usd: "2,500", pct: "1.8%" },
              { cat: "Technology & Systems", idr: "10,000,000", usd: "585", pct: "0.4%" },
              { cat: "Professional Services", idr: "20,000,000", usd: "1,170", pct: "0.8%" },
              { cat: "Equipment Maintenance Reserve", idr: "40,000,000", usd: "2,339", pct: "1.7%" },
              { cat: "Pre-opening Amortization", idr: "40,000,000", usd: "2,339", pct: "1.7%" },
              { cat: "Member Retention Programs", idr: "40,000,000", usd: "2,339", pct: "1.7%" },
              { cat: "Operational Contingency", idr: "40,000,000", usd: "2,339", pct: "1.7%" },
            ].map((row) => (
              <tr key={row.cat} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.cat}</Td>
                <Td mono right>{row.idr}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.pct}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total monthly OPEX</Td>
              <Td mono right bold>1,484,950,000</Td>
              <Td mono right bold>86,839</Td>
              <Td mono right bold>63.0%</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>EBITDA</Td>
              <Td mono right bold>873,824,000</Td>
              <Td mono right bold>51,101</Td>
              <Td mono right bold>37.0%</Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Annual Financial Summary */}
      <TableSection title="Annual Financial Summary">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th right>Monthly (USD)</Th>
              <Th right>Monthly (IDR)</Th>
              <Th right>Annual (IDR)</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: "Gross Revenue", usd: "137,940", idrM: "2,358,774,000", idrA: "28,305,288,000" },
              { metric: "(–) Total OpEx", usd: "86,839", idrM: "1,484,950,000", idrA: "17,819,400,000" },
              { metric: "EBITDA Margin", usd: "37.0%", idrM: "37.0%", idrA: "37.0%" },
              { metric: "(–) Capital Reserve (15%)", usd: "7,665", idrM: "131,073,600", idrA: "1,572,883,200" },
              { metric: "Distributable Pre-tax", usd: "43,436", idrM: "742,750,400", idrA: "8,913,004,800" },
              { metric: "(–) Corporate Tax (22%)", usd: "9,556", idrM: "163,405,088", idrA: "1,960,861,056" },
            ].map((row) => (
              <tr key={row.metric} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.metric}</Td>
                <Td mono right>{row.usd}</Td>
                <Td mono right>{row.idrM}</Td>
                <Td mono right>{row.idrA}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>EBITDA</Td>
              <Td mono right bold>51,101</Td>
              <Td mono right bold>873,824,000</Td>
              <Td mono right bold>10,485,888,000</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Net Profit (after tax)</Td>
              <Td mono right bold>33,880</Td>
              <Td mono right bold>579,345,312</Td>
              <Td mono right bold>6,952,143,744</Td>
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
              { scenario: "Base case", pct: "100%", rev: "137,940", ebitda: "613,212", roi: "30.1%", payback: "3.3 years", highlight: true },
              { scenario: "Mild underperformance", pct: "85%", rev: "117,249", ebitda: "430,000", roi: "21.1%", payback: "4.7 years" },
              { scenario: "Moderate underperformance", pct: "70%", rev: "96,558", ebitda: "270,000", roi: "13.2%", payback: "7.5 years" },
              { scenario: "Severe underperformance", pct: "55%", rev: "75,867", ebitda: "120,000", roi: "5.9%", payback: "17.0 years" },
              { scenario: "Break-even", pct: "~42%", rev: "57,900", ebitda: "~15,000", roi: "~0%", payback: "N/A" },
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

      {/* Return Profile */}
      <TableSection title="Return Profile">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th right>Value</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: "Total investment (CAPEX + working capital)", value: "$1,790,000" },
              { metric: "Annual EBITDA (stabilized)", value: "$613,212" },
              { metric: "Annual Net Profit (post-tax)", value: "$406,560" },
              { metric: "Cash-on-Cash Return", value: "30.1% annually", bold: true },
              { metric: "Payback Period (stabilized)", value: "3.3 years", bold: true },
              { metric: "Realistic Payback (incl. ramp-up)", value: "~4.8 years", bold: true },
              { metric: "10-Year IRR", value: "~23-25%", bold: true },
              { metric: "Year 10 Exit Value (4x EBITDA)", value: "$2,453,000" },
            ].map((row) => (
              <tr key={row.metric} className="hover:bg-neutral-50 transition-colors">
                <Td bold={row.bold}>{row.metric}</Td>
                <Td mono right bold={row.bold}>{row.value}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableSection>

      {/* Model A */}
      <TableSection title="Model A: Pre-Investment (75% equity for $1.79M)">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Year</Th>
              <Th right>Investor cash flow (USD)</Th>
              <Th right>Cumulative cash flow (USD)</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { year: "Year 0", cf: "–1,790,000", cumulative: "–1,790,000" },
              { year: "Year 1", cf: "55,000", cumulative: "–1,735,000" },
              { year: "Year 2", cf: "144,000", cumulative: "–1,591,000" },
              { year: "Year 3", cf: "229,000", cumulative: "–1,362,000" },
              { year: "Year 4", cf: "305,000", cumulative: "–1,057,000" },
              { year: "Year 5", cf: "305,000", cumulative: "–752,000" },
              { year: "Year 6", cf: "305,000", cumulative: "–447,000" },
              { year: "Year 7", cf: "305,000", cumulative: "–142,000" },
              { year: "Year 8", cf: "305,000", cumulative: "163,000" },
              { year: "Year 9", cf: "305,000", cumulative: "468,000" },
              { year: "Year 10 (cash flow)", cf: "305,000", cumulative: "773,000" },
              { year: "Year 10 (exit at 4x EBITDA × 75%)", cf: "1,840,000", cumulative: "2,613,000" },
            ].map((row) => (
              <tr key={row.year} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.year}</Td>
                <Td mono right>{row.cf}</Td>
                <Td mono right>{row.cumulative}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total cash returned</Td>
              <Td mono right bold>4,403,000</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total multiple</Td>
              <Td mono right bold>2.46x</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>10-year IRR</Td>
              <Td mono right bold>~23%</Td>
              <Td></Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Model B */}
      <TableSection title="Model B: Milestone-Based (55% equity for $1.79M across 3 rounds)">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Year</Th>
              <Th right>Investor cash flow (USD)</Th>
              <Th right>Cumulative cash flow (USD)</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { year: "Year 0", cf: "–485,000 (Round 1)", cumulative: "–485,000" },
              { year: "Year 1", cf: "–725,000 (Round 2) + 40,000", cumulative: "–1,170,000" },
              { year: "Year 2", cf: "–580,000 (Round 3) + 106,000", cumulative: "–1,644,000" },
              { year: "Year 3", cf: "168,000", cumulative: "–1,476,000" },
              { year: "Year 4", cf: "224,000", cumulative: "–1,252,000" },
              { year: "Year 5", cf: "224,000", cumulative: "–1,028,000" },
              { year: "Year 6", cf: "224,000", cumulative: "–804,000" },
              { year: "Year 7", cf: "224,000", cumulative: "–580,000" },
              { year: "Year 8", cf: "224,000", cumulative: "–356,000" },
              { year: "Year 9", cf: "224,000", cumulative: "–132,000" },
              { year: "Year 10 (cash flow)", cf: "224,000", cumulative: "92,000" },
              { year: "Year 10 (exit at 4x EBITDA × 55%)", cf: "1,349,000", cumulative: "1,441,000" },
            ].map((row) => (
              <tr key={row.year} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.year}</Td>
                <Td mono right>{row.cf}</Td>
                <Td mono right>{row.cumulative}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total cash returned</Td>
              <Td mono right bold>3,233,000</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total multiple</Td>
              <Td mono right bold>1.81x</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>10-year IRR</Td>
              <Td mono right bold>~17%</Td>
              <Td></Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Side-by-Side Comparison */}
      <TableSection title="Side-by-Side Comparison">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Metric</Th>
              <Th right>Model A</Th>
              <Th right>Model B</Th>
            </tr>
          </thead>
          <tbody>
            {[
              { metric: "Capital invested", a: "1,790,000", b: "1,790,000" },
              { metric: "Equity received", a: "75%", b: "55%" },
              { metric: "Total cash returned", a: "4,403,000", b: "3,233,000" },
              { metric: "Total multiple", a: "2.46x", b: "1.81x" },
              { metric: "10-year IRR", a: "23%", b: "17%", bold: true },
              { metric: "Annual cash-on-cash (stabilized)", a: "22.7%", b: "16.6%" },
            ].map((row) => (
              <tr key={row.metric} className="hover:bg-neutral-50 transition-colors">
                <Td bold={row.bold}>{row.metric}</Td>
                <Td mono right bold={row.bold}>{row.a}</Td>
                <Td mono right bold={row.bold}>{row.b}</Td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableSection>

    </div>
  );
}
