import Link from "next/link";
import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        New account
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Create your workspace
      </h1>
      <RegisterForm />
      <p className="mt-5 text-center text-sm text-main-600">
        Already registered?{" "}
        <Link className="font-semibold text-primary-700" href="/auth/login">
          Login
        </Link>
      </p>
      <p className="mt-3 text-center text-sm text-main-600">
        Have a token?{" "}
        <Link className="font-semibold text-primary-700" href="/auth/verify-email">
          Verify email
        </Link>
      </p>
    </div>
  );
}
