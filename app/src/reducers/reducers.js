import { FETCHING_MOVIE_START, FETCHING_MOVIE_SUCCESS, FETCHING_MOVIE_FAILED } from "../actions/actions";


const initialState = {
  movies: [],
  error: "",
  isFetching: false
}


export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_MOVIE_START: 
    console.log("fetching new movie");
    return {
      ...state,
      movies: [],
      error: " ",
      isFetching: true,
      
    };
    case FETCHING_MOVIE_SUCCESS:
      return {
        ...state,
        error: " ",
        movies: [],
        isFetching: true,
      }
      case FETCHING_MOVIE_FAILED:
        return {
          ...state,
          error: action.payload,
          isFetching: false
        }
        default:
          return state;
  }
  
} 