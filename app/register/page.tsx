"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/dist/client/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Registration successful!");

      router.push("/login");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-6xl flex-col overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_90px_-30px_rgba(15,23,42,0.35)] lg:flex-row">
        <div className="flex flex-1 flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-blue-700 p-8 text-white sm:p-10 lg:p-12">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
              Premium CV Builder
            </div>
            <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
              Create a portfolio that gets you hired.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-200 sm:text-base">
              Build a polished resume and personal brand with a modern, recruiter-focused experience.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/80 font-semibold text-white">
                CV
              </div>
              <div>
                <p className="text-sm font-semibold">Resume preview</p>
                <p className="text-sm text-slate-300">Clean and professional layout</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="h-2 w-3/4 rounded-full bg-white/85" />
              <div className="h-2 w-2/3 rounded-full bg-white/60" />
              <div className="h-2 w-1/2 rounded-full bg-white/40" />
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl bg-slate-950/30 p-3">
                  <div className="h-2 w-10 rounded-full bg-white/70" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-white/40" />
                </div>
                <div className="rounded-xl bg-slate-950/30 p-3">
                  <div className="h-2 w-10 rounded-full bg-white/70" />
                  <div className="mt-2 h-2 w-16 rounded-full bg-white/40" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-5">
            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-600">Start for free</p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                Create your account
              </h2>
              <p className="text-sm text-slate-500">
                Join professionals building standout portfolios in minutes.
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Username</label>
                <input
                  type="text"
                  placeholder="Choose a username"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <span>{loading ? "Creating account..." : "Create account"}</span>
              <span className="ml-2 transition group-hover:translate-x-1">→</span>
            </button>
            <div className="text-center text-sm text-slate-500">
  Already have an account?{" "}
  <Link
    href="/login"
    className="font-semibold text-blue-600 hover:text-blue-700"
  >
    Sign in
  </Link>
</div>
          </form>
        </div>
      </div>
    </div>
  );
}