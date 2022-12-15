![](https://github.com/Hacking-NASSA-with-HTML/react_app_for_Taiwo_Ogunleye/blob/main/ScreenShot007.jpg)

# React app for Taiwo Ogunleye

Syntax for App.js:

```js
import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">

                <p>Good Luck Taiwo Ogunleye!</p>

            </header>
        </div>
    )
}

export default App

```

Syntax for Navbar component:

```js
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
```

Syntax for Navbar component using arrow function:

```js
import React from 'react'

const Navbar = () => {
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
```

#### Deployed app at https://taiwo-ogunleye-react-app.netlify.app/

