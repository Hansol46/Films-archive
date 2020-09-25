import React from 'react'
import '../styles/App.module.sass'
import PrimarySearchAppBar from './material/nav'
import Search from './Search'


function App () {
    return (
        <div>
            <h1> its my project</h1>
            <PrimarySearchAppBar />
            <Search />
        </div>
    )
}

export default App