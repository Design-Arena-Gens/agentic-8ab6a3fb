import type { Kpi } from "@/data/risk";

function TrendIcon({ direction }: { direction: Kpi["changeDirection"] }) {
  if (direction === "up") {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-emerald-600"
      >
        <path
          d="M6 1.5L10.5 6H7.5V10.5H4.5V6H1.5L6 1.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-rose-600"
    >
      <path
        d="M6 10.5L1.5 6H4.5V1.5H7.5V6H10.5L6 10.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MetricCard({ metric }: { metric: Kpi }) {
  const isPositive = metric.changeDirection === "up";
  const formattedChange = `${
    isPositive ? "+" : "-"
  }${metric.change.toFixed(1)}%`;

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
        {metric.label}
      </div>
      <div className="text-3xl font-semibold text-slate-900">{metric.value}</div>
      <div className="flex items-center gap-2 text-sm">
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-1 font-medium ${
            isPositive ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"
          }`}
        >
          <TrendIcon direction={metric.changeDirection} />
          {formattedChange}
        </span>
        <span className="text-slate-500">{metric.description}</span>
      </div>
    </div>
  );
}
