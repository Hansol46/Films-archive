import React from 'react'

function Search() {
    // const APIurl = 'http://img.omdbapi.com/?apikey=[yourkey]&'
    // const APIurl = 'http://www.omdbapi.com/'
    const APIurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=480344f1'

    async function getMovies(){
        const response = await fetch(APIurl)
        const responseData = await response.json()
        console.log(responseData)
        console.log('gello')
        return responseData
    }

    return (
        <>

         {/* {responseData.map(data => {
             <div> {data}</div>
         })} */}
        </>
    )
}
export  default Search