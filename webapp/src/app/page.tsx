import { CompliancePanel } from "@/components/CompliancePanel";
import { ControlPanel } from "@/components/ControlPanel";
import { Header } from "@/components/Header";
import { IncidentTimeline } from "@/components/IncidentTimeline";
import { MetricCard } from "@/components/MetricCard";
import { RiskHeatmap } from "@/components/RiskHeatmap";
import { RiskRegisterTable } from "@/components/RiskRegisterTable";
import { ScenarioGrid } from "@/components/ScenarioGrid";
import { Sidebar } from "@/components/Sidebar";
import {
  complianceTasks,
  controls,
  heatmapCells,
  incidents,
  kpis,
  riskRegister,
  scenarios,
} from "@/data/risk";

const strategicInitiatives = [
  {
    title: "Liquidity resilience",
    owner: "Treasury Council",
    description: "Accelerate pre-funding program and validate contingency lines across regions.",
  },
  {
    title: "AI model governance uplift",
    owner: "Model Risk",
    description: "Complete tiering of gen-AI utilities and align monitoring with policy revamp.",
  },
  {
    title: "Regulatory exam readiness",
    owner: "Compliance",
    description: "Close outstanding MRAs and prep narratives ahead of October supervisory visit.",
  },
];

const utilization = [
  {
    name: "Market risk appetite",
    value: 68,
    limit: 75,
  },
  {
    name: "Credit concentration",
    value: 54,
    limit: 65,
  },
  {
    name: "Operational loss threshold",
    value: 38,
    limit: 55,
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100/40 lg:flex-row">
      <Sidebar />
      <div className="flex-1">
        <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-5 py-8 lg:px-10">
          <Header />

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((metric) => (
              <MetricCard key={metric.label} metric={metric} />
            ))}
          </section>

          <RiskHeatmap cells={heatmapCells} />

          <div className="grid gap-6 xl:grid-cols-[3fr_2fr]">
            <RiskRegisterTable items={riskRegister} />
            <section className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">Focus Initiatives</h2>
              <div className="flex flex-col gap-4 text-sm text-slate-600">
                {strategicInitiatives.map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{item.owner}</span>
                      <span>Q4 Target</span>
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">
                      {item.title}
                    </div>
                    <p className="mt-1 text-xs text-slate-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <ControlPanel items={controls} />

          <div className="grid gap-6 xl:grid-cols-[2fr_3fr]">
            <section className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-lg font-semibold text-slate-900">Risk Appetite Utilization</h2>
              <div className="flex flex-col gap-4">
                {utilization.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{item.name}</span>
                      <span>
                        {item.value}% &nbsp;/&nbsp; limit {item.limit}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-indigo-500"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                    <div
                      className="text-[11px] text-slate-500"
                    >
                      Remaining buffer {Math.max(item.limit - item.value, 0)}%
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <IncidentTimeline incidents={incidents} />
          </div>

          <CompliancePanel tasks={complianceTasks} />

          <ScenarioGrid scenarios={scenarios} />
        </main>
      </div>
    </div>
  );
}
