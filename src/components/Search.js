import React, { useEffect, useState } from 'react'

function Search(props) {
    
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