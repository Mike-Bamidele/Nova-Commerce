import Button from "./Button";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Nova Commerce
            </p>

            <h1 className="text-5xl font-bold leading-tight text-slate-900 md:text-7xl">
              Shopping,
              <br />
              Designed Around You.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              Discover premium fashion, technology, wellness and productivity
              essentials through an intelligent shopping experience that quietly
              adapts to your preferences.
            </p>

            <div className="mt-10 flex gap-4">
              <Button>Shop Collection</Button>
              <Button variant="secondary">Explore</Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <span className="text-yellow-500">★★★★★</span>
              <p className="text-slate-600">
                Trusted by <strong>25,000+</strong> happy shoppers
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative h-[550px]">
            <div className="absolute left-0 top-20 w-64 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
              <h3 className="font-semibold">Smart Watch</h3>
              <p className="mt-2 text-sm text-slate-500">
                Personalized recommendations.
              </p>
            </div>

            <div className="absolute right-0 top-0 w-72 rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl">
              <h3 className="font-semibold">Wireless Earbuds</h3>
              <p className="mt-2 text-sm text-slate-500">
                Premium audio experience.
              </p>
            </div>

            <div className="absolute bottom-0 left-20 w-72 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="font-semibold">Laptop Stand</h3>
              <p className="mt-2 text-sm text-slate-500">
                Built for productivity.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}