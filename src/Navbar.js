import React from 'react'

function Navbar() {
    return (
        <nav className='navbar'>
            <h2>I am Navbar</h2>
            <h1>The Main Heading</h1>
            <div className='links'></div>
            <p><a href='/'>Home</a></p>
            <p><a href='/create'>New Page</a></p>
        </nav >
    )
}


export default Navbar