import React, { useState } from "react";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationNumbers = () => {
    const paginationNumbers = [];
    const totalPages = 10;
    const visiblePages = 5;

    let startPage = 1;
    let endPage = 10;

    if (currentPage > Math.floor(visiblePages / 2) + 1) {
      startPage = currentPage - Math.floor(visiblePages / 2);
      endPage = currentPage + Math.floor(visiblePages / 2);
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = endPage - visiblePages + 1;
    }

    if (startPage > 1) {
      paginationNumbers.push(
        <button
          key={1}
          onClick={() => handleClick(1)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none"
        >
          1
        </button>
      );

      paginationNumbers.push(
        <span key="dots-start" className="px-3 py-1">
          ...
        </span>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 ${
            i === currentPage
              ? "bg-blue-500 text-white font-bold"
              : "bg-gray-200 hover:bg-gray-300"
          } rounded focus:outline-none`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      paginationNumbers.push(
        <span key="dots-end" className="px-3 py-1">
          ...
        </span>
      );

      paginationNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none"
        >
          {totalPages}
        </button>
      );
    }

    return paginationNumbers;
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <button
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none"
      >
        Previous
      </button>
      {renderPaginationNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === 10}
        className="px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
