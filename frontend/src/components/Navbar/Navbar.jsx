import { useState } from "react";
import { Search } from "lucide-react";
import data from "../../data.json";
import Card from "../Card/Card";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const filteredGroups = data.items.filter((group) =>
    group.models.some((model) =>
      model.model_name.toLowerCase().includes(searchInput.toLowerCase().trim())
    )
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-blue-50 to-purple-50">

        <div className="flex flex-col items-center w-full gap-4 px-4 md:flex-row md:items-center md:justify-center md:gap-6">

            <img src="/logo.png" width={160} alt="MAHSIN" />

          <div>
            <input
              type="text"
              placeholder="Search Model Name..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-[70vw] bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="bg-blue-400 text-white p-3 ml-2 rounded-2xl hover:text-blue-400 transition"
            >
              <Search size={18} />
            </button>
          </div>


        </div>


        <p className="text-gray-600 mb-4 mt-4 text-center">
          Found{" "}
          <span className="font-bold text-blue-600">
            {filteredGroups.length}
          </span>{" "}
          group
        </p>

        <div className=" rounded-2xl p-4 mt-10">
          {filteredGroups.map((group, index) => (
            <div
              key={group.id ?? index}
              className="flex flex-col justify-center items-left"
            >
              <Card group={group} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;
