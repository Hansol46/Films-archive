import React, { useEffect, useState } from 'react'

function Search(props) {
    // const [state, setState] = useState([]);
    // useEffect(() => {
    //     const APIkey = 'apikey=1151f2b7'
    //     const APIurl = `http://www.omdbapi.com/?t=inception&${APIkey}`
    //     fetch(APIurl)
    //         .then(response => response.json())
    //         .then(json => setState(json))
    // }, [])
    const [searchValue, setSearchValue] = useState('')

    const resetInputField = () => {
        setSearchValue('')
    }
    const callSearchFunction = (event) => {
        event.preventDefault()
        props.search(searchValue)
        resetInputField()
    }



    return(
        <form className="search">
            <input 
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            type='text' 
            />
            <input onClick={callSearchFunction} type='submit' value='SEARCH' />
        </form>
          
    )
        
    
}
export default Search