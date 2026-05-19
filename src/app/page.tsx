import Link from "next/link";

const features = [
  "Market trend forecasting",
  "Customer preference analysis",
  "Competitor benchmarking",
  "Risk-aware recommendations",
];

export default function Home() {
  return (
    <main className="min-h-screen text-main-900">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-6 md:px-8">
        <header className="flex items-center justify-between rounded-full border border-main-200/80 bg-main-0/80 px-3 py-3 shadow-sm backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-full bg-primary-700 text-sm font-black text-white shadow-lg shadow-primary-900/10">
              M
            </div>
            <div>
              <p className="font-semibold text-main-950">Marketia DSS</p>
              <p className="text-xs text-main-500">Decision support for entrepreneurs</p>
            </div>
          </div>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              className="rounded-full px-3 py-2 font-medium text-main-700 hover:bg-main-100"
              href="/auth/login"
            >
              Login
            </Link>
            <Link
              className="rounded-full bg-primary-700 px-4 py-2 font-semibold text-white shadow-lg shadow-primary-900/15 hover:bg-primary-800"
              href="/dashboard"
            >
              Open Dashboard
            </Link>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-8 py-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
              Web-based market analysis
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-main-950 md:text-6xl">
              Make business decisions with clearer market evidence.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-main-600 md:text-lg">
              Analyze market data, competition, customer demand, and business
              opportunities in one focused decision support workspace.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="rounded-full bg-primary-700 px-6 py-3 text-center text-sm font-semibold text-white shadow-xl shadow-primary-900/15 hover:bg-primary-800"
                href="/auth/register"
              >
                Create Account
              </Link>
              <Link
                className="rounded-full border border-main-300 bg-main-0/70 px-6 py-3 text-center text-sm font-semibold text-main-800 shadow-sm hover:bg-main-0"
                href="/admin"
              >
                Admin Workspace
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-main-200/80 bg-main-0/85 p-5 shadow-2xl shadow-main-900/10 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-main-950">Opportunity score</p>
                <p className="text-xs text-main-500">Retail food, Nairobi</p>
              </div>
              <span className="rounded-full bg-success-100 px-3 py-1 text-xs font-semibold text-success-800">
                Strong
              </span>
            </div>
            <p className="mt-6 text-6xl font-semibold text-main-950">86</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <div className="rounded-lg bg-main-50 p-4 text-sm font-medium text-main-700" key={feature}>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
