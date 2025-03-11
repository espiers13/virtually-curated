import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { searchCollections } from "../api/api";
import ItemCard from "../components/ItemCard";
import SearchBar from "../components/SearchBar";
import ResultsPagination from "../components/ResultsPagination";

function SearchResults() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(15);
  const [pages, setPages] = useState(null);

  const { search_query } = useParams();
  const { page_number } = useParams();

  useEffect(() => {
    setIsLoading(true);
    searchCollections(search_query, page_number).then((data) => {
      setResults(data.records);
      setPages(data.info.pages);
      setIsLoading(false);
    });
  }, []);

  return (
    <main className="bg-pagebg h-screen">
      <SearchBar />
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

      <ResultsPagination
        postsPerPage={postsPerPage}
        pages={pages}
        search_query={search_query}
        page_number={page_number}
      />
    </main>
  );
}

//set pages: find the total amount of pages, have buttons at the bottom to go to that page. Link venue ID to venue name (value)

export default SearchResults;
