"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const AUTH_API_URL = "http://127.0.0.1:8000";

type VerifyEmailResponse = {
  detail?: string;
  message?: string;
};

export default function VerifyEmailForm() {
  const searchParams = useSearchParams();
  const tokenFromUrl = searchParams.get("token") ?? "";
  const [error, setError] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [message, setMessage] = useState("");
  const visibleError =
    error || (!tokenFromUrl ? "Verification token is missing from the email link." : "");

  const verifyToken = useCallback(async (verificationToken: string) => {
    const trimmedToken = verificationToken.trim();

    if (!trimmedToken) {
      setError("Verification token is required.");
      return;
    }

    setError("");
    setMessage("");
    setIsPending(true);

    try {
      const response = await fetch(
        `${AUTH_API_URL}/auth/verify-email?token=${encodeURIComponent(trimmedToken)}`,
        {
          method: "GET",
        },
      );
      const data = (await response.json()) as VerifyEmailResponse;

      if (!response.ok) {
        setError(data.detail ?? data.message ?? "Email verification failed.");
        return;
      }

      setMessage(data.message ?? "Email verified successfully. You can now log in.");
    } catch {
      setError(
        "Could not reach the auth server. Check FastAPI and CORS, then try again.",
      );
    } finally {
      setIsPending(false);
    }
  }, []);

  useEffect(() => {
    if (!tokenFromUrl) {
      return;
    }

    const timer = window.setTimeout(() => {
      void verifyToken(tokenFromUrl);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [tokenFromUrl, verifyToken]);

  return (
    <div className="w-full max-w-md rounded-lg border border-main-200/80 bg-main-0/90 p-7 shadow-2xl shadow-main-900/10 backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
        Email verification
      </p>
      <h1 className="mt-2 text-2xl font-semibold text-main-950">
        Verify your email
      </h1>
      <p className="mt-3 text-sm leading-6 text-main-600">
        We are checking the verification token from your email link.
      </p>
      <div className="mt-6 space-y-4">
        {isPending ? (
          <p className="rounded-lg bg-primary-50 px-4 py-3 text-sm font-medium text-primary-800">
            Verifying email...
          </p>
        ) : null}

        {visibleError ? (
          <p className="rounded-lg bg-danger-50 px-4 py-3 text-sm font-medium text-danger-800">
            {visibleError}
          </p>
        ) : null}

        {message ? (
          <p className="rounded-lg bg-success-50 px-4 py-3 text-sm font-medium text-success-800">
            {message}
          </p>
        ) : null}
      </div>
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
