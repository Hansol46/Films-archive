import React from 'react'

function Search() {
    // const APIurl = 'http://img.omdbapi.com/?apikey=[yourkey]&'
    // const APIurl = 'http://www.omdbapi.com/'
    const APIur = 'http://www.omdbapi.com/?apikey=[yourkey]&'
    async function getMovies(){
        const response = await fetch(APIurl)
        const responseData = await response.json()
        console.log(responseData)
        return responseData
        
    }
    return (
        <>
        {/* <button onClick={()=> getMovies()}> fetched </button> */}
        </>
    )
}
export  default Search