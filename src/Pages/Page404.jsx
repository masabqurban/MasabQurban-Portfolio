import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-primary-dark overflow-hidden relative">

      {/* Create abstract light effects */}
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-r dark:from-secondary-1-dark dark:to-secondary-2-dark/20 from-secondary-1-dark/20 to-secondary-2-dark/30 rounded-full blur-3xl -top-96 -right-40 rotate-12 animate-pulse"></div>
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r dark:from-secondary-1-dark dark:to-secondary-2-dark/20 from-secondary-1-dark/20 to-secondary-2-dark/30 rounded-full blur-3xl -bottom-40 -left-20 rotate-45 animate-pulse delay-700"></div>

      {/* Content */}
      <div className="relative z-90 text-center">
        <div className="relative">
          <h1 className="mb-10 text-[200px] font-bold text-black dark:text-white select-none animate-pulse" style={{ textShadow: '4px 4px 15px rgba(255,255,255,0.1)' }}>
            404
          </h1>
          <h2 className="text-5xl font-bold text-primary dark:text-white mb-8 -mt-20 animate-fade-in">
            Page Not Found!
          </h2>
          <p className="text-primary dark:text-gray-400 max-w-md mb-8 animate-slide-up">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-black/10 dark:bg-white/10 backdrop-blur-sm text-black cursor-pointer dark:text-white rounded-full hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-300 border border-black/20 dark:border-white/20 transform hover:scale-105"
        >
          Back Home
        </button>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gray-400/20 dark:bg-gray-500/20 rounded-full animate-float"
            style={{
              width: Math.random() * 100 + 'px',
              height: Math.random() * 100 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 10 + 's'
            }}
          />
        ))}
      </div>

    </div >
  );
}

export default NotFound;