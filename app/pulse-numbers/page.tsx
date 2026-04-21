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
        <p className="text-sm text-neutral-700 mb-4">Financial model · PULSE + VITA · v6.0</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">
          Core Financial Tables
        </h1>
        <p className="text-base text-neutral-700 leading-relaxed max-w-xl">
          Stabilized monthly projections, operating cost breakdown, revenue mix, and sensitivity analysis. Gym at $80/month, F&B at $24k, Longevity at $12.5k. Includes full landowner cost (Option C₃).
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
      <TableSection title="Operating Expenses (Monthly) – incl. landowner cost (Option C₃)">
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
              { cat: "Land Rent (2% fixed, Option C₃)", idr: "23,333,333", usd: "1,365", pct: "1.0%" },
              { cat: "Land Profit Share (5% of EBITDA)", idr: "42,524,533", usd: "2,487", pct: "1.8%" },
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
              <Td mono right bold>1,550,807,866</Td>
              <Td mono right bold>90,691</Td>
              <Td mono right bold>65.7%</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>EBITDA</Td>
              <Td mono right bold>807,966,134</Td>
              <Td mono right bold>47,249</Td>
              <Td mono right bold>34.3%</Td>
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
              { metric: "(–) Total OpEx (incl. landowner)", usd: "90,691", idrM: "1,550,807,866", idrA: "18,609,694,392" },
              { metric: "EBITDA Margin", usd: "34.3%", idrM: "34.3%", idrA: "34.3%" },
              { metric: "(–) Capital Reserve (15%)", usd: "7,087", idrM: "121,194,920", idrA: "1,454,339,041" },
              { metric: "Distributable Pre-tax", usd: "40,162", idrM: "686,771,214", idrA: "8,241,254,567" },
              { metric: "(–) Corporate Tax (22%)", usd: "8,836", idrM: "151,089,667", idrA: "1,813,076,005" },
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
              <Td mono right bold>47,249</Td>
              <Td mono right bold>807,966,134</Td>
              <Td mono right bold>9,695,593,608</Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Net Profit (after tax)</Td>
              <Td mono right bold>31,326</Td>
              <Td mono right bold>535,681,547</Td>
              <Td mono right bold>6,428,178,562</Td>
            </TotalRow>
          </tbody>
        </table>
      </TableSection>

      {/* Landowner Payout Summary */}
      <TableSection title="Landowner Payout Summary (Option C₃)">
        <table className="w-full">
          <thead>
            <tr>
              <Th>Component</Th>
              <Th right>Monthly (IDR)</Th>
              <Th right>Annual (IDR)</Th>
              <Th right>Annual (USD)</Th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-neutral-50 transition-colors">
              <Td>Fixed land rent (2%)</Td>
              <Td mono right>23,333,333</Td>
              <Td mono right>280,000,000</Td>
              <Td mono right>16,374</Td>
            </tr>
            <tr className="hover:bg-neutral-50 transition-colors">
              <Td>EBITDA share (5%)</Td>
              <Td mono right>42,524,533</Td>
              <Td mono right>510,294,400</Td>
              <Td mono right>29,842</Td>
            </tr>
            <TotalRow>
              <Td bold>Total to landowner</Td>
              <Td mono right bold>65,857,866</Td>
              <Td mono right bold>790,294,400</Td>
              <Td mono right bold>46,216</Td>
            </TotalRow>
            <tr className="hover:bg-neutral-50 transition-colors">
              <Td>vs. neighbor 2% benchmark</Td>
              <Td mono right></Td>
              <Td mono right>280,000,000</Td>
              <Td mono right></Td>
            </tr>
            <TotalRow>
              <Td bold>Multiple over market</Td>
              <Td mono right></Td>
              <Td mono right></Td>
              <Td mono right bold>2.8x</Td>
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
              { scenario: "Base case", pct: "100%", rev: "137,940", ebitda: "566,988", roi: "21.0%", payback: "3.6 years", highlight: true },
              { scenario: "Mild underperformance", pct: "85%", rev: "117,249", ebitda: "395,000", roi: "14.0%", payback: "5.4 years" },
              { scenario: "Moderate underperformance", pct: "70%", rev: "96,558", ebitda: "240,000", roi: "7.7%", payback: "11.0 years" },
              { scenario: "Severe underperformance", pct: "55%", rev: "75,867", ebitda: "95,000", roi: "2.3%", payback: "30+ years" },
              { scenario: "Break-even", pct: "~45%", rev: "62,000", ebitda: "~10,000", roi: "~0%", payback: "N/A" },
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
              { metric: "Annual EBITDA (stabilized)", value: "$566,988" },
              { metric: "Annual Net Profit (post-tax)", value: "$375,912" },
              { metric: "Cash-on-Cash Return", value: "21.0% annually", bold: true },
              { metric: "Payback Period (stabilized)", value: "3.6 years", bold: true },
              { metric: "Realistic Payback (incl. ramp-up)", value: "~5.3 years", bold: true },
              { metric: "10-Year IRR", value: "~21%", bold: true },
              { metric: "Year 10 Exit Value (4x EBITDA)", value: "$2,268,000" },
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
              { year: "Year 1", cf: "51,000", cumulative: "–1,739,000" },
              { year: "Year 2", cf: "132,000", cumulative: "–1,607,000" },
              { year: "Year 3", cf: "211,000", cumulative: "–1,396,000" },
              { year: "Year 4", cf: "282,000", cumulative: "–1,114,000" },
              { year: "Year 5", cf: "282,000", cumulative: "–832,000" },
              { year: "Year 6", cf: "282,000", cumulative: "–550,000" },
              { year: "Year 7", cf: "282,000", cumulative: "–268,000" },
              { year: "Year 8", cf: "282,000", cumulative: "14,000" },
              { year: "Year 9", cf: "282,000", cumulative: "296,000" },
              { year: "Year 10 (cash flow)", cf: "282,000", cumulative: "578,000" },
              { year: "Year 10 (exit at 4x EBITDA × 75%)", cf: "1,701,000", cumulative: "2,279,000" },
            ].map((row) => (
              <tr key={row.year} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.year}</Td>
                <Td mono right>{row.cf}</Td>
                <Td mono right>{row.cumulative}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total cash returned</Td>
              <Td mono right bold>4,069,000</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total multiple</Td>
              <Td mono right bold>2.27x</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>10-year IRR</Td>
              <Td mono right bold>~21%</Td>
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
              { year: "Year 1", cf: "–725,000 (Round 2) + 37,000", cumulative: "–1,173,000" },
              { year: "Year 2", cf: "–580,000 (Round 3) + 97,000", cumulative: "–1,656,000" },
              { year: "Year 3", cf: "155,000", cumulative: "–1,501,000" },
              { year: "Year 4", cf: "207,000", cumulative: "–1,294,000" },
              { year: "Year 5", cf: "207,000", cumulative: "–1,087,000" },
              { year: "Year 6", cf: "207,000", cumulative: "–880,000" },
              { year: "Year 7", cf: "207,000", cumulative: "–673,000" },
              { year: "Year 8", cf: "207,000", cumulative: "–466,000" },
              { year: "Year 9", cf: "207,000", cumulative: "–259,000" },
              { year: "Year 10 (cash flow)", cf: "207,000", cumulative: "–52,000" },
              { year: "Year 10 (exit at 4x EBITDA × 55%)", cf: "1,247,000", cumulative: "1,195,000" },
            ].map((row) => (
              <tr key={row.year} className="hover:bg-neutral-50 transition-colors">
                <Td>{row.year}</Td>
                <Td mono right>{row.cf}</Td>
                <Td mono right>{row.cumulative}</Td>
              </tr>
            ))}
            <TotalRow>
              <Td bold>Total cash returned</Td>
              <Td mono right bold>2,985,000</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>Total multiple</Td>
              <Td mono right bold>1.67x</Td>
              <Td></Td>
            </TotalRow>
            <TotalRow>
              <Td bold>10-year IRR</Td>
              <Td mono right bold>~15%</Td>
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
              { metric: "Total cash returned", a: "4,069,000", b: "2,985,000" },
              { metric: "Total multiple", a: "2.27x", b: "1.67x" },
              { metric: "10-year IRR", a: "21%", b: "15%", bold: true },
              { metric: "Annual cash-on-cash (stabilized)", a: "21.0%", b: "15.4%" },
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
