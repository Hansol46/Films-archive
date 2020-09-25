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
    return (
        <div>
            <h1> its my project</h1>
            <Search />
        </div>
    )
}

export default App