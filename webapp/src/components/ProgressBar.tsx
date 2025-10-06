export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-2 rounded-full bg-slate-100">
      <div
        className="h-full rounded-full bg-slate-900 transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
