import type { RiskItem } from "@/data/risk";

function statusClasses(status: RiskItem["status"]) {
  switch (status) {
    case "Critical":
      return "bg-rose-100 text-rose-700";
    case "High":
      return "bg-orange-100 text-orange-700";
    case "Moderate":
      return "bg-amber-100 text-amber-700";
    case "Low":
    default:
      return "bg-emerald-100 text-emerald-700";
  }
}

function trendLabel(trend: RiskItem["trend"]) {
  if (trend === "up") return "Rising";
  if (trend === "down") return "Improving";
  return "Stable";
}

export function RiskRegisterTable({ items }: { items: RiskItem[] }) {
  return (
    <section
      id="risk-register"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Risk Register</h2>
          <p className="text-sm text-slate-500">
            Highest residual risks with owners, trend, and mitigation status.
          </p>
        </div>
        <button className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100">
          Export latest register
        </button>
      </div>
      <div className="overflow-hidden rounded-xl border border-slate-100">
        <table className="min-w-full divide-y divide-slate-100 text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Risk</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Exposure</th>
              <th className="px-4 py-3">Trend</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white">
            {items.map((item) => (
              <tr key={item.id} className="transition hover:bg-slate-50/60">
                <td className="px-4 py-3 font-medium text-slate-500">{item.id}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-900">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.mitigation}</div>
                </td>
                <td className="px-4 py-3 text-slate-600">{item.category}</td>
                <td className="px-4 py-3 text-slate-600">{item.owner}</td>
                <td className="px-4 py-3 font-semibold text-slate-900">{item.exposure}</td>
                <td className="px-4 py-3">
                  <span className="text-xs font-medium text-slate-500">
                    {trendLabel(item.trend)}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold ${statusClasses(
                      item.status,
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
