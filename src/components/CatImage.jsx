export default function CatImage({ loading, error, image, name }) {
  return (
    <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-100 group">
      {loading ? (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-50 animate-pulse">
          <svg className="animate-spin h-8 w-8 text-slate-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : error ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50">
          <span className="text-5xl text-red-300 mb-2">😿</span>
        </div>
      ) : (
        <img 
          src={image || 'https://via.placeholder.com/400x300?text=No+Image'} 
          alt={name || 'Random Cat'} 
          className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105"
        />
      )}
      
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
    </div>
  );
}
