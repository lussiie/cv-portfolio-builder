import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  LayoutTemplate,
  Play,
  Sparkles,
  Users,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Easy CV Builder",
    description:
      "Create your resume step by step with a simple and powerful editor.",
    icon: FileText,
  },
  {
    title: "Professional Templates",
    description:
      "Choose modern layouts designed to highlight your skills and experience.",
    icon: LayoutTemplate,
  },
  {
    title: "Personal Portfolio",
    description:
      "Create a shareable professional page for recruiters and employers.",
    icon: Users,
  },
];

const steps = [
  "Create your account",
  "Build and customize your CV",
  "Share your professional profile",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
        <nav className="sticky top-4 z-10 rounded-full border border-slate-200/80 bg-white/90 px-5 py-3 shadow-sm backdrop-blur sm:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="text-base font-semibold text-slate-900">CV Builder</p>
                <p className="text-xs text-slate-500">Premium resume studio</p>
              </div>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <Link
                href="/login"
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Create CV
              </Link>
            </div>
          </div>
        </nav>

        <section className="grid items-center gap-10 px-2 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-0 lg:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
              <Sparkles className="h-4 w-4" />
              Premium CV Builder
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Create a professional CV that gets you noticed
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Build a modern resume and personal portfolio with an easy
              step-by-step editor. Customize your design, showcase your
              experience, and share your professional profile.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Create your CV
                <ArrowRight className="h-4 w-4" />
              </Link>
             
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-blue-100/70 blur-3xl" />
            <div className="relative rounded-[36px] border border-slate-200 bg-white p-4 shadow-[0_25px_80px_-25px_rgba(15,23,42,0.3)] sm:p-6">
              <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
                        Resume Preview
                      </p>
                      <h2 className="mt-1 text-xl font-semibold text-slate-900">
                        Alex Morgan
                      </h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                      AM
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl bg-slate-900 p-4 text-white">
                    <p className="text-sm font-semibold text-blue-300">
                      Product Designer
                    </p>
                    <p className="mt-2 text-sm text-slate-300">
                      Crafting intuitive digital experiences for ambitious teams.
                    </p>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <CheckCircle2 className="h-4 w-4 text-blue-600" />
                      Skills
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "UX Strategy",
                        "UI Design",
                        "React",
                        "Leadership",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
                      <Briefcase className="h-4 w-4 text-blue-600" />
                      Experience
                    </div>
                    <div className="mt-3 space-y-3">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <p className="text-sm font-semibold text-slate-900">
                          Senior Product Designer
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Northstar Studio • 2022 — Present
                        </p>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                        <p className="text-sm font-semibold text-slate-900">
                          UI Designer
                        </p>
                        <p className="mt-1 text-sm text-slate-600">
                          Bright Labs • 2019 — 2022
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-6 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className={`rounded-[24px] border border-slate-200 p-6 transition hover:-translate-y-1 hover:shadow-lg ${
                    index === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              How it works
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
              A polished path from idea to professional profile
            </h2>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step}
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {index === 0 &&
                    "Sign up in minutes and unlock a modern workspace tailored for your career story."}
                  {index === 1 &&
                    "Add your experience, skills, and portfolio content with guided sections."}
                  {index === 2 &&
                    "Share your polished profile with recruiters, employers, and collaborators."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-[36px] bg-gradient-to-r from-blue-600 to-slate-900 p-8 text-white shadow-[0_25px_80px_-25px_rgba(37,99,235,0.7)] sm:p-10 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-100">
                Ready to build?
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Ready to build your professional future?
              </h2>
              <p className="mt-3 text-base leading-7 text-blue-50/90">
                Create a resume and portfolio that speaks with clarity, confidence, and modern polish.
              </p>
            </div>

            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Start Building Now
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}