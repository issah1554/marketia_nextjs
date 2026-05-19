const navItems = [
  "Dashboard",
  "Market Trends",
  "Customers",
  "Competitors",
  "Recommendations",
  "Reports",
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen bg-main-50 text-main-900">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-teal-900/20 bg-teal-900 px-4 py-5 text-neutral-100 lg:block">
          <div className="mb-8 flex items-center gap-3 px-2">
            <div className="grid size-10 place-items-center rounded-md bg-cyan-300 text-sm font-black text-teal-950">
              M
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Marketia Admin</p>
              <p className="text-xs text-neutral-300">Market intelligence</p>
            </div>
          </div>

          <nav className="space-y-1 text-sm">
            {navItems.map((item, index) => (
              <a
                className={`block rounded-md px-3 py-2 ${
                  index === 0
                    ? "bg-teal-700 text-white"
                    : "text-neutral-200 hover:bg-teal-800"
                }`}
                href="#"
                key={item}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-8 rounded-md border border-teal-700 bg-teal-950/35 p-4">
            <p className="text-xs uppercase tracking-wide text-cyan-200">Model status</p>
            <p className="mt-2 text-2xl font-semibold text-white">94.2%</p>
            <p className="mt-1 text-xs text-neutral-300">
              Forecast accuracy over the last 30 days.
            </p>
          </div>
        </aside>

        <section className="flex-1">{children}</section>
      </div>
    </main>
  );
}
