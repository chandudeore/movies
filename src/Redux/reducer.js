import { MOVIE_ERROR, MOVIE_LOAD, MOVIE_SUCCESS } from "./action";

const initialState = {
  movies: [],
  loading: false,
  error: false,
};

export const movieReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case MOVIE_LOAD:
      return { ...store, loading: true };
    case MOVIE_SUCCESS:
      return { ...store, movies: [...payload] };
    case MOVIE_ERROR:
      return { ...store, error: true };
    default:
      return { store };
  }
};
