import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { searchCollections } from "../api/api";
import ItemCard from "../components/ItemCard";

function SearchResults() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [pages, setPages] = useState(null);

  const { search_query } = useParams();
  const page = `/search/${search_query}/2`;

  const onTextChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `/search/${searchQuery}`;
  };

  useEffect(() => {
    setIsLoading(true);
    searchCollections(search_query).then((data) => {
      setResults(data.records);
      setPages(data.info.pages);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="bg-pagebg h-screen">
      <form className="max-w-md mx-auto m-auto mt-5" onSubmit={handleSubmit}>
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
      <div>
        <h1 className="text-white text-2xl mt-5">
          RESULTS FOR: "{search_query}"
        </h1>
        <div className="grid grid-cols-3">
          {results.map((item) => {
            return <ItemCard key={item.systemNumber} item={item} />;
          })}
        </div>
        <ul></ul>
      </div>
      <p>Go to page:</p>
      <a href={page}>2</a>
    </main>
  );
}

//set pages: find the total amount of pages, have buttons at the bottom to go to that page. Link venue ID to venue name (value)

export default SearchResults;
