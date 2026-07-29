import AmbientBackground from "@/components/AmbientBackground";
import Container from "@/components/Container";
import BackButton from "@/components/BackButton";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden">
      <AmbientBackground />

      <Container className="relative py-16 lg:py-20">
        <div className="mb-8 flex flex-col gap-6">
  <BackButton />

  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-400">
    About Us
  </span>
</div>

        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Curating quality for everyday living
        </h1>

        <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
          <p>
            NovaCommerce started with a simple frustration: too many online stores
            make you choose between quality and affordability. We didn&apos;t think
            that trade-off should exist, so we built a store around a single
            principle — every product we carry has to earn its place.
          </p>
          <p>
            We work across four categories — fashion, tech, productivity, and
            wellness — not because we want to be everything to everyone, but
            because these are the categories that shape how people actually live
            and work day to day. Each product is chosen for craftsmanship,
            durability, and genuine usefulness, not just trend appeal.
          </p>
          <p>
            Today, NovaCommerce serves thousands of customers who trust us to do
            the filtering work for them. We&apos;re a small team, but we read every
            piece of feedback that comes in, and it directly shapes what we
            carry next.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {[
            { label: "Founded", value: "2024" },
            { label: "Products Curated", value: "50+" },
            { label: "Customers Served", value: "40,000+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-slate-200/70 bg-white p-8 text-center dark:border-white/10 dark:bg-white/[0.03]"
            >
              <p className="text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}