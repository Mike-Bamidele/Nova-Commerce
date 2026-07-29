"use client";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-20 flex items-center justify-center gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => {
          onPageChange(currentPage - 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="
          cursor-pointer rounded-xl border border-slate-200 px-5 py-3
          text-sm font-medium transition hover:border-slate-900
          hover:bg-slate-900 hover:text-white
          disabled:cursor-not-allowed disabled:opacity-40
          dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900
        "
      >
        Previous
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => {
            onPageChange(i + 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`
            h-11 w-11 cursor-pointer rounded-xl text-sm font-semibold transition
            ${
              currentPage === i + 1
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "border border-slate-200 hover:border-slate-900 dark:border-white/10 dark:text-slate-300 dark:hover:border-white"
            }
          `}
        >
          {i + 1}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => {
          onPageChange(currentPage + 1);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="
          cursor-pointer rounded-xl border border-slate-200 px-5 py-3
          text-sm font-medium transition hover:border-slate-900
          hover:bg-slate-900 hover:text-white
          disabled:cursor-not-allowed disabled:opacity-40
          dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:bg-white dark:hover:text-slate-900
        "
      >
        Next
      </button>
    </div>
  );
}