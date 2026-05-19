const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8000";

type RegisterPayload = {
  email?: unknown;
  name?: unknown;
  password?: unknown;
};

function isFilledString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

async function readJson(response: Response) {
  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const payload = (await request.json()) as RegisterPayload;

  if (
    !isFilledString(payload.name) ||
    !isFilledString(payload.email) ||
    !isFilledString(payload.password)
  ) {
    return Response.json(
      { detail: "Name, email, and password are required." },
      { status: 400 },
    );
  }

  try {
    const response = await fetch(`${API_BASE_URL}/auth/register`, {
      body: JSON.stringify({
        email: payload.email.trim(),
        name: payload.name.trim(),
        password: payload.password,
      }),
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const data = await readJson(response);

    return Response.json(data ?? {}, {
      status: response.status,
      statusText: response.statusText,
    });
  } catch {
    return Response.json(
      {
        detail:
          "Could not reach the auth server. Make sure it is running on localhost:8000.",
      },
      { status: 502 },
    );
  }
}
