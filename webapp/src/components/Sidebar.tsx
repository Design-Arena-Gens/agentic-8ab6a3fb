const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Risk Register", href: "#risk-register" },
  { name: "Controls", href: "#controls" },
  { name: "Incidents", href: "#incidents" },
  { name: "Compliance", href: "#compliance" },
  { name: "Scenarios", href: "#scenarios" },
];

export function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-64 xl:w-72 flex-col gap-6 border-r border-slate-200 bg-white/80 p-6 backdrop-blur">
      <div>
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Risk Command Center
        </div>
        <div className="mt-2 text-2xl font-semibold text-slate-900">
          Aurora Financial
        </div>
      </div>
      <nav className="flex flex-col gap-1 text-sm font-medium text-slate-600">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900"
          >
            {item.name}
          </a>
        ))}
      </nav>
      <div className="mt-auto rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
        <div className="font-semibold text-slate-800">Latest Updates</div>
        <ul className="mt-3 space-y-2">
          <li>
            Liquidity stress test recalibrated with revised funding assumptions.
          </li>
          <li>Regulatory exam exit meeting scheduled for Oct 18.</li>
          <li>Next enterprise risk review: Nov 1 with audit committee.</li>
        </ul>
      </div>
    </aside>
  );
}
