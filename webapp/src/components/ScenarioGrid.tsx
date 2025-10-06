import type { Scenario } from "@/data/risk";

export function ScenarioGrid({ scenarios }: { scenarios: Scenario[] }) {
  return (
    <section
      id="scenarios"
      className="flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Scenario Planning</h2>
          <p className="text-sm text-slate-500">
            Forward-looking risk simulations with recommended playbooks.
          </p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          90 day horizon
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {scenarios.map((scenario) => (
          <div
            key={scenario.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white/80 p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">
                  {scenario.title}
                </h3>
                <p className="text-xs text-slate-500">{scenario.id}</p>
              </div>
              <div className="flex flex-col items-end text-xs text-slate-500">
                <span className="font-semibold text-slate-900">Impact {scenario.impact}%</span>
                <span>Probability {scenario.probability}%</span>
              </div>
            </div>
            <p className="text-sm text-slate-600">{scenario.narrative}</p>
            <div className="space-y-2 text-xs text-slate-500">
              {scenario.actions.map((action) => (
                <div
                  key={action}
                  className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-slate-600"
                >
                  {action}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
