import React from "react";
import styles from "../Pagination/Pagination.module.css";

function Pagination({ MoviesPerPage, TotalMovies, paginate }) {
  const pageNbrs = [];

  for (let i = 1; i <= Math.ceil(TotalMovies / MoviesPerPage); i++) {
    pageNbrs.push(i);
  }

  const nextPage = () => {
    paginate((currentPage) => {
      let nextPage = currentPage + 1;
      if (nextPage > pageNbrs.length) {
        nextPage = 1;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    paginate((currentPage) => {
      let prevPage = currentPage - 1;
      if (prevPage <= 0) {
        prevPage = pageNbrs.length;
      }

      return prevPage;
    });
  };

  return (
    <div className={styles.pagePagination}>
      <nav aria-label="Page navigation">
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" href="#" onClick={prevPage}>
              Previous
            </button>
          </li>
          {pageNbrs.map((number, index) => {
            return (
              <li className="page-item" key={index}>
                <a
                  className="page-link"
                  href="#"
                  onClick={() => paginate(number)}
                >
                  {number}
                </a>
              </li>
            );
          })}

          <li className="page-item">
            <button className="page-link" href="#" onClick={nextPage}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
