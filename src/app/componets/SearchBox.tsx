import { Search } from "lucide-react";

const SearchBox = () => {
  return (
    <div className="relative w-full max-w-md">
      <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
        <Search className="h-5 w-5" />
      </span>
      <input
      id="srch"
      name="search"
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default SearchBox;
