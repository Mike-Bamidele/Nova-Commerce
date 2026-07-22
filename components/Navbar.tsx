export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Nova<span className="text-blue-600">Commerce</span>
          </h2>
        </div>

        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <a href="#" className="transition hover:text-blue-600">
              Shop
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-blue-600">
              Categories
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-blue-600">
              About
            </a>
          </li>

          <li>
            <a href="#" className="transition hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>

        <button className="rounded-full bg-slate-900 px-6 py-3 text-white transition hover:bg-slate-700">
          Sign In
        </button>

      </nav>
    </header>
  );
}