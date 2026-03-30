"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "./actions";

const initialState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full bg-black text-white p-2 rounded-md hover:bg-neutral-800 transition-colors disabled:opacity-50"
    >
      {pending ? "Verifying..." : "Enter"}
    </button>
  );
}

export default function LoginPage() {
  const [state, formAction] = useActionState(login, initialState);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl border border-neutral-200 shadow-sm">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Access</h1>

        <form action={formAction} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-neutral-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border rounded-md p-2 bg-neutral-50 border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black/10"
              placeholder="••••••••"
            />
          </div>

          {state?.message && (
            <p className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
              {state.message}
            </p>
          )}

          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
