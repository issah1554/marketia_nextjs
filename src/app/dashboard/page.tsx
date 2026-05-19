import Link from "next/link";

const userMetrics = [
  ["Best market", "Nairobi East"],
  ["Opportunity score", "82/100"],
  ["Risk level", "Low"],
  ["Next action", "Validate pricing"],
];

const actionPlan = [
  "Survey 40 target customers in the top two zones.",
  "Compare three competitor price bands before launch.",
  "Pilot the subscription bundle for 30 days.",
];

export default function UserDashboard() {
  return (
    <main className="min-h-screen text-main-900">
      <header className="px-4 py-4 md:px-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link className="flex items-center gap-3" href="/">
            <div className="grid size-10 place-items-center rounded-full bg-primary-700 text-sm font-black text-white shadow-lg shadow-primary-900/10">
              M
            </div>
            <div>
              <p className="font-semibold text-main-950">Marketia</p>
              <p className="text-xs text-main-500">User dashboard</p>
            </div>
          </Link>
          <Link
            className="rounded-full border border-main-300 bg-main-0/80 px-4 py-2 text-sm font-semibold text-main-800 shadow-sm hover:bg-main-0"
            href="/auth/login"
          >
            Sign Out
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl space-y-6 px-4 py-6 md:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
            Public user dashboard
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-main-950">
            Your market readiness summary
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-main-600">
            A simplified business-owner view focused on recommended markets,
            opportunity signals, risks, and next actions.
          </p>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {userMetrics.map(([label, value]) => (
            <article
              className="rounded-lg border border-main-200/80 bg-main-0/85 p-5 shadow-lg shadow-main-900/5 backdrop-blur"
              key={label}
            >
              <p className="text-sm text-main-500">{label}</p>
              <p className="mt-3 text-2xl font-semibold text-main-950">{value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg border border-main-200/80 bg-main-0/85 p-5 shadow-lg shadow-main-900/5 backdrop-blur">
            <h2 className="text-lg font-semibold text-main-950">
              Recommended market profile
            </h2>
            <div className="mt-5 space-y-4">
              {["Demand growth", "Customer fit", "Competition gap"].map((item, index) => (
                <div key={item}>
                  <div className="mb-2 flex justify-between text-sm">
                    <span className="font-medium text-main-800">{item}</span>
                    <span className="text-main-500">{[88, 81, 73][index]}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-main-100">
                    <div
                      className="h-2 rounded-full bg-primary-600"
                      style={{ width: `${[88, 81, 73][index]}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-lg border border-main-200/80 bg-main-0/85 p-5 shadow-lg shadow-main-900/5 backdrop-blur">
            <h2 className="text-lg font-semibold text-main-950">Next action plan</h2>
            <ol className="mt-4 space-y-3">
              {actionPlan.map((item, index) => (
                <li className="flex gap-3 rounded-lg bg-main-50 p-4 text-sm text-main-700" key={item}>
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-primary-100 text-xs font-semibold text-primary-800">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ol>
          </article>
        </section>
      </section>
    </main>
  );
}
