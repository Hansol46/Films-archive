import React, { useEffect, useReducer, useState } from 'react'
import '../styles/App.css'
import PrimarySearchAppBar from './material/nav'
import Movie from './Movie'
import Search from './Search'

const APIkey = 'apikey=1151f2b7'
const APIurl = `http://www.omdbapi.com/?t=inception&${APIkey}`

const initialState ={
    loading: true,
    movies: [],
    error: null,
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            }
        case 'SEARCH_MOVIES_SUCCESS':
            return {
                ...state,
                loading: true,
                movies: action.payload
            }
        case 'SEARCH_MOVIES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default: 
            return state
    }
}
function App () {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect( () => {
        fetch(APIurl)
        .then(response => response.json())
        .then(jsonResponse => {
            dispatch( {
                type: 'SEARCH_MOVIES_SUCCESS',
                payload: jsonResponse.Search 
            })
        })
    }, [])

    const search = searchValue => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST'
        })
    }
    fetch(`http://www.omdbapi.com/?s=${searchValue}&${APIkey}`)
    .then(response => response.json())
    .then(jsonResponse=> {
        if(jsonResponse.Response === 'True'){
            dispatch({
                type: "SEARCH_MOVIES_SUCCESS",
                payload: jsonResponse.Search
            })
        } else {
            dispatch({
                type: "SEARCH_MOVIES_FAILURE",
                error: jsonResponse.Error
            })
        }
    })
    const { movies, error, loading } = state

    return (
        <div className={'App'}>
            <h1>HRHRHS</h1>
            <PrimarySearchAppBar /> */}
            {/* <Search search={search}/>
            <p className='AppInfo'>Делитесь любимыми фильмами</p>
            <div className="movies">
                {loading && !error ? (
                    <span>Loading...</span>
                ) : error?(
                    <div className="errorMessage">{error}</div>
                ) : (
                    movies.map((movie, index) => (
                        <Movie key={`${index}-${movie.Title}`} movie={movie} />
                    ))
                )}
            </div>

        </div>
    )
}

export default App