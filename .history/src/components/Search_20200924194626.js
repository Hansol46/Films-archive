import React, { useEffect, useState } from 'react'

function Search() {
    // const [error, setError] = useState(null)
    // const [isLoader, setLoader] = useState(false)
    // const [state, setState] = useState([])

    // useEffect( () => {
    //     fetch('http://www.omdbapi.com/?i=tt3896198&apikey=480344f1')
    //         .then(res = res.json())
    //             .then(result => {
    //                 setLoader(true)
    //                 setState(result.state)
    //             },
    //                 (error)=> {
    //                     setLoader(true)
    //                     setError(error)
    //                 })}, 
    // [])
    
    // if(error) {
    //     return <div>Error: {error.message}</div>
    // } else if (!isLoader) {
    //     return <div>Loading...</div>
    // } else {
    //    return (
    //         <>
    //         <h1>hellooooooooooooo</h1>
    //             {/* {state.map(s => (
    //                 <div> 
    //                 {s}
    //                 </div>
    //             ))} */}
    //         </>
    //     ) 
    // }
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("http://www.omdbapi.com/?i=tt3896198&apikey=480344f1")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result.items);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.name}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
}
export  default Search