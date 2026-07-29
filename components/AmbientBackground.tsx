export default function AmbientBackground() {
  return (
    <>
      {/* Layered mesh lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute left-1/2 top-[-260px]
            h-[700px] w-[700px]
            -translate-x-1/2 rounded-full
            bg-[radial-gradient(circle,rgba(99,102,241,0.06)_0%,transparent_70%)]
          "
        />

        <div
          className="
            absolute left-[-120px] bottom-0
            h-[360px] w-[360px]
            rounded-full
            bg-[radial-gradient(circle,rgba(244,114,182,0.04)_0%,transparent_72%)]
          "
        />

        <div
          className="
            absolute right-1/4 top-1/3
            h-[320px] w-[320px]
            rounded-full
            bg-[radial-gradient(circle,rgba(251,191,36,0.03)_0%,transparent_75%)]
          "
        />
      </div>

      {/* Nearly invisible editorial grid */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10 opacity-[0.015]
          [background-image:linear-gradient(to_right,#64748b_1px,transparent_1px),linear-gradient(to_bottom,#64748b_1px,transparent_1px)]
          [background-size:120px_120px]
        "
      />

      {/* Soft top reflection */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 -z-10 h-[260px]
          bg-gradient-to-b
          from-white/90 via-white/50 to-transparent
          dark:from-slate-950/80
          dark:via-slate-950/40
          dark:to-transparent
        "
      />
    </>
  );
}