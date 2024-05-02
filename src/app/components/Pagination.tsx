import React, { useState } from "react";

interface PaginationProps {
  color: "primary" | "secondary" | "standard";
  shape: "circular" | "rounded";
  size: "small" | "medium" | "large";
}

const Pagination: React.FC<PaginationProps> = ({ color, shape, size }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handleClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationNumbers = () => {
    const paginationNumbers = [];
    const totalPages = 10;
    const visiblePages = 5;

    let startPage =
      totalPages > visiblePages
        ? currentPage <= Math.ceil(visiblePages / 2)
          ? 1
          : currentPage >= totalPages - Math.floor(visiblePages / 2)
            ? totalPages - visiblePages + 1
            : currentPage - Math.floor(visiblePages / 2)
        : 1;
    let endPage =
      totalPages > visiblePages
        ? currentPage <= Math.ceil(visiblePages / 2)
          ? visiblePages
          : currentPage >= totalPages - Math.floor(visiblePages / 2)
            ? totalPages
            : currentPage + Math.floor(visiblePages / 2)
        : totalPages;

    startPage = startPage > 1 ? startPage : 1;
    endPage = endPage < totalPages ? endPage : totalPages;

    if (startPage > 1) {
      paginationNumbers.push(
        <button
          key={1}
          onClick={() => handleClick(1)}
          className={`px-3 py-1 ${
            color === "primary"
              ? "bg-blue-500 text-white font-bold"
              : color === "secondary"
                ? "bg-green-500 text-white font-bold"
                : "bg-gray-200 text-gray-800"
          } ${
            shape === "circular"
              ? "rounded-full"
              : shape === "rounded"
                ? "rounded"
                : ""
          } ${
            size === "small" ? "text-sm" : size === "large" ? "text-lg" : ""
          } hover:bg-gray-300 focus:outline-none`}
        >
          1
        </button>
      );

      if (startPage > 2) {
        paginationNumbers.push(
          <span key="dots-start" className="px-3 py-1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationNumbers.push(
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`px-3 py-1 ${
            color === "primary"
              ? "bg-blue-500 text-white font-bold"
              : color === "secondary"
                ? "bg-green-500 text-white font-bold"
                : "bg-gray-200 hover:bg-gray-300"
          } ${i === currentPage ? "bg-yellow-300 text-gray-800" : ""} ${
            shape === "circular"
              ? "rounded-full"
              : shape === "rounded"
                ? "rounded"
                : ""
          } ${
            size === "small" ? "text-sm" : size === "large" ? "text-lg" : ""
          } focus:outline-none`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationNumbers.push(
          <span key="dots-end" className="px-3 py-1">
            ...
          </span>
        );
      }

      paginationNumbers.push(
        <button
          key={totalPages}
          onClick={() => handleClick(totalPages)}
          className={`px-3 py-1 ${
            color === "primary"
              ? "bg-blue-500 text-white font-bold"
              : color === "secondary"
                ? "bg-green-500 text-white font-bold"
                : "bg-gray-200 text-gray-800"
          } hover:bg-gray-300 ${
            shape === "circular"
              ? "rounded-full"
              : shape === "rounded"
                ? "rounded"
                : ""
          } ${
            size === "small" ? "text-sm" : size === "large" ? "text-lg" : ""
          } focus:outline-none`}
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
        className={`px-3 py-1 ${
          color === "primary"
            ? "bg-blue-500 text-white font-bold"
            : color === "secondary"
              ? "bg-green-500 text-white font-bold"
              : "bg-gray-200 text-gray-800"
        } hover:bg-gray-300 ${
          shape === "circular"
            ? "rounded-full"
            : shape === "rounded"
              ? "rounded"
              : ""
        } ${
          size === "small" ? "text-sm" : size === "large" ? "text-lg" : ""
        } focus:outline-none`}
      >
        Previous
      </button>
      {renderPaginationNumbers()}
      <button
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === 10}
        className={`px-3 py-1 ${
          color === "primary"
            ? "bg-blue-500 text-white font-bold"
            : color === "secondary"
              ? "bg-green-500 text-white font-bold"
              : "bg-gray-200 text-gray-800"
        } hover:bg-gray-300 ${
          shape === "circular"
            ? "rounded-full"
            : shape === "rounded"
              ? "rounded"
              : ""
        } ${
          size === "small" ? "text-sm" : size === "large" ? "text-lg" : ""
        } focus:outline-none`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
