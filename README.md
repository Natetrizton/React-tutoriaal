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

                <p>Good Luck</p>

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
        <>
            <h1>Hi Taiwo Ogunleye!</h1>
            <h2>I am Navbar</h2>
        </>
    )
}


export default Navbar
```


#### Deployed app at https://taiwo-ogunleye-react-app.netlify.app/

