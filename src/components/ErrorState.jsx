export default function ErrorState({ error, onRetry }) {
  return (
    <div className="text-center py-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">Oops!</h3>
      <p className="text-slate-500 mb-6">{error}</p>
      <button 
        onClick={onRetry} 
        className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-xl transition-colors border border-slate-200"
      >
        Try Again
      </button>
    </div>
  );
}
