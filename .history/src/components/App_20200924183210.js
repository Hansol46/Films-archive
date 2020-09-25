import React from 'react'
import '../styles/App.css'
import Search from './Search'
// import '../styles/App.module.sass'

// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1> its my project</h1>
//             </div>
//         )
//     }
// }
function App () {
    const APIurl = 'http://www.omdbapi.com/?t=t&y=2000&plot=full'
    async function getMovies(){
        const response = await fetch(APIurl)
        const responseData = await response.json()
        console.log(responseData)
        return responseData
        
    }
    return (
        <div>
            <h1> its my project</h1>
            <Search />
        </div>
    )
}

export default App