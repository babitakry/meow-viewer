import { useState, useEffect } from 'react';
import CatImage from './components/CatImage';
import LoadingSkeleton from './components/LoadingSkeleton';
import ErrorState from './components/ErrorState';
import CatDetails from './components/CatDetails';
import './App.css';

function App() {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCat = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://api.freeapi.app/api/v1/public/cats/cat/random');
      if (!response.ok) {
        throw new Error('Failed to fetch cat data');
      }
      const json = await response.json();
      if (json.success && json.data) {
        setCatData(json.data);
      } else {
        throw new Error('Invalid data format received');
      }
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans overflow-hidden relative selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* Subtle, elegant background gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-md w-full bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] overflow-hidden border border-slate-100 transform transition-transform duration-500 hover:-translate-y-2 relative z-10">
        
        <CatImage 
          loading={loading} 
          error={error} 
          image={catData?.image} 
          name={catData?.name} 
        />

        <div className="p-8 relative">
          {loading ? (
            <LoadingSkeleton />
          ) : error ? (
            <ErrorState error={error} onRetry={fetchCat} />
          ) : (
            <>
              <CatDetails catData={catData} />

              <button 
                onClick={fetchCat}
                className="w-full mt-2 py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-lg rounded-2xl shadow-lg shadow-slate-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <span>Fetch New Cat</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 group-hover:rotate-180 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
