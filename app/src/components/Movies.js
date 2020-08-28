import React from 'react';


const Movies = props => {
    return (
        <div className="movies" id={props.id}>
            <h3>Name:{props.title}</h3>
            <p>Description:{props.description}</p>
            <p>Director:{props.director}</p>
            <p>Producer:{props.producer}</p>
        </div>
    )
}



export default Movies;






