import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import InfoFilm from './InfoFiml';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png";

const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
    const idMovie = movie.imdbID
    return (
        <>
        <div className="movie">
            <div className='cardMovie'>
            
                <Route path={`/movie-info/${movie.imdbID}`}  render={()=>  <InfoFilm  idMovie={idMovie}/>} />
                <h2>{movie.Title}</h2>
                <div>
                    <NavLink to={`/movie-info/${movie.imdbID}`} >
                        <img
                            width="200"
                            alt={`movie title: ${movie.Title}`}
                            src={poster}
                        />
                    </NavLink>
                </div>
                <p>Year: ({movie.Year})</p>
            </div>

        </div>
        </>
    )
}
export default Movie;