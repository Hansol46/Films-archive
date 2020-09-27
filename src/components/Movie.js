import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { NavLink, Route } from 'react-router-dom';
import InfoFilm from './InfoFiml';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png";

const useStyles = makeStyles((theme) => ({
    title: {
        paddingTop: '5px',
        textAlign: 'center'
    },
    root: {
        maxWidth: 345,
        marginTop: '40px'
    },
    media: {
        height: 440,
    },
}))
const Movie = ({ movie }) => {
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster
    const idMovie = movie.imdbID
    const classes = useStyles()
    return (
        <>
            <div className="movie">
                <div className='cardMovie'>
                    <Card className={classes.root}>
                        <Route path={`/movie-info/${movie.imdbID}`} render={() => <InfoFilm idMovie={idMovie} />} />
                        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
                            {movie.Title}
                        </Typography>
                        <CardActionArea>
                            <NavLink to={`/movie-info/${movie.imdbID}`} >
                                <CardMedia
                                    className={classes.media}
                                    image={poster}
                                    alt={`movie title: ${movie.Title}`}
                                />
                            </NavLink>
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Year: ({movie.Year})
                            </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </>
    )
}
export default Movie;