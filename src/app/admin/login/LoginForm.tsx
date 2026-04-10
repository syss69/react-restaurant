"use client";

import { useActionState } from "react";
import { loginAction, type LoginState } from "../actions";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    null as LoginState
  );

  return (
    <form action={formAction} className="mt-8 space-y-4">
      <div>
        <label htmlFor="password" className="sr-only">
          Mot de passe
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          placeholder="Mot de passe"
          className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-500"
        />
      </div>
      {state?.message && (
        <p className="text-sm text-red-400" role="alert">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-white py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200 disabled:opacity-50"
      >
        {isPending ? "Connexion…" : "Se connecter"}
      </button>
    </form>
  );
}
