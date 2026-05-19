import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        Welcome back
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Login to Marketia
      </h1>
      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">Email address</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Password</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="Enter password"
            type="password"
          />
        </label>
        <button className="w-full rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:bg-primary-800">
          Sign In
        </button>
      </form>
      <p className="mt-5 text-center text-sm text-main-600">
        No account?{" "}
        <Link className="font-semibold text-primary-700" href="/auth/register">
          Create one
        </Link>
      </p>
    </div>
  );
}
