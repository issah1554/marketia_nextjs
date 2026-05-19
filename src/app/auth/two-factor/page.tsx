import Link from "next/link";

export default function TwoFactorPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        Two-factor verification
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Enter your 2FA code
      </h1>
      <p className="mt-3 text-sm leading-6 text-main-600">
        Confirm the one-time code sent to your trusted device or email before
        opening your workspace.
      </p>
      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">
            Verification code
          </span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 text-center text-lg font-semibold tracking-[0.35em] outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            inputMode="numeric"
            maxLength={6}
            placeholder="000000"
            type="text"
          />
        </label>
        <button className="w-full rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:bg-primary-800">
          Verify Code
        </button>
      </form>
      <div className="mt-5 flex flex-col items-center gap-3 text-sm">
        <button className="font-semibold text-primary-700 hover:text-primary-800">
          Resend code
        </button>
        <Link className="font-semibold text-primary-700" href="/auth/login">
          Back to login
        </Link>
      </div>
    </div>
  );
}
