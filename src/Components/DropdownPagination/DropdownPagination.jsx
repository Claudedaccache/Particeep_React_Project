import React from "react";
import styles from "../DropdownPagination/DropdownPagination.module.css";

function DropdownPagination({pageSize, setPageSize, TotalMovies }) {

  return (
    <div>
      <div className={styles.PaginationDropdown}>
        <button
          className={`btn btn-secondary dropdown-toggle ${styles.PaginationBtn}`}
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Showing {pageSize > TotalMovies ? TotalMovies : pageSize} Movies {"  "}
        </button>
        <ul
          value={pageSize}
                className="dropdown-menu"
          aria-labelledby="dropdownMenuButton2"
        >
          {[4, 8, 12].map((pageSize) => (
            <li key={pageSize} value={pageSize} className="dropdown-item"  onClick={(e) => {
              setPageSize(Number(e.target.value));
            }}>
              {pageSize}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DropdownPagination;
