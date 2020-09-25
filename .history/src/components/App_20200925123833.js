import React, { useEffect, useState } from 'react'
import '../styles/App.css'
import PrimarySearchAppBar from './material/nav'
import Search from './Search'


function App () {
    const APIkey = 'apikey=1151f2b7'
    const APIurl = `http://www.omdbapi.com/?t=inception&${APIkey}`

    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState([])
    const [error, setError] = useState(null)

    useEffect( () => {
        fetch(APIurl)
        .then(response => response.json())
        .then(jsonResponse => {
            setMovie(jsonResponse.Search)
            setLoading(false)
        })
    }, [])

    const search = searchValue => {
        setLoading(true)
        setError(null)
    }
    fetch(`http://www.omdbapi.com/?s=${searchValue}&${APIkey}`)
    .then(response => response.json())
    .then(jsonResponse=> {
        if(jsonResponse.Response === 'True'){
            setMovie(jsonResponse.Search)
            setLoading(false)
        } else {
            setError(jsonResponse.Error)
            setLoading(false)
        }
    })
    return (
        <div className={'App-header'}>
            {/* <PrimarySearchAppBar /> */}
            <Search />

        </div>
    )
}

export default App