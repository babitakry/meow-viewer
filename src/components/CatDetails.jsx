export default function CatDetails({ catData }) {
  if (!catData) return null;

  return (
    <>
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight mb-2 text-slate-900">
          {catData.name || 'Mysterious Feline'}
        </h2>
        <div className="flex items-center text-sm font-medium text-slate-500 space-x-3 uppercase tracking-wider">
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {catData.origin || 'Unknown'}
          </span>
          <span className="text-slate-300">•</span>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {catData.life_span ? `${catData.life_span} yrs` : 'Unknown'}
          </span>
        </div>
      </div>
      
      <div className="mb-8">
        <p className="text-slate-600 leading-relaxed text-base line-clamp-4">
          {catData.description || 'No description available for this beautiful creature.'}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {catData.temperament ? catData.temperament.split(', ').map(temp => (
          <span key={temp} className="px-3.5 py-1 bg-slate-50 rounded-full text-xs font-semibold text-slate-600 border border-slate-200 shadow-sm transition-colors hover:bg-slate-100 hover:border-slate-300 cursor-default">
            {temp}
          </span>
        )) : null}
      </div>

      {catData.wikipedia_url && (
        <a 
          href={catData.wikipedia_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors mb-6 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
          <span className="group-hover:underline">Read more on Wikipedia</span>
        </a>
      )}
    </>
  );
}
