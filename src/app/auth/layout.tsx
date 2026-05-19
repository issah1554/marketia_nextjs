import Link from "next/link";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen text-main-900">
      <div className="mx-auto grid min-h-screen max-w-6xl px-4 py-6 md:px-8 lg:grid-cols-[0.9fr_1fr]">
        <section className="hidden rounded-lg border border-main-200/80 bg-main-0/75 p-8 shadow-2xl shadow-main-900/10 backdrop-blur lg:flex lg:flex-col lg:justify-between">
          <Link className="flex items-center gap-3" href="/">
            <div className="grid size-10 place-items-center rounded-full bg-primary-700 text-sm font-black text-white shadow-lg shadow-primary-900/10">
              M
            </div>
            <div>
              <p className="font-semibold text-main-950">Marketia DSS</p>
              <p className="text-xs text-main-500">Market decision support</p>
            </div>
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
              Auth module
            </p>
            <h1 className="mt-3 text-4xl font-semibold leading-tight text-main-950">
              Secure access for market analysis teams.
            </h1>
            <p className="mt-4 text-sm leading-6 text-main-600">
              Entrepreneurs, analysts, and administrators can use separate
              workspaces while sharing the same market intelligence foundation.
            </p>
          </div>
          <p className="text-xs text-main-500">Marketia DSS prototype</p>
        </section>

        <section className="flex items-center justify-center py-10 lg:pl-10">
          {children}
        </section>
      </div>
    </main>
  );
}
