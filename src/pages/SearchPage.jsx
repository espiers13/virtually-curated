import { useState, useEffect } from "react";

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onTextChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="bg-pagebg h-screen">
      <img
        src="src/imgs/explore_through_art.jpg"
        alt="Explore the world through art"
        className="mb-5 mt-3"
      />

      <form className="max-w-md mx-auto m-auto" onSubmit={handleSubmit}>
        <label htmlFor="default-search" className="text-white text-2xl">
          EXPLORE THE COLLECTIONS...
        </label>
        <div className="relative mt-3 mb-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="SEARCH BY OBJECT, ARTIST, MAKER..."
            onChange={onTextChange}
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-buttoncolor hover:hovercolor focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </main>
  );
}

export default SearchPage;
