import React from 'react'

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png";

const Movie = ({movie}) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
    return (
        <div className="movie">
            <h2>{movie.Title}</h2>
            <div>
                <img 
                width="200"
                alt={`movie title: ${movie.Title}`}
                src={poster} 
                />
            </div>
            <p>({movie.Year})</p>
        </div>
    )
}
export default Movie;