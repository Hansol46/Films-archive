import Axios from 'axios'
import React, { useEffect, useState } from 'react'



function InfoFilm({idMovie}) {
    const [value, setValue] =  useState([])
    const APIurl = `http://www.omdbapi.com/?i=${idMovie}&apikey=1151f2b7`
    useEffect( ()=> {
        fetch(APIurl)
        .then(response => response.json())
        .then(result=> setValue(result))
    })
    // debugger
    return (
        <div>
            <h3> About movie</h3>
           <p>Actors: {value.Actors} </p>
           <p>Runtime: {value.Runtime}</p>
           <p>Movie info: {value.Plot}</p>

        </div>
    )
}
export default InfoFilm