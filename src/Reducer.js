const reducer = (state, action) => {
  if (action.type === "REMOVE") {
    return {
      ...state,
      movies: state.movies.filter(
        (moviesItem) => moviesItem.id !== action.payload
      ),
    };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, movies: action.payload, loading: false };
  }

  throw new Error("no matching action type");
};

export default reducer;
