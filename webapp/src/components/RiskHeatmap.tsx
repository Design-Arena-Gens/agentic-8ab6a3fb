import type { HeatmapCell } from "@/data/risk";

const impactLevels = [5, 4, 3, 2, 1];
const likelihoodLevels = [1, 2, 3, 4, 5];

type ColorConfig = {
  container: string;
  textStrong: string;
  textMuted: string;
  chip: string;
};

function getColor(score: number): ColorConfig {
  if (score >= 20) {
    return {
      container: "bg-rose-500",
      textStrong: "text-white",
      textMuted: "text-rose-50/80",
      chip: "bg-white/20 text-white",
    };
  }

  if (score >= 12) {
    return {
      container: "bg-orange-400",
      textStrong: "text-slate-900",
      textMuted: "text-slate-800/80",
      chip: "bg-white/40 text-slate-900",
    };
  }

  if (score >= 8) {
    return {
      container: "bg-amber-300",
      textStrong: "text-slate-900",
      textMuted: "text-slate-800/80",
      chip: "bg-amber-200 text-slate-900",
    };
  }

  if (score >= 4) {
    return {
      container: "bg-yellow-200",
      textStrong: "text-slate-900",
      textMuted: "text-slate-800/70",
      chip: "bg-yellow-100 text-slate-900",
    };
  }

  return {
    container: "bg-emerald-100",
    textStrong: "text-slate-900",
    textMuted: "text-emerald-900/70",
    chip: "bg-emerald-50 text-emerald-900",
  };
}

export function RiskHeatmap({ cells }: { cells: HeatmapCell[] }) {
  return (
    <section
      id="overview"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Risk Heatmap</h2>
          <p className="text-sm text-slate-500">
            Likelihood vs. impact distribution across enterprise risk taxonomy.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          5x5 matrix
        </span>
      </div>
      <div className="grid grid-cols-[auto_1fr] gap-4">
        <div className="flex items-center justify-center text-sm font-medium text-slate-500 [writing-mode:vertical-rl]">
          Impact ↗
        </div>
        <div className="flex flex-col gap-2">
          {impactLevels.map((impact) => (
            <div key={impact} className="grid grid-cols-5 gap-2">
              {likelihoodLevels.map((likelihood) => {
                const cell = cells.find(
                  (item) => item.impact === impact && item.likelihood === likelihood,
                );
                const score = impact * likelihood;
                const colors = getColor(score);

                return (
                  <div
                    key={`${impact}-${likelihood}`}
                    className={`relative flex min-h-[88px] flex-col justify-between rounded-xl p-3 text-xs shadow-inner transition ${colors.container}`}
                  >
                    <div
                      className={`flex items-center justify-between font-semibold ${colors.textStrong}`}
                    >
                      <span>
                        {impact}x{likelihood}
                      </span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase ${colors.chip}`}
                      >
                        {cell?.count ?? 0} risks
                      </span>
                    </div>
                    <div className={`text-[11px] ${colors.textMuted}`}>
                      {cell?.primaryRisk ?? "Portfolio exposure"}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <div className="grid grid-cols-[repeat(5,minmax(0,1fr))] gap-2 text-center text-xs font-medium text-slate-500">
            {likelihoodLevels.map((likelihood) => (
              <span key={likelihood}>Likelihood {likelihood}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
