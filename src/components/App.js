import React, { useEffect, useReducer } from 'react'
import '../styles/App.css'
import Movie from './Movie'
import Search from './Search'
import { initialState, reducer } from "../store/reducer/reducer";
import axios from 'axios'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    link: {
        color: 'white',
        textDecoration: 'none'
    }
}))

const APIurl = `http://www.omdbapi.com/?s=inception&apikey=1151f2b7`


function App() {

    const [state, dispatch] = useReducer(reducer, initialState)
    const classes = useStyles()
    useEffect(() => {
        axios.get(APIurl).then(jsonResponse => {
            dispatch({
                type: 'SEARCH_MOVIES_SUCCESS',
                payload: jsonResponse.data.Search
            })
        })
    }, [])
    const search = searchValue => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST'
        })
        axios(`http://www.omdbapi.com/?s=${searchValue}&apikey=1151f2b7`)
            .then(jsonResponse => {
                if (jsonResponse.data.Response === 'True') {
                    dispatch({
                        type: 'SEARCH_MOVIES_SUCCESS',
                        payload: jsonResponse.data.Search
                    })
                } else {
                    dispatch({
                        type: 'SEARCH_MOVIES_FAILURE',
                        error: jsonResponse.data.Error
                    })
                }
            })
    }


    const { movies, error, loading } = state
    return (
        <BrowserRouter>
            <AppBar>
                <Container fixed>
                    <Toolbar>
                        <Typography variant='h4' className={classes.title}> Search films</Typography>
                        <Box mr={3}>
                            <Button color='inherit' variant='outlined'> <NavLink to={'/'} className={classes.link}> Back home </NavLink> </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <div className={'App'}>
                <Search search={search} />
                <div className="movies">
                    {
                        loading && !error ? (
                            <span>Loading...</span>
                        ) : error ? (
                            <div className="errorMessage">{error}</div>
                        ) : (
                                    movies.map((movie, index) => (
                                        <Movie key={index} movie={movie} />
                                    ))
                                )
                    }
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App