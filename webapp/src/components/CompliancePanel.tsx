import type { ComplianceTask } from "@/data/risk";

function statusTone(status: ComplianceTask["status"]) {
  switch (status) {
    case "On Track":
      return "bg-emerald-50 text-emerald-600";
    case "At Risk":
      return "bg-amber-50 text-amber-600";
    case "Overdue":
    default:
      return "bg-rose-50 text-rose-600";
  }
}

export function CompliancePanel({ tasks }: { tasks: ComplianceTask[] }) {
  return (
    <section
      id="compliance"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Regulatory Commitments</h2>
          <p className="text-sm text-slate-500">
            Priority filings and attestations with current delivery confidence.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          Compliance calendar
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {task.title}
                </h3>
                <p className="text-xs text-slate-500">{task.relatedFramework}</p>
              </div>
              <span className="text-xs font-medium text-slate-500">{task.id}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Due</span>
              <span className="font-semibold text-slate-700">{task.dueDate}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Owner</span>
              <span className="font-semibold text-slate-700">{task.owner}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Status</span>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${statusTone(task.status)}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
