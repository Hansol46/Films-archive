import React, { useEffect, useState } from 'react'

function Search() {

    const [state, setState] = useState([]);
  
    useEffect(() => {
        const APIurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=1151f2b7'
        fetch(APIurl)
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    // http://www.omdbapi.com/?t=inception&y=&plot=short&r=json

    return(
        <div>
            {state.Title}
            <br></br>
            {state.Year}
            <br></br>
            <img src={state.Poster}/>
        </div>
          
    )
        
    
}
export default Search