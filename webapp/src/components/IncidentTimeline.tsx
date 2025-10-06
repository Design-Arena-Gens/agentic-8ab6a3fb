import type { Incident } from "@/data/risk";

function severityTone(severity: Incident["severity"]) {
  switch (severity) {
    case "Critical":
      return "bg-rose-500";
    case "High":
      return "bg-orange-400";
    case "Moderate":
      return "bg-amber-300";
    case "Low":
    default:
      return "bg-emerald-300";
  }
}

export function IncidentTimeline({ incidents }: { incidents: Incident[] }) {
  return (
    <section
      id="incidents"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Recent Incidents</h2>
          <p className="text-sm text-slate-500">
            Escalations impacting clients, operations, or regulatory commitments.
          </p>
        </div>
        <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100">
          Open incident center
        </button>
      </div>
      <div className="relative border-l border-slate-200 pl-6">
        {incidents.map((incident, index) => (
          <div key={incident.id} className="relative mb-8 last:mb-0">
            <span
              className={`absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white shadow ${severityTone(
                incident.severity,
              )}`}
            >
              {incident.severity[0]}
            </span>
            <div className="flex flex-col gap-2 rounded-xl border border-slate-100 bg-white/80 p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm font-semibold text-slate-900">
                  {incident.title}
                </div>
                <div className="text-xs font-medium text-slate-500">
                  {incident.occurredOn}
                </div>
              </div>
              <div className="text-xs text-slate-500">{incident.summary}</div>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-600">
                  {incident.id}
                </span>
                <span className="rounded-full bg-blue-50 px-2 py-1 font-semibold text-blue-700">
                  Owner: {incident.owner}
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-1 font-semibold text-slate-600">
                  Status: {incident.status}
                </span>
              </div>
            </div>
            {index !== incidents.length - 1 && (
              <div className="absolute -bottom-8 left-[-1px] h-8 border-l border-dashed border-slate-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
