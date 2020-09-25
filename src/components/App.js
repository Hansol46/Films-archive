import React, { useEffect, useReducer } from 'react'
import '../styles/App.css'
import Movie from './Movie'
import Search from './Search'
import { initialState, reducer } from "../store/reducer/reducer";
import axios from 'axios'

// const APIkey = 'apikey=1151f2b7'
const APIurl = `http://www.omdbapi.com/?s=inception&apikey=1151f2b7`

function App () {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect( ()=> {
        axios.get(APIurl).then(jsonResponse => {
            dispatch({
                type: 'SEARCH_MOVIES_SUCCESS',
                payload: jsonResponse.data.Search
            })
        })
    },[])
    const search = searchValue => {
        dispatch({
            type: 'SEARCH_MOVIES_REQUEST'
        })
    axios(`http://www.omdbapi.com/?s=${searchValue}&apikey=1151f2b7`)
    .then( jsonResponse => {
        if(jsonResponse.data.Response === 'True'){
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
        <div className={'App'}>
            <h1>MOVIE SEARCH</h1>
            <Search search={search}/>
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
    )
}

export default App