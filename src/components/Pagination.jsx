import React, { useEffect, useState } from 'react';
import '/src/css/pagination.css';

function Pagination({ currentPage, setCurrentPage }) {
  const totalPages = 42;

  const renderPageNumbers = () => {
    const pageNumbers = [];
      if (currentPage <= 3) {
        pageNumbers.push(1, 2, 3, 4, 5, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    return pageNumbers;
  };

  const nextPage = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
  };

  const prevPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };


  return (
    <div className="pagination">
      <div className="pagination-content">
        <a href="#" className="arrows" onClick={() => prevPage()}>
          &laquo; Previous
        </a>
        {renderPageNumbers().map((page, index) => (
          <a
            href="#"
            key={index}
            className={currentPage === page ? 'active' : ''}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
          >
            {page}
          </a>
        ))}
        <a href="#" className="arrows" onClick={() => nextPage()}>
          Next &raquo;
        </a>
      </div>
    </div>
  );
}

export default Pagination;


