import Link from "next/link";

export default function ResetPasswordPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        Reset password
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Create a new password
      </h1>
      <p className="mt-3 text-sm leading-6 text-main-600">
        Use the token from your email and choose a new password for your
        workspace.
      </p>
      <form className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">Reset token</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="Paste reset token"
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">New password</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="Create new password"
            type="password"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">
            Confirm password
          </span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            placeholder="Repeat new password"
            type="password"
          />
        </label>
        <button className="w-full rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:bg-primary-800">
          Reset Password
        </button>
      </form>
      <p className="mt-5 text-center text-sm">
        <Link className="font-semibold text-primary-700" href="/auth/login">
          Back to login
        </Link>
      </p>
    </div>
  );
}
