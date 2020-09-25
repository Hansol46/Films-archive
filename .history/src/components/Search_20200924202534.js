import React, { useEffect, useState } from 'react'

function Search() {

    const [items, setItems] = useState([]);
  
    useEffect(() => {
        const APIurl = 'http://www.omdbapi.com/?i=tt3896198&apikey=480344f1'
        fetch(APIurl)
            .then(response => response.json())
            .then(json => console.log(json))
    }, [])



    return(
        <div>
       {/* {Title} */}
        </div>
          
    )
        
    
}
export default Search