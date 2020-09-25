import React, { useEffect } from 'react'




function Search() {

    useEffect( () => {
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=480344f1')
            .then(data = response.json())
        // console.log('Data', data)
    })
    
    // async function getMovies(){
    //     const response = await fetch(APIurl)
    //     const responseData = await response.json()
    //     console.log(responseData)
    //     console.log('gello')
    //     return responseData
    // }

    return (
        <>
        {/* <button onClick={()=> getMovies()}> fetched </button> */}
        
         {/* {responseData.map(data => {
             <div> {data}</div>
         })} */}
        </>
    )
}
export  default Search