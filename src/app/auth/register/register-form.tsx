"use client";

import Link from "next/link";
import { useActionState } from "react";
import { registerUser, type RegisterState } from "../actions";

const initialState: RegisterState = {
  ok: false,
};

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(
    registerUser,
    initialState,
  );

  return (
    <>
      <form action={formAction} className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-medium text-main-700">Full name</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            defaultValue={state.fields?.name}
            name="name"
            placeholder="Jane Founder"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Email address</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            defaultValue={state.fields?.email}
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Password</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            defaultValue={state.fields?.password}
            minLength={8}
            name="password"
            placeholder="Create password"
            required
            type="password"
          />
        </label>

        {state.error ? (
          <p className="rounded-lg bg-danger-50 px-4 py-3 text-sm font-medium text-danger-800">
            {state.error}
          </p>
        ) : null}

        {state.message ? (
          <div className="rounded-lg bg-success-50 px-4 py-3 text-sm font-medium text-success-800">
            <p>{state.message}</p>
            <Link
              className="mt-2 inline-block font-semibold text-success-900"
              href="/auth/verify-email"
            >
              Verify email
            </Link>
          </div>
        ) : null}

        <button
          className="w-full rounded-full bg-primary-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/15 transition hover:bg-primary-800 disabled:cursor-not-allowed disabled:bg-primary-400"
          disabled={isPending}
        >
          {isPending ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </>
  );
}
