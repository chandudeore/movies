export const MOVIE_LOAD = "MOVIE_LOAD";
export const MOVIE_SUCCESS = "MOVIE_SUCCESS";
export const MOVIE_ERROR = "MOVIE_ERROR";

export const movieLoad = () => {
  return {
    type: MOVIE_LOAD,
  };
};

export const getMovie = (payload) => {
  return {
    type: MOVIE_SUCCESS,
    payload,
  };
};

export const movieError = () => {
  return {
    type: MOVIE_ERROR,
  };
};
