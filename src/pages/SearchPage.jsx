import SearchBar from "../components/SearchBar";
import SearchBarWithDropdown from "../components/SearchBarWithDropdown";

function SearchPage() {
  return (
    <main className="bg-pagebg h-screen">
      <img
        src="src/imgs/explore_through_art.jpg"
        alt="Explore the world through art"
        className="mb-5 mt-3"
      />
      {/* <SearchBar /> */}
      <SearchBarWithDropdown />
    </main>
  );
}

export default SearchPage;
