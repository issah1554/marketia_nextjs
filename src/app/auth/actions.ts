"use server";

export type RegisterState = {
  error?: string;
  message?: string;
  ok: boolean;
};

const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

function getStringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

async function getErrorMessage(response: Response) {
  const fallback = `Request failed with status ${response.status}`;

  try {
    const payload: unknown = await response.json();

    if (
      payload &&
      typeof payload === "object" &&
      "message" in payload &&
      typeof payload.message === "string"
    ) {
      return payload.message;
    }

    if (
      payload &&
      typeof payload === "object" &&
      "detail" in payload &&
      typeof payload.detail === "string"
    ) {
      return payload.detail;
    }
  } catch {
    return fallback;
  }

  return fallback;
}

export async function registerUser(
  _previousState: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = getStringValue(formData, "name");
  const email = getStringValue(formData, "email");
  const password = getStringValue(formData, "password");

  if (!name || !email || !password) {
    return {
      error: "Name, email, and password are required.",
      ok: false,
    };
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      body: JSON.stringify({ name, email, password }),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (!response.ok) {
      return {
        error: await getErrorMessage(response),
        ok: false,
      };
    }

    return {
      message:
        "Account created. Check your email for a verification token before logging in.",
      ok: true,
    };
  } catch {
    return {
      error:
        "Could not reach the auth server. Make sure it is running on localhost:8000.",
      ok: false,
    };
  }
}
