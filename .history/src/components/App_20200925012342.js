import React from 'react'
import '../styles/App.css'
import PrimarySearchAppBar from './material/nav'
import Search from './Search'


function App () {
    return (
        <div>
            <Container maxWidth="sm">

            <h1> its my project</h1>
            <PrimarySearchAppBar />
            <Search />
            </Container>
        </div>
    )
}

export default App