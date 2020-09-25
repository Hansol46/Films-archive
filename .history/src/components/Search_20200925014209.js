import React, { useEffect, useState } from 'react'

function Search() {

    const [state, setState] = useState([]);
  
    useEffect(() => {
        const APIkey = 'apikey=1151f2b7'
        const APIurl = `http://www.omdbapi.com/?i=inception${APIkey}`
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