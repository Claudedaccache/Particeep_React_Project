import React from "react";
import { useEffect } from "react";
import styles from "../Dropdown/Dropdown.module.css";

function Dropdown({
  categories,
  setFilteredMovies,
  activeCatg,
  setActiveCatg,
  setCategories,
  data,
}) {
  /* Creating a new unique array from the categories array. */
  let ListOFUniqueCategories = [...new Set(categories)];

  useEffect(() => {
    getCategoryList();
    if (activeCatg === "All") {
      setFilteredMovies(data);
      return;
    }
    const filteredItems = data.filter((elt) => {
      return elt.category === activeCatg.itm;
    });
    setFilteredMovies(filteredItems);
  }, [activeCatg, data]);

  /**
   * Get all the categories from the data array and set the state of the categories array to the new
   * array of categories.
   */
  const getCategoryList = () => {
    let AllCategories = data.map((itm) => {
      return itm.category;
    });
    setCategories(AllCategories);
  };

  return (
    <div>
      <div className={styles.dropdown}>
        <button
          className={`btn btn-secondary dropdown-toggle ${styles.toggleBtn}`}
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Movie Categories {"  "}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => setActiveCatg("All")}
            >
              All
            </a>
          </li>
          {ListOFUniqueCategories.map((itm, index) =>
            itm ? (
              <li key={index}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => setActiveCatg({ itm })}
                >
                  {itm}
                </a>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
