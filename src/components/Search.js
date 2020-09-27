import React, { useState } from 'react'

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
            <input type='button' value='Back home' />
            <input 
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
            type='text'
            className='inputText'
            id="tags1"
            />
            <input onClick={callSearchFunction} type='submit' value='SEARCH' />
        </form>
          
    )
        
    
}
export default Search