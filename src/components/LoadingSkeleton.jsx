export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-8 bg-slate-200 rounded-md w-2/3 animate-pulse"></div>
      <div className="h-4 bg-slate-200 rounded-md w-1/3 animate-pulse"></div>
      <div className="space-y-2 mt-6">
        <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
        <div className="h-4 bg-slate-200 rounded-md w-full animate-pulse"></div>
        <div className="h-4 bg-slate-200 rounded-md w-4/5 animate-pulse"></div>
      </div>
      <div className="flex gap-2 mt-6">
        <div className="h-6 bg-slate-200 rounded-full w-16 animate-pulse"></div>
        <div className="h-6 bg-slate-200 rounded-full w-20 animate-pulse"></div>
        <div className="h-6 bg-slate-200 rounded-full w-24 animate-pulse"></div>
      </div>
    </div>
  );
}
