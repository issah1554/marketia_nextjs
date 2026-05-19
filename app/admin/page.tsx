const metrics = [
  {
    label: "Market Attractiveness",
    value: "86",
    unit: "/100",
    change: "+12 pts",
    tone: "success",
  },
  {
    label: "Demand Momentum",
    value: "24.8",
    unit: "%",
    change: "YoY growth",
    tone: "info",
  },
  {
    label: "Competitive Pressure",
    value: "42",
    unit: "/100",
    change: "Moderate",
    tone: "warning",
  },
  {
    label: "Risk Exposure",
    value: "18",
    unit: "%",
    change: "-7% vs baseline",
    tone: "success",
  },
];

const trendBars = [42, 48, 45, 56, 62, 68, 74, 70, 79, 86, 83, 91];

const segments = [
  { name: "Urban professionals", score: 92, color: "bg-primary-600" },
  { name: "Price-sensitive families", score: 76, color: "bg-accent-600" },
  { name: "Small retailers", score: 68, color: "bg-warning-500" },
];

const opportunities = [
  {
    title: "Launch a subscription bundle",
    detail: "High repeat purchase intent and low direct competitor coverage.",
    confidence: "91%",
  },
  {
    title: "Target peri-urban outlets",
    detail: "Demand growth is outpacing supply by 18% in secondary zones.",
    confidence: "84%",
  },
  {
    title: "Differentiate on delivery speed",
    detail:
      "Customer sentiment shows convenience outranks price in premium clusters.",
    confidence: "79%",
  },
];

const competitors = [
  ["Northstar Foods", "Large", "Premium", "31%", "High"],
  ["Savanna Fresh", "Mid", "Value", "18%", "Medium"],
  ["MetroMart Local", "Small", "Budget", "9%", "Low"],
];

const risks = [
  { name: "Supplier volatility", level: 38 },
  { name: "Seasonal demand swings", level: 54 },
  { name: "Price competition", level: 47 },
];

export default function AdminDashboard() {
  return (
    <>
      <header className="border-b border-main-200 bg-main-0/90 px-4 py-4 backdrop-blur md:px-8">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
              Admin Decision Support System
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-main-950 md:text-3xl">
              Market Analysis Workspace
            </h1>
          </div>
          <div className="grid gap-2 sm:grid-cols-4">
            <select className="rounded-md border border-main-200 bg-main-0 px-3 py-2 text-sm outline-none ring-primary-300 focus:ring-2">
              <option>Retail food</option>
              <option>Health services</option>
              <option>Digital services</option>
            </select>
            <select className="rounded-md border border-main-200 bg-main-0 px-3 py-2 text-sm outline-none ring-primary-300 focus:ring-2">
              <option>Nairobi region</option>
              <option>Mombasa region</option>
              <option>Kisumu region</option>
            </select>
            <select className="rounded-md border border-main-200 bg-main-0 px-3 py-2 text-sm outline-none ring-primary-300 focus:ring-2">
              <option>Last 12 months</option>
              <option>Last 6 months</option>
              <option>Last quarter</option>
            </select>
            <button className="rounded-md bg-primary-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-800">
              Run Analysis
            </button>
          </div>
        </div>
      </header>

      <div className="space-y-6 px-4 py-6 md:px-8">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metrics.map((metric) => (
            <article
              className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm"
              key={metric.label}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-sm font-medium text-main-600">{metric.label}</p>
                <span
                  className={`rounded px-2 py-1 text-xs font-semibold ${
                    metric.tone === "success"
                      ? "bg-success-100 text-success-800"
                      : metric.tone === "warning"
                        ? "bg-warning-100 text-warning-800"
                        : "bg-info-100 text-info-800"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-main-950">
                {metric.value}
                <span className="text-base font-medium text-main-500">{metric.unit}</span>
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-main-950">
                  Demand Trend Forecast
                </h2>
                <p className="text-sm text-main-600">
                  Machine learning projection from sales, search, and survey signals.
                </p>
              </div>
              <span className="w-fit rounded bg-accent-100 px-2.5 py-1 text-xs font-semibold text-accent-800">
                Confidence 88%
              </span>
            </div>
            <div className="mt-6 flex h-64 items-end gap-2 border-b border-l border-main-200 px-3 pt-4">
              {trendBars.map((height, index) => (
                <div
                  className="flex flex-1 flex-col items-center gap-2"
                  key={`${height}-${index}`}
                >
                  <div
                    className="w-full rounded-t bg-primary-600"
                    style={{ height: `${height}%` }}
                    title={`Month ${index + 1}: ${height}`}
                  />
                  <span className="text-[10px] text-main-500">{index + 1}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-main-950">
              Customer Preference Segments
            </h2>
            <div className="mt-5 space-y-5">
              {segments.map((segment) => (
                <div key={segment.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-main-800">{segment.name}</span>
                    <span className="text-main-500">{segment.score}% fit</span>
                  </div>
                  <div className="h-2 rounded-full bg-main-100">
                    <div
                      className={`h-2 rounded-full ${segment.color}`}
                      style={{ width: `${segment.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-main-950">
              Recommended Decisions
            </h2>
            <div className="mt-4 space-y-3">
              {opportunities.map((item) => (
                <div
                  className="rounded-md border border-main-200 bg-main-50 p-4"
                  key={item.title}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-main-950">{item.title}</h3>
                    <span className="shrink-0 rounded bg-success-100 px-2 py-1 text-xs font-semibold text-success-800">
                      {item.confidence}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-main-600">{item.detail}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-main-950">
              Competition Snapshot
            </h2>
            <div className="mt-4 overflow-hidden rounded-md border border-main-200">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead className="bg-main-100 text-main-600">
                  <tr>
                    {["Competitor", "Scale", "Position", "Share", "Threat"].map(
                      (heading) => (
                        <th className="px-3 py-3 font-semibold" key={heading}>
                          {heading}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody className="divide-y divide-main-200">
                  {competitors.map((row) => (
                    <tr className="bg-main-0" key={row[0]}>
                      {row.map((cell) => (
                        <td className="px-3 py-3 text-main-700" key={cell}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </section>

        <section className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-main-950">Risk Monitor</h2>
            <div className="mt-5 space-y-4">
              {risks.map((risk) => (
                <div key={risk.name}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-main-800">{risk.name}</span>
                    <span className="text-main-500">{risk.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-main-100">
                    <div
                      className="h-2 rounded-full bg-warning-500"
                      style={{ width: `${risk.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-md border border-main-200 bg-main-0 p-5 shadow-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-main-950">
                  Visual Report Summary
                </h2>
                <p className="text-sm text-main-600">
                  Prepared for investor briefs and business planning reviews.
                </p>
              </div>
              <button className="w-fit rounded-md border border-primary-200 px-4 py-2 text-sm font-semibold text-primary-800 hover:bg-primary-50">
                Export Report
              </button>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Market is viable", "Niche positioning advised", "Pilot before scale"].map(
                (item) => (
                  <div className="rounded-md bg-main-50 p-4" key={item}>
                    <p className="text-sm font-semibold text-main-950">{item}</p>
                    <p className="mt-2 text-xs leading-5 text-main-600">
                      Evidence combines trend detection, preference clustering,
                      competitor benchmarking, and risk scoring.
                    </p>
                  </div>
                ),
              )}
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
