import React from 'react'

import { Link } from 'react-router-dom';

// function Navbar() {
//     return (
//         <nav className='navbar'>
//             <h2>I am Navbar</h2>
//             <h1>The Main Heading</h1>
//             <div className='links'></div>
//             <p><a href='/'>Home</a></p>
//             <p><a href='/create'>New Page</a></p>
//         </nav >
//     )
// }

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>I am Navbar</h2>
            <h1>The Main Heading</h1>
            <div className='links'>
            <p><Link to='/'>Home</Link></p>
            <Link to='/create' style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' }}>New Page</Link></div>
        </nav >
    );
}


export default Navbar