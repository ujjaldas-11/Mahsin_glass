import { useState } from "react";
import { Search } from "lucide-react";
import data from "../../data.json"; 
import Card from "../Card/Card";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const filteredGroups = data.items.filter((group) =>
    group.models.some((model) =>
      model.model_name.toLowerCase().includes(searchInput.toLowerCase().trim())
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 
                dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 
                transition-all duration-1000">
      {/* Header Part */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <img
            src="/logo.png"
            width={180}
            alt="MAHSIN"
            className="drop-shadow-lg"
          />

          {/* Search Bar */}
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Search Model Name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl text-gray-800 dark:text-gray-100 px-6 py-4 pr-14 rounded-2xl shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-400/50 dark:focus:ring-purple-500/50 transition-all duration-500 border border-gray-200/50 dark:border-slate-700"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 dark:from-indigo-500 dark:to-pink-600 text-white p-3 rounded-xl hover:scale-110 transition-all duration-300 shadow-lg">
              <Search size={22} />
            </button>
          </div>
        </div>

        {/* Results Count (if not then returns result) */}
        <p className="text-center text-gray-700 dark:text-gray-300 mt-10 text-xl font-medium">
          Found{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-indigo-400 dark:to-pink-400">
            {filteredGroups.length}
          </span>{" "}
          {filteredGroups.length === 1 ? "section" : "sections"}
        </p>
      </div>

      {/* Sections */}
      <div className="container mx-auto px-4 pb-20">
        {filteredGroups.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-2xl text-gray-500 dark:text-gray-400">
              No sections found. Try searching for a model name.
            </p>
          </div>
        ) : (
          <div className="space-y-20">
            {filteredGroups.map((group, index) => (
              <div
                key={group.id ?? index}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
              >
                <Card
                  group={group}
                  sectionNumber={index + 1}
                  searchTerm={searchInput.trim()}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;