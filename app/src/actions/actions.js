import axios from "axios";

export const FETCHING_MOVIE_START = "FETCHING_MOVIE_START";
export const FETCHING_MOVIE_SUCCESS = "FETCHING_MOVIE_SUCCESS";
export const FETCHING_MOVIE_FAILED = "FETCHING_MOVIE_FAILED";


export const updateMovie = () => dispatch => {
    dispatch({ type: FETCHING_MOVIE_START });
    axios
        .get("https://ghibliapi.herokuapp.com/films")
        .then(response => {
            console.log(response.data);
            dispatch({ type: FETCHING_MOVIE_SUCCESS, payload: response.data })
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: FETCHING_MOVIE_FAILED });
        });
};