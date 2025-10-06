const formatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function Header() {
  const now = formatter.format(new Date());

  return (
    <header className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Enterprise Risk Overview
          </h1>
          <p className="text-sm text-slate-500">
            Consolidated view of risk posture, incidents, and regulatory obligations.
          </p>
        </div>
        <div className="text-right text-sm text-slate-500">
          <div>Last synchronized</div>
          <div className="font-medium text-slate-900">{now} UTC</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-slate-500">
        <span className="rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700">
          Current risk appetite: Balanced growth
        </span>
        <span className="rounded-full bg-amber-50 px-3 py-1 font-medium text-amber-700">
          Regulatory focus: Basel III / SOX
        </span>
        <span className="rounded-full bg-blue-50 px-3 py-1 font-medium text-blue-700">
          Scenario window: 90 day outlook
        </span>
      </div>
    </header>
  );
}
