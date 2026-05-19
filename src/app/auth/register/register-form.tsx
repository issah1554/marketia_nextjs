"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

type FormFields = {
  email: string;
  name: string;
  password: string;
};

type RegisterResponse = {
  detail?: string;
  message?: string;
};

const AUTH_API_URL = "http://127.0.0.1:8000";

export default function RegisterForm() {
  const [fields, setFields] = useState<FormFields>({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");
    setIsPending(true);

    try {
      const response = await fetch(`${AUTH_API_URL}/auth/register`, {
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const data = (await response.json()) as RegisterResponse;

      if (!response.ok) {
        setError(data.detail ?? data.message ?? "Registration failed.");
        return;
      }

      setMessage(
        data.message ??
          "Account created. Check your email for a verification token before logging in.",
      );
      setFields({ email: "", name: "", password: "" });
    } catch {
      setError(
        "Could not reach the auth server. Check FastAPI and CORS, then try again.",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Full name</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            name="name"
            onChange={(event) =>
              setFields((current) => ({
                ...current,
                name: event.target.value,
              }))
            }
            placeholder="Jane Founder"
            required
            type="text"
            value={fields.name}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Email address</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            name="email"
            onChange={(event) =>
              setFields((current) => ({
                ...current,
                email: event.target.value,
              }))
            }
            placeholder="you@example.com"
            required
            type="email"
            value={fields.email}
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-main-700">Password</span>
          <input
            className="mt-2 w-full rounded-full border border-main-200 bg-main-50 px-4 py-3 outline-none ring-primary-300 transition focus:border-primary-300 focus:bg-main-0 focus:ring-2"
            minLength={8}
            name="password"
            onChange={(event) =>
              setFields((current) => ({
                ...current,
                password: event.target.value,
              }))
            }
            placeholder="Create password"
            required
            type="password"
            value={fields.password}
          />
        </label>

        {error ? (
          <p className="rounded-lg bg-danger-50 px-4 py-3 text-sm font-medium text-danger-800">
            {error}
          </p>
        ) : null}

        {message ? (
          <div className="rounded-lg bg-success-50 px-4 py-3 text-sm font-medium text-success-800">
            <p>{message}</p>
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
