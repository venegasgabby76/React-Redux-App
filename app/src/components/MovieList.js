import React, { useEffect } from "react";
import { connect } from "react-redux"
import { updateMovie } from "../actions/actions"
import Movies from "./Movies"


const MovieList = props => {

    useEffect(() => {
        updateMovie();
    }, [updateMovie]);


    return (
        <div className="movies">
            {props.movies.map(movie =>
                <Movies
                    id={props.movie.id}
                    title={props.movie.title}
                    description={props.movie.description}
                    director={props.movie.director}
                    producer={props.movie.producer}
                />)}
            <div className="button">
                <button onClick={props.updateMovie}> Lets get your movie</button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        movies: state.movies,
        error: state.error
    }
}

const mapDispatchToProps = { updateMovie }


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

