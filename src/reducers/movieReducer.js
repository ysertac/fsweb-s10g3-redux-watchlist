import {
  ADD_FAVORITE,
  FIRST_MOVIE,
  LAST_MOVIE,
  NEXT_MOVIE,
  PREV_MOVIE,
  REMOVE_FAVORITE,
} from "../actions/actions";
import { movies } from "../movies";

const initialState = {
  sira: 0,
  movies: movies,
  favMovies: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira + 1,
      };
    case PREV_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case FIRST_MOVIE:
      return {
        ...state,
        sira: initialState.sira,
      };
    case LAST_MOVIE:
      return {
        ...state,
        sira: state.movies.length - 1,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
        favMovies: state.favMovies.find(
          (movie) => movie.id == action.payload.id
        )
          ? state
          : [...state.favMovies, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favMovies: state.favMovies.filter(
          (movie) => movie.id !== action.payload
        ),
        movies: [
          state.favMovies.find((movie) => movie.id == action.payload),
          ...state.movies,
        ],
      };
    default:
      return state;
  }
};
export default movieReducer;
