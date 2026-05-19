import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-md border border-main-200 bg-main-0 p-6 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        New account
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Create your workspace
      </h1>
      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">Full name</span>
          <input
            className="mt-2 w-full rounded-md border border-main-200 bg-main-0 px-3 py-2 outline-none ring-primary-300 focus:ring-2"
            placeholder="Jane Founder"
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Email address</span>
          <input
            className="mt-2 w-full rounded-md border border-main-200 bg-main-0 px-3 py-2 outline-none ring-primary-300 focus:ring-2"
            placeholder="you@example.com"
            type="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Password</span>
          <input
            className="mt-2 w-full rounded-md border border-main-200 bg-main-0 px-3 py-2 outline-none ring-primary-300 focus:ring-2"
            placeholder="Create password"
            type="password"
          />
        </label>
        <button className="w-full rounded-md bg-primary-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary-800">
          Create Account
        </button>
      </form>
      <p className="mt-5 text-center text-sm text-main-600">
        Already registered?{" "}
        <Link className="font-semibold text-primary-700" href="/auth/login">
          Login
        </Link>
      </p>
    </div>
  );
}
