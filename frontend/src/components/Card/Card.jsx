import React from 'react';
import HighlightText from '../Highlight/HighlightText'; 

function Card({ group, sectionNumber, searchTerm }) {
  return (
    <div className="relative">
      <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-8 flex items-center gap-4">
        <span className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-pink-400">
          Section {sectionNumber}
        </span>
        <span className="text-2xl">• {group.group_name}</span>
      </h2>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
        {group.models.map((model, i) => (
          <div
            key={model.id}
            className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 ease-out transform hover:-translate-y-3 hover:scale-105 overflow-hidden border border-gray-200/50 dark:border-slate-700/50 opacity-0 animate-card-fade"
            style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'forwards' }}
          >
            <div className="p-6 text-center relative z-10">
              <p className="text-gray-800 dark:text-gray-100 font-semibold text-base leading-relaxed">
                <HighlightText text={model.model_name} highlight={searchTerm} />
              </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-400/20 blur-2xl"></div>
            </div>

            <div className="absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-blue-400/30 dark:group-hover:ring-purple-500/40 transition-all duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;