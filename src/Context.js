import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
import { movies$ } from "../src/Data/data";

const AppContext = React.createContext();

const initialState = {
  loading: true,
  movies: [],
  btnClicked: false,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  useEffect(() => {
    movies$.then((data) => {

      dispatch({ type: "DISPLAY_ITEMS", payload: data });
      dispatch({ type: "LOADING" });

    });
  }, []);



  return (
    <AppContext.Provider
      value={{
        ...state,
        remove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
