function SearchPage() {
  const searchQuery = document.getElementById("search_query");

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  const handleClick = (event) => {
    console.log("hello");
  };

  return (
    <>
      <button type="button" onclick="alert('Hello world!')">
        Click Me!
      </button>
    </>
  );
}

export default SearchPage;
