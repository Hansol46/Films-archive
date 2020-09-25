import React from 'react'

function Search() {
    // const APIurl = 'http://img.omdbapi.com/?apikey=[yourkey]&'
    // const APIurl = 'http://www.omdbapi.com/'
    const APIurl = 'http://img.omdbapi.com/?t=t&y=2000&plot=full'

    async function getMovies(){
        const response = await fetch(APIurl)
        const responseData = await response.json()
        console.log(responseData)
        console.log('gello')
        return responseData
    }

    return (
        <>
        {/* <button onClick={()=> getMovies()}> fetched </button> */}
        </>
    )
}
export  default Search