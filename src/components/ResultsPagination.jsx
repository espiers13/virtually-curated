import React from "react";

function ResultsPagination({
  postsPerPage,
  pages,
  search_query,
  page_number,
  category,
}) {
  const paginationNumbers = [];

  const pg_number = Number(page_number);

  const navStyling =
    "rounded-sm flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700";

  const currentPgStyling =
    "rounded-sm flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700";

  for (let i = 1; i <= pages; i++) {
    paginationNumbers.push(i);
  }

  const handlePagination = (e) => {
    window.location.href = `/search/${category}/${search_query}/${e.target.innerHTML}`;
  };

  const handlePrevious = (e) => {
    if (pg_number > 0) {
      window.location.href = `/search/${category}/${search_query}/${
        pg_number - 1
      }`;
    } else window.location.href = `/search/${category}/${search_query}/1`;
  };

  const handleNext = (e) => {
    if (pg_number < pages) {
      window.location.href = `/search/${category}/${search_query}/${
        pg_number + 1
      }`;
    } else
      window.location.href = `/search/${category}/${search_query}/${pages}`;
  };

  return (
    <nav className="inline-flex -space-x-px text-sm mb-5">
      <button
        className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
        onClick={handlePrevious}
        disabled={pg_number === 1}
      >
        Previous
      </button>
      {/* {paginationNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          className={pg_number === pageNumber ? currentPgStyling : navStyling}
          onClick={handlePagination}
        >
          {pageNumber}
        </button>
      ))} */}
      <button
        href="#"
        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
        onClick={handleNext}
        disabled={pg_number === pages}
      >
        Next
      </button>
    </nav>
  );
}

export default ResultsPagination;
