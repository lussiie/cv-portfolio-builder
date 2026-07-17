import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-600"
        >
          CV Builder
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/dashboard"
            className="text-sm font-medium hover:text-blue-600"
          >
            Dashboard
          </Link>

          <Link
            href="/builder"
            className="text-sm font-medium hover:text-blue-600"
          >
            Builder
          </Link>

          <Link
            href="/login"
            className="text-sm font-medium hover:text-blue-600"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}