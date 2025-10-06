import type { ControlItem } from "@/data/risk";
import { ProgressBar } from "./ProgressBar";

function controlTone(coverage: number) {
  if (coverage >= 85) return "text-emerald-600";
  if (coverage >= 70) return "text-amber-600";
  return "text-rose-600";
}

export function ControlPanel({ items }: { items: ControlItem[] }) {
  return (
    <section
      id="controls"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Control Effectiveness</h2>
          <p className="text-sm text-slate-500">
            Key control domains with coverage, ownership, and outstanding issues.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          Quarterly attestation
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {item.domain}
                </h3>
                <p className="text-xs text-slate-500">{item.description}</p>
              </div>
              <span className="text-xs font-medium text-slate-500">{item.id}</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>Coverage</span>
                <span className={`font-semibold ${controlTone(item.coverage)}`}>
                  {item.coverage}%
                </span>
              </div>
              <ProgressBar value={item.coverage} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Control owner</span>
              <span className="font-medium text-slate-700">{item.owner}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Open issues</span>
              <span
                className={`rounded-full px-2 py-1 font-semibold ${
                  item.outstandingIssues > 3
                    ? "bg-rose-50 text-rose-600"
                    : "bg-emerald-50 text-emerald-600"
                }`}
              >
                {item.outstandingIssues}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
