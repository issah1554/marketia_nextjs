import Link from "next/link";

export default function VerifyEmailPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        Email verification
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Verify your email
      </h1>
      <p className="mt-3 text-sm leading-6 text-main-600">
        Paste the token from your verification email to activate your Marketia
        account.
      </p>
      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">
            Verification token
          </span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="Paste email token"
            type="text"
          />
        </label>
        <button className="w-full rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:bg-primary-800">
          Verify Email
        </button>
      </form>
      <div className="mt-5 flex flex-col items-center gap-3 text-sm">
        <button className="font-semibold text-primary-700 hover:text-primary-800">
          Resend verification email
        </button>
        <Link className="font-semibold text-primary-700" href="/auth/login">
          Back to login
        </Link>
      </div>
    </div>
  );
}
