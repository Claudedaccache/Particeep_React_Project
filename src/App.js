import "./App.css";
import { useState, useEffect } from "react";
import Heading from "./Components/Heading/Heading";
import Dropdown from "./Components/Dropdown/Dropdown";
import Loading from "./Components/Loading/Loading";
import DropdownPagination from "./Components/DropdownPagination/DropdownPagination";
import Cards from "./Components/Cards/Cards";
import Pagination from "./Components/Pagination/Pagination";
import { useGlobalContext } from "./Context";

const App = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [MoviesList, setMoviesList] = useState([]);
  const [activeCatg, setActiveCatg] = useState("All");
  const [categories, setCategories] = useState([]);
  const [MoviesPerPage, setMoviesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const { movies, loading } = useGlobalContext();


/**
 * It takes an array of objects, and returns a new array of objects with the same titles, but with the
 * likes and dislikes summed up
 * @param arr - an array of objects
 * @returns res- a new array of objects
 */
 const removeDuplicates = (arr) => {
  
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    const ind = res.findIndex((el) => el.title === arr[i].title);
    if (ind === -1) {
      res.push(arr[i]);
    } else {
           res[ind].likes += arr[i].likes;
      res[ind].dislikes += arr[i].dislikes;
    }
  }
  return res;
};


  useEffect(() => {
    let ModifiedMoviesList = removeDuplicates(movies);
    setFilteredMovies(ModifiedMoviesList);
    setMoviesList(ModifiedMoviesList)
  }, [movies]);

  if (loading) {
    return <Loading />;
  }



 

  const indexOfLastMovie = currentPage * MoviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - MoviesPerPage;
  const currentMovie = filteredMovies.slice(
    indexOfFirstMovie,
    indexOfLastMovie
  );

 /**
  * It takes a number as an argument and returns the setCurrentPage function with the number as an
  * argument
  * @param number - The page number to go to.
  * @returns The current page number.
  */
  const paginate = (number) => {
    return setCurrentPage(number);
  };

  return (
    <div className="App">
      <Heading />
      <div className="FilteringSection">
        <DropdownPagination
          pageSize={MoviesPerPage}
          setPageSize={setMoviesPerPage}
          TotalMovies={filteredMovies.length}
        />
        <Dropdown
          categories={categories}
          setCategories={setCategories}
          setFilteredMovies={setFilteredMovies}
          activeCatg={activeCatg}
          setActiveCatg={setActiveCatg}
          data={MoviesList}
        />
      </div>
      <Cards data={currentMovie} pageSize={MoviesPerPage} loading={loading} />
      <Pagination
        TotalMovies={filteredMovies.length}
        MoviesPerPage={MoviesPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
