import Link from "next/link";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Admin — Connexion | Mitaka",
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 shadow-xl">
        <h1 className="font-serif text-2xl font-bold text-white">
          Administration
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Connexion réservée au personnel.
        </p>
        <LoginForm />
        <p className="mt-8 text-center text-xs text-zinc-500">
          <Link href="/" className="text-zinc-400 hover:text-white">
            ← Retour au site
          </Link>
        </p>
      </div>
    </div>
  );
}
