import React from 'react'

function Search() {
    // const APIurl = 'http://img.omdbapi.com/?apikey=[yourkey]&'
    // const APIurl = 'http://www.omdbapi.com/'
    const APIurl = 'http://www.omdbapi.com/?apikey=[yourkey]&'
    async function getMovies(){
        const response = await fetch(APIurl)
        const responseData = await response.json()
        
        return responseData
        console.log(responseData)
    }
    return (
        <>
        {/* <button onClick={()=> getMovies()}> fetched </button> */}
        </>
    )
}
export  default Search