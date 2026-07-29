import Link from "next/link";
import { Briefcase } from "lucide-react";
import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

const openRoles = [
  { title: "Customer Support Specialist", type: "Remote · Full-time" },
  { title: "Product Photographer", type: "Lagos · Contract" },
  { title: "Frontend Engineer", type: "Remote · Full-time" },
];

export default function CareersPage() {
  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-6">
  <BackButton />

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
    Careers
  </span>
</div>

        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Help us build a better way to shop
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
          We&apos;re a small, remote-friendly team obsessed with quality — in the
          products we carry and the experience we build. If that resonates,
          we&apos;d like to hear from you.
        </p>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Open Roles</h2>

          <div className="mt-6 space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/15 dark:text-indigo-400">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 dark:text-white">{role.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{role.type}</p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="rounded-full border border-slate-200 px-5 py-2 text-sm font-medium transition hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900"
                >
                  Apply
                </Link>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
            Don&apos;t see a fit?{" "}
            <Link href="/contact" className="font-semibold text-indigo-600 hover:underline dark:text-indigo-400">
              Reach out anyway
            </Link>{" "}
            — we're always open to meeting people who care about what we're building.
          </p>
        </div>
      </Container>
    </section>
  );
}